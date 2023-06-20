import React from "react";

function ReviewItem({ name, rating, desc }) {
  return (
    <div className="review">
      <p>{name}</p>
      <pp>{rating}</pp>
      <p>{desc}</p>
    </div>
  );
}

export default ReviewItem;
