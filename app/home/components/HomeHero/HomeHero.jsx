import StaggeringStatistics from "../StaggeringStatistics/StaggeringStatistics";
import "./HomeHero.css";

export default function HomeHero() {
  return (
    <>
      <div>
        <div className="HomeHeroContainer">
          <div className="hero-text-contents">
            <div>
              <p className="hero-header">Speakup AI-Augmented Politics</p>
              <p className="hero-subheader">
                Complete transparency in politics
              </p>
            </div>
            <div className="stag-stats">
              <StaggeringStatistics />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
