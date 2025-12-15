import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let lastMoveTime = Date.now()
    let hoverTimeout = null

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      lastMoveTime = Date.now()

      // Hərəkət zamanı işığı söndür
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        setIsHovering(false)
      }

      // 300ms hərəkət olmasa işıq yansın
      hoverTimeout = setTimeout(() => {
        setIsHovering(true)
      }, 300)
    }

    const animate = () => {
      // Smooth interpolation - biraz tez tracking
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15

      document.documentElement.style.setProperty('--mouse-x', `${currentX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${currentY}px`)

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [])

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
    <Router>
      <div className="App">
        <div className="cursor-dot"></div>
        <div className={`cursor-light ${isHovering ? 'active' : ''}`}></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xidmetler" element={<Services />} />
          <Route path="/haqqimizda" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/elaqe" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

