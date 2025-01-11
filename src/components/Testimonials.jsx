import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../Styles/components/Testimonials.css';
import rahelGetu from '../assets/rahelGetu.jpg';
import selamTesfaye from '../assets/selamTesfaye.png';
import leulSisay from '../assets/leulSisay.jpg';
import wendiMak from '../assets/wendiMak.jpg';

const testimonialsData = [
  {
    name: 'Rahel Getu',
    feedback: 'Great service and delicious food!',
    image: rahelGetu,
    proffession: 'Musician'
  },
  {
    name: 'Leul Sisay',
    feedback: 'A wonderful dining experience!',
    image: leulSisay,
    proffession: 'Musician',
  },
  {
    name: 'Selam Tesfaye',
    feedback: 'Highly recommend this place!',
    image: selamTesfaye,
    proffession: 'Artist'
  },
  {
    name: 'Wendi Mak',
    feedback: 'Highly recommend this place!',
    image: wendiMak,
    proffession: 'Musician',
  },
];

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <h2>What Our Customers Say</h2>
      <div className="card-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div style={{ display: 'flex', gap: '5px' }}>
              {Array(5).fill().map((_, index) => (
                <FaStar key={index} size={18} color="#ffc107" />
              ))}
            </div>
            <div className="person-detail">
              <div className="image-container">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>

              <div className="peron-name-proffession">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.proffession}</p>
              </div>
            </div>
            <p className='feedback'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;