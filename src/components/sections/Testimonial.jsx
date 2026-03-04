import SectionWrapper from './SectionWrapper'

export default function Testimonial() {
  return (
    <div className="relative bg-indigo-light/40">
      <div className="absolute inset-0 origen-glow opacity-50" />
      <SectionWrapper className="relative z-10 text-center">
        {/* Large quote mark */}
        <div className="font-heading text-[8rem] leading-none mb-4 opacity-10" style={{color: 'var(--accent)'}}>
          "
        </div>
        <blockquote className="font-heading italic text-[clamp(1.3rem,3vw,2rem)] text-sand-soft/80 leading-relaxed max-w-3xl mx-auto mb-8">
          Working with Nate was a pivotal turning point in my life and business. I recommend him wholeheartedly to anyone seeking a complete paradigm shift in how they approach business and marketing.
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-px" style={{background: 'var(--accent)'}} />
          <p className="font-mono text-xs tracking-widest uppercase text-sand-soft/45">Jeff Dullum</p>
          <div className="w-8 h-px" style={{background: 'var(--accent)'}} />
        </div>
      </SectionWrapper>
    </div>
  )
}
