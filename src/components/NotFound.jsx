import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-indigo-deep flex flex-col items-center justify-center">
      <div className="circuit-pattern fixed inset-0 opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
        <div className="w-16 h-16 rounded-full border-2 border-gold-origen flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            <line x1="20" y1="4" x2="20" y2="36" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="4" y1="20" x2="36" y2="20" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="#E2B947" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-gold-origen uppercase mb-4">Origen Media</p>
          <h1 className="font-heading text-5xl text-sand-soft mb-4">Proposal Not Found</h1>
          <p className="text-sand-soft/50 font-sans text-sm max-w-sm">
            This proposal link may have expired or been removed. Contact Nathaniel directly for assistance.
          </p>
        </div>
        <a
          href="https://origen.media"
          className="magnetic-btn px-8 py-3 border border-gold-origen text-gold-origen font-mono text-xs tracking-widest uppercase"
        >
          origen.media
        </a>
      </div>
    </div>
  )
}
