export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div>
          <span className="text-cyan-400 font-mono font-bold">&lt;AL /&gt;</span>
          {' '}Annuh Liwan Nahar — Full-Stack Developer
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/annuh-liwan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="mailto:annuhliwan@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <span>·</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  )
}
