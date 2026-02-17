import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-xl font-medium">{t('title')}</p>
    </main>
  );
}
