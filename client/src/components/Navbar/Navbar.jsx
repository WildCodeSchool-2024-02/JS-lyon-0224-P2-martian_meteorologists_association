import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <button
        type="button"
        className="menu-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <img src="/src/assets/images/menu_icon.svg" alt="menu button" />
      </button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Mars weather</NavLink>
        </li>
        <li>
          <NavLink to="/reservation">Visit Mars</NavLink>
        </li>
        <li>
          <NavLink to="/activities">Activities</NavLink>
        </li>
      </ul>
    </nav>
  );
}
