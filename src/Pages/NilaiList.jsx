import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import "../styles/Table.css";

const NilaiList = () => {
  const [nilai, setNilai] = useState([]);

  useEffect(() => {
    getNilai();
  }, []);

  const getNilai = async () => {
    try {
      const response = await axios.get("http://localhost:5000/nilai");
      setNilai(response.data);
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
        {nilai.length === 0 ? (
          <tr>
            <td colSpan="13" style={{ textAlign: "center" }}>
              Tidak terdapat data Nilai yang tersimpan
            </td>
          </tr>
        ) : (
          nilai.map((nilai, index) => (
            <tr key={nilai.idNilai}>
              <td>{nilai.magang.name}</td>
              <td>{nilai.magang.course}</td>
              <td>{nilai.wawancara}</td>
              <td>{nilai.react}</td>
              <td>{nilai.html}</td>
              <td>{nilai.css}</td>
              <td>{nilai.javascript}</td>
              <td>{nilai.php}</td>
              <td>{nilai.nodejs}</td>
              <td>{nilai.golang}</td>
              <td>{nilai.mysql}</td>
              <td>{nilai.git}</td>
              <td>{nilai.mikrotik}</td>
              <td>{nilai.fiberOptik}</td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
};

export default NilaiList;
