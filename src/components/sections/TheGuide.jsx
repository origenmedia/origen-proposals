import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function TheGuide() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle warm glow behind portrait */}
      <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(197, 137, 64, 0.06) 0%, transparent 70%)'}} />

      <SectionWrapper className="relative z-10">
        <SectionLabel label="Your Guide" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="relative w-full max-w-sm">
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{borderColor: 'var(--accent)'}} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2" style={{borderColor: 'var(--accent)'}} />
              <img
                src="/nathaniel.jpg"
                alt="Nathaniel"
                className="w-full object-cover"
                style={{filter: 'brightness(0.95) contrast(1.05)'}}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-light text-sand-soft leading-tight mb-2">
                Nathaniel
              </h2>
              <p className="font-mono text-xs tracking-widest uppercase" style={{color: 'var(--accent)'}}>
                Founder, Origen Media
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sand-soft/65 font-sans text-base leading-relaxed">
                I build and install AI-powered client acquisition systems for consultants, agency owners, and service providers who are serious about growth. Not templates. Not software licenses. Complete, working infrastructure tailored to how you operate.
              </p>
              <p className="text-sand-soft/65 font-sans text-base leading-relaxed">
                I have spent the last several years at the intersection of high-end digital systems and business strategy, working with founders across North America and Mexico to replace manual, scattered operations with intelligent systems that run without them.
              </p>
            </div>

            {/* Testimonial */}
            <div className="border-l-2 pl-6 py-1" style={{borderColor: 'var(--accent)'}}>
              <p className="font-heading italic text-lg text-sand-soft/75 leading-relaxed mb-3">
                "Working with Nate was a pivotal turning point in my life and business. I recommend him wholeheartedly to anyone seeking a complete paradigm shift in how they approach business and marketing."
              </p>
              <p className="font-mono text-xs tracking-wider uppercase text-sand-soft/40">
                Jeff Dullum
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
