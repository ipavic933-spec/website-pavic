"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { LanguageSwitch } from "@/components/language-switch"
import { Button } from "@/components/button"
import {useTranslations} from "next-intl"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const t = useTranslations("Site")

  useEffect(() => {
    const sectionIds = ["about", "services", "contact"]

    const updateActiveSection = () => {
      const marker = window.scrollY + 140
      let nextActiveSection = ""

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue

        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (marker >= top && marker < bottom) {
          nextActiveSection = id
          break
        }
      }

      setActiveSection(nextActiveSection)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-white/10 bg-[#29546d] text-white" style={{ backgroundColor: "#29546d" }}>

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
              <span className="text-[13px] uppercase tracking-[0.15em] text-white/70">
                {t("header.subtitle")}
              </span>
              <span className="text-[21px] font-semibold leading-tight tracking-tight text-white">
                Ivan Pavić
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
               className={`rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white hover:ring-1 hover:ring-white/15 ${
                 activeSection === "about" ? "underline underline-offset-4" : ""
               }`}
              onClick={() => setActiveSection("about")}
            >
              {t("nav.about")}
            </a>
            <a
              href="#services"
               className={`rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white hover:ring-1 hover:ring-white/15 ${
                 activeSection === "services" ? "underline underline-offset-4" : ""
               }`}
              onClick={() => setActiveSection("services")}
            >
              {t("nav.services")}
            </a>
            <Button
              asChild
               className="h-auto rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-900 ring-1 ring-white/30 transition-colors hover:bg-white/90"
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
               className="h-auto w-auto p-0 text-white hover:bg-transparent"
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
        <nav className="border-t border-white/10 bg-[#29546d] px-6 py-6 text-right text-white" style={{ backgroundColor: "#29546d" }}>
          <div className="flex flex-col items-end gap-4">
            <a
              href="#about"
              className={`mr-4 text-sm font-medium text-white/70 transition-colors hover:text-white ${
                activeSection === "about" ? "underline underline-offset-4" : ""
              }`}
              onClick={() => {
                setActiveSection("about")
                setMobileOpen(false)
              }}
            >
              {t("nav.about")}
            </a>
            <a
              href="#services"
              className={`mr-4 text-sm font-medium text-white/70 transition-colors hover:text-white ${
                activeSection === "services" ? "underline underline-offset-4" : ""
              }`}
              onClick={() => {
                setActiveSection("services")
                setMobileOpen(false)
              }}
            >
              {t("nav.services")}
            </a>
            <Button
              asChild
              className="h-auto w-fit rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-900"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                {t("nav.contact")}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
