"use client";
import React, { useState, useEffect } from "react";
import bills from "@/app/constants/vote/spotlightBills";
import "./SpotlightBills.css";

export default function SpotlightBills() {
  const [currentIndex, setCurrentIndex] = useState(0); // Currently visible bill

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a slight delay before updating the index to allow for transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bills.length);
      }, 500); // Adjust delay as needed for smooth transition
    }, 6000); // Change every  6 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="spotlight-bill-container">
      {bills.map((bill, index) => {
        const isCurrent = index === currentIndex;
        const isPrev =
          index === (currentIndex - 1 + bills.length) % bills.length;
        const isNext = index === (currentIndex + 1) % bills.length;

        let transformValue;
        if (isCurrent) {
          transformValue = "translateX(0)";
        } else if (isPrev) {
          transformValue = "translateX(-100%)";
        } else if (isNext) {
          transformValue = "translateX(100%)";
        } else {
          // Keep other bills out of sight without causing a visual jump
          transformValue = "translateX(200%)"; // Move them far to the right
        }

        return (
          <div
            key={bill.id}
            className={`bill ${
              isCurrent ? "current" : isPrev ? "prev" : isNext ? "next" : ""
            }`}
            style={{
              transition: isPrev ? "none" : "transform 0.5s ease", // Prevent transition for the previous bill to avoid jumps
              transform: transformValue,
            }}
          >
            <p>Bill {bill.id}</p>
            <p>
              <strong>Sponsors:</strong> {bill.sponsors.join(", ")}
            </p>
            <p>
              <strong>Introduced by:</strong> {bill.introducer}
            </p>
            <p>
              <strong>Current State:</strong> {bill.currentState}
            </p>
            <p>
              <strong>Next Step:</strong> {bill.nextStep}
            </p>
            <p>
              <strong>Tags:</strong> {bill.tags.join(", ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
