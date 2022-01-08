import {UserState} from "../common/types";

export const setUser = (user: UserState) => ({
  type: 'SET_USER',
  payload: user
})