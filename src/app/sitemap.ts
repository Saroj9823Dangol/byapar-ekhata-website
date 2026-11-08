import type { MetadataRoute } from "next";

const routes = [
  "",
  "/features",
  "/pricing",
  "/refer",
  "/download",
  "/about",
  "/contact",
  "/help",
  "/privacy",
  "/epartner/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://byaparekhata.com";
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
