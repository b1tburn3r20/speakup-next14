// billDetailsPage.jsx
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import BillDetailsComponent from "../components/BillDetailsComponent.jsx/BillDetailsComponent";

export default function billDetailsPage({ params }) {
  return (
    <>
      <Navbar />
      <BillDetailsComponent billNumber={params.billNumber} />
      <Footer />
    </>
  );
}
