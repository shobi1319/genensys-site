import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Genensys | Healthcare Technology & Solutions",
    template: "%s | Genensys",
  },
  description:
    "Genensys delivers healthcare technology, software, interoperability and operational solutions that help healthcare organizations work better.",
  applicationName: "Genensys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}