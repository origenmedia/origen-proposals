export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="block w-8 h-px" style={{background: 'var(--accent)'}} />
      <p className="font-mono text-xs tracking-widest uppercase text-sand-soft/40">{label}</p>
    </div>
  )
}
