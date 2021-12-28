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



export default Login