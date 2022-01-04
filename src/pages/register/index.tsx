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
import {setNewUser} from "../../actions/userActions";
import {User} from "../../common/types";
import {hashPassword} from "../../utils/hash";
import {registrationSchema} from "../../utils/validation";
import {Formik} from 'formik';
import SnackbarNotification from "../../components/snackbar-notification/snackbar-notification";

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
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [imageFile64, setImageFile64] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [businessName, setBusinessname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  useEffect(() => {
    //do here on reload
  }, [imageFile64, firstname, lastname,
    businessName, email, password, password2])
  
  const validationSchema = registrationSchema()
  
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };
  
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const preview = document.createElement('img')
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
      preview.src = reader.result.toString();
      document.getElementById('photo-bubble')
        .style.backgroundImage = `url(${preview.src})`
      setImageFile64(preview.src);
    }, false)
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  // const handleFormSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   let hashedPassword = await hashPassword(password)
  //   let hashedPassword2 = await hashPassword(password2)
  //
  //   if(hashedPassword){
  //     const user: User = {
  //       firstname: firstname,
  //       lastname: lastname,
  //       businessName: businessName,
  //       email: email,
  //       password: hashedPassword,
  //       password2: hashedPassword2,
  //       profilePicture: imageFile64
  //     }
  //
  //     dispatch(setNewUser(user))
  //   }
  //
  // }
  const handleSubmit = (
    values: any,
    errors: any
  ) => {
    
    console.log(values)
    console.log(errors)
    if(errors.length > 0) {
      console.log(errors)
      setIsOpen(true)
    }
    // let hashedPassword = hashPassword(password)
    // let hashedPassword2 = hashPassword(password2)
    //
    // if(hashedPassword){
    //   const user: User = {
    //     firstname: firstname,
    //     lastname: lastname,
    //     businessName: businessName,
    //     email: email,
    //     password: hashedPassword,
    //     password2: hashedPassword2,
    //     profilePicture: imageFile64
    //   }
    //
  }
  
  
  return (
    <div className={"register-wrapper"}>
      <Formik
        initialValues={{
          imageFile64: '',
          firstname: '',
          lastname: '',
          businessName: '',
          email: '',
          password: '',
          password2: '',
        }}
        
        validationSchema={validationSchema}
        
        onSubmit={(values, errors) => {
          handleSubmit(values, errors);
        }}
      >
        {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
          }) => (
          <form onSubmit={()=>handleSubmit}>
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
                      
                      <FormHelperText className={touched.firstname && errors.firstname?"helper-text__error":"helper-text"}>
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
                      <FormHelperText className={errors.lastname?"helper-text__error":"helper-text"}>
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
                      <FormHelperText className={errors.businessName?"helper-text__error":"helper-text"}>
                        {touched.businessName && errors.businessName? errors.businessName :
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
                              document.getElementById('fileUpload').click();
                            }}
                          >
                            <input
                              accept="image/png, image/jpeg"
                              onChange={event => handleImageUpload(event)}
                              id={'fileUpload'}
                              type="file"
                              className={"hide"}
                            />
                            
                            <Add className={"photo-bubble__add-bubble__icon"}/>
                          </IconButton>
                        </div>
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
                      <FormHelperText className={errors.email?"helper-text__error":"helper-text"}>
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
                      <FormHelperText className={errors.password?"helper-text__error":"helper-text"}>
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
                      <FormHelperText className={errors.password2?"helper-text__error":"helper-text"}>
                        {touched.password2 && errors.password2 ? errors.password2 :
                          'Re-enter your super secret password'}
                      </FormHelperText>
                    </FormControl>
                    
                    <Divider sx={{paddingTop: '10px', border: 'none'}}/>
                    
                    <IconButton className={"continue-btn"} disableRipple type={"submit"}>
                      <CheckCircleOutlinedIcon id={"checkbutton"} className={"continue-btn__icon"}/>
                    </IconButton>
                  </div>
                </Paper>
              
              </div>
              {(
                <SnackbarNotification
                  isOpen={true}
                  onClose={handleCloseSnackbar}
                  title="Missing Information"
                  message="It looks like you forgot to enter a few details.
    					Please enter the correct information in the
    					highlighted fields."
                />
              )}
            </div>
          </form>
        )}
        
      </Formik>
      
      
    </div>
  
    
  );
}

export default Register;


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
//
// function Copyright(props: any) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Good Graphics
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }
//
// const theme = createTheme();
//
// const Register = () => {
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         // eslint-disable-next-line no-console
//         console.log({
//             email: data.get('email'),
//             password: data.get('password'),
//         });
//     };
//
//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         backgroundColor: 'blue'
//                     }}
//                 >
//                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     name="businessName"
//                                     required
//                                     fullWidth
//                                     id="businessName"
//                                     label="Business Name"
//                                     autoFocus
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="email"
//                                     label="Email Address"
//                                     name="email"
//                                     autoComplete="email"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     name="password"
//                                     label="Password"
//                                     type="password"
//                                     id="password"
//                                     autoComplete="new-password"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControlLabel
//                                     control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                     label="I want to receive marketing promotions and updates via email."
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign Up
//                         </Button>
//                         <Grid container justifyContent="flex-end">
//                             <Grid item>
//                                 <Link href="#" variant="body2">
//                                     Already have an account? Sign in
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//                 <Copyright sx={{ mt: 5 }} />
//             </Container>
//         </ThemeProvider>
//     );
// }
//
// export default Register;