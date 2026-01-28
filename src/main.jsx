import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Flexpage from './components/flexpage.jsx'
import ExploreSpace from './components/space.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flex" element={<Flexpage />} />
        <Route path="/explore-space" element={<ExploreSpace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
