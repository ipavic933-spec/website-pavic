"use client"

import {
  House,
  FileText,
  Users,
  Landmark,
  Gavel,
  Wrench,
} from "lucide-react"
import {useTranslations} from "next-intl"

export function Services() {
  const t = useTranslations("Site")

  const services = [
    { icon: House, titleKey: "svc.property.title", descKey: "svc.property.desc" },
    { icon: FileText, titleKey: "svc.contract.title", descKey: "svc.contract.desc" },
    { icon: Users, titleKey: "svc.inheritance.title", descKey: "svc.inheritance.desc" },
    { icon: Landmark, titleKey: "svc.admin.title", descKey: "svc.admin.desc" },
    { icon: Gavel, titleKey: "svc.enforcement.title", descKey: "svc.enforcement.desc" },
    { icon: Wrench, titleKey: "svc.labor.title", descKey: "svc.labor.desc" },
  ]

  return (
    <section id="services" className="scroll-mt-20 bg-brand-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
          {t("services.eyebrow")}
        </span>

        <h2 className="mb-4 max-w-md font-serif text-3xl leading-[1.12] tracking-[0.01em] text-ink-900 md:text-4xl">
          {t("services.title")}
        </h2>

        <p className="mb-12 max-w-xl text-sm leading-relaxed text-ink-600">
          {t("services.desc")}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            return (
              <div
                key={service.titleKey}
                className={[
                  "group flex flex-col gap-4 rounded-2xl border border-brand-200 bg-white p-6 shadow-sm transition",
                  "hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-brand-200",
                ].join(" ")}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                    <service.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <div className="inline-flex flex-col items-start">
                    <h3 className="font-serif text-lg leading-snug text-ink-900">
                      {t(service.titleKey)}
                    </h3>
                    <div className="mt-2 h-0.5 w-full origin-left scale-x-0 rounded-full bg-brand-200 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-ink-600">
                  {t(service.descKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
