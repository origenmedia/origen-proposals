import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function Transformation({ data }) {
  const { transformation } = data

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-indigo-light/40 circuit-pattern" />
      <SectionWrapper className="relative z-10">
        <SectionLabel label="The Shift" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-12">
          {transformation?.headline}
        </h2>

        <div className="grid md:grid-cols-2 gap-1">
          {/* Before */}
          <div className="p-8 md:p-10 bg-indigo-deep border border-sand-soft/10">
            <p className="font-mono text-xs tracking-widest uppercase text-sand-soft/30 mb-6">Before</p>
            <p className="font-sans text-base text-sand-soft/60 leading-relaxed">
              {transformation?.before}
            </p>
          </div>

          {/* After */}
          <div className="p-8 md:p-10 bg-indigo-deep border"
               style={{borderColor: 'var(--accent)'}}>
            <p className="font-mono text-xs tracking-widest uppercase mb-6"
               style={{color: 'var(--accent)'}}>After</p>
            <p className="font-sans text-base text-sand-soft/80 leading-relaxed">
              {transformation?.after}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
