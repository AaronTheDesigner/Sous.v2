import { combineReducers } from "redux";
import authReducer from "./authReducer";
import longReducer from "./longReducer";
import latReducer from "./latReducer";

export default combineReducers({
	auth: authReducer,
	long: longReducer,
	lat: latReducer
});
