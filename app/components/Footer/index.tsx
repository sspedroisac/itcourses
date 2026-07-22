// === Components ===
import Logo from "../Logo";
import Link from "next/link";

// === Component ===
export default function Footer() {
  const footerLinks = [
    {
      title: "Support",
      links: [
        {
          label: "Github",
          href: "",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
        {
          label: "Licence",
          href: "#",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-site-w mx-auto px-site-px flex flex-col items-center gap-4">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <Logo iconClassName="text-white" titleClassName="text-white" />
            <p className="text-white opacity-70 text-sm mt-4">
              &copy; {new Date().getFullYear()} Pedro Isac. All rights reserved.
            </p>
          </div>

          <div className="flex gap-12">
            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-white font-bold">{section.title}</p>
                {section.links.map((link, linkIndex) => (
                  <p key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white opacity-70 hover:opacity-100"
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
