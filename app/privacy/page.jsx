import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OptionalData from "./components/OptionalData/OptionalData";
import PrivacyHero from "./components/PrivacyHero/PrivacyHero";
import YourData from "./components/YourData/YourData";
import YourPrivacy from "./components/YourPrivacy/YourPrivacy";

export default function privacy() {
  return (
    <>
      <Navbar />
      <PrivacyHero />
      <YourPrivacy />
      <YourData />
      <OptionalData />
      <BackToTop />
      <Footer />
    </>
  );
}
