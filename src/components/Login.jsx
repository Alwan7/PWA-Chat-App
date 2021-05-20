import React from "react";
import { useHistory } from "react-router-dom";
import logo from './logo/logo.svg'

export const Login = () => {
  const history = useHistory();

  const registerPath = () => {
    let create = `/Create`;
    history.push(create);
  };

  return (
    <div>
      <img src={logo} alt="Logo" />
      <form>
        <div>
          <input style={styles.form}
            name="username"
            autoComplete="off"
            placeholder="username"
          ></input>
        </div>
        <div>
          <input style={styles.form}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="password"
          ></input>
        </div>
        <div>
          <br />
          <button style={styles.button}>Login</button>
        </div>
        <div>
          <p style={styles.mini} onClick={registerPath}>Don't have an account? <br />Register here.</p>
        </div>
      </form>
    </div>
  );
};


const styles = {
  button: {
      "color":"white","width":"225px","height":"53px","left":"75px","top":"336px", "background":"linear-gradient(90deg, #3C096C 8%, #7B2CBF 95.78%)","borderRadius":"100px"
  },
  mini: {
    "color":"gray"
  },
  form: { "background":"#10002B",
        "width":"220px","height":"50px","left":"77px","top":"283px","fontFamily":"Inter","fontStyle":"normal","fontWeight":"600","fontSize":"18px","lineHeight":"22px","letterSpacing":"-0.05em","color":"#4E4262"
    }
}