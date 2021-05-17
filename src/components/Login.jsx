import React from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const registerPath = () => {
    let create = `/Create`;
    history.push(create);
  };

  return (
    <div>
      <form>
        <div>
          <input
            name="username"
            autoComplete="off"
            placeholder="username"
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="password"
          ></input>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <p onClick={registerPath}>Don't have an account? Register here.</p>
        </div>
      </form>
    </div>
  );
};
