import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Odvjetnički ured Ivan Pavić | Split",
  description:
    "Pouzdana pravna podrška za građane i poslovne subjekte. Pružamo stručne pravne savjete i zastupanje u imovinskopravnim i ugovornim odnosima.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className="bg-white text-ink-900 antialiased selection:bg-brand-500/25 selection:text-ink-900">
        {children}
      </body>
    </html>
  )
}
