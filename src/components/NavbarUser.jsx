import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/style.css";
import "../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoNusaNet from "../assets/img/Logo-Nusanet-Full.png";

const NavbarUser = () => {
    const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // Ubah status menu terbuka atau tidak
  };

  const handleAdminClick = () => {
    setIsAdminOpen(!isAdminOpen); // Ubah status dropdown Admin
  };

  const handleScroll = () => {
    setIsOpen(false); // Tutup menu
    setIsAdminOpen(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <header className="sticky">
        <a href="/" className="logo">
          <img src={logoNusaNet} alt="" />
        </a>

        <ul className={isOpen ? "navbar open" : "navbar"}>
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/nilai-user">Nilai List</a>
          </li>
            <a onClick={Logout} className="btn">Logout</a>
        </ul>

        <div className="header-icons">
          <a href="#" onClick={handleMenuClick}>
            <FontAwesomeIcon id="menu-icon" icon={isOpen ? faTimes : faBars} />
          </a>
        </div>
      </header>
    </div>
  )
}

export default NavbarUser
