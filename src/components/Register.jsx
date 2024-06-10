import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import "../styles/Modal.css";
import registIcon from "../assets/img/regist icon.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [file, setfile] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();

  const saveMagang = async (e) => {
    e.preventDefault();
    console.table("State sebelum dikirim:", {
      name,
      email,
      number,
      course,
      gender,
      file
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("course", course);
    formData.append("gender", gender);
    formData.append("file", file);

    console.log(formData);

    try {
      await axios.post("http://localhost:5000/magang", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const loadFile = (e) => {
    const file = e.target.files[0];
    setfile(file);
  };

  const closeModal = () => {
    setShowModal(false);
    // Navigasi ke halaman "/" setelah menutup modal
    navigate("/");
  };

  return (
    <div className="register-container">
      <h1 className="heading-register">
        <span>Join</span> Now
      </h1>

      <div className="row-register">
        <div className="image-register">
          <img src={registIcon} width="800" alt="register-icon" />
        </div>

        <form onSubmit={saveMagang} className="registration-form">
          <div className="form-group-register">
            <label for="name">Name</label>
            <input
              type="text"
              className=""
              placeholder="Enter your full name"
              maxlength="50"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="form-group-register">
            <label for="courses">Select Course</label>
            <select
              name="course"
              id="course"
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value={null} disabled selected>
                Select the course --
              </option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Jaringan">Jaringan</option>
            </select>
          </div>
          <div className="form-group-register">
            <label>Select Gender</label>
            <div className="radio">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={gender === "male"} // Menandai sebagai terpilih jika gender adalah male
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={gender === "female"} // Menandai sebagai terpilih jika gender adalah female
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group-register">
            <label for="file">Upload File</label>
            <input type="file" className="file-input" onChange={loadFile} />
          </div>
          <div className="form-group-register">
            <button
              type="submit"
              value="Send Message"
              className="btn-register"
              name="send"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              Message sent successfully! now waiting for next inform will be
              send to your email
            </p>
            <button className="button-ok" onClick={closeModal}>
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
