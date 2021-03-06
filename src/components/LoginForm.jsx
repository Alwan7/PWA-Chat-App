import logo from './logo/logo.svg';
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



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function LoginForm() {
  const classes = useStyles();
  const g = useNamedContext('global');

  const s = useStates({
    email: '',
    password: '',
    failMessage: ''
  });

  async function login(e) {
    e.preventDefault();
    let result = (await Login.login({
      email: s.email,
      password: s.password
    })).js;

    if (result.error) {
      s.failMessage = 'Something went wrong. Please try again!';
      s.email = '';
      s.password = '';
    }
    else {
      g.user = result;
    }
  }

  return <SFC
  

    template=
    {<Container component="main" maxWidth="xs">
       <CssBaseline />
      <div className={classes.paper}>
          <If c={s.signup}>
            <SignupForm />
            <Else>
              <If c={s.failMessage}>
              </If>
              <div className="card">
                  <form onSubmit={login} className="box">
                      <img src={logo} alt="Logo" />
                          <input type="email" placeholder="Enter email" {...s.bind('email')}/>
                          <input type="password" minLength="6"  placeholder="Password" required  {...s.bind('password')} />
                           <p className="text-danger">{s.failMessage}</p>
                          <input type="submit" value="Login"/>
                  </form>
              </div>
              <a onClick={() => s.signup = true} 
              className="a" href="#"><p className='p-tag'>Don't have an account? <br />Register here.</p></a>
            </Else>
          </If>
        </div>
</Container>}

    style=
    {/*css*/`
    .container{
      background-color: #10002B;
      width: 100%;
      height: 100vh;
    }
    .card {
      margin-bottom: 20px;
      border: none
  }
  
  .box {
      width: 100%;
      top: 50%;
      left: 50%;
      text-align: center;
      transition: 0.25s;
      background-color: #10002B;
  }
  .box input[type="text"],
  .box input[type="email"],
  .box input[type="password"] {
      border: 0;
      background-color: #10002B;
      display: block;
      margin: 20px auto;
      text-align: center;
      border: 2px solid #3498db;
      padding: 10px 10px;
      width: 250px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s
  }
  
  .box h1 {
      color: white;
      text-transform: uppercase;
      font-weight: 500
  }
  .box input[type="text"]:focus,
  .box input[type="email"]:focus,
  .box input[type="password"]:focus {
      width: 300px;
      border-color: #2ecc71
  }
  
  .box input[type="submit"] {
      border: 0;
      background: none;
      display: block;
      margin: 20px auto;
      text-align: center;
      border: 2px solid #2ecc71;
      padding: 14px 40px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s;
      cursor: pointer
  }
  
  .box input[type="submit"]:hover {
      background: #2ecc71
  }
  
  .forgot {
      text-decoration: underline
  }
  
  ul.social-network {
      list-style: none;
      display: inline;
      margin-left: 0 !important;
      padding: 0
  }
  
  ul.social-network li {
      display: inline;
      margin: 0 5px
  }
  
  .social-network a.icoFacebook:hover {
      background-color: #3B5998
  }
  
  .social-network a.icoTwitter:hover {
      background-color: #33ccff
  }
  
  .social-network a.icoGoogle:hover {
      background-color: #BD3518
  }
  
  .social-network a.icoFacebook:hover i,
  .social-network a.icoTwitter:hover i,
  .social-network a.icoGoogle:hover i {
      color: #fff
  }
  
  a.socialIcon:hover,
  .socialHoverClass {
      color: #44BCDD
  }
  
  .social-circle li a {
      display: inline-block;
      position: relative;
      margin: 0 auto 0 auto;
      border-radius: 50%;
      text-align: center;
      width: 50px;
      height: 50px;
      font-size: 20px
  }
  
  .social-circle li i {
      margin: 0;
      line-height: 50px;
      text-align: center
  }
  
  .social-circle li a:hover i,
  .triggeredHover {
      transform: rotate(360deg);
      transition: all 0.2s
  }
  
  .social-circle i {
      color: #fff;
      transition: all 0.8s;
      transition: all 0.8s
  }
  .p-tag{
      color: #fff;
  }
  .reg-icon{
      color: #fff;
      size: 20px;
  }
  .a {
    text-decoration : none;
    text-align : center;
  }
    `}
  />;
}
