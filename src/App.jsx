import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceAI from './pages/ServiceAI'
import ServiceWeb from './pages/ServiceWeb'
import ServiceERP from './pages/ServiceERP'
import ServiceMarketing from './pages/ServiceMarketing'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import BlogList from './pages/BlogList'
import Blog from './pages/Blog'
import BlogERP from './pages/BlogERP'
import BlogWeb from './pages/BlogWeb'
import BlogMarketing from './pages/BlogMarketing'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Loading bitene kadar cursor animasyonunu başlatma
    if (isLoading) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let lastMoveTime = Date.now()
    let hoverTimeout = null
    let animationFrameId = null

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

      animationFrameId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Kısa bir gecikme ile animasyonu başlat (sayfa yüklenmesi için)
    setTimeout(() => {
      animate()
    }, 100)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (hoverTimeout) clearTimeout(hoverTimeout)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [isLoading])

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <div className="cursor-dot"></div>
          <div className={`cursor-light ${isHovering ? 'active' : ''}`}></div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai" element={<ServiceAI />} />
            <Route path="/services/web" element={<ServiceWeb />} />
            <Route path="/services/erp" element={<ServiceERP />} />
            <Route path="/services/marketing" element={<ServiceMarketing />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/ai-automation" element={<Blog />} />
            <Route path="/blog/erp-system" element={<BlogERP />} />
            <Route path="/blog/website-sales-tool" element={<BlogWeb />} />
            <Route path="/blog/marketing-strategy" element={<BlogMarketing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

