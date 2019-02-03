import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="header-container">
      <Link id="logo-big" className="logo" to="/">
        <img alt="Solorio Brewing CO. Logo" />
      </Link>
      <nav className="nav">
        <div id="logo-small" className="logo-container">
          <Link className="logo" to="/">
            <img alt="Solorio Brewing CO. Logo" />
          </Link>
          <div className="logo-container-sub">
            <h1 className="logo-title">Solorio Brewing Co.</h1>
            <h3 className="logo-title-sub">EST. 2015</h3>
            <h2 className="logo-title">Rancho Cucamonga</h2>
          </div>
        </div>
        <Link className="nav-link" to="Menu">
          Menu
        </Link>
        <Link className="nav-link" to="About">
          About
        </Link>
        <Link className="nav-link" to="Contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
