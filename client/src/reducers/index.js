import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import personReducer from "./personReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  person: personReducer
});