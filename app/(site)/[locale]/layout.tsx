// === Components ===
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// === Utils ===
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../../globals.css";

// === Metadata ===
export const metadata: Metadata = {
  title: "IT Courses | A platform for IT courses and tutorials",
  description: "A platform for IT courses and tutorials.",
};

// === SSG ===
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// === Layout ===
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              const storedTheme = localStorage.getItem("theme");
              const theme = storedTheme === "light" || storedTheme === "dark"
                ? storedTheme
                : window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light";
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            } catch {
              const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            }`,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
