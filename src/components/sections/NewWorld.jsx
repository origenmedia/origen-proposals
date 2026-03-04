import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function NewWorld({ data }) {
  const { transformation, vision_image_url } = data

  return (
    <div className="relative overflow-hidden">
      {/* Vision image - vivid and warm, not muted */}
      {vision_image_url && (
        <div className="absolute inset-0">
          <img
            src={vision_image_url}
            alt=""
            className="w-full h-full object-cover"
            style={{filter: 'brightness(0.45) saturate(1.1)'}}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(14,15,41,0.65) 0%, rgba(14,15,41,0.3) 40%, rgba(14,15,41,0.7) 100%)'
          }} />
          {/* Warm gold tint overlay */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 40%, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)`
          }} />
        </div>
      )}

      <SectionWrapper className="relative z-10">
        <SectionLabel label="Your New Reality" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-14">
          {transformation?.headline}
        </h2>

        <div className="grid md:grid-cols-2 gap-2">
          {/* Before */}
          <div className="p-8 md:p-10 bg-indigo-deep/80 backdrop-blur-sm border border-sand-soft/10">
            <p className="font-mono text-[10px] tracking-widest uppercase text-sand-soft/30 mb-6">Before</p>
            <p className="font-sans text-base text-sand-soft/60 leading-relaxed">
              {transformation?.before}
            </p>
          </div>

          {/* After - warmer, more vivid */}
          <div className="p-8 md:p-10 backdrop-blur-sm border" style={{
            borderColor: 'var(--accent)',
            background: 'rgba(var(--accent-rgb), 0.06)'
          }}>
            <p className="font-mono text-[10px] tracking-widest uppercase mb-6" style={{color: 'var(--accent)'}}>
              After
            </p>
            <p className="font-sans text-base text-sand-soft/85 leading-relaxed">
              {transformation?.after}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
