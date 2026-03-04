import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function ContentSection({ label, sectionData, accent = false }) {
  if (!sectionData) return null

  return (
    <SectionWrapper>
      <SectionLabel label={label} />
      <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-8">
        {sectionData.headline}
      </h2>
      <div className={accent ? 'max-w-3xl border-l pl-8' : 'max-w-3xl'} style={accent ? {borderColor: 'var(--accent)'} : {}}>
        <p className="text-sand-soft/65 font-sans text-base leading-relaxed">
          {sectionData.body}
        </p>
      </div>
    </SectionWrapper>
  )
}
