// components/BackToTop.js
"use client";
import React from "react";
import "./BackToTop.css"; // Make sure to create this CSS file

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <div className="backToTop" onClick={scrollToTop}>
      Back to top
    </div>
  );
};

export default BackToTop;
