import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "StylePick AI",
  description: "Sifatli ",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
          <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
