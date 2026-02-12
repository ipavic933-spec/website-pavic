"use client"

import {
  Building2,
  FileText,
  Users,
  Landmark,
  Gavel,
  HardHat,
  ArrowRight,
} from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Services() {
  const { t } = useI18n()

  const services = [
    { icon: Building2, titleKey: "svc.property.title", descKey: "svc.property.desc" },
    { icon: FileText, titleKey: "svc.contract.title", descKey: "svc.contract.desc" },
    { icon: Users, titleKey: "svc.inheritance.title", descKey: "svc.inheritance.desc" },
    { icon: Landmark, titleKey: "svc.admin.title", descKey: "svc.admin.desc" },
    { icon: Gavel, titleKey: "svc.enforcement.title", descKey: "svc.enforcement.desc" },
    { icon: HardHat, titleKey: "svc.labor.title", descKey: "svc.labor.desc" },
  ]

  return (
    <section id="services" className="scroll-mt-20 bg-brand-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
          {t("services.eyebrow")}
        </span>

        <h2 className="mb-4 max-w-md font-serif text-3xl leading-[1.12] tracking-tight text-ink-900 md:text-4xl">
          {t("services.title")}
        </h2>

        <p className="mb-12 max-w-xl text-sm leading-relaxed text-ink-600">
          {t("services.desc")}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const isLast = idx === services.length - 1
            return (
              <div
                key={service.titleKey}
                className={[
                  "group flex flex-col gap-4 rounded-2xl border border-brand-200 bg-white p-6 shadow-sm transition",
                  "hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-brand-200",
                  isLast ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                {/* top accent for premium feel */}
                <div className={isLast ? "h-0.5 w-16 rounded-full bg-brand-500" : "h-0.5 w-10 rounded-full bg-brand-200"} />

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                    <service.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-lg leading-snug text-ink-900">
                    {t(service.titleKey)}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-ink-600">
                  {t(service.descKey)}
                </p>

                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-800 opacity-70 transition group-hover:opacity-100">
                    {t("services.details") ?? "Detalji"}
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
