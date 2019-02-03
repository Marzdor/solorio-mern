import React from "react";

const Footer = props => {
  return (
    <footer className="footer-container">
      <div className="footer-container-social">
        <a
          className="footer-link"
          href="https://www.facebook.com/Soloriobrew/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square" />
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/soloriobrewingco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="footer-link"
          href="https://twitter.com/SolorioBrewing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square" />
        </a>
        <a
          className="footer-link footer-card"
          href="https://squareup.com/gift/0ZPJF0BD0D0XH/order"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Gift Cards
        </a>
      </div>
      <h3 className="footer-text">
        Copyright © Solorio Brewing Co., LLC | All Rights Reserved
      </h3>
    </footer>
  );
};

export default Footer;
