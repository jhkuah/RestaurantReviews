import React from "react";

function Restaurant(props) {
  return (
    <div className="restaurant-info">
      <h2>{props.name}</h2>
      <p>Location: {props.location}</p>
      <p>Total Reviews: {props.totalReviews}</p>
      <p>Average Rating: {props.averageRating.toFixed(1)} stars</p>
    </div>
  );
}

export default Restaurant;
