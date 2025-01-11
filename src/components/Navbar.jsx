import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../Styles/components/Navbar.css'
import littleLemonLogo  from '../assets/littleLemonLogo.png'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="humbergur">
        <GiHamburgerMenu size={24} style={{ cursor: 'pointer', color:'#495E57'}} />
      </div>
      <img src={littleLemonLogo} alt="" className='nav-logo' />
      <ul>
        <li className='link'>Home</li>
        <li className='link'>About</li>
        <li className='link'>Menu</li>
        <li className='link'>Reservation</li>
        <li className='order-button'>Order Online</li>
        <li className='link'>Login</li>
      </ul>
      <div className="cart">
        <FaShoppingCart size={24} style={{ cursor: 'pointer', color: '#495E57' }} />
      </div>
    </nav>
  )
}

export default Navbar
