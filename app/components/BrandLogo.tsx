"use client";

import { useLanguage } from "./LanguageProvider";

type BrandLogoProps = {
  href?: string;
  className?: string;
  size?: "sm" | "md";
};

const sizeClasses: Record<NonNullable<BrandLogoProps["size"]>, string> = {
  sm: "[&_.brand-logo-mark]:h-8 [&_.brand-logo-mark]:w-8 [&_.brand-logo-text]:text-sm",
  md: "[&_.brand-logo-mark]:h-10 [&_.brand-logo-mark]:w-10 [&_.brand-logo-text]:text-sm sm:[&_.brand-logo-text]:text-base",
};

export default function BrandLogo({ href = "#top", className = "", size = "md" }: BrandLogoProps) {
  const { t } = useLanguage();

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 rounded-md transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${sizeClasses[size]} ${className}`.trim()}
    >
      <span aria-hidden="true" className="brand-logo-mark rounded-lg border border-[var(--accent)]/40 bg-[rgba(108,140,164,0.14)]" />
      <span className="brand-logo-text font-semibold tracking-wide text-[var(--text)]">{t.brandName}</span>
    </a>
  );
}
