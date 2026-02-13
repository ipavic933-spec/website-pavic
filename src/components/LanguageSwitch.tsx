"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-brand-900 text-xs">
      <Link
        href={pathname}
        locale="hr"
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "hr"
            ? "bg-[#d3dce0] text-ink-900"
            : "bg-white text-ink-600 hover:text-ink-900"
        }`}
        aria-label="Hrvatski"
      >
        HR
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "en"
            ? "bg-[#d3dce0] text-ink-900"
            : "bg-white text-ink-600 hover:text-ink-900"
        }`}
        aria-label="English"
      >
        EN
      </Link>
    </div>
  );
}
