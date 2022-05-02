import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <ul>
        <Link to="/">
          <li>Główna</li>
        </Link>
        <Link to="/skill">
          <li>Menu</li>
        </Link>
        <Link to="/content">
          <li>Rezerwuj</li>
        </Link>
        <Link to="/leniwy">
          <li>Zdjęcia</li>
        </Link>
        <Link to="/foto">
          <li>Kontakt</li>
        </Link>
        <Link to="/api">
          <li>API</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
