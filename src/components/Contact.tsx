import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const contacts = [
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
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden bg-ink-deep/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="contour absolute inset-0 opacity-70" />
        <div className="aurora-band absolute -top-24 left-1/4 w-2/3 h-64" />
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full globe-lines opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get in Touch"
          title={<>Let's Build <span className="text-gradient">Something</span></>}
          description="Currently open for freelance projects and full-time opportunities. Feel free to reach out — I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            {contacts.map((contact, i) => (
              <Reveal key={contact.label} delay={i} variant="left">
                <a
                  href={contact.href}
                  target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card group flex items-center gap-4 rounded-xl p-5"
                >
                  <div className="w-12 h-12 rounded-xl border border-violet/20 bg-violet/5 flex items-center justify-center text-2xl shrink-0 transition-transform duration-500 group-hover:scale-110">
                    {contact.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[.65rem] uppercase tracking-[.16em] text-muted-light">
                      {contact.label}
                    </div>
                    <div className="text-slate-100 font-medium truncate">{contact.value}</div>
                    <div className="text-xs text-violet opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      {contact.desc} →
                    </div>
                  </div>
                  <span className="arrow-nudge text-violet/60">↗</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} variant="scale">
            <div className="glass-card group h-full rounded-2xl p-8 flex flex-col justify-center text-center border-violet/20">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full border border-violet/25 bg-violet/5 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:rotate-12">
                🚀
              </div>
              <h3 className="font-display text-2xl font-medium text-white mb-3">
                Have a project in mind?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-7">
                Whether you have a project in mind, need a full-stack engineer, or just want
                to talk tech — I'm here.
              </p>
              <div className="space-y-3">
                <a href="mailto:annuhliwan@gmail.com" className="btn-primary group w-full py-3.5 text-sm">
                  Send Email
                  <span className="arrow-nudge">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/annuh-liwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost group w-full py-3.5 text-sm"
                >
                  View LinkedIn Profile
                  <span className="arrow-nudge">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
