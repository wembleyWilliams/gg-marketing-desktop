import * as React from 'react';
import "./index.scss";
import {Button, Container, Grid} from "@mui/material";

const Login = () => {
    return (
        <Grid container className={"login-wrapper"}>
          <Grid item xs={12} className={"login-container"}>
              <div className={"login-container__left-column"}>
                <div className={"image-container"}>
                  <img
                    alt={""}
                    src={"https://cdn.pixabay.com/photo/2018/03/18/18/55/cat-3237903_1280.png"}/>

                </div>
                </div>
              <div className={"login-container__right-column"}>
                <Container className={"login-container__right-column__text"} >
                  <div className={"login-container__right-column__text__title"}>
                    <h2>
                      <b>let's</b> go
                    </h2>
                  </div>
                  
                  <div className={"login-container__right-column__text__fields"}>
                    <p>Email</p>
                    <input
                      required
                      id="email"
                      name="email"
                      placeholder={" Email"}
                    />
  
                    <p>Password</p>
                    <input
                      required
                      id="password"
                      name="password"
                      placeholder={" Password"}
                    />
                    <p className={"forgot-password-text"}>
                      forgot password?
                    </p>
                  </div>
                  <div className={"login-container__right-column__text__button-section"}>
                    <Button >
                      <p>Login</p>
                    </Button>
                    <Button >
                      <p>Register</p>
                    </Button>
                  </div>
                  
                </Container>
              </div>
          </Grid>
        </Grid>
    );
}

//
// function Copyright(props: any) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }
//
// const theme = createTheme();
//
// const Login = () => {
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
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//                     </Typography>
//                     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                         />
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                         />
//                         <FormControlLabel
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign In
//                         </Button>
//                         <Grid container>
//                             <Grid item xs>
//                                 <Link href="#" variant="body2">
//                                     Forgot password?
//                                 </Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link href="#" variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//                 <Copyright sx={{ mt: 8, mb: 4 }} />
//             </Container>
//         </ThemeProvider>
//     );
// }

export default Login