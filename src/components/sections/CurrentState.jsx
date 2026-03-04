import { useRef, useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import SectionLabel from './SectionLabel'

export default function CurrentState({ data }) {
  const { current_state, pain_image_url } = data

  return (
    <div className="relative overflow-hidden">
      {/* Pain image - heavily muted, desaturated */}
      {pain_image_url && (
        <div className="absolute inset-0">
          <img src={pain_image_url} alt="" className="w-full h-full object-cover" style={{filter: 'grayscale(85%) brightness(0.25)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(14,15,41,0.7) 0%, rgba(14,15,41,0.55) 50%, rgba(14,15,41,0.85) 100%)'}} />
        </div>
      )}

      <SectionWrapper className="relative z-10">
        <SectionLabel label="Where You Are Now" />
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-sand-soft mb-8">
          {current_state?.headline}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className="text-sand-soft/65 font-sans text-base leading-relaxed">
            {current_state?.body}
          </p>
          <div className="border-l-2 pl-8 border-sand-soft/20">
            <p className="font-heading italic text-xl text-sand-soft/70 leading-relaxed">
              {current_state?.gap_statement}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
