import React from "react";
import "../styles/Table.css";

const DashboardAdmin = () => {
  const centerStyle = {
    marginTop: "1em",
    textAlign: "center" // Menetapkan style untuk membuat teks di tengah
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
        </tr>
        <tr>
          <td>Fabio</td>
          <td>Cimo</td>
          <td>20</td>
          <td>20</td>
          <td>20</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  );
};

export default DashboardAdmin;
