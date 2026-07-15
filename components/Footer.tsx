import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <p className="text-xs text-muted-foreground mt-1">
            Erick Custódio &mdash; Desenvolvedor FullStack 
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-5 text-xs text-muted-foreground font-mono">
            {['#about', '#skills', '#projects', '#education', '#contact'].map((href) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-primary transition-colors duration-200 capitalize"
                >
                  {href.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/Erick-Custodio', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/erick-custodio-92b1b234a/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:erick.custodio@outlook.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground/50">
        &copy; {year} Erick Custódio. Diretos Reservados
      </div>
    </footer>
  )
}
