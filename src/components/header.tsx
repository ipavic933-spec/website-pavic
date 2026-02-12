"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { LanguageSwitch } from "@/components/language-switch"
import {useTranslations} from "next-intl"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations("Site")

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#d3dce0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <Image
              src="/images/logo.png"
              alt="IP logo"
              width={52}
              height={42}
              className="h-[42px] w-auto"
            />
            <div className="hidden flex-col sm:flex">
              <span className="text-[13px] uppercase tracking-[0.15em] text-ink-600">
                {t("header.subtitle")}
              </span>
              <span className="text-[21px] font-semibold leading-tight tracking-tight text-ink-900">
                Ivan Pavic
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-900 hover:ring-1 hover:ring-brand-200"
            >
              {t("nav.about")}
            </a>
            <a
              href="#services"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-900 hover:ring-1 hover:ring-brand-200"
            >
              {t("nav.services")}
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-brand-50 ring-1 ring-brand-200 transition-colors hover:bg-brand-800"
            >
              {t("nav.contact")}
            </a>
            <LanguageSwitch />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitch />
            <button
              className="text-ink-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="h-[11px] w-full bg-gradient-to-b from-black/25 to-transparent" />

      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-brand-200/60 bg-white px-6 py-6 md:hidden">
          <a
            href="#about"
            className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.about")}
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.services")}
          </a>
          <a
            href="#contact"
            className="w-fit rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-brand-50"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.contact")}
          </a>
        </nav>
      )}
    </header>
  )
}
