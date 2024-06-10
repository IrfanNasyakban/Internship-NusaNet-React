import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import "../assets/css/style.css";
import "../styles/Table.css";

const NilaiListUser = () => {
  const [magang, setMagang] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  useEffect(() => {
    getMagang();
  }, []);

  const getMagang = async () => {
    try {
      const response = await axios.get("http://localhost:5000/magang");
      setMagang(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const centerStyle = {
    marginTop: "1em",
    textAlign: "center", // Menetapkan style untuk membuat teks di tengah
  };

  return (
    <div className="container">
      <h2 style={centerStyle}>LIST NILAI</h2>
      <table className="one">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Wawancara</th>
          <th>React</th>
          <th>Html</th>
          <th>Css</th>
          <th>Javascript</th>
          <th>PHP</th>
          <th>NodeJS</th>
          <th>Golang</th>
          <th>Mysql</th>
          <th>Git</th>
          <th>Mikrotik</th>
          <th>FiberOptik</th>
        </tr>
        {magang.length === 0 ? (
          <tr>
            <td colSpan="13" style={{ textAlign: "center" }}>
              Tidak terdapat data Nilai yang tersimpan
            </td>
          </tr>
        ) : (
          magang.map((magang, index) => (
            <tr key={magang.idMagang}>
              <td>{magang.name}</td>
              <td>{magang.course}</td>
              {magang.nilais.length > 0 ? (
                  <>
                    <td>{magang.nilais[0].wawancara}</td>
                    <td>{magang.nilais[0].react}</td>
                    <td>{magang.nilais[0].html}</td>
                    <td>{magang.nilais[0].css}</td>
                    <td>{magang.nilais[0].javascript}</td>
                    <td>{magang.nilais[0].php}</td>
                    <td>{magang.nilais[0].nodejs}</td>
                    <td>{magang.nilais[0].golang}</td>
                    <td>{magang.nilais[0].mysql}</td>
                    <td>{magang.nilais[0].git}</td>
                    <td>{magang.nilais[0].mikrotik}</td>
                    <td>{magang.nilais[0].fiberOptik}</td>
                  </>
                ) : (
                  <td colSpan="13" style={{ textAlign: "center" }}>
                    Nilai tidak tersedia
                  </td>
                )}
            </tr>
          ))
        )}
      </table>
      <h3 style={{ marginTop: "1em", textAlign: "center" }}>
        Untuk dinyatakan lulus membutuhkan nilai lebih diatas <span style={{color: "green"}}>60</span> 
      </h3>
    </div>
  );
};

export default NilaiListUser;
