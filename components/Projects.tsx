'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Landing Page Sete Barbearia',
    description:
      'Site responsivo completo para barbearia, com seções de serviços, equipe, galeria e formulário de contato. Design moderno e mobile-first.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
    href: 'https://github.com/Erick-Custodio/-Portf-lio-pessoal-Curr-culo-Online-.',
    live: 'https://www.setebarbeariaprotesecapilar.com/',
    featured: true,
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.setebarbeariaprotesecapilar.com%2F&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Conversor de Moedas',
    description:
      'Aplicação de conversão de moedas em tempo real usando APIs externas. Interface limpa com suporte a múltiplas divisas.',
    tags: ['JavaScript', 'API REST', 'HTML', 'CSS'],
    href: 'https://github.com/Erick-Custodio/Conversor-de-Moedas-Erick',
    live: 'https://erick-custodio.github.io/Conversor-de-Moedas-Erick/',
    featured: true,
    image: 'https://api.microlink.io/?url=https%3A%2F%2Ferick-custodio.github.io%2FConversor-de-Moedas-Erick%2F&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Dev Sorteio',
    description:
      'Ferramenta de sorteio interativa para desenvolvedores. Permite criar listas e sortear itens de forma dinâmica.',
    tags: ['JavaScript', 'DOM', 'HTML', 'CSS'],
    href: 'https://github.com/Erick-Custodio/Dev-Sorteio--Erick',
    live: 'https://erick-custodio.github.io/Dev-Sorteio--Erick/',
    featured: false,
    image: 'https://api.microlink.io/?url=https%3A%2F%2Ferick-custodio.github.io%2FDev-Sorteio--Erick%2F&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Landing Page Starbucks + IA',
    description:
      'Recriação da landing page da Starbucks com agente de IA integrado para anotação de pedidos via chat. Uso de JavaScript e integração com LLM.',
    tags: ['JavaScript', 'HTML', 'CSS', 'IA', 'LLM'],
    href: 'https://github.com/Erick-Custodio/Starbucks-Erick',
    live: 'https://erick-custodio.github.io/Starbucks-Erick/',
    featured: true,
    image: 'https://api.microlink.io/?url=https%3A%2F%2Ferick-custodio.github.io%2FStarbucks-Erick%2F&screenshot=true&meta=false&embed=screenshot.url',
  },
]

type FilterType = 'Todos' | 'HTML' | 'JavaScript' | 'IA'
const filters: FilterType[] = ['Todos', 'HTML', 'JavaScript', 'IA']

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState<FilterType>('Todos')
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const filtered =
    filter === 'Todos'
      ? projects
      : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">03. projetos</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-pretty">
            Trabalhos Recentes
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Projetos desenvolvidos durante minha jornada de aprendizado, aplicando tecnologias reais.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <article
                key={project.title}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl ${
                  project.featured ? 'md:first:col-span-2' : ''
                }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  boxShadow: hovered === i ? '0 0 40px var(--hero-glow)' : undefined,
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = `https://placehold.co/600x340/1a1a2e/64d9c8?text=${encodeURIComponent(project.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                  {/* Featured badge */}
                  {project.featured && (
                    <span
                      className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-mono font-medium border border-primary/40"
                      style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                    >
                      destaque
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver código no GitHub"
                        className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver projeto ao vivo"
                        className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Erick-Custodio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <Globe size={15} />
              Ver todos no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
