import {BusinessData} from "../common/types";

export const setBusinessDetails = (businessDetails: BusinessData) => ({
    type: 'SET_BUSINESS_DETAILS',
    payload: businessDetails
})