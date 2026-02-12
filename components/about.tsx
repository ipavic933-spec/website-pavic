"use client"

import { useEffect, useState } from "react"
import { Award, ShieldCheck, Briefcase, GraduationCap, Scale, MessageCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()
  const [activePillarIndex, setActivePillarIndex] = useState(0)
  const [isPillarVisible, setIsPillarVisible] = useState(true)

  const pillars = [
    { icon: Award, titleKey: "about.pillar1.title", descKey: "about.pillar1.desc" },
    { icon: ShieldCheck, titleKey: "about.pillar2.title", descKey: "about.pillar2.desc" },
    { icon: Briefcase, titleKey: "about.pillar3.title", descKey: "about.pillar3.desc" },
  ]

  const bullets = [
    { icon: GraduationCap, key: "about.bullet1" },
    { icon: Scale, key: "about.bullet2" },
    { icon: MessageCircle, key: "about.bullet3" },
  ]

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const intervalId = setInterval(() => {
      setIsPillarVisible(false)

      timeoutId = setTimeout(() => {
        setActivePillarIndex((prev) => (prev + 1) % pillars.length)
        setIsPillarVisible(true)
      }, 220)
    }, 3600)

    return () => {
      clearInterval(intervalId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [pillars.length])

  const activePillar = pillars[activePillarIndex]

  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow + title */}
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
          {t("about.eyebrow")}
        </span>
        <h2 className="mb-12 max-w-md font-serif text-3xl leading-[1.12] tracking-[0.01em] text-ink-900 md:text-4xl">
          {t("about.title")}
        </h2>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <div className="flex flex-col gap-7">
            <p className="max-w-lg text-base leading-relaxed text-ink-600">
              {t("about.lead")}
            </p>

            {/* Bullet facts */}
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b.key} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                    <b.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm leading-relaxed text-ink-900">{t(b.key)}</span>
                </li>
              ))}
            </ul>

            {/* Focus callout (big anti-meh upgrade) */}
            <div className="rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {t("about.focusLabel") ?? "Fokus"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {t("about.focus")}
              </p>
            </div>

            {/* Animated value pill */}
            <button
              type="button"
              onClick={() => setActivePillarIndex((prev) => (prev + 1) % pillars.length)}
              className="flex w-full max-w-full items-center gap-2 rounded-2xl border border-brand-200 bg-white px-4 py-3 text-left shadow-sm md:w-[62%]"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                <activePillar.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>

              <div
                className={`flex-1 transition-all duration-200 ${
                  isPillarVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
              >
                <p className="text-sm font-semibold text-ink-900">{t(activePillar.titleKey)}</p>
                <p className="text-xs leading-relaxed text-ink-600">{t(activePillar.descKey)}</p>
              </div>
            </button>
          </div>

          {/* Right column: portrait placeholder */}
          <div className="flex items-start justify-center lg:-mt-24 lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white shadow-sm ring-1 ring-brand-200/50">
              {/* radial gradient overlays */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,93,122,0.06),transparent_70%)]" />

              {/* inset frame border */}
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-brand-200/50" />

              {/* top-left label badge */}
              <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-200 backdrop-blur-sm">
                {t("about.photoLabel")}
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-700/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
                <span className="text-[11px] text-brand-700/35">{t("about.photoHint")}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-brand-200 bg-white/60 px-5 py-3 text-xs text-ink-600 backdrop-blur">
                {t("about.photoBottom")}
              </div>

              <div className="absolute bottom-14 right-4 flex items-center gap-3 rounded-2xl border border-brand-200/60 bg-white/75 px-4 py-3 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-xs font-bold text-white">
                  IP
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t("hero.cardName")}</p>
                  <p className="text-xs text-ink-600">{t("hero.cardRole")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
