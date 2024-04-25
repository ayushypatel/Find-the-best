import React from 'react';
import { Card } from 'react-bootstrap';
import './Home.css'; // Ensure you have the required styles defined here

function CustomCard({ title, image, alt, location, timeAgo }) {
  return (
    <Card className="custom-card font-bree h-100 text-bg-dark rounded-4 shadow-lg overflow-hidden">
      <Card.Img variant="top" src={image} alt={alt} />
      <div className="card-img-overlay custom-card-overlay">
        <Card.Title className="custom-card-title">{title}</Card.Title>
        <div className="custom-card-text">
          <p>{location}</p>
          <p>{timeAgo}</p>
        </div>
      </div>
    </Card>
  );
}

export default CustomCard;
