import { Routes, Route } from 'react-router-dom'
import ProposalPage from './components/ProposalPage'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/:slug" element={<ProposalPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
