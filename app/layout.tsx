import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmad Gamal Eldin — Digital Marketing Strategist',
  description: 'Digital marketing strategy, performance media, and cinematic 3D storytelling by Ahmad Gamal Eldin.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
