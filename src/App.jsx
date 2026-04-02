import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import IbizaPage from './pages/IbizaPage/IbizaPage'
import ImpactPage from './pages/ImpactPage/ImpactPage'
import InitiativesPage from './pages/InitiativesPage/InitiativesPage'
import AboutPage from './pages/AboutPage/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ibiza" element={<IbizaPage />} />
        <Route path="/ibiza/impact" element={<ImpactPage />} />
        <Route path="/ibiza/initiatives" element={<InitiativesPage />} />
        <Route path="/ibiza/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
