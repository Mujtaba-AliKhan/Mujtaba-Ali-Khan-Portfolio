import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">
            <img src="/makLogo.png" alt="mujtabaalikhan logo" />
          </a>
        </div>
        <div className="footerSocialContainer">
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/mujtaba-alikhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Mujtaba-AliKhan"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-github"></i>
            </a>
            <a href="mailto:mujtabaalikhan01@gmail.com" className="footer-icon">
              <i className="bi bi-envelope"></i>
            </a>
            <a
              href="https://www.instagram.com/__mujtaba05__"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div className="footer-text">
            <p>© 2024 Mujtaba Ali Khan. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>
            Email:{" "}
            <a href="mailto:mujtabaalikhan01@gmail.com">
              mujtabaalikhan01@gmail.com
            </a>
          </p>
          <p>Phone: +91-9113645590</p>
          <p>Location: Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
