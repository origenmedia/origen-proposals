import { useEffect, useRef } from 'react'

export default function Hero({ data }) {
  const { hero, hero_image_url, visual_direction } = data
  const accent = visual_direction?.accent_color || '#E2B947'
  const containerRef = useRef(null)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    const r = parseInt(accent.slice(1,3), 16)
    const g = parseInt(accent.slice(3,5), 16)
    const b = parseInt(accent.slice(5,7), 16)
    document.documentElement.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`)
  }, [accent])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const img = containerRef.current.querySelector('.hero-bg-img')
      if (img) img.style.transform = `translateY(${window.scrollY * 0.28}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background image with parallax */}
      <div className="hero-bg-img absolute inset-0 scale-110">
        <img src={hero_image_url} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Base overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Circuit grid on top of image - engineered precision layer */}
      <div className="circuit-pattern-fine absolute inset-0 opacity-70" />

      {/* Radial accent glow at center */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 60%, rgba(${parseInt(accent.slice(1,3),16)}, ${parseInt(accent.slice(3,5),16)}, ${parseInt(accent.slice(5,7),16)}, 0.07) 0%, transparent 100%)`
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow with flanking lines */}
        <div className="flex items-center gap-4 mb-10 opacity-0 animate-[fadeInDown_0.8s_0.3s_ease_forwards]">
          <div className="w-12 h-px" style={{background: accent}} />
          <p className="font-mono text-xs tracking-widest uppercase" style={{color: accent}}>
            A Proposal from Origen Media
          </p>
          <div className="w-12 h-px" style={{background: accent}} />
        </div>

        {/* Prospect name */}
        <h1 className="font-heading font-light text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.9] tracking-tightest text-sand-soft mb-8 opacity-0 animate-[fadeInUp_1s_0.5s_ease_forwards]">
          {hero?.name || data.prospect_name?.toUpperCase()}
        </h1>

        {/* Subtitle */}
        <p className="font-heading italic text-[clamp(1rem,2.2vw,1.4rem)] text-sand-soft/70 max-w-2xl leading-relaxed opacity-0 animate-[fadeInUp_0.8s_0.85s_ease_forwards]">
          {hero?.subtitle}
        </p>

        {/* Corner bracket decoration */}
        <div className="relative mt-12 px-8 py-4 opacity-0 animate-[fadeIn_0.8s_1.2s_ease_forwards]">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{borderColor: accent}} />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r" style={{borderColor: accent}} />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l" style={{borderColor: accent}} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{borderColor: accent}} />
          <p className="font-mono text-xs tracking-widest text-sand-soft/35 uppercase">
            Prepared Exclusively for {data.prospect_name}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_1s_1.6s_ease_forwards]">
        <p className="font-mono text-[10px] tracking-widest uppercase text-sand-soft/25">Scroll</p>
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-sand-soft/30 to-transparent" />
          <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent to-sand-soft/60 animate-[slideDown_2s_ease_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}
