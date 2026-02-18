"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./LanguageSwitch";

export function LegalHeader() {
  const t = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Back to home"
          >
            <Image
              src="/logo.png"
              alt="IP logo"
              width={52}
              height={42}
              className="h-10.5 w-auto"
            />

            <div className="hidden flex-col sm:flex">
              <span className="text-[13px] uppercase tracking-[0.15em] text-ink-600">
                {t("header.subtitle")}
              </span>
              <span className="text-[21px] font-semibold leading-tight tracking-tight text-ink-900">
                {t("header.name")}
              </span>
            </div>
          </Link>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
