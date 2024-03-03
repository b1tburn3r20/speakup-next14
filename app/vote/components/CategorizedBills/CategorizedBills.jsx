// Import React and your data
import React from "react";
import allBillsData from "@/app/constants/vote/allBills";
import Link from "next/link";
// CSS imports
import "./CategorizedBills.css";

export default function CategorizedBills({ category }) {
  // Filter bills based on the category prop
  const filteredBills = allBillsData.bills.filter(
    (bill) => bill.billCategory === category
  );

  return (
    <div className="categorized-bills">
      <h2 style={{ textAlign: "center" }}>{category} Bills</h2>
      {filteredBills.length > 0 ? (
        <ul className="categorized-bills-container">
          {filteredBills.map((bill, index) => (
            <li key={index} className="bill-display-card">
              <Link href={`/vote/${bill.billNumber}`}>
                <p className="bill-name-link">{bill.billName}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bills found in this category.</p>
      )}
    </div>
  );
}
