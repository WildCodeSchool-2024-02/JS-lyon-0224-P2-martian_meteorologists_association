import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navBar">
        <Link to="/reservation">reservation</Link>
        <img
          className="navIcon"
          src="src/assets/images/menu_icon.svg"
          alt="menu_icon"
        />
      </div>
    </nav>
  );
}
