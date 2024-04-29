import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowlinks = () => {
      setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `} >
      <button type="button"className="navbar_burger" onClick={handleShowlinks}>
        <span className="burger-bar">merde</span>
      </button>

      <ul className="navbar_links">
      <li className="navbar_item slideInDown-1 ">
         <NavLink to="/" onClick={handleShowlinks}>Mars weather</NavLink>
        </li>
        <li className="navbar_item slideInDown-2">
          <NavLink to="/reservation" onClick={handleShowlinks}>Visit Mars</NavLink>
        </li>
        <li className="navbar_item slideInDown-3">
          <NavLink to="/activities" onClick={handleShowlinks}>Activities</NavLink>
        </li>
      </ul>
    </nav>
  );
}
