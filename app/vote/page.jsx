import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShowCategorizedBills from "./components/ShowCategorizedBills/ShowCategorizedBills";
import VoteHero from "./components/VoteHero/VoteHero";

export default function vote() {
  return (
    <>
      <Navbar />
      <VoteHero />
      <ShowCategorizedBills />
      <BackToTop />
      <Footer />
    </>
  );
}
