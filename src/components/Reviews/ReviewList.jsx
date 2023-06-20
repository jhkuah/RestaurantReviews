import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h3>All Reviews</h3>
      {reviews.map((review) => {
        return (
          <ReviewItem
            name={review.name}
            rating={review.rating}
            desc={review.desc}
            id={review.id}
            key={review.id}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
