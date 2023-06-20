import { useState } from "react";
import "./App.css";
import Restaurant from "./components/Restaurant/Restaurant";
import ReviewForm from "./components/Reviews/ReviewForm";
import ReviewList from "./components/Reviews/ReviewList";

const DUMMYDATA = [
  {
    name: "Bob",
    rating: 3,
    desc: "good",
    id: crypto.randomUUID(),
  },
  {
    name: "Rob",
    rating: 2,
    desc: "hate this place",
    id: crypto.randomUUID(),
  },
  {
    name: "Billy",
    rating: 5,
    desc: "like pineapple",
    id: crypto.randomUUID(),
  },
];

function App() {
  const [reviews, setReviews] = useState(DUMMYDATA);
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };
  return (
    <div className="container">
      <h1>Reviews</h1>
      <Restaurant
        name="Programmer's Pizza"
        location="123 Main St"
        totalReviews={reviews.length}
        averageRating={calculateAverageRating()}
      />
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
