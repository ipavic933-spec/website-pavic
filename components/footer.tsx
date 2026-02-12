"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-brand-900 to-brand-800 py-12 text-white">
      {/* subtle depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.25),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="IP logo"
                width={36}
                height={28}
                className="h-7 w-auto brightness-0 invert opacity-80"
              />
              <span className="font-serif text-lg tracking-tight text-white">Ivan Pavić</span>
            </div>

            <p className="max-w-xs text-xs leading-relaxed text-white/70">
              {t("header.subtitle")} Ivan Pavić
            </p>
          </div>

          {/* Working hours */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">{t("footer.workingHours")}</h4>

            <p className="text-xs text-white/75">{t("footer.hours")}</p>

            <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/75 ring-1 ring-white/10">
              {t("footer.byAppt")}
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">{t("footer.contact")}</h4>

            <a
              href="mailto:ipavic933@gmail.com"
              className="w-fit text-xs text-white/75 underline-offset-4 transition hover:text-white hover:underline"
            >
              ipavic933@gmail.com
            </a>

            <a
              href="tel:+385955297362"
              className="w-fit text-xs text-white/75 underline-offset-4 transition hover:text-white hover:underline"
            >
              +385 95 529 7362
            </a>

            <span className="text-xs text-white/75">
              Svaciceva 4, 21000, Split
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          <a
            href="#"
            className="text-xs text-white/55 underline underline-offset-4 transition hover:text-white/80"
          >
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </footer>
  )
}
