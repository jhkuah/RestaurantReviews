import React, { useState } from "react";

function ReviewForm({ addReview }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addReview({ name, rating: parseInt(rating), desc });
    setName("");
    setRating("");
    setDesc("");
  };
  return (
    <form onSubmit={submitHandler}>
      <h3>Add a Review</h3>
      <label>
        Your Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Rating (1-5):
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </label>
      <label>
        Write your review:
        <input
          type="text"
          minLength="1"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
