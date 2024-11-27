import React from "react";
import { Link } from "react-router-dom";

const LearnMorePage = () => {
  return (
    <div className="container my-5">
      <h1>Learn More About Solar Panels</h1>
      <p>
        Here you can add detailed information about the benefits, costs, and technologies of solar panels. This page serves as a more in-depth resource for users.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
};

export default LearnMorePage;
