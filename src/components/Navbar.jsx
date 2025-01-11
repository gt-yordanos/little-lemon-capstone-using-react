import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../Styles/components/Navbar.css'
import littleLemonLogo  from '../assets/littleLemonLogo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="humbergur">
        <GiHamburgerMenu size={24} style={{ cursor: 'pointer', color:'#495E57'}} />
      </div>
      <Link to='/'>
      <img src={littleLemonLogo} alt="" className='nav-logo' />
      </Link>
      <ul>
        <li className='link'><Link to='/'>Home</Link></li>
        <li className='link'><a href='#about-us'>About</a></li>
        <li className='link'><Link to='/menu'>Menu</Link></li>
        <li className='link'><Link to='/reserve'>Reservation</Link></li>
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
