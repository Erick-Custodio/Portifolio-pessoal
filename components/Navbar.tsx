'use client'

import { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b border-border/60'
          : ''
      }`}
      style={{ background: scrolled ? 'var(--nav-bg)' : 'transparent' }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div aria-hidden="true" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  active === l.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1fSP2MGbIaC704Hom0Q2K2t5ScEn1GDL_/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary/50 text-primary text-sm font-semibold transition-all duration-200 hover:bg-primary/10 hover:border-primary"
          >
            <FileText size={14} />
            Currículo
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: '0 0 16px var(--hero-glow)' }}
          >
            Contato
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1fSP2MGbIaC704Hom0Q2K2t5ScEn1GDL_/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-primary text-primary text-sm font-semibold"
          >
            <FileText size={14} />
            Ver Currículo
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="mt-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
          >
            Entrar em contato
          </button>
        </div>
      )}
    </header>
  )
}
