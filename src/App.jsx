import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import IbizaPage from './pages/IbizaPage/IbizaPage'
import ImpactPage from './pages/ImpactPage/ImpactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ibiza" element={<IbizaPage />} />
        <Route path="/ibiza/impact" element={<ImpactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
