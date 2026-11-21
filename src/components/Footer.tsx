import Reveal from './Reveal'

const explore = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
]

const focus = ['Full-Stack Development', 'Web Applications', 'Mobile Apps', 'REST APIs', 'System Architecture']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-mint/10 bg-ink-deep">
      <div className="absolute inset-0 pointer-events-none">
        <div className="contour absolute inset-0 opacity-60" />
        <div className="aurora-band absolute -bottom-32 left-1/3 w-2/3 h-64" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full globe-lines opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-14 border-b border-mint/10">
            <div>
              <p className="eyebrow eyebrow--start mb-5">Let's connect</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-xl">
                Ready to turn ideas into <span className="text-gradient">working software?</span>
              </h2>
            </div>
            <a href="#contact" className="btn-primary group self-start px-6 py-3.5 text-sm shrink-0">
              Start a conversation
              <span className="arrow-nudge">→</span>
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <Reveal>
            <div>
              <a href="#hero" className="font-display text-2xl font-medium text-white inline-block mb-4">
                <span className="text-violet">&lt;</span>
                AL
                <span className="text-violet">/&gt;</span>
              </a>
              <p className="text-sm text-muted-light leading-relaxed max-w-xs">
                Annuh Liwan Nahar — Full-Stack Developer building scalable web &amp; mobile
                applications since 2016.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-300">
                <span className="live-dot" />
                Available for work
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div>
              <h3 className="font-display text-xs uppercase tracking-[.2em] text-white mb-5">Explore</h3>
              <ul className="space-y-3">
                {explore.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-muted-light hover:text-violet transition-colors duration-200"
                    >
                      <span className="h-px w-0 bg-violet transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div>
              <h3 className="font-display text-xs uppercase tracking-[.2em] text-white mb-5">Focus</h3>
              <ul className="space-y-3">
                {focus.map((item) => (
                  <li key={item} className="text-sm text-muted-light flex items-center gap-2">
                    <span className="text-violet/70 text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div>
              <h3 className="font-display text-xs uppercase tracking-[.2em] text-white mb-5">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-light">
                <li>
                  <a href="mailto:annuhliwan@gmail.com" className="hover:text-violet transition-colors duration-200">
                    annuhliwan@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/628564531954" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors duration-200">
                    +62 856-4531-9548
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/annuh-liwan/" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors duration-200">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-mint/10 text-xs text-muted-light">
          <span>© {year} Annuh Liwan Nahar. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/annuh-liwan/" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors duration-200">
              LinkedIn
            </a>
            <a href="mailto:annuhliwan@gmail.com" className="hover:text-violet transition-colors duration-200">
              Email
            </a>
            <a href="#hero" className="hover:text-violet transition-colors duration-200 inline-flex items-center gap-1">
              Back to top <span className="arrow-nudge">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
