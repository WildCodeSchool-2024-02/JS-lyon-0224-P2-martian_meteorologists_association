import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navIcon">
        <Link to="/reservation">reservation</Link>
        <img src="src/assets/images/page2_icon.svg" alt="rocket_icon" />
      </div>
    </nav>
  );
}
