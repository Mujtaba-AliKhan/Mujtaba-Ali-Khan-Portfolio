import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <a href="/">
          <img src="/makLogo.png" alt="logo" height={"80px"} />
        </a>
      </div>
      <div>
        <button
          className={`menuToggle ${isSidebarOpen ? "rotate" : ""}`}
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      <div className={`navItemContainer ${isSidebarOpen ? "open" : ""}`}>
        <ul className="navList">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutme" onClick={toggleSidebar}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projectgallery" onClick={toggleSidebar}>
              Project Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/Mujtaba Ali Khan Resume.pdf"
              target="blank"
              onClick={toggleSidebar}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
