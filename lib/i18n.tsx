"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "hr" | "en"

type Translations = {
  [key: string]: { hr: string; en: string }
}

const t: Translations = {
  // Header
  "nav.about": { hr: "O nama", en: "About" },
  "nav.services": { hr: "Usluge", en: "Services" },
  "nav.contact": { hr: "Kontakt", en: "Contact" },
  "nav.openMenu": { hr: "Otvori izbornik", en: "Open menu" },
  "nav.closeMenu": { hr: "Zatvori izbornik", en: "Close menu" },
  "header.subtitle": { hr: "Odvjetnicki ured", en: "Law Office" },

  // Hero
  "hero.eyebrow": { hr: "ODVJETNICKI URED \u2022 SPLIT", en: "LAW OFFICE \u2022 SPLIT" },
  "hero.title": {
    hr: "Pouzdana pravna podrska za gradane i poslovne subjekte",
    en: "Reliable legal support for individuals and businesses",
  },
  "hero.subtitle": {
    hr: "Strucno savjetovanje i zastupanje u imovinskopravnim i ugovornim odnosima \u2014 jasno, diskretno i ucinkovito.",
    en: "Expert advice and representation in property and contract law \u2014 clear, discreet, and effective.",
  },
  "hero.badge1": { hr: "Diskretno i profesionalno", en: "Discreet & professional" },
  "hero.badge2": { hr: "Jasna komunikacija", en: "Clear communication" },
  "hero.badge3": { hr: "Odgovor u 24 h", en: "Response in 24h" },
  "hero.cta": { hr: "Zatrazite konzultacije", en: "Request a consultation" },
  "hero.cta2": { hr: "Nazovite odmah", en: "Call now" },
  "hero.micro": {
    hr: "Povjerljivo \u2022 Bez obveze u prvom kontaktu",
    en: "Confidential \u2022 No obligation on first contact",
  },
  "hero.cardName": { hr: "Ivan Pavic", en: "Ivan Pavic" },
  "hero.cardRole": { hr: "Odvjetnik", en: "Attorney" },
  "hero.imgLabel": { hr: "Hero slika", en: "Hero image" },
  "hero.imgHint": { hr: "Npr. kip pravde, ured, Split", en: "E.g. Lady Justice, office, Split" },

  // About
  "about.eyebrow": { hr: "O NAMA", en: "ABOUT" },
  "about.title": { hr: "Profesionalno i s povjerenjem", en: "Professional and trustworthy" },
  "about.lead": {
    hr: "Ured djeluje samostalno od sijecnja 2023., nakon visegodisnjeg iskustva u odvjetnickoj praksi u Splitu.",
    en: "The office has been operating independently since January 2023, following years of experience in legal practice in Split.",
  },
  "about.bullet1": {
    hr: "Diplomirao na Pravnom fakultetu u Splitu (2016.)",
    en: "Graduated from the Faculty of Law in Split (2016)",
  },
  "about.bullet2": {
    hr: "Pravosudni ispit polozen 2022.",
    en: "Bar exam passed in 2022",
  },
  "about.bullet3": {
    hr: "Rad temeljim na odgovornosti, povjerljivosti i jasnoj komunikaciji",
    en: "My work is based on responsibility, confidentiality, and clear communication",
  },
  "about.focus": {
    hr: "Fokus: stvarno i zemljisnoknjizhno pravo, obvezno pravo i sastavljanje/analiza ugovora te zastupanje u sudskim i izvansudskim postupcima.",
    en: "Focus: property and land registry law, contract law, drafting/analysis of contracts, and representation in court and out-of-court proceedings.",
  },
  "about.pillar1.title": { hr: "Strucnost", en: "Expertise" },
  "about.pillar1.desc": { hr: "Iskustvo, precizna procjena i strategija.", en: "Experience, precise assessment and strategy." },
  "about.pillar2.title": { hr: "Povjerljivost", en: "Confidentiality" },
  "about.pillar2.desc": { hr: "Diskrecija i zastita interesa klijenta.", en: "Discretion and protection of client interests." },
  "about.pillar3.title": { hr: "Posvecenost", en: "Dedication" },
  "about.pillar3.desc": { hr: "Individualan pristup svakom predmetu.", en: "Individual approach to every case." },
  "about.photoLabel": { hr: "Fotografija odvjetnika", en: "Lawyer photograph" },
  "about.photoHint": { hr: "Portret Ivana Pavica", en: "Portrait of Ivan Pavic" },

  // Services
  "services.eyebrow": { hr: "USLUGE", en: "SERVICES" },
  "services.title": { hr: "Pravna podrucja", en: "Practice areas" },
  "services.desc": {
    hr: "Pruzam pravne usluge fizickim i pravnim osobama u sljedecim podrucjima:",
    en: "I provide legal services to individuals and legal entities in the following areas:",
  },
  "svc.property.title": { hr: "Stvarno i zemljisnoknjizhno pravo", en: "Property & land registry law" },
  "svc.property.desc": {
    hr: "Vlasnistvo, suvlasnistvo, uknjizhbe i uredenje zemljisnoknjizhnog stanja.",
    en: "Ownership, co-ownership, registrations and land registry regulation.",
  },
  "svc.contract.title": { hr: "Obvezno pravo", en: "Contract law" },
  "svc.contract.desc": {
    hr: "Sastavljanje i analiza ugovora te sporovi iz ugovornih odnosa.",
    en: "Drafting and analysis of contracts and contractual disputes.",
  },
  "svc.inheritance.title": { hr: "Nasljedno pravo", en: "Inheritance law" },
  "svc.inheritance.desc": {
    hr: "Savjetovanje i zastupanje u ostavinskim postupcima.",
    en: "Counseling and representation in probate proceedings.",
  },
  "svc.admin.title": { hr: "Upravno pravo", en: "Administrative law" },
  "svc.admin.desc": {
    hr: "Zastupanje u postupcima i sporovima pred nadleznim tijelima.",
    en: "Representation in proceedings before competent authorities.",
  },
  "svc.enforcement.title": { hr: "Ovrsno pravo", en: "Enforcement law" },
  "svc.enforcement.desc": {
    hr: "Priprema i vodenje ovrha te naplata potrazivanja.",
    en: "Preparation and management of enforcement and debt collection.",
  },
  "svc.labor.title": { hr: "Radno pravo", en: "Labor law" },
  "svc.labor.desc": {
    hr: "Savjetovanje i zastupanje poslodavaca i radnika.",
    en: "Counseling and representation of employers and employees.",
  },

  // Contact
  "contact.eyebrow": { hr: "KONTAKT", en: "CONTACT" },
  "contact.title": { hr: "Zatrazite konzultacije", en: "Request a consultation" },
  "contact.desc": {
    hr: "Posaljite kratak opis upita. Odgovaram u najkracem mogucem roku, najcesce unutar 24 sata.",
    en: "Send a brief description of your inquiry. I respond as soon as possible, usually within 24 hours.",
  },
  "contact.note": {
    hr: "Za prijem stranaka potreban je prethodni dogovor.",
    en: "Prior arrangement is required for client reception.",
  },
  "contact.email": { hr: "Email", en: "Email" },
  "contact.phone": { hr: "Telefon", en: "Phone" },
  "contact.address": { hr: "Adresa", en: "Address" },
  "form.name": { hr: "Ime i prezime", en: "Full name" },
  "form.namePh": { hr: "Vase ime i prezime", en: "Your full name" },
  "form.email": { hr: "Email", en: "Email" },
  "form.emailPh": { hr: "vasa@email.com", en: "your@email.com" },
  "form.message": { hr: "Kratki opis upita", en: "Brief description" },
  "form.messagePh": { hr: "Opisite svoju pravnu situaciju...", en: "Describe your legal situation..." },
  "form.consent": {
    hr: "Pristajem na obradu osobnih podataka u svrhu odgovora na upit.",
    en: "I consent to the processing of personal data for the purpose of responding to my inquiry.",
  },
  "form.submit": { hr: "Posaljite upit", en: "Send inquiry" },
  "form.micro": {
    hr: "Povjerljivo \u2022 Bez obveze u prvom kontaktu",
    en: "Confidential \u2022 No obligation on first contact",
  },

  // Footer
  "footer.workingHours": { hr: "Radno vrijeme", en: "Working hours" },
  "footer.hours": { hr: "Ponedjeljak - petak, 09:00 - 17:00", en: "Monday - Friday, 09:00 - 17:00" },
  "footer.byAppt": { hr: "Za prijem stranaka potreban je prethodni dogovor.", en: "Prior arrangement is required for client reception." },
  "footer.contact": { hr: "Kontakt", en: "Contact" },
  "footer.copyright": {
    hr: "Odvjetnicki ured Ivan Pavic. Sva prava pridrzana.",
    en: "Law Office Ivan Pavic. All rights reserved.",
  },
  "footer.privacy": { hr: "Pravila privatnosti", en: "Privacy policy" },

  // Missing keys that were falling back
  "services.details": { hr: "Detalji", en: "Details" },
  "form.title": { hr: "Posaljite upit", en: "Send inquiry" },
  "form.subtitle": { hr: "Odgovaram u najkracem mogucem roku.", en: "I respond as soon as possible." },
  "about.focusLabel": { hr: "Fokus", en: "Focus" },
  "about.photoBottom": { hr: "Profesionalna fotografija povecava povjerenje.", en: "A professional photo builds trust." },
}

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("hr")

  const translate = useCallback(
    (key: string) => {
      const entry = t[key]
      if (!entry) return key
      return entry[locale]
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translate }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
