// === Components ===
import BannerHero from "../../components/BannerHero";
import HowWorks from "../../components/HowWorks";

// == Page ===
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="font-sans">
      <main>
        <BannerHero locale={locale} />
        <HowWorks locale={locale} />
      </main>
    </div>
  );
}
