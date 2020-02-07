import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PersonLists from './components/Person/PersonLists';
import EditPerson from './components/Person/EditPerson';
import Layout from './components/Layouts/Layout';
import HomeScreen from './hoc/HomeScreen';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Footer from './components/Layouts/Footer';
import store from './store/storeConfig';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Layouts/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/persons" component={PersonLists}></Route>
        <Route path="/edit/:id" component={EditPerson}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      <Footer />
    </Provider> 
  );
}

export default App;
