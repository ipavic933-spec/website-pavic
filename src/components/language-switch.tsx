"use client"

import {Link, usePathname} from "@/i18n/navigation"
import {useLocale} from "next-intl"

export function LanguageSwitch() {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-white/70 text-xs">
      <Link
        href={pathname}
        locale="hr"
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "hr"
            ? "bg-gradient-to-b from-brand-900 to-brand-800 text-white"
            : "bg-white text-brand-900 hover:bg-white/95"
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
            ? "bg-gradient-to-b from-brand-900 to-brand-800 text-white"
            : "bg-white text-brand-900 hover:bg-white/95"
        }`}
        aria-label="English"
      >
        EN
      </Link>
    </div>
  )
}
