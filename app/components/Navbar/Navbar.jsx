import Link from "next/link";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left-nav nav-section">
          <Link className="nav-item" href="/">
            Speakup
          </Link>
        </div>
        <div className="mid-nav nav-section">
          <Link className="nav-item" href="/">
            Home
          </Link>
          <Link className="nav-item" href="/vote">
            Vote
          </Link>
          <Link className="nav-item" href="/news">
            News
          </Link>
          <Link className="nav-item" href="/privacy">
            Your Privacy
          </Link>
        </div>
        <div className="right-nav nav-section">
          <p>Search</p>
          <button className="nav-item login-btn">Login</button>
        </div>
      </div>
    </>
  );
}
