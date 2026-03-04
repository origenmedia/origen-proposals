export default function Navbar({ prospectName }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/90 to-transparent pointer-events-none" />

      {/* Logo */}
      <a href="https://origen.media" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-full border border-gold-origen flex items-center justify-center transition-all duration-300 group-hover:bg-gold-origen/10">
          <svg viewBox="0 0 40 40" className="w-5 h-5">
            <line x1="20" y1="4" x2="20" y2="36" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="4" y1="20" x2="36" y2="20" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-mono text-xs tracking-widest text-sand-soft/70 uppercase hidden sm:block">Origen Media</span>
      </a>

      {/* Prospect name pill */}
      {prospectName && (
        <div className="relative z-10 px-4 py-1.5 border border-sand-soft/10 bg-indigo-deep/60 backdrop-blur-sm">
          <p className="font-mono text-xs tracking-wider text-sand-soft/50 uppercase">
            Prepared for <span className="text-gold-origen">{prospectName}</span>
          </p>
        </div>
      )}
    </nav>
  )
}
