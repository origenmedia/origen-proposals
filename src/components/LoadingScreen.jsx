export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-indigo-deep flex flex-col items-center justify-center">
      <div className="circuit-pattern fixed inset-0 opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo mark */}
        <div className="w-16 h-16 rounded-full border-2 border-gold-origen flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 40 40" className="w-8 h-8 fill-gold-origen">
            <line x1="20" y1="4" x2="20" y2="36" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="4" y1="20" x2="36" y2="20" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold-origen to-transparent animate-pulse" />
          <p className="font-mono text-xs tracking-widest text-sand-soft/40 uppercase">Loading your proposal</p>
        </div>
      </div>
    </div>
  )
}
