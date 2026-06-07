import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-24">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            Annuh{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Liwan
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8">
            9+ years building scalable web & mobile applications. Specialized in
            Laravel, React, Node.js, Flutter, and modern TypeScript stacks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all duration-200"
            >
              View Experience
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center md:justify-start mt-12">
            {[
              { value: '9+', label: 'Years Experience' },
              { value: '7', label: 'Companies' },
              { value: '15+', label: 'Technologies' },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-3xl font-bold text-cyan-400">{s.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-2xl scale-110" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/10">
              <img
                src={heroImg}
                alt="Annuh Liwan Nahar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status badge */}
            <div className="absolute bottom-4 right-0 flex items-center gap-2 bg-[#0d1322] border border-slate-700 rounded-full px-3 py-1.5 shadow-xl">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-300 whitespace-nowrap">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
