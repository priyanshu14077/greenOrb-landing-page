import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GreenOrb - Engineered for planet-scale performance",
  description:
    "GreenOrb offers real-time carbon transparency, automated offset management, and token-backed credibility all in one place.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}
