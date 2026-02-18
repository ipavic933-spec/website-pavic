"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

const sectionIds = ["about", "services", "contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = useTranslations();

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 140;
      let nextActiveSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (marker >= top && marker < bottom) {
          nextActiveSection = id;
          break;
        }
      }

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="bg-linear-to-b from-brand-900 to-brand-800 fixed top-0 left-0 right-0 z-50">
      <div className="">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo hideText={true} />
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className={`rounded-lg px-3 py-1.5 text-sm font-medium text-white/55 transition-colors ${activeSection === "about" ? "underline underline-offset-4" : ""} hover:bg-brand-50 hover:text-brand-900 hover:ring-1 hover:ring-brand-200`}
            >
              {t("header.about")}
            </a>
            <a
              href="#services"
              className={`rounded-lg px-3 py-1.5 text-sm font-medium text-white/55 transition-colors ${activeSection === "services" ? "underline underline-offset-4" : ""} hover:bg-brand-50 hover:text-brand-900 hover:ring-1 hover:ring-brand-200`}
            >
              {t("header.services")}
            </a>
            <a
              href="#contact"
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-brand-900 transition-colors ${activeSection === "contact" ? "underline underline-offset-4" : ""} ring-1 ring-brand-200 bg-white hover:bg-brand-900 hover:text-brand-50`}
            >
              {t("header.contact")}
            </a>
            <LanguageSwitch />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitch />
            <button
              className="text-ink-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen ? t("header.closeMenu") : t("header.openMenu")
              }
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`origin-top overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "pointer-events-auto max-h-80 scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col items-start gap-4 px-6 py-6 text-left">
          <a
            href="#about"
            className="w-full mr-4 text-sm font-medium text-white/55 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t("header.about")}
          </a>
          <a
            href="#services"
            className="w-full mr-4 text-sm font-medium text-white/55 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t("header.services")}
          </a>
          <a
            href="#contact"
            className="w-fit rounded-lg bg-white text-brand-900 px-4 py-2 text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            {t("header.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}
