import React from "react";
import { Link } from "react-router-dom"; 
import "../App.css";

export default function Nav() { 
  return (
    <>
      <div className="nav__img">
        <img src="../../src/assets/LDW_9976.jpg" alt="profile--img" />
      </div>
      <ul className="nav__bar">
        <li>
            <Link to="/" className="nav__link">
                <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
        </li>
        <li>
            <Link to="/about" className="nav__link">
                <i className="fa fa-user" aria-hidden="true"></i> About
            </Link>
        </li>
        <li>
            <Link to="/experience" className="nav__link">
                <i className="fa fa-briefcase" aria-hidden="true"></i> Experience
            </Link>
        </li>
        <li>
            <Link to="/contact" className="nav__link">
                <i className="fa fa-comments" aria-hidden="true"></i> Contact
            </Link>
        </li>
      </ul>
    </>
  );
}
