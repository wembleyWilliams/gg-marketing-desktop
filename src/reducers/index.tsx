import {combineReducers} from "redux";
import applicationReducer from "./applicationReducer";
import {ApplicationState, UserState} from "../common/types";
import userReducer from "./userReducer";

export interface State {
    application: ApplicationState
    newUser: UserState
}

export default combineReducers({
    application: applicationReducer,
    newUser: userReducer
});