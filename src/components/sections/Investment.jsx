import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function Investment({ data }) {
  const { investment } = data

  return (
    <SectionWrapper id="investment">
      <SectionLabel label="Investment" />
      <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-4">
        The Numbers
      </h2>
      <p className="font-mono text-xs tracking-widest text-sand-soft/35 uppercase mb-12">
        Total Investment: <span className="text-sand-soft/70">{investment?.total}</span>
      </p>

      <div className="grid md:grid-cols-3 gap-px bg-sand-soft/5">
        {/* Option 1 */}
        <div className="card-hover p-8 bg-indigo-deep flex flex-col gap-5">
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-sand-soft/30 mb-1">Option 01</p>
            <div className="w-8 h-px bg-sand-soft/15 mb-5" />
          </div>
          <p className="font-heading text-xl text-sand-soft leading-snug flex-1">
            {investment?.option_1}
          </p>
          <p className="font-mono text-[10px] tracking-wider text-sand-soft/25 uppercase">Single Payment</p>
        </div>

        {/* Option 2 - Featured */}
        <div className="investment-featured card-hover p-8 flex flex-col gap-5"
             style={{background: `rgba(var(--accent-rgb), 0.04)`, border: `1px solid var(--accent)`}}>
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{color: 'var(--accent)'}}>Option 02</p>
            <div className="w-8 h-px mb-5" style={{background: 'var(--accent)'}} />
          </div>
          <p className="font-heading text-xl text-sand-soft leading-snug flex-1">
            {investment?.option_2}
          </p>
          <p className="font-mono text-[10px] tracking-wider uppercase" style={{color: 'rgba(var(--accent-rgb), 0.6)'}}>Split Payment</p>
        </div>

        {/* Ongoing */}
        <div className="card-hover p-8 bg-indigo-deep flex flex-col gap-5">
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-sand-soft/30 mb-1">Ongoing</p>
            <div className="w-8 h-px bg-sand-soft/15 mb-5" />
          </div>
          <p className="font-heading text-xl text-sand-soft leading-snug flex-1">
            {investment?.ongoing}
          </p>
          <p className="font-mono text-[10px] tracking-wider text-sand-soft/25 uppercase">Monthly Retainer</p>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-8 flex items-center gap-4">
        <div className="w-4 h-px" style={{background: 'var(--accent)'}} />
        <p className="font-mono text-[11px] text-sand-soft/35 tracking-wide">
          All options include full system build, onboarding, and 30 days of support.
        </p>
      </div>
    </SectionWrapper>
  )
}
