import React from "react";
import { useHistory } from "react-router-dom";

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
      <h1>Welcome to aptr.</h1>
      <button onClick={registerPath}>Register</button>
      <div>
        <p onClick={loginPath}>Already have an account? Login here.</p>
      </div>
    </div>
  );
};
