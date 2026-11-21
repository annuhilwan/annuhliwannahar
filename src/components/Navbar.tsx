import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 400 && y > last + 4 && !menuOpen)
      last = y

      let current = '#hero'
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1))
        if (el && el.getBoundingClientRect().top <= 160) current = link.href
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled || menuOpen
          ? 'bg-ink/80 backdrop-blur-[10px] border-mint/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between">
        <a href="#hero" className="group font-display text-xl font-medium tracking-tight text-white">
          <span className="text-violet transition-colors duration-300 group-hover:text-violet-bright">&lt;</span>
          AL
          <span className="text-violet transition-colors duration-300 group-hover:text-violet-bright">/&gt;</span>
          <span className="ml-2 hidden sm:inline-block text-[.6rem] uppercase tracking-[.25em] text-muted-light align-middle">
            Portfolio
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative block py-2 font-display text-[.9rem] transition-colors duration-200 ${
                  active === link.href ? 'text-white' : 'text-muted-light hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-violet transition-transform duration-200 ${
                    active === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex px-5 py-2.5 text-sm group">
          Hire Me
          <span className="arrow-nudge">→</span>
        </a>

        <button
          type="button"
          className="md:hidden relative w-10 h-10 rounded-md border border-mint/20 text-mint hover:border-violet/50 hover:text-violet transition-colors duration-200"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="absolute left-2.5 top-[13px] w-5 h-px bg-current transition-transform duration-300" style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : undefined }} />
          <span className="absolute left-2.5 top-[19px] w-5 h-px bg-current transition-opacity duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="absolute left-2.5 top-[25px] w-5 h-px bg-current transition-transform duration-300" style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : undefined }} />
        </button>
      </nav>

      <div
        className={`grid md:hidden overflow-hidden bg-ink-deep/95 backdrop-blur-lg border-t border-mint/10 transition-[grid-template-rows,opacity] duration-300 ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col px-6 md:px-10 py-4">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 font-display text-sm border-b border-mint/10 text-slate-300 hover:text-violet transition-colors duration-200"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {link.label}
                  <span className="text-violet/60">↗</span>
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full py-3 text-sm group">
                Hire Me <span className="arrow-nudge">→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <span
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent transition-all duration-700"
        style={{ width: scrolled ? '100%' : '0%', opacity: scrolled ? 0.6 : 0 }}
      />
    </header>
  )
}
