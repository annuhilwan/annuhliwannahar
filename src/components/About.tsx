import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const details = [
  { icon: '📍', label: 'Location', value: 'Indonesia' },
  { icon: '🎓', label: 'Degree', value: "Bachelor's, Library & Info Science" },
  { icon: '💼', label: 'Experience', value: '9+ Years' },
  { icon: '🌐', label: 'Languages', value: 'Indonesian · English' },
  { icon: '📧', label: 'Email', value: 'annuhliwan@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+62 856-4531-9548' },
]

const paragraphs = [
  "I'm a Full-Stack Developer with over 9 years of hands-on experience designing and delivering web and mobile applications across diverse industries — from university IT infrastructure to fast-paced product companies.",
  "I specialize in building robust RESTful APIs, responsive front-end interfaces, and cross-platform mobile apps. I care deeply about clean architecture, performance, and writing code that's easy to maintain.",
  "Whether it's a Laravel monolith, a React SPA, or a Flutter mobile app, I focus on delivering real value through pragmatic engineering choices and close collaboration with stakeholders.",
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="absolute -left-32 top-1/4 w-96 h-96 ambient ambient--core opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          align="left"
          title={
            <>
              Passionate about building <span className="text-gradient">great software</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-start">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -top-20 -left-6 font-display text-[10rem] sm:text-[13rem] leading-none text-mint/5 select-none"
            >
              09
            </span>
            <div className="relative space-y-5 text-slate-400 text-base leading-relaxed">
              {paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3}>
              <div className="mt-9 flex items-center gap-4">
                <span className="h-px w-14 bg-violet" />
                <p className="font-display text-[.7rem] uppercase tracking-[.2em] text-muted-light">
                  Pragmatic engineering, every time
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.map((item, i) => (
              <Reveal key={item.label} delay={i} variant="scale">
                <div className="glass-card group h-full rounded-xl p-5">
                  <div className="text-2xl mb-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="text-[.65rem] uppercase tracking-[.16em] text-muted-light mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate-200 font-medium leading-snug break-words">
                    {item.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
