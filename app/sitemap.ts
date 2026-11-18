import type { MetadataRoute } from "next";

const siteUrl = "https://genensys-site.vercel.app";
const pages: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/interoperability", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  {
    path: "/products/occupational-therapy-ehr",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/products/teletherapy",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/products/medical-billing",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/products/patient-care",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/products/simplify-therapy",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/book-a-demo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/additional-costs", changeFrequency: "yearly", priority: 0.5 },
  { path: "/api-documentation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-world-testing", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.path, siteUrl).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
