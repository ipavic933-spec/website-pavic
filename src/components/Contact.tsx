"use client"

import { useCallback, useState } from "react";
import type { SubmitEvent } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {useTranslations} from "next-intl";
import { Spinner } from "./ui/spinner";
import { InputField } from "./InputField";
import { toast } from "sonner";

export function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("contact");
  const gm = useTranslations("generalMessages");

  const contactItems = [
    {
      icon: Mail,
      labelKey: t("emailLabel"),
      value: "ipavic933@gmail.com",
      href: "mailto:ipavic933@gmail.com",
    },
    {
      icon: Phone,
      labelKey: t("phoneLabel"),
      value: "+385 95 529 7362",
      href: "tel:+385955297362",
    },
    {
      icon: MapPin,
      labelKey: t("addressLabel"),
      value: "Svaciceva 4, 21000, Split",
      href: "https://maps.app.goo.gl/hzKKXtUko1y1MPVo7",
    },
  ];

  const handleSubmit = useCallback(async (e: SubmitEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name')),
      email: String(formData.get('email')),
      message: String(formData.get('message')),
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.status !== 200) {
        throw new Error(data.message);
      }
      toast.success(gm('succesTitle'), {description: gm('succesDescription')});
      form.reset();
      setAgreed(false);
    } catch {
      toast.error(gm('errorTitle'), {description: gm('errorDescription')});
    } finally {
      setIsLoading(false);
    }
  }, [gm]);

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
              {t("eyebrow")}
            </span>
            <h2 className="mb-4 font-serif text-3xl leading-[1.12] tracking-[0.01em] text-ink-900 md:text-4xl">
              {t("title")}
            </h2>

            <p className="mb-2 max-w-md text-sm leading-relaxed text-ink-600">
              {t("desc")}
            </p>
            <p className="mb-2 max-w-md text-sm leading-relaxed text-ink-600">
              {t("callHours")}
            </p>
            <p className="mb-10 text-sm font-semibold text-ink-900">
              {t("note")}
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
                      <p className="text-xs text-ink-600">{item.labelKey}</p>
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

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-ink-900">{t("formTitle")}</p>
              <p className="mt-1 text-xs text-ink-600">
                {t("formSubtitle")}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <InputField
                  id={'name'}
                  isRequired={true}
                  label={t("nameLabel")}
                  name={'name'}
                  placeholder={t("namePlaceholder")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <InputField
                  id={'email'}
                  isRequired={true}
                  label={t("emailLabel")}
                  name={'email'}
                  placeholder={t("emailPlaceholder")}
                  type={'email'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <InputField
                  id={'message'}
                  isRequired={true}
                  isTextArea={true}
                  label={t("messageLabel")}
                  name={'message'}
                  placeholder={t("messagePlaceholder")}
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
                  {t("consent")}
                </Label>
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className="min-h-12 mt-1 w-full flex justify-center rounded-xl bg-brand-800 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/15 ring-1 ring-brand-900/10 transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                { isLoading ? <Spinner /> : t("submit")}
              </button>

              <p className="text-center text-xs text-ink-600/70">{t("micro")}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
