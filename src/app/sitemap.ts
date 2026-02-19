import type { MetadataRoute } from "next";
import hr from "./../../messages/hr.json";
import en from "./../../messages/en.json";
import { services } from "@/data/services";
import { slugify } from "@/lib/slugify";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://website-pavic.vercel.app";

const staticPaths = ["", "privacy-policy"];

type Messages = typeof hr;
type ServiceId = (typeof services)[number]["id"];

function slugForService(messages: Messages, serviceId: ServiceId): string {
  const title = messages?.services?.[serviceId]?.title;

  if (typeof title !== "string" || !title.trim()) {
    return slugify(serviceId);
  }

  return slugify(title);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hrServiceSlugs = services.map((s) => slugForService(hr, s.id));
  const enServiceSlugs = services.map((s) => slugForService(en, s.id));

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