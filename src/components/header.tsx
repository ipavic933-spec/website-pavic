"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { LanguageSwitch } from "@/components/language-switch"
import { Button } from "@/components/button"
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
                Ivan Pavić
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
            <Button
              asChild
              className="h-auto rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-brand-50 ring-1 ring-brand-200 transition-colors hover:bg-brand-800"
            >
              <a href="#contact">{t("nav.contact")}</a>
            </Button>
            <LanguageSwitch />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitch />
            <Button
              variant="ghost"
              size="icon"
              className="h-auto w-auto p-0 text-ink-900 hover:bg-transparent"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`origin-top overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out md:hidden ${
          mobileOpen
            ? "pointer-events-auto max-h-80 scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col items-end gap-4 border-t border-brand-200/60 bg-[#d3dce0] px-6 py-6 text-right">
          <a
            href="#about"
            className="mr-4 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.about")}
          </a>
          <a
            href="#services"
            className="mr-4 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.services")}
          </a>
          <Button
            asChild
            className="h-auto w-fit rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-brand-50"
          >
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              {t("nav.contact")}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
