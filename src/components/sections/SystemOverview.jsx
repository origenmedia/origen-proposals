import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function SystemOverview({ data }) {
  const { system_overview } = data

  return (
    <div className="relative">
      {/* Full width dark band with circuit pattern */}
      <div className="absolute inset-0 bg-indigo-light circuit-pattern opacity-60" />

      <SectionWrapper className="relative z-10">
        <SectionLabel label="The System" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-6">
          {system_overview?.headline}
        </h2>
        <p className="text-sand-soft/65 font-sans text-base leading-relaxed mb-16 max-w-2xl">
          {system_overview?.body}
        </p>

        {/* Components grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {system_overview?.components?.map((component, i) => (
            <div
              key={i}
              className="p-6 border border-sand-soft/10 bg-indigo-deep/60 backdrop-blur-sm group hover:border-[var(--accent)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-sand-soft/30">{String(i + 1).padStart(2, '0')}</span>
                <span className="block flex-1 h-px bg-sand-soft/10 group-hover:bg-[var(--accent)]/20 transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl text-sand-soft mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                {component.title}
              </h3>
              <p className="font-sans text-sm text-sand-soft/55 leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
