"use client";

import BrandLogo from "./BrandLogo";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-[var(--footer-border)] bg-[var(--footer-bg)] px-6 py-10 text-sm text-[var(--footer-text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
          <div className="grid grid-cols-[1.25rem_auto] items-start gap-x-2">
            <span className="flex justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="block h-5 w-5 shrink-0 -translate-y-0.5 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 7.6v4.9l3.2 1.8" />
              </svg>
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.hoursLabel}</span>
              <span className="mt-1 block text-[var(--footer-text)]">{t.footer.hoursWeekdays}</span>
              <span className="mt-0.5 block text-[var(--footer-text)]/80">{t.footer.hoursWeekend}</span>
            </span>
          </div>
          <div>
            <a
              href="mailto:hello@example.com"
              className="grid grid-cols-[1.25rem_auto] items-start gap-x-2 rounded-sm text-[var(--footer-link)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--footer-bg)]"
            >
              <span className="flex justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5 shrink-0 -translate-y-0.5 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.8 7.2 12 13l8.2-5.8" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.emailLabel}</span>
                <span className="mt-1 block text-[var(--footer-link)]">hello@example.com</span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="tel:+10000000000"
              className="grid grid-cols-[1.25rem_auto] items-start gap-x-2 rounded-sm text-[var(--footer-link)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--footer-bg)]"
            >
              <span className="flex justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5 shrink-0 -translate-y-0.5 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <path d="M6.7 3.8h3.1l1.2 4.2-2.1 1.6a14.6 14.6 0 0 0 5.5 5.5l1.6-2.1 4.2 1.2v3.1a1.8 1.8 0 0 1-2 1.8A16.4 16.4 0 0 1 4.9 5.8a1.8 1.8 0 0 1 1.8-2Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.phoneLabel}</span>
                <span className="mt-1 block text-[var(--footer-link)]">+1 (000) 000-0000</span>
              </span>
            </a>
          </div>
          <div>
            <a
              href="#map"
              className="grid grid-cols-[1.25rem_auto] items-start gap-x-2 rounded-sm text-[var(--footer-text)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--footer-bg)]"
            >
              <span className="flex justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5 shrink-0 -translate-y-0.5 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
                  <circle cx="12" cy="11" r="2.2" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">{t.footer.locationLabel}</span>
                <span className="mt-1 block text-[var(--footer-text)]">{t.footer.locationValue}</span>
              </span>
            </a>
          </div>
        </div>
        <BrandLogo
          size="sm"
          className="self-start text-[var(--footer-link)] hover:text-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--footer-bg)] sm:self-auto [&_.brand-logo-text]:text-[var(--footer-link)] [&_.brand-logo-mark]:border-[var(--accent)]/55 [&_.brand-logo-mark]:bg-[rgba(108,140,164,0.2)]"
        />
      </div>
    </footer>
  );
};

export default Footer;
