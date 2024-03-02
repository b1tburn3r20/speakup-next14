import Link from "next/link";
import React from "react";
import "./OptionalData.css"; // Assuming corresponding CSS file exists for styling

export default function OptionalData() {
  return (
    <section className="optional-data-section">
      <header className="optional-data-header">
        <h1 className="header">Optional Data</h1>
        <p className="subheader">
          While we keep track of how many people voted, we don't ask for much
          else. This software is a public service, so any additional information
          is completely optional.
        </p>
      </header>
      <ul className="optional-data-list">
        <li>
          <Link href="/surveys">
            <p>Surveys</p>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <p>Political Stance</p>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <p>Personal Information defaulted to private</p>
          </Link>
        </li>
        <li>
          <Link href="/surveys">
            <p>App Suggestions</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
