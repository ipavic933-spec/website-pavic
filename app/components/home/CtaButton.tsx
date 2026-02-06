"use client";

import { useLanguage } from "../LanguageProvider";

type CtaButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export default function CtaButton({ href = "#contact", label, className = "" }: CtaButtonProps) {
  const { t } = useLanguage();
  const resolvedLabel = label || t.header.contactCta;

  return (
    <a
      href={href}
      className={`btn-primary px-6 py-3 text-sm ${className}`.trim()}
    >
      {resolvedLabel}
    </a>
  );
}
