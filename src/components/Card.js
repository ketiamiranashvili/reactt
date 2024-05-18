import React from 'react'

const Card = ({ movie }) => {
  const { l: cardTitle, q: cardDescription, imageUrl: cardImage } = movie;

  return (
    <div className="card">
      <img src={cardImage} alt={cardTitle} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{cardTitle}</h2>
        <p className="card-description">{cardDescription}</p>
      </div>
    </div>
  );
};
export default Card
