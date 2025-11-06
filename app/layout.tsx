import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fjalë nga Ibn Abdul-Barr',
  description: 'Mençuri dhe fjalë të urta nga dijetari i madh Ibn Abdul-Barr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  )
}
