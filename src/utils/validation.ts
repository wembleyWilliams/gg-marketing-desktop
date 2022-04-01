import {Nullable, UserData} from "../common/types";
import * as Yup from 'yup';

// export const hasError = (value: Nullable<string>): boolean => {
//   const trimmedValue = value?.trim();
//
//   return (
//     trimmedValue === ""
//   );
// };
//
//
// export const isValidRegistrationForm = (
//  errors: User
// ) => {
//   return (
//     hasError(errors.firstname) &&
//     hasError(errors.lastname) &&
//     hasError(errors.businessName) &&
//     hasError(errors.profilePicture) &&
//     hasError(errors.email) &&
//     hasError(errors.password) &&
//     hasError(errors.password2)
//   )
//
// }

export const loginSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required')
      .matches(
        /^([\w-.!#$%&'*+/=?^_`{|}~]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      ),
    password: Yup.string()
      .required('No password provided')
  })
}

export const socialMediaSelectSchema = () => {
  return Yup.object().shape({
    profileName: Yup.string()
      .required('Handle is required'),
    profileUrl: Yup.string()
      .required('No profile URL provided')
      // .matches(
      //   /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
      // )
  })
}

export const registrationSchema = () => {
  return Yup.object().shape({
    firstname: Yup.string()
      .required('Firstname is required')
      .matches(
        /^[a-z ,.'-]+$/i,
        'Please enter a valid firstname'
      ),
    lastname: Yup.string()
      .required('Lastname is required')
      .matches(
        /^[a-z ,.'-]+$/i,
        'Please enter a valid lastname'
      ),
    businessName: Yup.string()
      .required('Business name is required')
      .matches(
        /^[a-z ,.'-]+$/i,
        'Please enter a valid business name'
      ),
    // profilePicture: Yup.string(),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required')
      .matches(
        /^([\w-.!#$%&'*+/=?^_`{|}~]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      ),
    password: Yup.string()
      .required('No password provided')
      .min(6, 'Password is too short - should be 6 characters minimum'),
    password2: Yup.string()
      .required('No re-entered password provided')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
    
  })
}