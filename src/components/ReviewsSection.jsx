import React, { useState } from "react";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    { name: "John Doe", review: "Great investment!", rating: 5 },
    { name: "Jane Smith", review: "Saved a lot of money!", rating: 4 },
    { name: "Emily Johnson", review: "Excellent service and product.", rating: 5 },
  ]);
  const [newReview, setNewReview] = useState("");
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = () => {
    if (newName.trim() && newReview.trim()) {
      setReviews([...reviews, { name: newName, review: newReview, rating: newRating }]);
      setNewName("");
      setNewReview("");
      setNewRating(5);
    }
  };

  return (
    <div id="reviews" className="container my-5">
      <h2>User Reviews</h2>
      <ul className="list-group mb-4">
        {reviews.map((review, index) => (
          <li key={index} className="list-group-item">
            <strong>{review.name}</strong> ({review.rating}★)
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Write your review"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label>Rating:</label>
        <select
          className="form-select"
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
        >
          <option value={5}>5★</option>
          <option value={4}>4★</option>
          <option value={3}>3★</option>
          <option value={2}>2★</option>
          <option value={1}>1★</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleAddReview}>
        Submit Review
      </button>
    </div>
  );
};

export default ReviewsSection;
