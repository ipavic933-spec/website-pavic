import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-xl font-medium">{t('title')}</p>
    </main>
  );
}
