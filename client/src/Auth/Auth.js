import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup } from '../actions/auth';
import { AUTH } from '../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }; /////////////

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialState);

//   *this will toggle the state of the password
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('this is the handleSubmit in Auth.js',form)

    if (isSignup) {
      // *we pass in the history to help us navigate once something happens
        dispatch(signup(form, history));
    } else {
        dispatch(signin(form, history));
    }
  };
  // const handleChange =''
  // *[e.target.name]: e.target.value ; this is just handling the current target name aka email edress
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });



  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };


  const googleSuccess = async (res) => {
      console.log('this is the res in googleSuccess in Auth.js:',res)
      const result = res?.profileObj;
      const token = res?.tokenId;
    console.log('this is the result in googleSuccess in Auth.js:',result)
    console.log('this is the token in googleSuccess in Auth.js:',token)

    try {
        // * this is the payload :data: { result, token } }
        dispatch({ type: 'AUTH', data: { result, token } });
    // *  this pushes us back to our homepage
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };


  const googleError = (error) => {
      console.log('this is the googleError in Auth.js:','Google Sign In was unsuccessful. Try again later')
      console.log('this is the googleError in Auth.js:',error)
    //   alert('Google Sign In was unsuccessful. Try again later');
      
  }

//



    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin
                        clientId="225564797441-159id80aq6afig2okl00iih49kqqdg7t.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />} 
                                variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
