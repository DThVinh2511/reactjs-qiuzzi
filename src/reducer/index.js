import loginReducer from "./login";
import tabReducer from "./tab";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  loginReducer,
  tabReducer
})

export default allReducer;