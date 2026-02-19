import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/service-slugs";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://website-pavic.vercel.app";

const staticPaths = ["", "privacy-policy"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hrServiceSlugs = getServiceSlugs("hr");
  const enServiceSlugs = getServiceSlugs("en");

  const hrPaths = [...staticPaths, ...hrServiceSlugs];
  const enPaths = [...staticPaths, ...enServiceSlugs];

  const hrEntries: MetadataRoute.Sitemap = hrPaths.map((path, i) => ({
    url: `${BASE_URL}${path ? `/${path}` : ""}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        hr: `${BASE_URL}${path ? `/${path}` : ""}`,
        en: `${BASE_URL}/en${enPaths[i] ? `/${enPaths[i]}` : ""}`,
      },
    },
  }));

  const enEntries: MetadataRoute.Sitemap = enPaths.map((path, i) => ({
    url: `${BASE_URL}/en${path ? `/${path}` : ""}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        hr: `${BASE_URL}${hrPaths[i] ? `/${hrPaths[i]}` : ""}`,
        en: `${BASE_URL}/en${path ? `/${path}` : ""}`,
      },
    },
  }));

  return [...hrEntries, ...enEntries];
}
