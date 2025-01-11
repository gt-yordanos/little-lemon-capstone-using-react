import React from 'react';
import '../Styles/components/MobileMenu.css';
import { Link } from 'react-router-dom';

const MobileMenu = ({ handleLinkClick, activeLink }) => {
  return (
    <div className="mobile-menu-container">
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
    </div>
  );
};

export default MobileMenu;
