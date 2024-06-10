import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LoginUser, reset } from "../features/authSlice"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)

  useEffect(()=>{
    if (isSuccess && user) {
      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const Auth = (e) => {
    e.preventDefault()
    dispatch(LoginUser({username, password}))
  }

  return (
    <div className="login-container">
      <div className="wrapper">
        
        <form onSubmit={Auth}>
          <h1>Login</h1>
          {isError && <p className="font-weight-bold text-danger" style={{color: "red", textAlign: "center"}}>{message}</p>}
          <div class="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FontAwesomeIcon className="FontAwesomeLogin" icon={faUser} />
          </div>
          <div class="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon className="FontAwesomeLogin" icon={faLock} />
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
          </div>
          <button type="submit" class="btn">
          <span>{isLoading ? 'Loading...' : 'Login'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
