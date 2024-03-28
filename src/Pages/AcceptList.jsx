import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Table.css";

const AcceptList = () => {
  const [magang, setMagang] = useState([]);

  useEffect(() => {
    getMagang();
  }, []);

  const getMagang = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/magang?search_query=approve"
      );
      setMagang(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const centerStyle = {
    marginTop: "1em",
    textAlign: "center", // Menetapkan style untuk membuat teks di tengah
  };

  return (
    <div>
      <h2 style={centerStyle}>ACCEPT LIST</h2>
      <table className="one">
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>NUMBER</th>
          <th>COURSE</th>
          <th>GENDER</th>
          <th>STATUS</th>
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
            </tr>
          ))
        )}
      </table>
    </div>
  );
};

export default AcceptList;
