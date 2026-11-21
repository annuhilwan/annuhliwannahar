import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const softSkills = ['Problem Solving', 'Communication', 'Adaptability', 'Team Collaboration']

const languages = [
  { lang: 'Indonesian', level: 'Native', pct: 100 },
  { lang: 'English', level: 'Professional Working Proficiency', pct: 80 },
]

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 right-1/4 w-[28rem] h-[28rem] ambient ambient--high opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading eyebrow="Background" title={<>Where It <span className="text-gradient">Began</span></>} />

        <div className="max-w-3xl mx-auto">
          <Reveal variant="scale">
            <div className="glass-card group rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-violet/25 bg-violet/5 flex items-center justify-center text-3xl shrink-0 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-medium text-white">
                        Bachelor's in Library &amp; Information Science
                      </h3>
                      <p className="text-violet mt-1 text-sm">
                        Universitas Wijaya Kusuma Surabaya
                      </p>
                    </div>
                    <span className="shrink-0 self-start rounded-full border border-mint/15 bg-mint/5 px-3 py-1.5 text-[.7rem] text-muted-light">
                      Graduated
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: '⭐', label: 'GPA', value: '3.75', accent: 'text-violet' },
                      { icon: '📚', label: 'Focus', value: 'Information Systems', accent: 'text-mint' },
                      { icon: '📍', label: 'Location', value: 'Surabaya, Indonesia', accent: 'text-emerald-400' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-lg border border-mint/10 bg-mint/5 px-3 py-2"
                      >
                        <span className={item.accent}>{item.icon}</span>
                        <div>
                          <div className="text-[.6rem] uppercase tracking-[.14em] text-muted-light">{item.label}</div>
                          <div className="text-white text-sm font-medium">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="glass-card mt-6 rounded-2xl p-6">
              <h3 className="font-display text-lg font-medium text-white mb-5">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, i) => (
                  <Reveal key={skill} delay={1 + i * 0.2}>
                    <div className="flex items-center gap-3 rounded-lg border border-mint/10 bg-mint/5 px-4 py-3 hover:border-violet/40 transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-violet shadow-[0_0_10px_#a78bfa] shrink-0" />
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="glass-card mt-6 rounded-2xl p-6">
              <h3 className="font-display text-lg font-medium text-white mb-5">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, i) => (
                  <Reveal key={language.lang} delay={2 + i * 0.3}>
                    <div>
                      <div className="flex justify-between text-sm mb-2 gap-3">
                        <span className="text-slate-200 font-medium">{language.lang}</span>
                        <span className="text-muted-light text-xs text-right">{language.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-mint/10 overflow-hidden">
                        <div
                          className="bar-fill h-full rounded-full bg-gradient-to-r from-teal via-mint to-violet"
                          style={{ width: `${language.pct}%` }}
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
