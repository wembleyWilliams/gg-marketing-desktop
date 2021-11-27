import {combineReducers} from "redux";
import applicationReducer from "./applicationReducer";
import {ApplicationState} from "../common/types";

export interface State {
    application: ApplicationState
}

export default combineReducers({
    application: applicationReducer
});