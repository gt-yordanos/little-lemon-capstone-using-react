import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import '../Styles/components/Navbar.css';
import littleLemonLogo from '../assets/littleLemonLogo.png';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-container">
      <div className="lg-screen-nav">
        <div className="humbergur" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={24} style={{ cursor: 'pointer', color: '#495E57' }} />
          ) : (
            <GiHamburgerMenu size={24} style={{ cursor: 'pointer', color: '#495E57' }} />
          )}
        </div>
        <Link to="/" onClick={() => handleLinkClick('/')}>
          <img src={littleLemonLogo} alt="Little Lemon Logo" className="nav-logo" />
        </Link>
        <ul>
          <li
            className={`link ${activeLink === '/' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`link ${activeLink === '#about-us' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#about-us')}
          >
            <a href="#about-us">About</a>
          </li>
          <li
            className={`link ${activeLink === '/menu' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/menu')}
          >
            <Link to="/menu">Menu</Link>
          </li>
          <li
            className={`link ${activeLink === '/reserve' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/reserve')}
          >
            <Link to="/reserve">Reservation</Link>
          </li>
          <li className="order-button">Order Online</li>
          <li className="link">Login</li>
        </ul>
        <div className="cart">
          <FaShoppingCart size={24} style={{ cursor: 'pointer', color: '#495E57' }} />
        </div>
      </div>
      {isMenuOpen && (
        <MobileMenu activeLink={activeLink} handleLinkClick={handleLinkClick} />
      )}
    </nav>
  );
};

export default Navbar;
