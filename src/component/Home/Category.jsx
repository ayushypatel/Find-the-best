// Category.jsx
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import CustomCard from './Card';
import './Home.css';
import indianFoodImage from '../../assets/indian-food.png.png';

function Category() {
  const [cards, setCards] = useState([]);
  

  useEffect(() => {
    const cardData = [
      { title: "Indian", image: indianFoodImage, alt: "Bootstrap", location: "Earth", timeAgo: "1d" },
      { title: "Italian", image: indianFoodImage, alt: "Bootstrap", location: "Earth", timeAgo: "2d" },
      { title: "South Indian", image: indianFoodImage, alt: "Bootstrap", location: "Earth", timeAgo: "3d" },
      { title: "Punjabi", image: indianFoodImage, alt: "Bootstrap", location: "Earth", timeAgo: "4d" },
      { title: "Chinese ", image: indianFoodImage, alt: "Bootstrap", location: "Earth", timeAgo: "5d" },
      { title: "Rajsthani", image: indianFoodImage, alt: "Bootstrap", location: "Earth", timeAgo: "6d" },
  
    ];
    const groups = [];
    for (let i = 0; i < cardData.length; i += 4) {
      groups.push(cardData.slice(i, i + 4));
    }
    setCards(groups);
  }, []);
  const renderCarouselItem = (group, idx) => (
    <Carousel.Item key={idx}>
      <div className="custom-card-container py-5 d-flex flex-nowrap justify-content-center">
        {group.map((card, index) => (
          <CustomCard
            key={index}
            {...card}
            className="custom-card"
          />
        ))}
      </div>
    </Carousel.Item>
  );
  return (
    <>
      <h1 className='food-category font-ubuntu'>
        <span className='secondary-color'>Food</span> By Category
      </h1>
      <Carousel>
        {cards.map(renderCarouselItem)}
      </Carousel>
    </>
  );
}

export default Category;
