import React from "react";

const Header = props => {
  return (
    <header className="header-container">
      <a
        id="logo-big"
        className="logo"
        onClick={props.handleNavClick}
        href="#Home"
      >
        <img alt="Solorio Brewing CO. Logo" />
      </a>
      <nav className="nav">
        <div id="logo-small" className="logo-container">
          <a className="logo" onClick={props.handleNavClick} href="#Home">
            <img alt="Solorio Brewing CO. Logo" />
          </a>
          <div className="logo-container-sub">
            <h1 className="logo-title">Solorio Brewing Co.</h1>
            <h3 className="logo-title-sub">EST. 2015</h3>
            <h2 className="logo-title">Rancho Cucamonga</h2>
          </div>
        </div>
        <a className="nav-link" onClick={props.handleNavClick} href="#Menu">
          Menu
        </a>
        <a className="nav-link" onClick={props.handleNavClick} href="#About">
          About
        </a>
        <a className="nav-link" onClick={props.handleNavClick} href="#Contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
