import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonLists from './components/PersonLists';
import EditPerson from './components/EditPerson';
import Layout from './components/Layouts/Layout';
import HomeScreen from './hoc/HomeScreen';

function App() {
  return (
    <Router>
      <Layout />
      <Route path="/" exact component={HomeScreen}></Route>
      <Route path="/lists" component={PersonLists}></Route>
      <Route path="/edit/:id" component={EditPerson}></Route>
    </Router>
  );
}

export default App;