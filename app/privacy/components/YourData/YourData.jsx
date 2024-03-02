import React from "react";
import "./YourData.css"; // Assuming you have a corresponding CSS file for styling

export default function YourData() {
  return (
    <section className="your-data-section">
      <header className="your-data-header">
        <h1 className="header">
          So your opinions are safe, but what are we doing with them?
        </h1>
        <h2 className="subheader">To put it simply, we deliver them.</h2>
      </header>
      <p>
        Have you ever told your representative what you think about an upcoming
        bill? Probably not, why? It's troublesome, you have to fill out a
        letter, read up on the bill, mail it, etc. The bottom line, people
        aren't doing it, and that's a problem.
      </p>
      <p>
        SpeakUp aims to inform your representative directly from our app. Once
        you vote, your decision is saved to an outgoing mail of sorts that comes
        every Saturday to finalize your decisions, this way you have time to
        change your mind while you sit on what you voted on.
      </p>
      <p>
        While we dont track who voted on what bill what we do track is how many
        per given area. We need to see the turnout rate for a given county or
        state. This means you and your vote are private but if you voted the
        total number goes up by one for your given area, to the public it is
        completely anonymous.
      </p>
    </section>
  );
}
