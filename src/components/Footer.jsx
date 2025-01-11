import React from 'react'
import '../Styles/components/Footer.css'
import footerLogo from '../assets/footerLogo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
const Footer = () => {
  const iconSize = 30
  return (
    <div className='footer-container'>
      <div className="footer-logo-container">
        <img src={footerLogo} alt="Little Lemon Logo" />
      </div>

      <div className="menu-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li className='order-online'>Order Online</li>
        </ul>
      </div>
      <div className='contact-detail'>
        <ul>
          <li>Adress</li>
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
  )
}

export default Footer