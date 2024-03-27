import React from "react";
import "../styles/Register.css";
import registIcon from "../assets/img/regist icon.png";

const Register = () => {
  return (
    <div className="register-container">
      <h1 className="heading-register">
        <span>Join</span> Now
      </h1>

      <div className="row-register">
        <div className="image-register">
          <img src={registIcon} width="800" alt="register-icon" />
        </div>

        <form action="" method="post" className="registration-form">
          <div className="form-group-register">
            <label for="name">Name</label>
            <input
              type="text"
              className=""
              placeholder="Enter your full name"
              maxlength="50"
              name="name"
              id="name"
            />
          </div>
          <div className="form-group-register">
            <label for="email">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your valid email"
              maxlength="50"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group-register">
            <label for="number">Number</label>
            <input
              type="number"
              required
              placeholder="Enter your valid number"
              max="9999999999"
              min="0"
              name="number"
              id="number"
              onkeypress="if(this.value.length == 10) return false;"
            />
          </div>
          <div className="form-group-register">
            <label for="courses">Select Course</label>
            <select name="courses" id="courses" required>
              <option value="" disabled selected>
                Select the course --
              </option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="data analysis">Data Analysis</option>
              <option value="product management">Project Management</option>
              <option value="website development">Website Development</option>
            </select>
          </div>
          <div className="form-group-register">
            <label>Select Gender</label>
            <div className="radio">
              <input type="radio" name="gender" value="male" id="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" value="female" id="female" />
              <label for="female">Female</label>
            </div>
          </div>
          <div className="form-group-register">
            <input
              type="submit"
              value="Send Message"
              className="btn-register"
              name="send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
