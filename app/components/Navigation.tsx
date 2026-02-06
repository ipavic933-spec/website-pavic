"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const Navigation = () => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-[var(--text)] sm:text-base">
      <Link
        href="#about"
        className="rounded-sm transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        {t.header.about}
      </Link>
      <Link
        href="#services"
        className="rounded-sm transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        {t.header.services}
      </Link>
    </nav>
  );
};

export default Navigation;
