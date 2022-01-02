import {NewUser} from "../common/types";

export const setNewUser = (newUser: NewUser) => ({
  type: 'SET_NEW_USER',
  payload: newUser
})