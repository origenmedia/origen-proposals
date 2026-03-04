import { useEffect, useRef } from 'react'

export default function SectionWrapper({ children, className = '', id = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-visible')
          el.classList.remove('section-hidden')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    el.classList.add('section-hidden')
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}
