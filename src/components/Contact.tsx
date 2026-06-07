export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Currently open for freelance projects and full-time opportunities.
            Feel free to reach out — I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4">
            {[
              {
                icon: '📧',
                label: 'Email',
                value: 'annuhliwan@gmail.com',
                href: 'mailto:annuhliwan@gmail.com',
                desc: 'Send me an email',
              },
              {
                icon: '📱',
                label: 'WhatsApp / Phone',
                value: '+62 856-4531-9548',
                href: 'https://wa.me/628564531954',
                desc: 'Chat on WhatsApp',
              },
              {
                icon: '💼',
                label: 'LinkedIn',
                value: 'linkedin.com/in/annuh-liwan',
                href: 'https://www.linkedin.com/in/annuh-liwan/',
                desc: 'Connect on LinkedIn',
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors duration-200">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{c.label}</div>
                  <div className="text-slate-200 font-medium truncate">{c.value}</div>
                  <div className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {c.desc} →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 flex flex-col justify-center text-center">
            <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🚀
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">
              Let's Build Something
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether you have a project in mind, need a full-stack engineer, or just want
              to talk tech — I'm here.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:annuhliwan@gmail.com"
                className="block w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/annuh-liwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 font-semibold rounded-xl transition-all duration-200"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
