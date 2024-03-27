import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import "../styles/Login.css"

const Login = () => {
  return (
    <div className="login-container">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required />
          <FontAwesomeIcon className="FontAwesomeLogin" icon={faUser} />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required />
          <FontAwesomeIcon className="FontAwesomeLogin" icon={faLock} />
        </div>
        <div class="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" class="btn">
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
