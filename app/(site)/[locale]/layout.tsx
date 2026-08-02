import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../globals.css";

export const metadata: Metadata = {
  title: "IT Courses | A platform for IT courses and tutorials",
  description: "A platform for IT courses and tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
