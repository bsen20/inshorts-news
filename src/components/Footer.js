import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="linkedin.com/in/bsen20" target="__blank">
          Bibek Sen
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/bibek2364/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="linkedin.com/in/bsen20" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://twitter.com/Bibeksen17" target="__blank">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
