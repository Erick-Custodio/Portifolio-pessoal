'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, BookOpen, Music, Gamepad2, Globe } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'Desenvolvedor FullStack', desc: 'HTML, CSS, JS, React, Node.js' },
  { icon: BookOpen, label: '2º Ano — Eng. Software', desc: 'Uninter Centro Universitário' },
  { icon: Globe, label: 'Inglês Básico', desc: 'Em desenvolvimento' },
  { icon: Music, label: 'Música & Tecnologia', desc: 'Hobbies e paixões' },
  { icon: Gamepad2, label: 'Jogos & Aprendizado', desc: 'Curiosidade constante' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">01. sobre</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-pretty">
              Olá, eu sou o{' '}
              <span className="text-primary">Erick</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tenho 32 anos e sou estudante de{' '}
                <span className="text-foreground font-medium">Engenharia de Software</span> na
                Uninter, atualmente no 2º ano. Sou apaixonado por tecnologia e movido pela
                curiosidade de entender como soluções digitais transformam o mundo.
              </p>
              <p>
                Além da faculdade, aprofundo meu conhecimento no curso de{' '}
                <span className="text-foreground font-medium">Desenvolvedor FullStack</span> da
                DevClub, desenvolvendo habilidades práticas e projetos reais que fortalecem minha
                base técnica.
              </p>
              <p>
                Busco constantemente evoluir, aprendendo novas tecnologias e aplicando boas
                práticas de desenvolvimento para construir produtos que realmente funcionam.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'TypeScript'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-primary/30"
                  style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`group p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-default ${
                  i === highlights.length - 1 && highlights.length % 2 !== 0
                    ? 'sm:col-span-2'
                    : ''
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'var(--tag-bg)' }}
                >
                  <Icon size={18} style={{ color: 'var(--tag-text)' }} />
                </div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
