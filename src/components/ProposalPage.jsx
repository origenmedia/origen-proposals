import { useParams } from 'react-router-dom'
import { useProposal } from '../hooks/useProposal'
import LoadingScreen from './LoadingScreen'
import NotFound from './NotFound'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import GoldDivider from './GoldDivider'

import Hero from './sections/Hero'
import CurrentState from './sections/CurrentState'
import CostOfStaying from './sections/CostOfStaying'
import TheGuide from './sections/TheGuide'
import SystemOverview from './sections/SystemOverview'
import NewWorld from './sections/NewWorld'
import Testimonial from './sections/Testimonial'
import PresentationSystem from './sections/PresentationSystem'
import Timeline from './sections/Timeline'
import Investment from './sections/Investment'
import NextSteps from './sections/NextSteps'

const NoiseSVG = () => (
  <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="1"/>
  </svg>
)

export default function ProposalPage() {
  const { slug } = useParams()
  const { data, loading, error } = useProposal(slug)

  if (loading) return <LoadingScreen />
  if (error || !data) return <NotFound />

  return (
    <div className="min-h-screen bg-indigo-deep">
      <NoiseSVG />
      <div className="scan-line" />
      <Navbar prospectName={data.prospect_name} />
      <ScrollProgress />

      <main>
        {/* 1. HERO ARRIVAL */}
        <div id="hero">
          <Hero data={data} />
        </div>

        <GoldDivider />

        {/* 2. THE WORLD AS IT IS */}
        <div id="pain">
          <CurrentState data={data} />
        </div>

        <GoldDivider />

        {/* 3. THE COST OF STAYING */}
        <div id="cost">
          <CostOfStaying data={data} />
        </div>

        <GoldDivider />

        {/* 4. THE GUIDE APPEARS */}
        <div id="guide">
          <TheGuide />
        </div>

        <GoldDivider />

        {/* 5. THE PATH FORWARD */}
        <div id="system">
          <SystemOverview data={data} />
        </div>

        <GoldDivider />

        {/* 6. THE NEW WORLD */}
        <div id="vision">
          <NewWorld data={data} />
        </div>

        <GoldDivider />

        {/* 7. SOCIAL PROOF */}
        <div id="proof">
          <Testimonial />
        </div>

        <GoldDivider />

        {/* 8. THE META MOMENT */}
        <div id="meta">
          <PresentationSystem data={data} />
        </div>

        <GoldDivider />

        {/* 9. TIMELINE */}
        <div id="timeline">
          <Timeline data={data} />
        </div>

        <GoldDivider />

        {/* 10. INVESTMENT */}
        <div id="investment">
          <Investment data={data} />
        </div>

        <GoldDivider />

        {/* 11. THE CALL */}
        <div id="next">
          <NextSteps data={data} />
        </div>
      </main>

      <GoldDivider />
      <Footer />
    </div>
  )
}
