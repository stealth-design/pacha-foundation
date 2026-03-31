import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import IbizaPage from './pages/IbizaPage/IbizaPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ibiza" element={<IbizaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
