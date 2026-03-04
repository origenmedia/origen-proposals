import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function CostOfStaying({ data }) {
  const { cost_of_staying } = data
  if (!cost_of_staying) return null

  return (
    <div className="relative bg-[#080910]">
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <SectionWrapper className="relative z-10">
        <SectionLabel label="The Cost of Staying" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-8">
          {cost_of_staying?.headline}
        </h2>
        <p className="text-sand-soft/55 font-sans text-base leading-relaxed max-w-2xl mb-14">
          {cost_of_staying?.body}
        </p>

        {/* Stats */}
        {cost_of_staying?.stats?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand-soft/5">
            {cost_of_staying.stats.map((stat, i) => (
              <div key={i} className="p-8 bg-[#080910] flex flex-col gap-3">
                <p className="font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-none" style={{color: 'var(--accent)'}}>
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] tracking-wider uppercase text-sand-soft/40 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>
    </div>
  )
}
