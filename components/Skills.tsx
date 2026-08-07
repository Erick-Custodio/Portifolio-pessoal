'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'React.js', level: 70 },
      { name: 'TypeScript', level: 55 },
      { name: 'Tailwind CSS', level: 72 },
    ],
  },
  {
    category: 'Backend & Ferramentas',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Git & GitHub', level: 100 },
      { name: 'REST APIs', level: 85 },
      { name: 'Lógica de Programação', level: 92 },
    ],
  },
  {
    category: 'Banco de Dados',
    skills: [
      { name: 'SQL', level: 55 },
      { name: 'NoSQL', level: 52 },
      { name: 'MongoDB', level: 50 },
      { name: 'MySQL', level: 52 },
    ],
  },
]

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'SQL', 'NoSQL',
  'Git', 'GitHub', 'Tailwind', 'Figma', 'VS Code','N8N','Vercel',
]

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: 'var(--skill-bar)',
            boxShadow: animate ? '0 0 8px var(--hero-glow)' : 'none',
            transitionDelay: '200ms',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">02. habilidades</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-pretty">
            Stack & Tecnologias
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Ferramentas e tecnologias que utilizo no dia a dia para construir projetos reais.
          </p>

          {/* Skill bars */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {skillCategories.map(({ category, skills }) => (
              <div key={category}>
                <h3 className="text-sm font-mono text-primary mb-6 tracking-wide">{category}</h3>
                <div className="space-y-5">
                  {skills.map((s) => (
                    <SkillBar key={s.name} {...s} animate={visible} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech badge cloud */}
          <div>
            <h3 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide">
              tecnologias que conheço
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t, i) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground font-mono hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
