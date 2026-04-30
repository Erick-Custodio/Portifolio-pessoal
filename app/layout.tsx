import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Erick Custódio — Desenvolvedor FullStack',
  description:
    'Portfólio de Erick Custódio, estudante de Engenharia de Software e desenvolvedor FullStack em formação. Projetos, habilidades e contato.',
  keywords: ['desenvolvedor', 'fullstack', 'javascript', 'react', 'engenharia de software', 'portfólio'],
  authors: [{ name: 'Erick Custódio' }],
  openGraph: {
    title: 'Erick Custódio — Desenvolvedor FullStack',
    description: 'Portfólio profissional de Erick Custódio.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
