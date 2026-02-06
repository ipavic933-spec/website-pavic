export type Language = "hr" | "en";

export const defaultLanguage: Language = "hr";
export const languageStorageKey = "site_lang";

export const translations = {
  hr: {
    brandName: "Odvjetnicki ured",
    header: {
      about: "O nama",
      services: "Usluge",
      contactCta: "Kontakt",
      languageSwitcherLabel: "Odabir jezika",
    },
    hero: {
      eyebrow: "Odvjetnicki ured Pavic",
      title: "Pouzdana pravna podrska za gradane i tvrtke",
      subtitle:
        "Pruzamo jasne pravne savjete i zastupanje u kljucnim zivotnim i poslovnim situacijama, s fokusom na brzinu, diskreciju i rezultat.",
      cta: "Zatrazi konzultacije",
    },
    about: {
      heading: "O meni",
      paragraphOne:
        "Dugogodisnje iskustvo u pravnoj praksi omogucuje preciznu procjenu svakog predmeta i pripremu strategije prilagodene klijentu.",
      paragraphTwo:
        "Klijentima osiguravam transparentnu komunikaciju, pravovremene informacije i zastupanje koje stiti njihove interese u svakoj fazi postupka.",
      photoPlaceholder: "Mjesto za fotografiju",
    },
    services: {
      heading: "Usluge",
      intro:
        "Odabir usluge ovisi o vasim potrebama. Svaki predmet zapocinje kratkom analizom i jasnim planom daljnjih koraka.",
      items: [
        {
          title: "Obiteljsko pravo",
          description: "Savjetovanje i zastupanje u predmetima razvoda, skrbnistva i imovinskih odnosa.",
        },
        {
          title: "Radno pravo",
          description: "Podrska kod ugovora o radu, otkaza, zastite prava radnika i poslodavaca.",
        },
        {
          title: "Obvezno pravo",
          description: "Izrada i provjera ugovora, naknada stete te rjesavanje sporova iz obveznih odnosa.",
        },
        {
          title: "Nekretnine",
          description: "Pravna provjera dokumentacije, kupoprodaja, upisi i zastita vlasnickih prava.",
        },
        {
          title: "Trgovacko pravo",
          description: "Pravna podrska tvrtkama, uskladivanje poslovanja i zastupanje u gospodarskim sporovima.",
        },
        {
          title: "Ovrhe i naplata",
          description: "Priprema ovrsnih prijedloga, zastita u ovrsi i ucinkovita naplata potrazivanja.",
        },
      ],
    },
    map: {
      heading: "Lokacija",
      description: "Ovdje ce biti prikazan Google Maps prikaz ureda nakon dodavanja iframe koda.",
      placeholder: "Ovdje zalijepite Google Maps iframe kod.",
    },
    contact: {
      heading: "Kontakt",
      intro: "Posaljite kratki opis upita, a odgovor cete dobiti u najkracem mogucem roku.",
      nameLabel: "Ime",
      emailLabel: "E-mail",
      messageLabel: "Poruka",
      namePlaceholder: "Vase ime i prezime",
      emailPlaceholder: "vas@email.com",
      messagePlaceholder: "Kako vam mogu pomoci?",
      submit: "Posalji",
    },
    footer: {
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      locationLabel: "Lokacija",
      locationValue: "Primjer ulica 123, Grad",
    },
  },
  en: {
    brandName: "Law Office Name",
    header: {
      about: "About Us",
      services: "Services",
      contactCta: "Contact",
      languageSwitcherLabel: "Language switcher",
    },
    hero: {
      eyebrow: "Pavic Law Office",
      title: "Reliable legal support for individuals and businesses",
      subtitle:
        "We provide clear legal guidance and representation for key personal and business matters, with focus on speed, discretion, and outcomes.",
      cta: "Request Consultation",
    },
    about: {
      heading: "About Me",
      paragraphOne:
        "Years of legal practice allow a precise assessment of every case and a strategy tailored to each client.",
      paragraphTwo:
        "Clients receive transparent communication, timely updates, and representation that protects their interests at every stage.",
      photoPlaceholder: "Photo Placeholder",
    },
    services: {
      heading: "Services",
      intro:
        "Service selection depends on your needs. Every matter starts with a short assessment and a clear next-step plan.",
      items: [
        {
          title: "Family Law",
          description: "Advisory and representation in divorce, custody, and marital property matters.",
        },
        {
          title: "Employment Law",
          description: "Support with employment contracts, termination, and rights protection for employees and employers.",
        },
        {
          title: "Contract Law",
          description: "Drafting and review of agreements, damages claims, and dispute resolution in obligations.",
        },
        {
          title: "Real Estate",
          description: "Legal due diligence, purchase agreements, registration, and ownership rights protection.",
        },
        {
          title: "Commercial Law",
          description: "Business legal support, compliance guidance, and representation in commercial disputes.",
        },
        {
          title: "Enforcement & Debt Recovery",
          description: "Enforcement filings, defense in enforcement procedures, and efficient debt collection.",
        },
      ],
    },
    map: {
      heading: "Location",
      description: "Google Maps office preview will appear here once an iframe embed is added.",
      placeholder: "Paste Google Maps iframe embed code here.",
    },
    contact: {
      heading: "Contact",
      intro: "Send a brief description of your inquiry and you will receive a response as soon as possible.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "How can we help you?",
      submit: "Submit",
    },
    footer: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "123 Example Street, City",
    },
  },
} as const;

export type TranslationSet = (typeof translations)[Language];
