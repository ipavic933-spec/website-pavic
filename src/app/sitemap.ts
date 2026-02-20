import type { MetadataRoute } from "next";
import {
  getServiceMessages,
  getServiceSlugEntries,
  slugForService,
} from "@/lib/service-slugs";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://website-pavic.vercel.app";

const staticPaths = ["", "privacy-policy"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hrMessages = getServiceMessages("hr");
  const enMessages = getServiceMessages("en");
  const hrServiceEntries = getServiceSlugEntries("hr");
  const enServiceEntries = getServiceSlugEntries("en");

  const hrStaticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const hrUrl = `${BASE_URL}${path ? `/${path}` : ""}`;
    const enUrl = `${BASE_URL}/en${path ? `/${path}` : ""}`;

    return {
      url: hrUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          hr: hrUrl,
          en: enUrl,
        },
      },
    };
  });

  const enStaticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const hrUrl = `${BASE_URL}${path ? `/${path}` : ""}`;
    const enUrl = `${BASE_URL}/en${path ? `/${path}` : ""}`;

    return {
      url: enUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          hr: hrUrl,
          en: enUrl,
        },
      },
    };
  });

  const hrServiceSitemapEntries: MetadataRoute.Sitemap = hrServiceEntries.map(
    (entry) => {
      const hrUrl = `${BASE_URL}/${entry.slug}`;
      if (!entry.serviceId) {
        return {
          url: hrUrl,
          lastModified: new Date(),
          alternates: {
            languages: {
              hr: hrUrl,
            },
          },
        };
      }

      const enSlug = slugForService(enMessages, entry.serviceId);
      const enUrl = `${BASE_URL}/en/${enSlug}`;

      return {
        url: hrUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            hr: hrUrl,
            en: enUrl,
          },
        },
      };
    },
  );

  const enServiceSitemapEntries: MetadataRoute.Sitemap = enServiceEntries.map(
    (entry) => {
      const enUrl = `${BASE_URL}/en/${entry.slug}`;
      if (!entry.serviceId) {
        return {
          url: enUrl,
          lastModified: new Date(),
          alternates: {
            languages: {
              en: enUrl,
            },
          },
        };
      }

      const hrSlug = slugForService(hrMessages, entry.serviceId);
      const hrUrl = `${BASE_URL}/${hrSlug}`;

      return {
        url: enUrl,
        lastModified: new Date(),
        alternates: {
          languages: {
            hr: hrUrl,
            en: enUrl,
          },
        },
      };
    },
  );

  return [
    ...hrStaticEntries,
    ...enStaticEntries,
    ...hrServiceSitemapEntries,
    ...enServiceSitemapEntries,
  ];
}
