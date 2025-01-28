import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header">
      <div className="hamburger-icon" onClick={toggleNav}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <h1>Taxi Service/Bookings</h1>
      <nav className={`nav-menu ${isNavOpen ? "open" : ""}`} onClick={closeNav}>
        <ul>
          <li>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/register-taxi" onClick={closeNav}>
              Register Taxi
            </Link>
          </li>
        </ul>
      </nav>
      {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
    </header>
  );
};

export default Header;
