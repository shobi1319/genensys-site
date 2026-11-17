import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
  noIndex = false,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url: pathname,
      siteName: "Genensys",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
