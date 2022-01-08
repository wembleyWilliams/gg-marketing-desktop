import {UserState} from "../common/types";

const initialState: UserState = {
  firstname: '',
  lastname: '',
  businessName: '',
  email: '',
  profilePicture: ''
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER":
      const userDetails = action.payload
      return {
        userDetails
      };
    
    default:
      return state;
  }
}

export default userReducer;