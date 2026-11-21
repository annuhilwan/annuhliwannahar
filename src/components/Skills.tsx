import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'Python', 'Adonis.js', 'CodeIgniter'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Inertia.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Mobile',
    icon: '📱',
    skills: ['Flutter', 'React Native', 'Android (Java/Kotlin)'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB', 'Firebase', 'Oracle'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'Ubuntu', 'Nginx', 'VM', 'VSCode', 'Android Studio', 'Figma'],
  },
  {
    category: 'Other',
    icon: '🔗',
    skills: ['REST API', 'PL/SQL', 'ACF Pro', 'Bricks Builder', 'Firebase Cloud'],
  },
]

const marqueeItems = [
  'Laravel', 'React', 'Node.js', 'Flutter', 'TypeScript', 'PostgreSQL', 'Vue.js',
  'Express.js', 'Tailwind CSS', 'MongoDB', 'Nuxt.js', 'Python', 'Firebase', 'Nginx', 'REST API',
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center shrink-0">
            <span className="font-display text-lg sm:text-xl text-white/25 hover:text-violet/70 transition-colors duration-300 px-6">
              {item}
            </span>
            <span className="text-violet/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-1/3 right-[-10%] w-[32rem] h-[32rem] ambient ambient--low opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Skills"
          title={<>Technologies I <span className="text-gradient">Work With</span></>}
        />

        <div className="mb-14 border-y border-mint/10 py-3">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.5} variant="scale">
              <div className="glass-card group h-full rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg border border-violet/25 bg-violet/5 flex items-center justify-center text-xl transition-transform duration-500 group-hover:rotate-12">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-white">{group.category}</h3>
                    <span className="text-[.6rem] uppercase tracking-[.18em] text-muted-light">
                      {group.skills.length} technologies
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <Reveal key={skill} delay={i * 0.5 + j * 0.12}>
                      <span className="cursor-default px-3 py-1 rounded-full border border-mint/15 bg-mint/5 text-xs text-slate-300 hover:border-violet/50 hover:text-violet hover:bg-violet/5 transition-all duration-200">
                        {skill}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
