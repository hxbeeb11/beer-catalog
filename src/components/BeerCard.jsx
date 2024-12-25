import React from "react";
import "./BeerCard.css";

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} className="beer-image" />
      <h3>{beer.name}</h3>
      <p>{beer.price || "Price not available"}</p>
    </div>
  );
};

export default BeerCard;
