// components/Footer.js
import "./Footer.css"; // Corrected CSS import

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="infoSection">
          <h3>Speakup</h3>
          <p>Putting an end to political corruption.</p>
          <div className="infoLinks">
            <a href="/about">About Us</a>
            <a href="/mission">Our Mission</a>
            <a href="/process">Our Process</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="socialSection">
          <h3>Follow Us</h3>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
        <div className="legalSection">
          <h3>Legal</h3>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
      <div className="copyRightSection">
        <p>© 2024 Speakup. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
