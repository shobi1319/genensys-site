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
  metadataBase: new URL("https://genensys.com"),
  title: {
    default: "Genensys | Healthcare Technology & Solutions",
    template: "%s | Genensys",
  },
  description:
    "Genensys delivers healthcare technology, software, interoperability and operational solutions that help healthcare organizations work better.",
  applicationName: "Genensys",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Genensys",
    title: "Genensys | Healthcare Technology & Solutions",
    description:
      "Genensys delivers healthcare technology, software, interoperability and operational solutions that help healthcare organizations work better.",
  },
  twitter: {
    card: "summary",
    title: "Genensys | Healthcare Technology & Solutions",
    description:
      "Genensys delivers healthcare technology, software, interoperability and operational solutions that help healthcare organizations work better.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={geist.variable}
      data-scroll-behavior="smooth"
    >
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