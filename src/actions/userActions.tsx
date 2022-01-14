import {UserState} from "../common/types";

export const setUser = (user: {}) => ({
  type: 'SET_USER',
  payload: user
})