"use client"

import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {useTranslations} from "next-intl"

export function Contact() {
  const [agreed, setAgreed] = useState(false)
  const t = useTranslations("Site")

  const contactItems = [
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "ipavic933@gmail.com",
      href: "mailto:ipavic933@gmail.com",
    },
    {
      icon: Phone,
      labelKey: "contact.phone",
      value: "+385 95 529 7362",
      href: "tel:+385955297362",
    },
    {
      icon: MapPin,
      labelKey: "contact.address",
      value: "Svaciceva 4, 21000, Split",
      href: "https://maps.app.goo.gl/hzKKXtUko1y1MPVo7",
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left - info */}
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
              {t("contact.eyebrow")}
            </span>
            <h2 className="mb-4 font-serif text-3xl leading-[1.12] tracking-[0.01em] text-ink-900 md:text-4xl">
              {t("contact.title")}
            </h2>

            <p className="mb-2 max-w-md text-sm leading-relaxed text-ink-600">
              {t("contact.desc")}
            </p>
            <p className="mb-2 max-w-md text-sm leading-relaxed text-ink-600">
              {t("contact.callHours")}
            </p>
            <p className="mb-10 text-sm font-semibold text-ink-900">
              {t("contact.note")}
            </p>

            <div className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const isExternal = Boolean(item.href?.startsWith("http"))
                const Row = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-200">
                      <item.icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-ink-600">{t(item.labelKey)}</p>
                      <p className="text-sm font-medium text-ink-900">{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group block w-full rounded-2xl border border-brand-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {Row}
                      <span className="text-sm font-medium text-brand-800 opacity-0 transition group-hover:opacity-100">
                        ↗
                      </span>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.labelKey}
                    className="w-full rounded-2xl border border-brand-200 bg-white px-4 py-4 shadow-sm"
                  >
                    {Row}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-ink-900">{t("form.title") ?? "Pošaljite upit"}</p>
              <p className="mt-1 text-xs text-ink-600">
                {t("form.subtitle") ?? "Odgovor u najkraćem mogućem roku."}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-sm font-medium text-ink-900">
                  {t("form.name")}
                </Label>
                <Input
                  id="name"
                  placeholder={t("form.namePh")}
                  required
                  className="rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-sm font-medium text-ink-900">
                  {t("form.email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("form.emailPh")}
                  required
                  className="rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-sm font-medium text-ink-900">
                  {t("form.message")}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("form.messagePh")}
                  rows={5}
                  required
                  className="resize-none rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                  className="mt-0.5"
                />
                <Label htmlFor="consent" className="text-xs leading-relaxed text-ink-600">
                  {t("form.consent")}
                </Label>
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className="mt-1 w-full rounded-xl bg-brand-800 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/15 ring-1 ring-brand-900/10 transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("form.submit")}
              </button>

              <p className="text-center text-xs text-ink-600/70">{t("form.micro")}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
