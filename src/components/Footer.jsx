import React from 'react';
import '../Styles/components/Footer.css';
import footerLogo from '../assets/footerLogo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const iconSize = 30;

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This will ensure smooth scrolling
    });
  };

  return (
    <div className='footer-container'>
      <div className="footer-logo-container">
        <Link to='/' onClick={scrollToTop}>
          <img src={footerLogo} alt="Little Lemon Logo" />
        </Link>
      </div>

      <div className="menu-links">
        <ul>
          <li className='link'>
            <Link to='/' onClick={scrollToTop}>Home</Link>
          </li>
          <li className='link'>
            <a href='#about-us' onClick={scrollToTop}>About</a>
          </li>
          <li className='link'>
            <Link to='/menu' onClick={scrollToTop}>Menu</Link>
          </li>
          <li className='link'>
            <Link to='/reserve' onClick={scrollToTop}>Reservation</Link>
          </li>
          <li className='order-online'>
            Order Online
          </li>
        </ul>
      </div>

      <div className='contact-detail'>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>

      <div className="social-links">
        <ul>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={iconSize} style={{ color: '#4267B2' }} />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={iconSize} style={{ color: '#C13584' }} />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={iconSize} style={{ color: '#1DA1F2' }} />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={iconSize} style={{ color: '#FF0000' }} />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={iconSize} style={{ color: '#000000' }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;