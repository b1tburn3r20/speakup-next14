import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewsHero from "./components/NewHero/NewsHero";

export default function news() {
  return (
    <>
      <div>
        <Navbar />
        <NewsHero />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}
