// import "./navbar.css";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleHomeClick = (e) => {
//     e.preventDefault();
//     if (location.pathname !== "/") {
//       sessionStorage.setItem("scrollToTop", "true");
//       navigate("/");
//     } else {
//       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//     }
//   };

//   const handleProjectsClick = (e) => {
//     e.preventDefault();
//     if (location.pathname !== "/") {
//       sessionStorage.setItem("scrollToProjects", "true");
//       navigate("/");
//     } else {
//       const projectsSection = document.getElementById("projects-section");
//       if (projectsSection) {
//         projectsSection.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="navbarContainer">
//       <div className="logoContainer">
//         <a href="/">
//           <img src="/makLogo.png" alt="logo" height={"80px"} />
//         </a>
//       </div>
//       <div>
//         <button
//           className={`menuToggle ${isSidebarOpen ? "rotate" : ""}`}
//           onClick={toggleSidebar}
//         >
//           ☰
//         </button>
//       </div>

//       <div className={`navItemContainer ${isSidebarOpen ? "open" : ""}`}>
//         <ul className="navList">
//           <li>
//             <Link to="/" onClick={handleHomeClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/" onClick={handleProjectsClick}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/aboutme" onClick={toggleSidebar}>
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link to="/projectgallery" onClick={toggleSidebar}>
//               Project Gallery
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/Mujtaba Ali Khan Resume.pdf"
//               target="blank"
//               onClick={toggleSidebar}
//             >
//               Resume
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for the sidebar container
  const navigate = useNavigate();
  const location = useLocation();

  // Close the sidebar when clicking outside of it
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
    // Close sidebar after navigating
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
    // Close sidebar after navigating
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
        ref={sidebarRef} // Attach the ref here
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
