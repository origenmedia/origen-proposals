import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function NextSteps({ data }) {
  const { next_steps } = data

  return (
    <div className="relative">
      <div className="absolute inset-0 origen-glow opacity-60" />
      <SectionWrapper className="relative z-10">
        <SectionLabel label="What Happens Next" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-6">
          {next_steps?.headline}
        </h2>
        <p className="text-sand-soft/65 font-sans text-base leading-relaxed mb-12 max-w-2xl">
          {next_steps?.body}
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-14">
          {next_steps?.steps?.map((step, i) => (
            <div key={i} className="flex items-start gap-5 p-5 border border-sand-soft/10 bg-indigo-light/30">
              <span className="font-mono text-xs mt-0.5 shrink-0" style={{color: 'var(--accent)'}}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-sans text-sm text-sand-soft/70 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="border-l-2 pl-8 mb-16" style={{borderColor: 'var(--accent)'}}>
          <p className="font-heading italic text-xl md:text-2xl text-sand-soft/80 leading-relaxed">
            {next_steps?.closing}
          </p>
        </div>

        {/* Signature */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0" style={{borderColor: 'var(--accent)'}}>
            <svg viewBox="0 0 40 40" className="w-5 h-5">
              <line x1="20" y1="4" x2="20" y2="36" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4" y1="20" x2="36" y2="20" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="font-heading text-xl text-sand-soft">{next_steps?.signature}</p>
            <p className="font-mono text-xs text-sand-soft/40 tracking-wider">Founder, Origen Media</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
