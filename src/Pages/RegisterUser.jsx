import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const saveUsers = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confPassword", confPassword);
    formData.append("role", role);

    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post("http://localhost:5000/users", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={saveUsers}>
          <h1>Register</h1>
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
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FontAwesomeIcon className="FontAwesomeLogin" icon={faEnvelope} />
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
          <div class="input-box">
            <input
              type="password"
              placeholder="Konfirmasi Password"
              required
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <FontAwesomeIcon className="FontAwesomeLogin" icon={faLock} />
          </div>
          <div class="input-box">
            <input
              type="text"
              placeholder="Role"
              required
              readOnly
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <FontAwesomeIcon className="FontAwesomeLogin" icon={faUser} />
          </div>
          <button type="submit" class="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
