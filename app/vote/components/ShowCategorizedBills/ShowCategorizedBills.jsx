// Import React and the CategorizedBills component
import React from "react";
import CategorizedBills from "../CategorizedBills/CategorizedBills";

// css imports
import "./ShowCategorizedBills.css";

export default function ShowCategorizedBills() {
  return (
    <>
      <div className="show-categorized-bills-container">
        <CategorizedBills category="Environment" />
        <CategorizedBills category="Education" />
        <CategorizedBills category="Healthcare" />
      </div>
    </>
  );
}
