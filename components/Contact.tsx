'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle2, Loader2 } from 'lucide-react'

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@Erick-Custodio',
    href: 'https://github.com/Erick-Custodio',
    desc: 'Veja meus repositórios',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Erick Aparecido Custódio',
    href: 'https://www.linkedin.com/in/erick-custodio-92b1b234a/',
    desc: 'Conecte-se comigo',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'erick.custodio@outlook.com',
    href: 'mailto:erick.custodio@outlook.com',
    desc: 'Envie uma mensagem',
  },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulates sending — replace with real API call
    await new Promise((res) => setTimeout(res, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">05. contato</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-pretty">
            Vamos Conversar
          </h2>
          <p className="text-muted-foreground mb-14 max-w-xl">
            Estou aberto a oportunidades de estágio, freela ou colaboração. Manda uma mensagem!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Socials */}
            <div>
              <h3 className="text-sm font-mono text-primary mb-6 tracking-wide">canais de contato</h3>
              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, handle, href, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                      style={{ background: 'var(--tag-bg)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--tag-text)' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground truncate">{handle}</p>
                    </div>
                    <p className="ml-auto text-xs text-muted-foreground hidden sm:block shrink-0">
                      {desc}
                    </p>
                  </a>
                ))}
              </div>

              {/* Availability status */}
              <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Disponível agora</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Aberto para estágio e oportunidades de desenvolvedor.
                  Respondo em até 24 horas.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-sm font-mono text-primary mb-6 tracking-wide">enviar mensagem</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5 font-mono">
                    Nome *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5 font-mono">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-muted-foreground mb-1.5 font-mono">
                  Assunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Proposta, dúvida, colaboração..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-muted-foreground mb-1.5 font-mono">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Olá Erick, gostaria de conversar sobre..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: status === 'success' ? 'oklch(0.6 0.18 150)' : 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  boxShadow: '0 0 20px var(--hero-glow)',
                }}
              >
                {status === 'idle' && (
                  <>
                    <Send size={16} />
                    Enviar mensagem
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 size={16} />
                    Mensagem enviada!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
