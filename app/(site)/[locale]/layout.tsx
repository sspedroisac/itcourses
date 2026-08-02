import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../../globals.css";

export const metadata: Metadata = {
  title: "IT Courses | A platform for IT courses and tutorials",
  description: "A platform for IT courses and tutorials.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
