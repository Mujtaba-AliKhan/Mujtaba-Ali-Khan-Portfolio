import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <Link to="/">
          <img src="src/assets/makLogo.png" alt="logo" height={"80px"} />
        </Link>
      </div>
      <div className="navItemContainer">
        <ul className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/projectgallery">Project Gallery</Link>
          </li>
          <li>
            <Link to="src\assets\Mujtaba Ali Khan Resume.pdf" target="blank">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
