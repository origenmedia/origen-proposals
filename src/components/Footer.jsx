export default function Footer() {
  return (
    <footer className="relative border-t border-sand-soft/10 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="https://origen.media" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-gold-origen/50 flex items-center justify-center group-hover:border-gold-origen transition-colors duration-300">
            <svg viewBox="0 0 40 40" className="w-4 h-4">
              <line x1="20" y1="4" x2="20" y2="36" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4" y1="20" x2="36" y2="20" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-mono text-xs tracking-widest text-sand-soft/40 uppercase group-hover:text-sand-soft/60 transition-colors duration-300">
            Origen Media
          </span>
        </a>

        <p className="font-mono text-xs text-sand-soft/25 tracking-wide">
          This proposal is confidential and prepared exclusively for the named recipient.
        </p>
      </div>
    </footer>
  )
}
