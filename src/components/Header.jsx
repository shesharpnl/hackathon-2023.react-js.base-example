import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

// Header component with logo and navigation links
export default function Header({ setShowContact }) {
  // State for conditional rendering of bars icon
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClickContact = () => {
    setShowMobileNav(false)
    setShowContact(true)
  }
  const handleClickHome = () => {
    setShowMobileNav(false)
    setShowContact(false)

  }

  const handleClickOther = () => {
    setShowMobileNav(false)

  }

  return (
    // Navigation container with a header class
    <>
      <nav className="header">
        {/* Container for the logo with a logo-container class */}

        <div className="logo-container">
          <a href="#">
            {" "}
            {/* Link to the homepage */}
            <img className="logo" src={logo} alt="logo" />
          </a>
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
          <li onClick={handleClickHome}>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li onClick={handleClickContact}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}

      {showMobileNav && (
        <div className="mob-nav-list-container">
          <ul className="mob-nav-list">
            {/* Add relevant links */}
            <li onClick={handleClickHome}>
              <a href="#">Home</a>
            </li>
            <li onClick={handleClickOther}>
              <a href="#">About</a>
            </li>
            <li onClick={handleClickContact}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
