import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";


// Header component with logo and navigation links
export default function Header() {
  // State for conditional rendering of bars icon
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClick = () => {
    setShowMobileNav(false)
  }


  return (
    // Navigation container with a header class
    <>
      <nav className="header">
        {/* Container for the logo with a logo-container class */}

        <div className="logo-container">
          <Link to={`/`}>
            {/* Link to the homepage */}
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Mobile Nav Button */}

        <div
          className="mobile-nav-button"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <FaBars />
        </div>

        {/* Menu items list */}

        <ul className="nav-list">
          {/* Add relevant links */}
          <li onClick={handleClick}>
            <Link to={`/`}>Home</Link>
          </li>
          <li onClick={handleClick}>
            <Link to={`/about`}>About</Link>
          </li>
          <li onClick={handleClick}>
            <Link to={`/contact`}>Sign up</Link>
          </li>
          <li onClick={handleClick}>
              <Link to={`/events`}>Events</Link>
            </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}

      {showMobileNav && (
        <div className="mob-nav-list-container">
          <ul className="mob-nav-list">
            {/* Add relevant links */}
            <li onClick={handleClick}>
              <Link to={`/`}>Home</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={`/about`}>About</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={`/contact`}>Sign up</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={`/events`}>Events</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
