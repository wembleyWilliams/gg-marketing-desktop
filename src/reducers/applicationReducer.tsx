import {ApplicationState, BusinessData} from "../common/types";

const initialState: ApplicationState = {
   businessDetails: null
}

export const applicationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_BUSINESS_DETAILS":
            const businessDetails = action.payload
            return {
                ...state,
                businessDetails: businessDetails
            };
        default:
            return state;
    }
}

export default applicationReducer;