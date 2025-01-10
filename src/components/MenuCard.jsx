import React from 'react'
import '../Styles/components/MenuCard.css'
import saladImage from '../assets/saladImage.jpg'
const Menu = () => {
  return (
    <div className='menu-card-container'>
      <div className="menu-card-image-container">
        <img src={saladImage} alt="" />
      </div>

      <div className="menu-card-text-container">
        <div>
          <h2 className='food-name'>Salad</h2>
          <p className='food-description'>
            Fresh mixed greens, cherry tomatoes, cucumbers, red onions, and feta cheese. Served with our house vinaigrette.
          </p>
        </div>

        <p className="price">
          $9.99
        </p>
      </div>
      
    </div>
  )
}

export default Menu
