import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/layout/Navbar"
import { manrope } from "./lib/fonts"

export const metadata: Metadata = {
  title: "NaturVital",
  description: "Modern pharmacy website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}