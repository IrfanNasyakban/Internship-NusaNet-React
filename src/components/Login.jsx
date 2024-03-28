import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import "../styles/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        name: name,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        
        <form onSubmit={Auth}>
          <h1>Login</h1>
          {isVisible && <p style={{ textAlign: 'center', marginTop: '1em', color: 'red' }}>{msg}</p>}
          <div class="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
