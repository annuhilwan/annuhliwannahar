export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/5">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🎓</span>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-xl">
                      Bachelor's in Library & Information Science
                    </h3>
                    <p className="text-cyan-400 mt-1">
                      Universitas Wijaya Kusuma Surabaya
                    </p>
                  </div>
                  <span className="flex-shrink-0 bg-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-full border border-slate-700 self-start">
                    Graduated
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
                    <span className="text-yellow-400">⭐</span>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">GPA</div>
                      <div className="text-white font-bold text-lg">3.75</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
                    <span className="text-blue-400">📚</span>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Focus</div>
                      <div className="text-white text-sm font-medium">Information Systems</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
                    <span className="text-green-400">📍</span>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Location</div>
                      <div className="text-white text-sm font-medium">Surabaya, Indonesia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-white font-semibold text-lg mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Problem Solving', 'Communication', 'Adaptability', 'Team Collaboration'].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-white font-semibold text-lg mb-4">Languages</h3>
            <div className="space-y-3">
              {[
                { lang: 'Indonesian', level: 'Native', pct: 100 },
                { lang: 'English', level: 'Professional Working Proficiency', pct: 80 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 font-medium">{l.lang}</span>
                    <span className="text-slate-500">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
