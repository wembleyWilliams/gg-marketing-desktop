import {UserData} from "../common/types";

const initialState: UserData = {
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