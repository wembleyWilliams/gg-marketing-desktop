import {UserState} from "../common/types";

const initialState: UserState = {
  newUser: null
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_NEW_USER":
      const newUserDetails = action.payload
      return {
        ...state,
        newUser: newUserDetails
      };
    
    default:
      return state;
  }
}

export default userReducer;