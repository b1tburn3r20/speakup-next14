"use client";
// StaggeringStatistics.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import facts from "@/app/constants/home/StaggeringFacts"; // Make sure this path matches your project structure
import "./StaggeringStatistics.css";

export default function StaggeringStatistics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000); // Changes every 5 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="StaggeringStatisticsContainer">
      {facts.map((fact, index) => (
        <div
          key={index}
          className={`fact-slide ${index === currentIndex ? "current" : ""}`}
          style={{
            transform:
              index === currentIndex ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <Link href={fact.link}>
            <p className={fact.className}>{fact.text}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
