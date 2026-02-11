"use client";

import { createContext, useContext, useMemo } from "react";
import { defaultLanguage, translations, type Language, type TranslationSet } from "../lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationSet;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const noopSetLanguage: LanguageContextValue["setLanguage"] = () => undefined;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = defaultLanguage;

  const value = useMemo(
    () => ({
      language,
      setLanguage: noopSetLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
