// === Components ===
import BannerHero from "../../components/BannerHero";
import HowWorks from "../../components/HowWorks";

// == Page ===
export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <BannerHero />
        <HowWorks />
      </main>
    </div>
  );
}
