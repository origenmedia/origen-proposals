import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero',         label: 'Arrival' },
  { id: 'pain',         label: 'Where You Are' },
  { id: 'cost',         label: 'The Cost' },
  { id: 'guide',        label: 'Your Guide' },
  { id: 'system',       label: 'The System' },
  { id: 'vision',       label: 'New Reality' },
  { id: 'proof',        label: 'Proof' },
  { id: 'meta',         label: 'This Proposal' },
  { id: 'timeline',     label: 'Timeline' },
  { id: 'investment',   label: 'Investment' },
  { id: 'next',         label: 'Next Steps' },
]

export default function ScrollProgress() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5)
      const positions = SECTIONS.map(s => {
        const el = document.getElementById(s.id)
        return el ? el.getBoundingClientRect().top + window.scrollY : 0
      })
      let current = 0
      for (let i = 0; i < positions.length; i++) {
        if (window.scrollY + window.innerHeight * 0.4 >= positions[i]) current = i
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {SECTIONS.map((section, i) => (
        <button key={section.id} onClick={() => scrollTo(section.id)} className="group relative flex items-center justify-end gap-2" title={section.label}>
          <span className="absolute right-full mr-3 font-mono text-[10px] tracking-wider uppercase text-sand-soft/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {section.label}
          </span>
          <div className={`progress-dot ${i === active ? 'active' : ''}`} />
        </button>
      ))}
    </div>
  )
}
