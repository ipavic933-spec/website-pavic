import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Odvjetnički ured Ivan Pavić | Split",
  description:
    "Pouzdana pravna podrška za građane i poslovne subjekte. Pružamo stručne pravne savjete i zastupanje u imovinskopravnim i ugovornim odnosima.",
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
