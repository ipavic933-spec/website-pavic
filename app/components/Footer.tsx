"use client";

import BrandLogo from "./BrandLogo";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background)] px-6 py-8 text-sm text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.emailLabel}</p>
            <a
              href="mailto:hello@example.com"
              className="mt-1 inline-block rounded-sm text-[var(--text)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              hello@example.com
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.phoneLabel}</p>
            <a
              href="tel:+10000000000"
              className="mt-1 inline-block rounded-sm text-[var(--text)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              +1 (000) 000-0000
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.locationLabel}</p>
            <p className="mt-1">{t.footer.locationValue}</p>
          </div>
        </div>
        <BrandLogo size="sm" className="self-start sm:self-auto" />
      </div>
    </footer>
  );
};

export default Footer;
