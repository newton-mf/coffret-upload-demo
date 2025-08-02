import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffret Upload Architecture Demo',
  description: 'Minimal demo showing file upload data flow between Next.js and Rails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}