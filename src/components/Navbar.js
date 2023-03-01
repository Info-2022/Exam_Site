import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "black",
      fontSize: isActive ? "19px" : "16px",
    };
  };
  const joinus = () => {
    window.location.replace("./Signup");
  };

  return (
    <>
      <nav>
        <div>
          <h2 className="knl">
            <span className="cap">K</span>
            <span className="small">n</span>
            <span className="cap">O</span>
            <span className="small">wl</span>
            <span className="cap">E</span>
            <span className="small">d</span>
            <span className="cap">GE</span>
          </h2>
        </div>

        <div id="navlinks">
          <NavLink style={navLinkStyles} className="anchor" to="/">
            Home
          </NavLink>

          <NavLink style={navLinkStyles} className="anchor" to="/courses">
            Courses
          </NavLink>

          <NavLink style={navLinkStyles} className="anchor" to="/contact">
            Contact
          </NavLink>

          <NavLink style={navLinkStyles} className="anchor" to="/login">
            Login
          </NavLink>

          <NavLink style={navLinkStyles} className="anchor" to="/signup">
            Signup
          </NavLink>

          <button onClick={joinus} id="joinus">
            Join Us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
