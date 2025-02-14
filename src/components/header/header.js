import React from 'react';
import './header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  let navTitle = "Popular Titles";
  if (location.pathname === "/series") {
    navTitle = "Popular Series";
  } else if (location.pathname === "/movies") {
    navTitle = "Popular Movies";
  }

  return (
    <header className="header-container">
      <div className="header-top">
        <div className="header-logo">
          DEMO Streaming
        </div>
        <div className="header-right">
          <a className="login-link">Log in</a>
          <button className="trial-button">Start your free trial</button>
        </div>
      </div>

      <nav className="header-nav">
        <h1 className="nav-title">{navTitle}</h1>
      </nav>
    </header>
  );
}

export default Header;
