import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prescient - Futarchy for AI Agent Funding",
  description: "Prediction markets decide which AI agents get funded on Solana. No VCs, no committees - just market consensus. Deploy on testnet free, graduate to mainnet when markets validate.",
  keywords: ["AI agents", "futarchy", "Solana", "prediction markets", "MetaDAO", "autonomous agents", "DeFi", "launchpad"],
  authors: [{ name: "Ihor Muliar" }],
  openGraph: {
    title: "Prescient - Futarchy for AI Agent Funding",
    description: "Markets predict success, capital follows conviction. The first AI agent launchpad governed by prediction markets on Solana.",
    url: "https://prescientai.xyz",
    siteName: "Prescient",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Prescient - AI Agent Launchpad"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prescient - Futarchy for AI Agents",
    description: "Prediction markets determine AI agent funding on Solana. Built for Cypherpunk 2025.",
    images: ["/banner.png"], // can be same as og-image
    creator: "@prescient_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#5865F2", // your primary blue
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
