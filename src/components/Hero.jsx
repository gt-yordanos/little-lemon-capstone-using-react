import React from 'react'
import '../Styles/components/Hero.css'
import salad from '../assets/salad.jpg'
const Hero = () => {
  return (
    <div className="hero-container">

      <div className="hero-text">
        <h1>Little Lemon<br/>
        <span>Chicago</span>
        </h1>
        <p>
          We are a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>

      <div className='hero-image-container'>
        <img src={salad} alt="" className="hero-image" />
      </div>
    </div>
  )
}

export default Hero
