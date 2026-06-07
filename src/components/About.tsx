export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Passionate about building{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                great software
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a Full-Stack Developer with over 9 years of hands-on experience designing and
                delivering web and mobile applications across diverse industries — from university
                IT infrastructure to fast-paced product companies.
              </p>
              <p>
                I specialize in building robust RESTful APIs, responsive front-end interfaces,
                and cross-platform mobile apps. I care deeply about clean architecture, performance,
                and writing code that's easy to maintain.
              </p>
              <p>
                Whether it's a Laravel monolith, a React SPA, or a Flutter mobile app, I focus
                on delivering real value through pragmatic engineering choices and close
                collaboration with stakeholders.
              </p>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '📍', label: 'Location', value: 'Indonesia' },
              { icon: '🎓', label: 'Degree', value: 'Bachelor\'s, Library & Info Science' },
              { icon: '💼', label: 'Experience', value: '9+ Years' },
              { icon: '🌐', label: 'Languages', value: 'Indonesian · English' },
              { icon: '📧', label: 'Email', value: 'annuhliwan@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+62 856-4531-9548' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 hover:border-cyan-400/30 transition-colors duration-200"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</div>
                <div className="text-sm text-slate-300 font-medium leading-snug">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
