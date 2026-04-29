'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Code2, Languages, CheckCircle2, Circle } from 'lucide-react'

const timeline = [
  {
    icon: GraduationCap,
    institution: 'Uninter Centro Universitário',
    course: 'Engenharia de Software',
    period: '2025 — 2029',
    status: 'Em andamento',
    progress: 20,
    description:
      'Bacharelado em Engenharia de Software com foco em fundamentos de computação, algoritmos, estruturas de dados, engenharia de requisitos e desenvolvimento de sistemas.',
    tags: ['Algoritmos', 'POO', 'Engenharia de Req.', 'Banco de Dados'],
  },
  {
    icon: Code2,
    institution: 'DevClub',
    course: 'Desenvolvedor FullStack',
    period: '2025 — 2026',
    status: 'Em andamento',
    progress: 60,
    description:
      'Formação prática intensiva em desenvolvimento web FullStack, com projetos reais desde o início. HTML, CSS, JavaScript, React, Node.js, APIs REST e boas práticas.',
    tags: ['React', 'Node.js', 'APIs REST', 'JavaScript', 'Git'],
  },
  {
    icon: Languages,
    institution: 'Inglês',
    course: 'Inglês — Nível Básico',
    period: '2025 — presente',
    status: 'Em desenvolvimento',
    progress: 30,
    description:
      'Desenvolvimento do idioma inglês com foco em leitura técnica de documentações, comunicação escrita e compreensão de conteúdo em inglês na área de TI.',
    tags: ['Leitura Técnica', 'Documentações', 'Comunicação'],
  },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="education" ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">04. formação</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-pretty">
            Educação & Certificações
          </h2>
          <p className="text-muted-foreground mb-14 max-w-xl">
            Minha jornada acadêmica e de aprendizado contínuo na área de tecnologia.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 md:left-8 top-0 bottom-0 w-px"
              style={{ background: 'var(--timeline-line)' }}
            />

            <div className="space-y-10">
              {timeline.map(({ icon: Icon, institution, course, period, status, progress, description, tags }, i) => (
                <div
                  key={institution}
                  className="relative flex gap-8 md:gap-12"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `all 0.6s ease ${i * 150}ms`,
                  }}
                >
                  {/* Dot */}
                  <div className="relative shrink-0 flex items-start justify-center">
                    <div
                      className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-primary/40 flex items-center justify-center z-10"
                      style={{ background: 'var(--tag-bg)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--tag-text)' }} className="md:hidden" />
                      <Icon size={24} style={{ color: 'var(--tag-text)' }} className="hidden md:block" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2">
                    <div className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-base font-bold text-foreground">{course}</h3>
                          <p className="text-sm text-primary font-medium">{institution}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                            {status === 'Em andamento' || status === 'Em desenvolvimento' ? (
                              <Circle size={10} className="text-primary fill-primary" />
                            ) : (
                              <CheckCircle2 size={10} className="text-primary" />
                            )}
                            {status}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono border border-border px-2 py-0.5 rounded-full">
                            {period}
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-muted-foreground font-mono">progresso</span>
                          <span className="text-xs text-primary font-mono">{progress}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: visible ? `${progress}%` : '0%',
                              background: 'var(--skill-bar)',
                              transitionDelay: `${300 + i * 150}ms`,
                            }}
                          />
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-xs font-mono border border-primary/20"
                            style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
