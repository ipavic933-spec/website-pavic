"use client";

import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export function LegalHeader() {

  return (
    <header className="bg-linear-to-b from-brand-900 to-brand-800 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo hideText={true} href="/"/>
        <LanguageSwitch />
      </div>
    </header>
  );
}
