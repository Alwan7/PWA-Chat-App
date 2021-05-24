import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory }
  from "react-router-dom";
import { withContext, useNamedContext, Style, If, Else }
  from 'react-easier';
import StartPage from './StartPage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import Chat from './Chat';
import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;
import logo from './logo/logo.svg'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import "./App.css";



// This shouldn't be needed but ensures that 
// we do not get any resets of these context vars
let photos = [], messages = [];

export default withContext('global', {
  // GLOBAL CONTEXT
  user: false,
  sseConnecton: false,
  display: null,
  photos,
  messages
}, function App() {

  // LOGIC
  const g = useNamedContext('global');
  const history = useHistory();
  const registerPath = () => {
    let create = `/Create`;
    history.push(create);
  };

  const loginPath = () => {
    let login = `/Login`;
    history.push(login);
  };
  
  // start an SSE connection or close it if no user
  const startSSE = user => {
    if (!user && g.sseConnection) {
      g.sseConnection.close();
      g.photos = [];
      g.messages = [];
      return;
    }
    if (g.sseConnection) { return; }
    let sse = new EventSource('/api/sse');
    // add photos from ssev
    sse.addEventListener('photos',
      e => photos = g.photos = [...photos, ...JSON.parse(e.data)]
    );
    // add messages from sse
    sse.addEventListener('messages',
      e => messages = g.messages = [...messages, ...JSON.parse(e.data)]
    );
    g.sseConnection = sse;
  }

  // check if a user is logged in and who it is
  const loginCheck = async () => {
    let user = await Login.check();
    startSSE(user);
    g.user = user.js.email ? user : false;
    g.display = true;
  }

  // when the App mounts
  useEffect(() => loginCheck(), []);

  // logout
  const logout = async e => {
    e.preventDefault();
    await Login.logout();
    loginCheck();
    // redirect to the start page
    history.push('/');
  }

  // TEMPLATE
  const render = () => g.display && <Style css={css()}>
  <Container maxWidth="xs">
    <Router>

      <nav>
        <Link to="/">Home</Link>
        <If c={g.user}>
          <p>Logged in as {g.user.name} ({g.user.email})</p>
          <p><a href="#" onClick={logout}>Log out</a></p>
          <Else>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Else>
        </If>
        <hr />
      </nav>

      <Switch>
        <Route exact path="/">
          <If c={g.user}>
            <StartPage />
            
            <Else>
            <img src={logo} alt="Logo" />
            <h1 style={styles.title}>Welcome to aptr.</h1>
            <hr />
            
              <div>
              <Button style={styles.button} fullWidth
            variant="contained"  onClick={registerPath}>Register </Button>
              </div>
              <div>
              <i style={styles.mini} onClick={loginPath}>Already have an account? <br />Login here.</i>
            </div>
            </Else>
          </If>
        </Route>
        <Route path="/register">
          <RegisterPage {...{ loginCheck }} />
        </Route>
        <Route path="/login">
          <LoginPage {...{ loginCheck }} />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>

    </Router>
    </Container>
  </Style>;

const styles = {
  button: {
    "color":"white", "background":"linear-gradient(90deg, #3C096C 8%, #7B2CBF 95.78%)","borderRadius":"100px"
},
  title: {
    "height":"50px", "left":"0px","top":"261px","fontFamily":"Inter","fontStyle":"normal","fontWeight":"800","fontSize":"20px","lineHeight":"24px","letterSpacing":"-0.05em","color":"#FFFFFF"
  },
  mini: {
    "color":"gray",
    
  }
}
  // STYLE
  
  const css = () => /*css*/`
    // input {
    //   display: block;
    //   width: 300px;
    //   margin-bottom: 10px;
    //   line-height: 140%;
    // }

    // nav a {
    //   padding: 20px;  
    // }

    // nav a:first-child {
    //   padding-left: 0
    // }
    background-color: lightskyblue;
    
    
    
  `;

  return render();
})

