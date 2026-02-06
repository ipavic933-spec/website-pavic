"use client";

import { useLanguage } from "./LanguageProvider";
import type { Language } from "../lib/translations";

const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "hr", label: "🇭🇷 HR" },
  { code: "en", label: "🇬🇧 EN" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm" role="group" aria-label={t.header.languageSwitcherLabel}>
      {languageOptions.map((option, index) => {
        const isActive = language === option.code;
        return (
          <div key={option.code} className="flex items-center">
            <button
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={isActive}
              className={`rounded-sm px-1 py-0.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                isActive ? "font-semibold text-[var(--accent)] underline underline-offset-4" : "text-[var(--text)] hover:text-[var(--accent)]"
              }`}
            >
              {option.label}
            </button>
            {index === 0 ? <span className="px-1 text-zinc-500">|</span> : null}
          </div>
        );
      })}
    </div>
  );
}
