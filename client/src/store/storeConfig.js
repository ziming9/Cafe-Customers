import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  // applyMiddleware(...middleware)
  composeEnhancers(
      applyMiddleware(...middleware)
  )
);

export default store;