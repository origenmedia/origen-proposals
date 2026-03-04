import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function PresentationSystem({ data }) {
  const { presentation_system } = data

  return (
    <div className="relative">
      <div className="absolute inset-0 origen-glow" />
      <SectionWrapper className="relative z-10">
        <SectionLabel label="This Proposal" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-10">
          {presentation_system?.headline}
        </h2>

        {/* Meta moment card */}
        <div className="relative p-8 md:p-12 border bg-indigo-light/50 backdrop-blur-sm overflow-hidden"
             style={{borderColor: 'var(--accent)'}}>
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-px h-16" style={{background: 'var(--accent)'}} />
            <div className="absolute top-0 right-0 h-px w-16" style={{background: 'var(--accent)'}} />
          </div>

          {/* Asterisk watermark */}
          <div className="absolute bottom-4 right-6 opacity-5">
            <svg viewBox="0 0 40 40" className="w-24 h-24">
              <line x1="20" y1="4" x2="20" y2="36" stroke="#E2B947" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4" y1="20" x2="36" y2="20" stroke="#E2B947" strokeWidth="2" strokeLinecap="round"/>
              <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="#E2B947" strokeWidth="2" strokeLinecap="round"/>
              <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="#E2B947" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="font-sans text-base text-sand-soft/70 leading-relaxed">
            {presentation_system?.body}
          </p>
        </div>
      </SectionWrapper>
    </div>
  )
}
