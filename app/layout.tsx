import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bienvenu au Festival de l Abeille et de Miel',
  description: 'Un festival pour célébrer les abeilles et le miel',
  generator: 'Organisateurs du Festival de l Abeille et de Miel-Khaled',
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
