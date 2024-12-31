import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";

function Navbar() {
  const NavLinkstyle = {
    border: "2px solid green", // Corrected 'sloid' to 'solid'
    padding: "5px", // Optional: Add padding for better spacing
    textDecoration: "none", // Removes default underline from NavLinks
    color: "black", // Sets a default text color
  };


  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <NavLink style={NavLinkstyle} to={"/"}>
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={NavLinkstyle} to={"/about"}>
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={NavLinkstyle} to={"/contact"}>
            CONTACT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={NavLinkstyle} to={"/settings"}>
            SETTINGS
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
