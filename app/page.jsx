import Image from "next/image";
import styles from "./page.module.css";
import HomeHero from "./home/components/HomeHero/HomeHero";
import CallToAction from "./home/components/CallToAction/CallToAction";
import StaggeringStatistics from "./home/components/StaggeringStatistics/StaggeringStatistics";
import OurBeliefs from "./home/components/OurBeliefs/OurBeliefs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <OurBeliefs />
      <CallToAction />
      <BackToTop />
      <Footer />
    </>
  );
}
