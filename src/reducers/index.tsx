import {combineReducers} from "redux";
import applicationReducer from "./applicationReducer";
import {ApplicationState, UserState} from "../common/types";
import userReducer from "./userReducer";

export interface State {
    application: ApplicationState
    user: UserState
}

export default combineReducers({
    application: applicationReducer,
    user: userReducer
});