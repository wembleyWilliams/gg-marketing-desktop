import React from "react";
import "./index.scss";
import {Button, Container, Divider, IconButton, Paper, Stack, TextField} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Register = () => {
    
    return (
        <Container className={"register-wrapper"} maxWidth={false} disableGutters={true}>
            <div className={"register-container"}>
                <div className={"register-container__title"}>
                    <h1><b>Let's</b> Get You Signed Up</h1>
                </div>
                <div className={"register-container__body"}>
                    <Paper sx={{
                        borderRadius: "60px",
                        maxWidth: "760px", minWidth: "540px"
                    }}>
                        <Container className={"register-container__text"} maxWidth={"xs"}>
                            <Stack spacing={3}>
                                <h2>
                                    <b>Okay</b>, lets get to know you a little
                                    better by giving us your name and company name.
                                </h2>
                                
                                <p>Full Name</p>
                                <input
                                    required
                                    id="name"
                                    name="name"
                                    placeholder={"Full Name"}
                                />
                                
                                <p>Business Name</p>
                                <input
                                    required
                                    id="businessName"
                                    name="businessName"
                                    placeholder={"Business Name"}
                                />
                                <Divider sx={{paddingTop: '2rem',border:'none'}}/>
                                <IconButton className={"continue-btn"}>
                                    <ArrowCircleRightIcon className={"continue-btn__icon"}/>
                                </IconButton>
                                
                            </Stack>
                            
                        </Container>
                    
                    </Paper>
                    <Paper sx={{
                        borderRadius: "60px",
                        maxWidth: "760px", minWidth: "540px"
                    }}>
                        <Container className={"register-container__text"} maxWidth={"xs"}>
                            <Stack spacing={3}>
                                <h2>
                                    <b>Okay</b>, lets get to know you a little
                                    better by giving us your name and company name.
                                </h2>
            
                                <p>Full Name</p>
                                <input
                                    required
                                    id="name"
                                    name="name"
                                    placeholder={"Full Name"}
                                />
            
                                <p>Business Name</p>
                                <input
                                    required
                                    id="businessName"
                                    name="businessName"
                                    placeholder={"Business Name"}
                                />
                                <Divider sx={{paddingTop: '2rem',border:'none'}}/>
                                <IconButton className={"continue-btn"}>
                                    <ArrowCircleRightIcon className={"continue-btn__icon"}/>
                                </IconButton>
        
                            </Stack>
    
                        </Container>
                    </Paper>
                    <Paper sx={{
                        borderRadius: "60px",
                        maxWidth: "760px", minWidth: "540px"
                    }}>
                        <Container className={"register-container__text"} maxWidth={"xs"}>
                            <Stack spacing={3}>
                                <h2>
                                    <b>Okay</b>, lets get to know you a little
                                    better by giving us your name and company name.
                                </h2>
            
                                <p>Full Name</p>
                                <input
                                    required
                                    id="name"
                                    name="name"
                                    placeholder={"Full Name"}
                                />
            
                                <p>Business Name</p>
                                <input
                                    required
                                    id="businessName"
                                    name="businessName"
                                    placeholder={"Business Name"}
                                />
                                <Divider sx={{paddingTop: '2rem',border:'none'}}/>
                                <IconButton className={"continue-btn"}>
                                    <ArrowCircleRightIcon className={"continue-btn__icon"}/>
                                </IconButton>
        
                            </Stack>
    
                        </Container>
                    </Paper>
                </div>
            </div>
        </Container>
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