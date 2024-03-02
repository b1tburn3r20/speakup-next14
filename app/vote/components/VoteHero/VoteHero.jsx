import SpotlightBills from "../SpotlightBills/SpotlightBills";
import Link from "next/link";
import "./VoteHero.css";
export default function VoteHero() {
  return (
    <>
      <div className="vote-hero">
        <div className="vote-hero-text">
          <p className="hero-header">Climate Change is Happening Right Now.</p>
          <p className="hero-subheader">
            Vote on bills that directly impact our planet
          </p>
        </div>

        <div className="spotlight-bills-container">
          <SpotlightBills />
        </div>
      </div>
    </>
  );
}
