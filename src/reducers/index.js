import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import apiCall from "./apiCall";

export default combineReducers({
  apiCall,
  form: formReducer
});
