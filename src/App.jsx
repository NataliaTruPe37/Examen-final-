import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Image from "./components/Image";
import InfoSection from "./components/InfoSection";
import PanelTypesSection from "./components/PanelTypesSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import LearnMorePage from "./components/LearnMorePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Image />
              <InfoSection />
              <PanelTypesSection />
              <ReviewsSection />
              <Footer />
            </div>
          }
        />
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
    </Router>
  );
};

export default App;


