import BannerHero from "./components/BannerHero";
import HowWorks from "./components/HowWorks";
import OurCourses from "./components/OurCourses";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <BannerHero />
        <HowWorks />
        <OurCourses />
      </main>
    </div>
  );
}
