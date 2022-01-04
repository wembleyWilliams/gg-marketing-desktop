import {User} from "../common/types";

const initialState: User = {
  firstname: '',
  lastname: '',
  businessName: '',
  email: '',
  profilePicture: ''
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_NEW_USER":
      const newUserDetails = action.payload
      return {
        ...state,
        user: newUserDetails
      };
    
    default:
      return state;
  }
}

export default userReducer;