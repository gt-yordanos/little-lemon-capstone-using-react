import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuCard from "../components/MenuCard";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"; 
import saladImage from "../assets/saladImage.jpg";
import pizzaImage from "../assets/pizzaImage.jpg";
import burgerImage from "../assets/burgerImage.webp";
import sushiImage from "../assets/sushiImage.jpg";
import "../Styles/pages/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const foodDetails = [
    {
      name: "Salad",
      price: "$12",
      description: "Freshly made salad with organic ingredients. Perfect for a healthy meal.",
      image: saladImage,
    },
    {
      name: "Pizza",
      price: "$18",
      description: "Wood-fired pizza with fresh mozzarella and basil. A taste of Italy.",
      image: pizzaImage,
    },
    {
      name: "Burger",
      price: "$10",
      description: "Juicy beef burger with lettuce, tomato, and cheese. Served with fries.",
      image: burgerImage,
    },
    {
      name: "Sushi",
      price: "$20",
      description: "Assorted sushi platter with fresh fish and vegetables. A Japanese delight.",
      image: sushiImage,
    },
  ];

  return (
    <>
      <Hero />
      <div className="todays-menu">
        <div className="top-text">
        <h2>This Weeks specials</h2>
        <button><Link to='/menu'>Menu</Link></button>
        </div>
        <div className="todays-menu-container">
          {foodDetails.map((foodDetail, index) => (
            <MenuCard key={index} foodDetail={foodDetail} />
          ))}
        </div>
      </div>
      <Testimonials/>
      <AboutUs/>
    </>
  );
};

export default Home;
