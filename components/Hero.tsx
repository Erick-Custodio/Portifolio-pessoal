'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'

const roles = [
  'Desenvolvedor FullStack',
  'Engenheiro de Software',
  'Frontend Developer',
  'Entusiasta de Tecnologia',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 60)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 35)
    } else {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--hero-glow) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Disponível para oportunidades
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 animate-fade-in-up">
          Erick{' '}
          <span
            className="text-primary"
            style={{ textShadow: '0 0 40px var(--hero-glow)' }}
          >
            Custódio
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6 animate-fade-in delay-200">
          <span className="text-xl md:text-2xl text-muted-foreground font-mono">
            {displayed}
            <span className="animate-blink text-primary">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-300">
          Estudante de{' '}
          <span className="text-foreground font-medium">
            Engenharia de Software
          </span>{' '}
          na Uninter e desenvolvedor FullStack em formação pela DevClub. Apaixonado
          por criar soluções digitais que fazem a diferença.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: '0 0 24px var(--hero-glow)' }}
          >
            Ver Projetos
          </a>
          <a
            href="https://drive.google.com/file/d/1iBN-bkeeQ14erbgzzqYtdywUIKkyD2OQ/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            <FileText size={16} />
            Ver Currículo
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm transition-all duration-200 hover:border-primary hover:text-primary hover:bg-primary/5"
          >
            Entrar em contato
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in delay-500">
          {[
            {
              icon: Github,
              href: 'https://github.com/Erick-Custodio',
              label: 'GitHub',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/erick-custodio-92b1b234a/',
              label: 'LinkedIn',
            },
            {
              icon: Mail,
              href: '#contact',
              label: 'Email',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/40">
        <ArrowDown size={20} />
      </div>
    </section>
  )
}
