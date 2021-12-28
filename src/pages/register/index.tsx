import React from "react";
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Add, InputRounded} from "@mui/icons-material";
import {createStyles, makeStyles} from "@mui/styles";

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
  const classes = useStyles();
  return (
    <div className={"register-wrapper"} >
      <FormControl variant={"filled"}>
        <div className={"register-container"}>
          <div className={"register-container__title"}>
            <h1><b>Let's</b> Get You Signed Up</h1>
          </div>
          <Divider sx={{paddingTop: '20px', border: 'none'}}/>
          <div className={"register-container__body"}>
            
            {/*Section 1*/}
            <Paper sx={{
              borderRadius: "60px",
              maxWidth: "370px",
              minWidth: "350px",
              maxHeight: "580px",
              minHeight: "560px"
            }}>
              <div className={"register-container__text"} >
                  <h2>
                    <b>Okay</b>, lets get to know you a little
                    better by giving us your name and company name.
                  </h2>
                  
                  <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input
                      required
                      id="name"
                      name="name"
                      placeholder={"What's your name?"}
                    />
                    <FormHelperText className={"helper-text"}>
                      Enter your full name here
                    </FormHelperText>
                  </FormControl>
                  
                  <FormControl>
                    <InputLabel>Business Name</InputLabel>
                    <Input
                      required
                      id="businessName"
                      name="businessName"
                      placeholder={"And your business name?"}
                    />
                    <FormHelperText className={"helper-text"}>
                      Enter your business's name here
                    </FormHelperText>
                  </FormControl>
                  
                  <Divider sx={{paddingTop: '10px', border: 'none'}}/>
                  
                  <IconButton className={"continue-btn"} disableRipple>
                    <CheckCircleOutlinedIcon className={"continue-btn__icon"}/>
                  </IconButton>
              
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
              <div className={"register-container__text"} >
                  <h2>
                    <b>Now</b>, lets see your face or even a logo
                    for us to know what you want to look like to us.
                  </h2>
                  <div className={"photo-bubble-wrapper"}>
                    <div className={"photo-bubble"}>
                      <div className={"photo-bubble__add-bubble"}>
                        <IconButton disableRipple>
                          <Add className={"photo-bubble__add-bubble__icon"}/>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  
                  <Divider sx={{paddingTop: '10px', border: 'none'}}/>
  
                  <IconButton className={"continue-btn"} disableRipple>
                    <CheckCircleOutlinedIcon className={"continue-btn__icon"}/>
                  </IconButton>
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
              <div className={"register-container__text"} >
                  <h2>
                    <b>Then</b> fill out the <br/> rest here
                  </h2>
                    <FormControl>
                      <InputLabel>Email</InputLabel>
                      <Input
                        required
                        id="email"
                        name="email"
                        placeholder={"What's your email address?"}
                      />
                      <FormHelperText className={"helper-text"}>
                        Enter personal/business email address here.
                        This email will be used for login and contact purposes.
                      </FormHelperText>
                    </FormControl>
                    
                    <FormControl>
                      <InputLabel>Password</InputLabel>
                      <Input
                        required
                        id="password"
                        name="password"
                        placeholder={"Create a good password"}
                      />
                      <FormHelperText className={"helper-text"}>
                        Enter your super secret password
                      </FormHelperText>
                    </FormControl>
                    
                    <FormControl>
                      <InputLabel>Re-enter Password</InputLabel>
                      <Input
                        required
                        id="password"
                        name="password"
                        placeholder={"Repeat the good password"}
                      />
                      <FormHelperText className={"helper-text"}>
                        Re-enter your super secret password
                      </FormHelperText>
                    </FormControl>
                  
                  <Divider sx={{paddingTop: '10px', border: 'none'}}/>
  
                  <IconButton className={"continue-btn"} disableRipple>
                    <CheckCircleOutlinedIcon className={"continue-btn__icon"}/>
                  </IconButton>
              </div>
            </Paper>
          
          
          </div>
        </div>
      </FormControl>
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