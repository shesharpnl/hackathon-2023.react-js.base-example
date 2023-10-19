import logo from '../assets/logo.png';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";

// Header component with logo and navigation links
export default function Header() {
  // State for conditional rendering of bars icon 
  const [showMobileNav, setShowMobileNav] = useState(false);

    return (
       // Navigation container with a header class
    <>
    <nav className='header' >

      {/* Container for the logo with a logo-container class */}

      <div className='logo-container'>
        <a href='#'> {/* Link to the homepage */}
          <img className='logo' src={logo} alt='logo' />
        </a>
      </div>

      {/* Mobile Nav Button */}

      <div className='mobile-nav-button' onClick={() => setShowMobileNav(!showMobileNav)}>
        <FaBars />
      </div>

      {/* Menu items list */}

      <ul className='nav-list'>
        {/* Add relevant links */}
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>

    {/* Mobile Navigation */}

    {showMobileNav &&
    <div className='mob-nav-list-container'>
      <ul className='mob-nav-list'>
        {/* Add relevant links */}
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>}
    </>
    );
  }
