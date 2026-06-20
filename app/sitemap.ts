import type { MetadataRoute } from "next";

const base = "https://9ninebytruth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/concept", "/style", "/menu", "/recruit", "/access", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
