import React from "react";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <h1  href="/" className="header-logo">GeoFace</h1>
        <nav className="header-nav">
        <a href='/' className='nav-link'>Home</a>
          <a href="/admin-login" className="nav-link">
            Admin Login
          </a>
          <a href="/student-login" className="nav-link">
            Student Login
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
