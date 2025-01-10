import React from 'react'
import '../Styles/components/Hero.css'
import saladImage from '../assets/saladImage.jpg'
const Hero = () => {
  return (
    <div className="hero-container">

      <div className="hero-text">
        <h1>Little Lemon<br/>
        <span>Chicago</span>
        </h1>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
          Our chefs use only the freshest ingredients to create dishes that are both flavorful and healthy. 
        </p>
        <button>Reserve a Table</button>
      </div>

      <div className='hero-image-container'>
        <img src={saladImage} alt="" className="hero-image" />
      </div>
    </div>
  )
}

export default Hero
