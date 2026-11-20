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
    title: 'Flutter Developer',
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
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            Work History
          </p>
          <h2 className="text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-slate-700 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-cyan-400 bg-[#0a0f1e] z-10 top-6" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`bg-slate-900/80 border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                      exp.current
                        ? 'border-cyan-400/40 shadow-lg shadow-cyan-400/5'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span
                        className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${
                          exp.current
                            ? 'bg-cyan-400/15 text-cyan-400 border border-cyan-400/30'
                            : 'bg-slate-800 text-slate-500 border border-slate-700'
                        }`}
                      >
                        {exp.current ? '● ' : ''}{exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-slate-400 text-sm flex gap-2">
                          <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-slate-800 text-slate-400 text-xs rounded-md border border-slate-700"
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
    </section>
  )
}
