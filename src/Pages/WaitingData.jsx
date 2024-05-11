import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import "../styles/Table.css";

const WaitingData = () => {
  const [magang, setMagang] = useState([]);

  useEffect(() => {
    getMagang();
  }, []);

  const getMagang = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/magang?search_query=waiting"
      );
      setMagang(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAccept = async (e, idMagang) => {
    e.preventDefault();
    console.log("ID:", idMagang);
    const approve = "Approved";
    const jsonData = { status: approve };
    try {
      await axios.patch(`http://localhost:5000/magang/${idMagang}`, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (e, idMagang) => {
    e.preventDefault();
    console.log("ID:", idMagang);
    const approve = "Rejected";
    const jsonData = { status: approve };
    try {
      await axios.patch(`http://localhost:5000/magang/${idMagang}`, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const centerStyle = {
    marginTop: "1em",
    textAlign: "center", // Menetapkan style untuk membuat teks di tengah
  };

  return (
    <div>
      <h2 style={centerStyle}>WAITING LIST</h2>
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
            <tr key={magang.idMagang}>
              <td>{magang.name}</td>
              <td>{magang.email}</td>
              <td>{magang.number}</td>
              <td>{magang.course}</td>
              <td>{magang.gender}</td>
              <td>{magang.status}</td>
              <td>
              <td>
          <a href={magang.url} target="_blank" rel="noreferrer">
                  Download
                </a>
          </td>
              </td>
              <td>
                <button className="button-accept" onClick={(e) => handleAccept(e, magang.idMagang)}>Accept</button>
                <button className="button-reject" onClick={(e) => handleReject(e, magang.idMagang)}>Reject</button>
              </td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
};

export default WaitingData;
