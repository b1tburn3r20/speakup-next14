import "./CallToAction.css";
import Link from "next/link";
export default function CallToAction() {
  return (
    <>
      <div>
        <div>
          <p className="header">
            Join us now, save yourself and billions of others.
          </p>
          <p className="subheader">
            This game of monopoly has to end and we the people have to take
            control of our planet.
          </p>
        </div>
      </div>
      <div id="join-us-button-container">
        <Link href="/auth">
          <button id="join-us-button">Take Control</button>
        </Link>
      </div>
    </>
  );
}
