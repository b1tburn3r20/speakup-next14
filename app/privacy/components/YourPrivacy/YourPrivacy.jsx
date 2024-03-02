import React from "react";
import EncryptedDataDisplay from "../EncryptedDataDisplay/EncryptedDataDisplay";
import "./YourPrivacy.css"; // Assuming CSS module or styled-components

export default function YourPrivacy() {
  return (
    <section className="privacy-section">
      <header>
        <h1>Your Privacy Matters to Us</h1>
      </header>
      <article>
        <p>A wise individual would first land here before going any further.</p>
        <p>
          The fact that you're here gives us hope. Clearly, we are going to need
          information about you, which means that someone out there will know
          what you REALLY think. And that means that we need to safeguard your
          information to an extremely high degree. Let's talk about it.
        </p>
      </article>
      <section>
        <h2>What We Do With Your Data</h2>
        <p>
          At SpeakUp, we're not out to make money. We are here because there is
          a metaphorical meteor headed directly for us, and we will likely be
          unable to stop it in 6 years' time.
        </p>
        <p>
          However, in order to make a change, we need indisputable proof that
          you are who you say you are, so we can tie your opinions directly to
          the person who is making them. Working towards end-to-end anonymity is
          challenging as we need a record of your opinion for it to actually
          make a change. The only ones who will have access to the way you as a
          person are voting will be you and your representative.
        </p>
        <p>
          Thanks to end-to-end encryption, we will not be deciphering any
          information until it lands on the panel of a representative. Until
          then, your data looks like this from the moment you vote:
        </p>
        <EncryptedDataDisplay />
        <p>
          Your personal information is passed through one of hundreds of
          encrypting algorithems three seperate times. For anyone who doesnt
          know the complexity of cracking a 24 digit multi-cased alphanumeric
          encryption that is one of hundreds and three times encrypted cracking
          a single one with most advanced computers humans have to offer would
          take the rest of the universe' lifetime several times over.
        </p>
      </section>
    </section>
  );
}
