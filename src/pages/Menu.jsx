import React from 'react'
import MenuCard from '../components/MenuCard';
import '../Styles/pages/Menu.css'
import pizzaImage from '../assets/pizzaImage.jpg'
import sushiImage from '../assets/sushiImage.jpg'
import pastaImage from '../assets/pastaImage.jpg'
import steakImage from '../assets/steakImage.jpg'
import tacosImage from '../assets/tacosImage.webp'
import iceCreamImage from '../assets/iceCreamImage.jpg'
import smoothieImage from '../assets/smoothieImage.jpg'
import pancakesImage from '../assets/pancakesImage.jpg'
import ramenImage from '../assets/ramenImage.jpg'
import friedRiceImage from '../assets/friedRice.jpg'

const Menu = () => {
  const foodDetails = [
    {
      name: "Pizza",
      price: "$18",
      description: "Wood-fired pizza with fresh mozzarella and basil. A taste of Italy.",
      image: pizzaImage,
    },
    {
      name: "Sushi",
      price: "$20",
      description: "Assorted sushi platter with fresh fish and vegetables. A Japanese delight.",
      image: sushiImage,
    },
    {
      name: "Pasta",
      price: "$15",
      description: "Creamy Alfredo pasta with grilled chicken and parmesan cheese. A classic Italian dish.",
      image: pastaImage,
    },
    {
      name: "Steak",
      price: "$25",
      description: "Grilled ribeye steak cooked to perfection. Served with mashed potatoes and asparagus.",
      image: steakImage,
    },
    {
      name: "Tacos",
      price: "$8",
      description: "Soft shell tacos filled with seasoned beef, lettuce, and cheese. A Mexican favorite.",
      image: tacosImage,
    },
    {
      name: "Ice Cream",
      price: "$5",
      description: "Creamy vanilla ice cream with a choice of chocolate or strawberry topping.",
      image: iceCreamImage,
    },
    {
      name: "Smoothie",
      price: "$7",
      description: "Refreshing fruit smoothie made with a blend of fresh berries and yogurt.",
      image: smoothieImage,
    },
    {
      name: "Pancakes",
      price: "$9",
      description: "Fluffy pancakes topped with maple syrup and fresh fruit. Perfect for breakfast.",
      image: pancakesImage,
    },
    {
      name: "Ramen",
      price: "$14",
      description: "Delicious ramen noodles in a savory broth with sliced pork, egg, and green onions.",
      image: ramenImage,
    },
    {
      name: "Fried Rice",
      price: "$10",
      description: "Fragrant fried rice with shrimp, vegetables, and a hint of soy sauce. A quick favorite.",
      image: friedRiceImage,
    },
  ];
  
  return (
    <div className='menu-page-container'>
      <h1>Our Menu</h1>
      <div className="menu-container">
        {foodDetails.map((foodDetail, index) => (
          <MenuCard key={index} foodDetail={foodDetail} />
        ))}
      </div>
    </div>
  )
}

export default Menu
