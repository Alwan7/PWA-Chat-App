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
import { Style, useStates } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { User, Login } = mongoosy;
import logo from './logo/logo.svg'




const useStyles = makeStyles((theme) => ({
  
  paper: {
    // marginTop: theme.spacing(8),
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
    // marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage({ loginCheck }) {
  const s = useStates({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    error: ''
  });

  const history = useHistory();

  const register = async e => {
    e.preventDefault();
    // check that passwords match
    let error = s.password === s.passwordRepeat ?
      '' : 'Passwords does not match...';
    if (error) { s.error = error; return; }
    let { name, email, password } = s;
    let newUser = new User({ name, email, password });
    let result = await newUser.save();
    // check that the server did not give us an error
    error = !result.error ?
      '' : 'Email-address already in use!';
    if (error) { s.error = error; return; }
    // login
    await Login.login({ email, password });
    // update login info
    loginCheck();
    // redirect to the start page
    history.push('/');
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={logo} alt="Logo" />
      
        <form  onSubmit={register} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField InputLabelProps={{
                  style: { color: '#fff' },
                }}
                inputProps={{
                  style: { color: '#fff'}
              }}
                autoComplete="fname"
                name="firstName"
                variant="standard"
                required
                fullWidth
                id="firstName"
                label=" Name"
                
                autoFocus
                {...s.bind('name')}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField InputLabelProps={{
                style: { color: '#fff' } 
                
              }}
              inputProps={{
                style: { color: '#fff'}
            }}
              
                variant="standard"
                required
                fullWidth  
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...s.bind('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff'}
            }}
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...s.bind('password')}
              />
            </Grid> <Grid item xs={12}>
              <TextField InputLabelProps={{
                style: { color: '#fff' },
              }}
              inputProps={{
                style: { color: '#fff'}
            }}
                variant="standard"
                required
                fullWidth
                name=" repeat password"
                label="Repeat password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...s.bind('passwordRepeat')}
              />
            </Grid>
            
          </Grid>
          <Button style={styles.button}
          
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="Register"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}


const styles = {
  button: {
      "color":"white", "background":"linear-gradient(90deg, #3C096C 8%, #7B2CBF 95.78%)","borderRadius":"100px"
  },
  form: { "background":"#10002B",
      "width":"220px","height":"50px","left":"77px","top":"283px","fontFamily":"Inter","fontStyle":"normal","fontWeight":"600","fontSize":"18px","lineHeight":"22px","letterSpacing":"-0.05em","color":"#4E4262"
  },
  mini: {
      "color":"gray"
    },
    
      // inputcolor: {
      //     "color": "#2196f3"
      // }
}