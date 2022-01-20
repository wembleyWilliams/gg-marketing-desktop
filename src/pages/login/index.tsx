import * as React from 'react';
import "./index.scss";
import {Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel} from "@mui/material";
import {loginSchema} from "../../utils/validation";
import {Formik} from 'formik';
import services from "../../services";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../actions/userActions";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(()=>{
  
  },[isComplete])
  
  const handleSubmit = async (values: any) => {
    await services
      .getAuthentication(values.email, values.password)
      .then((res)=>{
        if(res){
          setIsComplete(true)
          dispatch(setUser(res))
          console.log(res)
          navigate('/dashboard');
        } else {
          setIsComplete(false)
        }
        console.log(isComplete)
      })
  }
  
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
          <Container className={"login-container__right-column__text"}>
            <div className={"login-container__right-column__text__title"}>
              <h2>
                <b>let's</b> go
              </h2>
            </div>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              
              validationSchema={loginSchema()}
              
              onSubmit={(values) => {
                handleSubmit(values)
              }}>
              {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  handleChange
                }) => (
                <form onSubmit={handleSubmit}
                      method={"post"}
                >
                  <div className={"login-container__right-column__text__fields"}>
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
                          'Enter your email address'}
    
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
                        placeholder={"Password"}
                      />
                      <FormHelperText className={touched.password && errors.password ? "helper-text__error" : "helper-text"}>
                        {touched.password && errors.password ? errors.password :
                          'Enter your super secret password'}
                      </FormHelperText>
                    </FormControl>
                    
                    {/*<p className={"forgot-password-text"}>*/}
                    {/*  forgot password?*/}
                    {/*</p>*/}
                  </div>
                  <div className={"login-container__right-column__text__button-section"}>
                    <Button type="submit">
                      <p>Login</p>
                    </Button>
                    <Button>
                      <p>Register</p>
                    </Button>
                  </div>
                </form>
              )}
            
            </Formik>
          
          
          </Container>
        </div>
      </Grid>
    </Grid>
  );
}


export default Login