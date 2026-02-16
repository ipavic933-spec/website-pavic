"use client"

import React, { useCallback, useMemo, useState } from "react";
import type { InputEvent, InvalidEvent, SubmitEvent } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {useTranslations} from "next-intl";
import { Spinner } from "./ui/spinner";

export function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("contact");
  const errorMessage = useMemo(() => (
    t('errorMessage')
  ), [t]);

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

  const handleSubmit = useCallback((e: SubmitEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    console.log('Name', name, 'email', email, 'message', message);
    form.reset();
    setIsLoading(false);
  }, []);

  const handleError = useCallback((e: InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.currentTarget;
    if (field.validity.valueMissing) {
      field.setCustomValidity(' ');
      switch (field.id) {
        case 'name':
          setNameError(errorMessage);
          break;
        case 'email':
          setEmailError(errorMessage);
          break;
        case 'message':
          setMessageError(errorMessage);
          break;
        default:
          break;
      }
    }
  }, [errorMessage]);

  const resetError = useCallback((e: InputEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.currentTarget;
    field.setCustomValidity('');
    switch (field.id) {
      case 'name':
        setNameError('');
        break;
      case 'email':
        setEmailError('');
        break;
      case 'message':
        setMessageError('');
        break;
      default:
        break;
    }
  }, []);

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
                {t("formSubtitle") ?? "Odgovor u najkraćem mogućem roku."}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-sm font-medium text-ink-900">
                  {t("nameLabel")}*
                </Label>
                <div>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("namePlaceholder")}
                    required
                    onInvalid={handleError}
                    onInput={resetError}
                    className="rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
                    />
                  <div className="h-4 text-sm text-red-500">
                    {nameError}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-sm font-medium text-ink-900">
                  {t("emailLabel")}*
                </Label>
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    required
                    onInvalid={handleError}
                    onInput={resetError}
                    className="rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
                  />
                  <div className="h-4 text-sm text-red-500">
                    {emailError}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-sm font-medium text-ink-900">
                  {t("messageLabel")}*
                </Label>
                <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  required
                  onInvalid={handleError}
                  onInput={resetError}
                  className="resize-none rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
                  />
                  <div className="h-4 text-sm text-red-500">
                    {messageError}
                  </div>
                </div>
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
                className="mt-1 w-full flex justify-center rounded-xl bg-brand-800 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/15 ring-1 ring-brand-900/10 transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-50"
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
