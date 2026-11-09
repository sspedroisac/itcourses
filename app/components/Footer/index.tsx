// === Components ===
import Logo from "../Logo";
import Link from "next/link";

// === Utils ===
import siteConfig from "../../config/site";

// === Component ===
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted py-8">
      <div className="max-w-site-w mx-auto px-site-px flex flex-col items-center gap-4">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Logo
              iconClassName="text-foreground"
              titleClassName="text-foreground"
            />
            <p className="mt-4 mb-12 text-sm text-muted-foreground sm:mb-0">
              &copy; {new Date().getFullYear()} Pedro Isac • Open Source (MIT)
            </p>
          </div>

          <div className="flex gap-12">
            {siteConfig.footer.sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="font-bold text-foreground">{section.title}</p>
                {section.links.map((link, linkIndex) => (
                  <p key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
