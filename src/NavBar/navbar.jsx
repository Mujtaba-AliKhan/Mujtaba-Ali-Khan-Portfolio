import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollToTop", "true");
      navigate("/");
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollToProjects", "true");
      navigate("/");
    } else {
      const projectsSection = document.getElementById("projects-section");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsSidebarOpen(false);
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

      <div
        className={`navItemContainer ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <ul className="navList">
          <li>
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleProjectsClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              onClick={() => {
                toggleSidebar();
              }}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projectgallery"
              onClick={() => {
                toggleSidebar();
              }}
            >
              Project Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/Mujtaba Ali Khan Resume.pdf"
              target="blank"
              onClick={() => {
                toggleSidebar();
              }}
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
