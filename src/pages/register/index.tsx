import React, {useEffect, useState} from "react";
import "./index.scss";
import {
  Container,
  Divider,
  FilledInput,
  FormControl, FormHelperText,
  IconButton, Input,
  InputLabel, OutlinedInput,
  Paper,
  Stack,
  Theme
} from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import {Add, InputRounded} from "@mui/icons-material";
import {createStyles, makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import {setUser} from "../../actions/userActions";
import {UserData, UserState} from "../../common/types";
import {hashPassword} from "../../utils/hash";
import {registrationSchema} from "../../utils/validation";
import {Formik} from 'formik';
import SnackbarNotification from "../../components/snackbar-notification/snackbar-notification";
import services from "../../services";
import log from "loglevel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cssLabel: {
      color: 'green'
    },
    
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `purple !important`,
      }
    },
    
    cssFocused: {},
    
    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'green !important'
    },
  }));

const Register = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [profilePicture, setProfilePicture] = useState('')
  
  useEffect(() => {
    //do here on reload
  
  }, [profilePicture])
  
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const preview = document.createElement('img')
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
      preview.src = reader.result.toString();
      document.getElementById('photo-bubble')
        .style.backgroundImage = `url(${preview.src})`;
      document.getElementById('photo-bubble')
        .style.backgroundPosition = 'center'
      setProfilePicture(preview.src);
    }, false)
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  
  const handleBusinessSubmit = async (values: any) => {
   
    let hashedPassword = await hashPassword(values.password)
    console.log(hashedPassword)
    if (hashedPassword) {
      const user: UserData = {
        firstname: values.firstname,
        lastname: values.lastname,
        businessName: values.businessName,
        email: values.email,
        profilePicture: profilePicture,
        businessId: '6179b92ff2091343c07d34ba'
      }
      
      const verifiedUser: UserData = {
        ...user,
        password: hashedPassword
        
      }
      
      dispatch(setUser(user))
      
      services
        .registerUser(verifiedUser)
        .then((res) => {
          return res
        })
        .catch((err)=> {
          log.error(err)
        })
    }
    
  }
  
  return (
    <div className={"register-wrapper"}>
      <Formik
        initialValues={{
          profilePicture: '',
          firstname: '',
          lastname: '',
          businessName: '',
          email: '',
          password: '',
          password2: '',
        }}
        
        validationSchema={registrationSchema()}
        
        onSubmit={(values) => {
          handleBusinessSubmit(values)
        }}>
        {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
          }) => (
          <form onSubmit={handleSubmit}
            method={"post"}
          >
            <div className={"register-container"}>
              <div className={"register-container__title"}>
                <h1><b>Let's</b> Get You Signed Up</h1>
              </div>
              <div className={"register-container__body"}>
                
                {/*Section 1*/}
                <Paper sx={{
                  borderRadius: "60px",
                  maxWidth: "370px",
                  minWidth: "350px",
                  maxHeight: "580px",
                  minHeight: "560px"
                }}>
                  <div className={"register-container__text"}>
                    <h2>
                      <b>Okay</b>, lets get to know you a little
                      better by giving us your name and company name.
                    </h2>
                    
                    <FormControl>
                      <InputLabel>Firstname</InputLabel>
                      <Input
                        id="firstname"
                        name="firstname"
                        value={values.firstname}
                        onChange={event => handleChange(event)}
                        placeholder={"What's your first name?"}
                      />
                      
                      <FormHelperText
                        className={touched.firstname && errors.firstname ? "helper-text__error" : "helper-text"}>
                        {touched.firstname && errors.firstname ? errors.firstname :
                          'Enter your first name'}
                      </FormHelperText>
                    </FormControl>
                    
                    <FormControl>
                      <InputLabel>Lastname</InputLabel>
                      <Input
                        id="lastname"
                        name="lastname"
                        value={values.lastname}
                        onChange={event => handleChange(event)}
                        placeholder={"What's your last name?"}
                      />
                      <FormHelperText
                        className={touched.lastname && errors.lastname ? "helper-text__error" : "helper-text"}>
                        {touched.lastname && errors.lastname ? errors.lastname :
                          'Enter your last name'}
                      </FormHelperText>
                    </FormControl>
                    
                    <FormControl>
                      <InputLabel>Business Name</InputLabel>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={values.businessName}
                        onChange={event => handleChange(event)}
                        placeholder={"And your business name?"}
                      />
                      <FormHelperText
                        className={touched.businessName && errors.businessName ? "helper-text__error" : "helper-text"}>
                        {touched.businessName && errors.businessName ? errors.businessName :
                          'Enter your business name'}
                      </FormHelperText>
                    </FormControl>
                    
                    <Divider sx={{paddingTop: '10px', border: 'none'}}/>
                    
                    {/*<IconButton className={"continue-btn"} disableRipple>*/}
                    {/*  <CheckCircleOutlinedIcon className={"continue-btn__icon"}/>*/}
                    {/*</IconButton>*/}
                  
                  </div>
                </Paper>
                
                {/*Section 2 */}
                <Paper sx={{
                  borderRadius: "60px",
                  maxWidth: "370px",
                  minWidth: "350px",
                  maxHeight: "580px",
                  minHeight: "560px"
                }}>
                  <div className={"register-container__text"}>
                    <h2>
                      <b>Now</b>, lets see your face or even a logo
                      for us to know what you want to look like to us.
                    </h2>
                    <div className={"photo-bubble-wrapper"}>
                      <div id={"photo-bubble"} className={"photo-bubble"}>
                        
                        {/*//img created here*/}
                        
                        <div className={"photo-bubble__add-bubble"}>
                          <IconButton
                            disableRipple
                            onClick={() => {
                              document.getElementById('profilePicture').click();
                            }}
                          >
                            <input
                              name='profilePicture'
                              accept="image/png,image/jpeg,image/jpg"
                              onChange={event => handleImageUpload(event)}
                              value={values.profilePicture}
                              id='profilePicture'
                              type="file"
                              className={"hide"}
                            />
                            
                            <Add className={"photo-bubble__add-bubble__icon"}/>
                          </IconButton>
                        </div>
                        {errors.profilePicture ?
                          <FormHelperText className={"helper-text__error"}>
                            Please upload a profile picture
                          </FormHelperText>
                          : null}
                      
                      </div>
                    </div>
                    
                    <Divider sx={{paddingTop: '10px', border: 'none'}}/>
                    
                    {/*<IconButton className={"continue-btn"} disableRipple>*/}
                    {/*  <CheckCircleOutlinedIcon className={"continue-btn__icon"}/>*/}
                    {/*</IconButton>*/}
                  </div>
                </Paper>
                
                {/*Section 3*/}
                <Paper sx={{
                  borderRadius: "60px",
                  maxWidth: "370px",
                  minWidth: "350px",
                  maxHeight: "580px",
                  minHeight: "560px"
                }}>
                  <div className={"register-container__text"}>
                    <h2>
                      <b>Then</b> fill out the rest here
                    </h2>
                    <FormControl>
                      <InputLabel>Email</InputLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={event => handleChange(event)}
                        placeholder={"What's your email address?"}
                      />
                      <FormHelperText className={touched.email && errors.email ? "helper-text__error" : "helper-text"}>
                        {touched.email && errors.email ? errors.email :
                          'Enter personal/business email address'}
                      
                      </FormHelperText>
                    </FormControl>
                    
                    <FormControl>
                      <InputLabel>Password</InputLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={event => handleChange(event)}
                        placeholder={"Create a good password"}
                      
                      />
                      <FormHelperText
                        className={touched.password && errors.password ? "helper-text__error" : "helper-text"}>
                        {touched.password && errors.password ? errors.password :
                          'Enter your super secret password'}
                      </FormHelperText>
                    </FormControl>
                    
                    <FormControl>
                      <InputLabel>Re-enter Password</InputLabel>
                      <Input
                        type="password"
                        id="password2"
                        name="password2"
                        value={values.password2}
                        onChange={event => handleChange(event)}
                        placeholder={"Repeat that good password"}
                      />
                      <FormHelperText
                        className={touched.password2 && errors.password2 ? "helper-text__error" : "helper-text"}>
                        {touched.password2 && errors.password2 ? errors.password2 :
                          'Re-enter your super secret password'}
                      </FormHelperText>
                    </FormControl>
                    
                    <Divider sx={{paddingTop: '10px', border: 'none'}}/>
                    
                    <IconButton className={"continue-btn"}
                                type={"submit"}>
                      <CheckCircleOutlinedIcon id={"checkbutton"} className={"continue-btn__icon"}/>
                    </IconButton>
                  </div>
                </Paper>
              
              </div>
            </div>
          </form>
        )}
      
      </Formik>
    </div>
  );
}

export default Register
