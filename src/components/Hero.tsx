import heroImg from '../assets/hero.png'
import CountUp from './CountUp'
import Reveal from './Reveal'
import RotatingText from './RotatingText'

const rotatingWords = ['Full-Stack Developer', 'Web & Mobile Engineer', 'Problem Solver']

const stats = [
  { value: 9, suffix: '+', label: 'Years Experience' },
  { value: 7, suffix: '', label: 'Companies' },
  { value: 15, suffix: '+', label: 'Technologies' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden bg-ink pt-18 pb-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[12%] -left-[10%] w-[46rem] h-[46rem] ambient ambient--core" />
        <div className="absolute -bottom-[18%] -right-[8%] w-[40rem] h-[40rem] ambient ambient--low" />
        <div className="absolute top-[8%] right-[18%] w-[28rem] h-[28rem] ambient ambient--high" />
        <div className="absolute inset-0 grid-overlay opacity-70" />
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-0 scanline" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid lg:grid-cols-[1.15fr_.85fr] items-center gap-16">
        <div>
          <Reveal>
            <p className="eyebrow eyebrow--start">Hello, I'm</p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,7vw,6rem)] font-medium leading-[.95] tracking-tight text-white">
              Annuh
              <br />
              <span className="text-gradient text-gradient--sweep">Liwan</span>
              <span className="text-violet">.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-6 flex items-center gap-3 font-display text-xl sm:text-2xl text-slate-300 min-h-8">
              <span className="h-px w-8 bg-violet shrink-0" />
              <RotatingText words={rotatingWords} />
            </div>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-6 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
              9+ years building scalable web &amp; mobile applications. Specialized in Laravel,
              React, Node.js, Flutter, and modern TypeScript stacks.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary group px-6 py-3.5 text-sm">
                Get in Touch
                <span className="arrow-nudge">→</span>
              </a>
              <a href="#experience" className="btn-ghost group px-6 py-3.5 text-sm">
                View Experience
                <span className="arrow-nudge">↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={5}>
            <div className="mt-12 flex gap-8 sm:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl sm:text-4xl font-medium text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-[.65rem] uppercase tracking-[.16em] text-muted-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={2} className="flex justify-center lg:justify-end">
          <div className="photo-float relative w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-[-14%] rounded-full bg-teal/25 blur-3xl" />
            <div className="photo-ring absolute inset-[-8%] rounded-full border border-dashed border-mint/25" />
            <div className="photo-orbit absolute inset-[-8%]">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet shadow-[0_0_14px_#a78bfa]" />
            </div>
            <div className="relative w-full h-full rounded-full overflow-hidden border border-mint/30 shadow-[0_0_60px_-15px_rgba(20,184,166,.6)]">
              <img
                src={heroImg}
                alt="Annuh Liwan Nahar"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
            </div>
            <div className="glass-card absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 flex items-center gap-2">
              <span className="live-dot" />
              <span className="text-xs text-slate-200">Available for work</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-light/70">
        <span className="text-[.6rem] uppercase tracking-[.3em]">Scroll</span>
        <span className="relative w-px h-10 bg-mint/20 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-4 bg-violet animate-[scroll-cue_2s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  )
}
