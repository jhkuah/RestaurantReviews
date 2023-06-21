import React from "react";

function ReviewItem({ name, rating, desc }) {
  return (
    <div className="review">
      <p>{name}</p>
      <p>{rating}</p>
      <p>{desc}</p>
    </div>
  );
}

export default ReviewItem;
