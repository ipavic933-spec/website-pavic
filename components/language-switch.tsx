"use client"

import { useI18n } from "@/lib/i18n"

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-brand-900 text-xs">
      <button
        onClick={() => setLocale("hr")}
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "hr"
            ? "bg-[#d3dce0] text-ink-900"
            : "bg-white text-ink-600 hover:text-ink-900"
        }`}
        aria-label="Hrvatski"
      >
        HR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 font-medium transition-colors ${
          locale === "en"
            ? "bg-[#d3dce0] text-ink-900"
            : "bg-white text-ink-600 hover:text-ink-900"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
