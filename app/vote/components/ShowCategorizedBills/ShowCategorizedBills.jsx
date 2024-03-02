// Import React and the CategorizedBills component
import React from "react";
import CategorizedBills from "../CategorizedBills/CategorizedBills";

export default function ShowCategorizedBills() {
  return (
    <>
      <CategorizedBills category="Environment" />
      <CategorizedBills category="Education" />
      <CategorizedBills category="Healthcare" />
    </>
  );
}
