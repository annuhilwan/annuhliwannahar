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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
