import {UserData} from "../common/types";

export const setUser = (userDetails: UserData) => ({
  type: 'SET_USER',
  payload: userDetails
})