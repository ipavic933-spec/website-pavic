"use client"

import { useI18n, type Locale } from "@/lib/i18n"

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-brand-200 text-xs">
      <button
        onClick={() => setLocale("hr")}
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "hr"
            ? "bg-brand-50 text-brand-900"
            : "bg-transparent text-ink-600 hover:text-ink-900"
        }`}
        aria-label="Hrvatski"
      >
        HR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "en"
            ? "bg-brand-50 text-brand-900"
            : "bg-transparent text-ink-600 hover:text-ink-900"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
