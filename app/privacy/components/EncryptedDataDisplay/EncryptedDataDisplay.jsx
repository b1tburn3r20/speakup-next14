import React from "react";
import "./EncryptedDataDisplay.css";
// This is a dummy component for demonstration purposes
const EncryptedDataDisplay = () => {
  const encryptedDataSamples = [
    "U2FsdGVkX1+8JUiR3Gm6Yk3NzZ4xv8Q9LKPzJ0D1HsI=",
    "W0fMdVl4J9s8q2R7pGxWFG5S4mJ3Y8E2T9tP7Qe4VzA=",
    "H3Kb6JdFgH2JkLmN8L9OpQrStUvWxYz1A2B3C4D5E6F=",
    "G4H5I6J7K8L9M0N1O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B=",
    "C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X=",
    "Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T=",
    "V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q=",
    "R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7L8M=",
    "N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I=",
    "J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E=",
  ];

  return (
    <div className="encrypted-data-display">
      {encryptedDataSamples.map((data, index) => (
        <p key={index}>{data}</p>
      ))}
    </div>
  );
};

export default EncryptedDataDisplay;
