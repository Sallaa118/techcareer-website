import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/careers", label: "Daftar Karier" },
    { path: "/quiz", label: "Tes Minat" },
    { path: "/tips", label: "Platform Kursus" },
    { path: "/about", label: "Tentang Kami" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="TechCareer Logo" />
        </NavLink>
      </div>
      <div className="navbar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;