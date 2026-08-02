// === Components ===
import Logo from "../Logo";
import Button from "../Button";
import { Link } from "@/i18n/navigation";

// === Utils ===
import { getTranslations } from "next-intl/server";

// === Component ===
export default async function Header() {
  const t = await getTranslations("Header");

  return (
    <header className="bg-background text-olive px-site-px py-4 border-b border-b-olive-200 sticky top-0 z-50">
      <div className="w-full max-w-site-w mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/courses">
          <Button label={t("cta")} className="bg-olive-900 hover:opacity-85" />
        </Link>
      </div>
    </header>
  );
}
