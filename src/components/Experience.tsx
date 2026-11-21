import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const experiences = [
  {
    title: 'Software Engineer',
    company: '',
    period: 'Jan 2026 – Present',
    current: true,
    tags: ['Express.js', 'React.js', 'PostgreSQL', 'MariaDB', 'Tailwind CSS'],
    bullets: [
      'Built end-to-end web applications using Express.js and React.js',
      'Designed and implemented database schemas (PostgreSQL, MariaDB)',
      'Handled complex data operations via REST APIs',
      'Optimized performance and scalability; conducted code reviews',
      'Ensured application security and data integrity',
    ],
  },
  {
    title: 'Front-End Developer',
    company: 'Kemang Internet Pte. Ltd.',
    period: 'Jun 2025 – Oct 2025',
    current: false,
    tags: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'PostgreSQL'],
    bullets: [
      'Built web apps using Nuxt.js & Vue.js',
      'Styled UI with Tailwind CSS',
      'Integrated REST APIs with PostgreSQL',
    ],
  },
  {
    title: 'WordPress Developer',
    company: 'S-FX.com Small Business Solutions',
    period: 'May 2025 – Jun 2025',
    current: false,
    tags: ['WordPress', 'PHP', 'Bricks', 'ACF Pro', 'Tailwind CSS'],
    bullets: [
      'Developed websites using WordPress (PHP)',
      'Customized layouts using Bricks & ACF Pro',
      'Styled UI with Bootstrap & Tailwind CSS',
    ],
  },
  {
    title: 'Mobile Engineer (Flutter, React Native, Android)',
    company: 'Codingo Assignments Pte. Ltd.',
    period: 'Feb 2025 – Jun 2025',
    current: false,
    tags: ['Flutter', 'React Native', 'Java', 'Kotlin'],
    bullets: [
      'Developed mobile apps using Flutter',
      'Built apps using React Native',
      'Developed Android apps using Java/Kotlin',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'PT. Koding Dev Nusantara',
    period: 'Jan 2024 – Apr 2024',
    current: false,
    tags: ['Adonis.js', 'Inertia.js', 'Vue.js', 'React.js', 'Flutter', 'PostgreSQL'],
    bullets: [
      'Built web apps using Adonis.js, Inertia.js, Vue.js, React.js',
      'Developed mobile apps using Flutter & Android',
      'Managed databases (PostgreSQL, MySQL, MariaDB, MongoDB)',
    ],
  },
  {
    title: 'IT Support Engineer',
    company: 'Universitas Dinamika',
    period: 'Oct 2006 – Dec 2023',
    current: false,
    tags: ['Ubuntu', 'Nginx', 'Oracle', 'MySQL', 'PL/SQL'],
    bullets: [
      'Provided technical support and troubleshooting',
      'Managed servers (Ubuntu, Nginx, VM)',
      'Worked with Oracle, MySQL, PL/SQL',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Produksiweb',
    period: 'Nov 2016 – Dec 2022',
    current: false,
    tags: ['Node.js', 'Laravel', 'CodeIgniter', 'Python', 'React', 'Vue', 'Flutter'],
    bullets: [
      'Built apps using Node.js, Laravel, CodeIgniter, Python',
      'Developed UI with React, Vue, Bootstrap, Tailwind',
      'Built mobile apps (Flutter, Kotlin)',
      'Integrated Firebase & cloud systems',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Gudang Website',
    period: 'Mar 2011 – Oct 2016',
    current: false,
    tags: ['PHP', 'CodeIgniter', 'HTML', 'Bootstrap'],
    bullets: [
      'Developed PHP apps (CodeIgniter, native PHP)',
      'Built responsive UI (HTML, Bootstrap, Material CSS)',
    ],
  },
]

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [lineShown, setLineShown] = useState(false)

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] ambient ambient--core opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading eyebrow="Work History" title={<>The Road <span className="text-gradient">So Far</span></>} />

        <div ref={timelineRef} className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-mint/10">
            <div
              data-in={lineShown ? '' : undefined}
              className="timeline-line w-full h-full bg-gradient-to-b from-violet via-mint/50 to-transparent"
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal
                key={i}
                delay={i * 0.25}
                variant={i % 2 === 0 ? 'left' : 'right'}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <span
                    className={`block w-3 h-3 rounded-full border-2 ${
                      exp.current ? 'border-violet bg-violet shadow-[0_0_14px_#a78bfa]' : 'border-mint/60 bg-ink'
                    }`}
                  />
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-violet/60 animate-[ping-ring_1.8s_ease-out_infinite]" />
                  )}
                </div>

                <div className="hidden md:block md:w-1/2" />

                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`glass-card group rounded-2xl p-6 ${
                      exp.current ? 'border-violet/35 shadow-[0_0_40px_-20px_rgba(167,139,250,.6)]' : ''
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-medium text-white group-hover:text-mint transition-colors duration-300">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-sm text-violet mt-0.5">{exp.company}</p>
                        )}
                      </div>
                      <span
                        className={`shrink-0 self-start text-[.7rem] px-3 py-1 rounded-full border font-medium ${
                          exp.current
                            ? 'bg-violet/10 text-violet border-violet/30'
                            : 'bg-mint/5 text-muted-light border-mint/10'
                        }`}
                      >
                        {exp.current ? '● ' : ''}
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-5">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-slate-400 text-sm flex gap-2 leading-relaxed">
                          <span className="text-violet mt-0.5 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md border border-mint/10 bg-mint/5 text-[.7rem] text-slate-400 hover:border-violet/40 hover:text-violet transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
