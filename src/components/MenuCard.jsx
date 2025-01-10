import React from 'react'
import '../Styles/components/MenuCard.css'
import saladImage from '../assets/saladImage.jpg'
import { FaBicycle } from 'react-icons/fa';
const Menu = ({foodDetail}) => {
  return (
    <div className='menu-card-container'>
      <div className="image-container">
        <img src={foodDetail.image} alt="" />
      </div>

      <div className="text-container">
        <div className='price-and-name'>
          <h2 className='food-name'>foodDetail.name</h2>
          <p className="price">
          foodDetail.price
        </p>
        </div>
        <p className='food-description'>
        foodDetail.description
          </p>
      </div>

      <p className="order-delivery">Order a Delivery  <FaBicycle size={25} color="#495E57" /></p>
    </div>
  )
}

export default Menu
