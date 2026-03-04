import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function Timeline({ data }) {
  const { timeline } = data

  return (
    <SectionWrapper>
      <SectionLabel label="How We Get There" />
      <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-16">
        {timeline?.headline}
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent" />

        <div className="space-y-12">
          {timeline?.phases?.map((phase, i) => (
            <div key={i} className="relative pl-16">
              {/* Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-indigo-deep"
                   style={{borderColor: 'var(--accent)'}}>
                <span className="font-mono text-xs" style={{color: 'var(--accent)'}}>{i + 1}</span>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-heading text-xl text-sand-soft">{phase.label}</h3>
                  <span className="font-mono text-xs text-sand-soft/30 border border-sand-soft/10 px-2 py-0.5">
                    Day {phase.days}
                  </span>
                </div>
                <p className="font-sans text-sm text-sand-soft/55 leading-relaxed max-w-lg">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
