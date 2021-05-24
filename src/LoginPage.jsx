import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory } from "react-router-dom";
import {useStates } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;
import logo from './logo/logo.svg'



const useStyles = makeStyles((theme) => ({
  
  paper: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
     backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage({ loginCheck }) {
  const classes = useStyles();
  const s = useStates({
    email: '',
    password: '',
    error: ''
  });

  const history = useHistory();

  const register = async e => {
    e.preventDefault();
    let { email, password } = s;
    // try to login
    let result = await Login.login({ email, password });
    if (result.js.error) { s.error = 'Login failed'; return; }
    // update login info
    loginCheck();
    // redirect to the start page
    history.push('/');
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={logo} alt="Logo" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={register} className={classes.form} noValidate>
          <TextField InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff'}
            }}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...s.bind('email')}
          />
          <TextField InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff'}
            }}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...s.bind('password')}
          />
          {s.error && <p>{s.error}</p>}
          
          <Button style={styles.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="Log in"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}
const styles = {
  button: {
      "color":"white", "background":"linear-gradient(90deg, #3C096C 8%, #7B2CBF 95.78%)","borderRadius":"100px"
  },
}