"use client";

// Import React and necessary resources
import React from "react";
import { useState } from "react";
import allBillsData from "@/app/constants/vote/allBills";
import "./BillDetailsComponent.css";

// Define your category to color mapping
const categoryColors = {
  Environment: "#4CAF50",
  Education: "#1E90FF",
  Energy: "#FFD700",
  Security: "#FF6347",
  Healthcare: "#F08080",
  Infrastructure: "#4682B4",
  Internet: "#9ACD32",
};

const BillDetailsComponent = ({ billNumber }) => {
  // Function to find the bill details by billNumber
  const getBillDetails = (billNumber) => {
    return allBillsData.bills.find((bill) => bill.billNumber === billNumber);
  };

  // Extract the bill details using the billNumber
  const billDetails = getBillDetails(billNumber);

  // Determine the background color based on the category
  const backgroundColor = billDetails
    ? categoryColors[billDetails.billCategory]
    : "transparent";

  // Handle the bill card changes

  const [isDetails, setIsDetails] = useState(false);
  const handleDetailsToggle = () => {
    setIsDetails(!isDetails);
  };
  return (
    <>
      <div>
        {billDetails ? (
          <div>
            <div className="bill-category-header-container">
              <div
                className="bill-category-header"
                style={{ backgroundColor: backgroundColor }}
              >
                {" "}
                {billDetails.billCategory}
              </div>
            </div>
            {/* Left Decision Card */}
            <div className="bill-voting-container">
              <div className="bill-decision-card disapprove-card">
                <p>Disapprove</p>
              </div>
              {/* Bill Card Details */}
              <div className="bill-details-card" onClick={handleDetailsToggle}>
                <p id="bill-tracking-information">
                  <strong>{billDetails.timeUntilNextCycle}</strong> until bill
                  reaches <strong>{billDetails.currentStateOfProcess}</strong>
                </p>
                <h2>{billDetails.billName}</h2>

                {/* Toggle between detailed view and summary/tags view based on isDetails */}
                {isDetails ? (
                  <>
                    <p>
                      <strong>Current State:</strong>{" "}
                      {billDetails.currentStateOfProcess}
                    </p>
                    <p>
                      <strong>Time Until Next Cycle:</strong>{" "}
                      {billDetails.timeUntilNextCycle}
                    </p>
                    <p>
                      <strong>Delayed:</strong>{" "}
                      {billDetails.delayed ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Sponsors:</strong>{" "}
                      {billDetails.sponsors.join(", ")}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="bill-details-card-summary">
                      <strong>Summary:</strong> {billDetails.billSummary}
                    </p>
                    <div className="bill-details-bottom-contents-container">
                      <div>
                        {billDetails.billTags.map((tag, index) => (
                          <span
                            key={index}
                            className="bill-details-tag"
                            style={{ backgroundColor: categoryColors[tag] }}
                          >
                            {tag},
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* Right Decision Card */}
              <div className="bill-decision-card approve-card">
                <p>Approve</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Bill not found.</p>
        )}
      </div>
    </>
  );
};

export default BillDetailsComponent;
