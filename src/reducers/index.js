import { combineReducers } from "redux";
import authReducer from "./authReducer";
import longReducer from "./longReducer";
import latReducer from "./latReducer";
import ingReducer from "./ingReducer";

export default combineReducers({
	auth: authReducer,
	long: longReducer,
	lat: latReducer,
	ing: ingReducer
});
