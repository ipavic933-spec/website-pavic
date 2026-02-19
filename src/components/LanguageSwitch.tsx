"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  getServiceIdBySlug,
  getServiceMessages,
  slugForService,
} from "@/lib/service-slugs";
import { useLocale } from "next-intl";

function getLocalizedHref(
  pathname: string,
  currentLocale: string,
  targetLocale: string,
): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const isLocale = firstSegment
    ? routing.locales.includes(
        firstSegment as (typeof routing.locales)[number],
      )
    : false;
  const withoutLocale = isLocale ? segments.slice(1) : segments;

  if (withoutLocale.length === 0) {
    return "/";
  }

  if (withoutLocale.length === 1) {
    const slug = withoutLocale[0];
    const serviceId = getServiceIdBySlug(currentLocale, slug);

    if (serviceId) {
      const messages = getServiceMessages(targetLocale);
      const targetSlug = slugForService(messages, serviceId);
      return `/${targetSlug}`;
    }

    return `/${slug}`;
  }

  return `/${withoutLocale.join("/")}`;
}

export function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const hrHref = getLocalizedHref(pathname, locale, "hr");
  const enHref = getLocalizedHref(pathname, locale, "en");

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-brand-900 text-xs">
      <Link
        href={hrHref}
        locale="hr"
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "hr"
            ? "bg-white text-brand-900"
            : "bg-brand-800 text-white/55 hover:text-ink-900"
        }`}
        aria-label="Hrvatski"
      >
        HR
      </Link>
      <Link
        href={enHref}
        locale="en"
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "en"
            ? "bg-white text-brand-900"
            : "bg-brand-800 text-white/55 hover:text-ink-900"
        }`}
        aria-label="English"
      >
        EN
      </Link>
    </div>
  );
}
