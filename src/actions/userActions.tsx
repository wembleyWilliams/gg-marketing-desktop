import {User} from "../common/types";

export const setNewUser = (user: User) => ({
  type: 'SET_NEW_USER',
  payload: user
})