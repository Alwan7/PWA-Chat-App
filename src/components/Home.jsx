import React from "react";
import { useHistory } from "react-router-dom";
import logo from './logo/logo.svg'
import wave from './logo/wave.svg'

export const Home = () => {
  const history = useHistory();

  const registerPath = () => {
    let create = `/Create`;
    history.push(create);
  };

  const loginPath = () => {
    let login = `/Login`;
    history.push(login);
  };
  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1 style={styles.title}>Welcome to aptr.</h1>
      <button style={styles.button} onClick={registerPath}>Register</button>
      <div>
        <p style={styles.mini} onClick={loginPath}>Already have an account? <br />Login here.</p>
      </div>
    </div>
  );
};


const styles = {
  button: {
    "color":"white","width":"225px","height":"53px","left":"75px","top":"336px", "background":"linear-gradient(90deg, #3C096C 8%, #7B2CBF 95.78%)","borderRadius":"100px"
},
  title: {
    "height":"50px","left":"0px","top":"261px","fontFamily":"Inter","fontStyle":"normal","fontWeight":"800","fontSize":"20px","lineHeight":"24px","letterSpacing":"-0.05em","color":"#FFFFFF"
  },
  mini: {
    "color":"gray"
  }
}
