// === Components ===
import Image from "next/image";
import Button from "../Button";
import BannerHeroImage from "../../assets/images/banner-hero.svg";
import Link from "next/link";
import { Link as I18nLink } from "@/i18n/navigation";
import { FaGithub } from "react-icons/fa";

// === Utils ===
import siteConfig from "../../config/site";
import { getTranslations } from "next-intl/server";

// === Component ===
export default async function BannerHero() {
  const t = await getTranslations("bannerHero");

  return (
    <div className="w-full border-b border-b-olive-200 py-12 px-site-px bg-[radial-gradient(circle_at_0%_0%,theme(colors.blue.700/.0)_0%,transparent_0%),radial-gradient(circle_at_85%_15%,theme(colors.blue.700/.25)_0%,transparent_10%),radial-gradient(circle_at_40%_40%,theme(colors.blue.700/.10)_0%,transparent_40%),radial-gradient(circle_at_10%_10%,theme(colors.blue.700/.10)_0%,transparent_10%)]">
      <div className="flex justify-between items-center gap-16 w-full max-w-site-w mx-auto">
        <div>
          <h2 className="text-6xl font-bold mb-4 text-shadow-md">
            {t("title").split("IT Courses")[0]}
            <span className="text-primary">IT Courses</span>
          </h2>
          <p className="opacity-70 max-w-lg line-height-6">
            {t("description")}
          </p>
          <div className="mt-8 flex gap-4">
            <I18nLink href="/courses">
              <Button label={t("cta")} className="shadow-2xs w-3xs" />
            </I18nLink>
            <Link
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="GitHub"
                type="outlined"
                icon={<FaGithub size={24} />}
                className="w-3xs"
              />
            </Link>
          </div>
        </div>
        <Image
          src={BannerHeroImage}
          alt="Banner Hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
