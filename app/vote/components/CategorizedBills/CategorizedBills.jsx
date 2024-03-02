// Import React and your data
import React from "react";
import allBillsData from "@/app/constants/vote/allBills";

// CSS imports
import "./CategorizedBills.css";

export default function CategorizedBills({ category }) {
  // Filter bills based on the category prop
  const filteredBills = allBillsData.bills.filter(
    (bill) => bill.billCategory === category
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{category} Bills</h2>
      {filteredBills.length > 0 ? (
        <ul className="categorized-bills-container">
          {filteredBills.map((bill, index) => (
            <li key={index} className="bill-display-card">
              {bill.timeUntilNextCycle}
              <h3>{bill.billName}</h3>
              {/* <p>{bill.billSummary}</p> */}
              <div className="bill-display-card-tags-container">
                {bill.billTags.map((tag, tagIndex) => (
                  <span className="bill-display-card-tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bills found in this category.</p>
      )}
    </div>
  );
}
