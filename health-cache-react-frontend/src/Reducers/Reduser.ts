import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";

export default combineReducers({
    user: userReducer
})