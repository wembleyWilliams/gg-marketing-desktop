import {combineReducers} from "redux";
import applicationReducer from "./applicationReducer";
import {ApplicationState, User} from "../common/types";
import userReducer from "./userReducer";

export interface State {
    application: ApplicationState
    user: User
}

export default combineReducers({
    application: applicationReducer,
    newUser: userReducer
});