import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Table.css";
import "../styles/DashboardAdmin.css";

const DashboardAdmin = () => {
  const [magang, setMagang] = useState([]);
  const [nilai, setNilai] = useState([]);

  useEffect(() => {
    getMagang();
    getNilai();
  }, []);

  const getMagang = async () => {
    try {
      const response = await axios.get("http://localhost:5000/magang");
      setMagang(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getNilai = async () => {
    try {
      const response = await axios.get("http://localhost:5000/nilai");
      setNilai(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const nilaiMagangIds = new Set(nilai.map((item) => item.idMagang));

  const centerStyle = {
    marginTop: "1em",
    textAlign: "center", // Menetapkan style untuk membuat teks di tengah
  };

  return (
    <div>
      <h2 style={centerStyle}>DATA INTERNSHIP</h2>
      <table className="one">
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>NUMBER</th>
          <th>COURSE</th>
          <th>GENDER</th>
          <th>STATUS</th>
          <th>FILE</th>
          <th>ACTION</th>
        </tr>
        {magang.length === 0 ? (
          <tr>
            <td colSpan="12" style={{ textAlign: "center" }}>
              Tidak terdapat data Magang yang tersimpan
            </td>
          </tr>
        ) : (
          magang.map((magang, index) => (
            <tr key={magang.id}>
              <td>{magang.name}</td>
              <td>{magang.email}</td>
              <td>{magang.number}</td>
              <td>{magang.course}</td>
              <td>{magang.gender}</td>
              <td>{magang.status}</td>
              <td>
                <a href={magang.url} target="_blank" rel="noreferrer">
                  Download
                </a>
              </td>
              <td>
              {!nilaiMagangIds.has(magang.idMagang) && (
                    <Link to={`/nilai/${magang.idMagang}`} className="button-blue">
                      Input Nilai
                    </Link>
                  )}
              </td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
};

export default DashboardAdmin;
