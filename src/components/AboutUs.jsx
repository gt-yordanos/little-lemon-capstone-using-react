import React from 'react'
import '../Styles/components/AboutUs.css'
import marioAdrina from '../assets/marioAdrian.webp'
const AboutUs = () => {
  return (
    <div className='about-us-container'>
       <h1>About Us</h1>
       <div className="about-us-content-container">
        <div className="about-us-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Welcome to Little Lemon, a charming bistro located in the heart of Chicago. 
            We pride ourselves on offering a delightful dining experience with a menu 
            that features fresh, locally sourced ingredients. Our chefs craft each dish
            with care, ensuring that every bite is a burst of flavor. Come visit us and discover
              why we're a beloved spot in the Chicago culinary scene.
            </p>
        </div>

        <div className="about-us-image">
          <img src={marioAdrina} alt="Mario's and Adrian's Picture" />
        </div>
       </div>
    </div>
  )
}

export default AboutUs
