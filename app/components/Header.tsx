"use client";

import BrandLogo from "./BrandLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import Navigation from "./Navigation";
import CtaButton from "./home/CtaButton";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 text-[var(--text)] shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <BrandLogo />
        <div className="flex items-center gap-4 sm:gap-6">
          <Navigation />
          <CtaButton className="px-4 py-2 text-xs sm:text-sm" label={t.header.contactCta} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
