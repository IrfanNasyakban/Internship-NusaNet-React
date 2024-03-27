import React, { useState } from "react";
import "../assets/css/style.css";
import "../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoNusaNet from "../assets/img/Logo-Nusanet-Full.png";

const Navbar = () => {
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
            <a href="#home">Internship List</a>
          </li>
          <li>
            <a href="#about">Waiting List</a>
          </li>
          <li>
            <a href="#testi">Reject List</a>
          </li>
            <a href="#contact" className="btn">Logout</a>
        </ul>

        <div className="header-icons">
          <a href="#" onClick={handleMenuClick}>
            <FontAwesomeIcon id="menu-icon" icon={isOpen ? faTimes : faBars} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
