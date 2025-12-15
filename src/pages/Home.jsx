import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Home.css'
import heroVideo from '../logo/artistic-video.mp4'

const Home = () => {
  const heroRef = useRef(null)
  const featureCardsRef = useRef([])

  useEffect(() => {
    // Hero animasyonu
    if (heroRef.current) {
      heroRef.current.classList.add('animate-in')
    }

    // Scroll animasyonları
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    featureCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      featureCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-video-wrapper">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="hero-container" ref={heroRef}>
          <h1 className="hero-title">
            <span className="title-line">Rəqəmsal Dünyada</span>
            <span className="title-line gradient-text">Gələcəyi</span>
            <span className="title-line">Qururuq</span>
          </h1>
          <p className="hero-description">
            TrivaSoft ilə biznesinizi növbəti səviyyəyə qaldırın. AI avtomatlaşdırma, 
            ERP həlləri və marketinq strategiyaları ilə uğura çatın.
          </p>
          <div className="hero-buttons">
            <Link to="/xidmetler" className="btn btn-primary">
              <span>Xidmətlərimiz</span>
            </Link>
            <Link to="/elaqe" className="btn btn-secondary">
              <span>Əlaqə Saxlayın</span>
            </Link>
          </div>
        </div>
        <div className="hero-marquee">
          <div className="marquee-content">
            <span>AI Avtomatlaşdırma</span>
            <span className="marquee-separator">*</span>
            <span>ERP Həlləri</span>
            <span className="marquee-separator">*</span>
            <span>Marketinq</span>
            <span className="marquee-separator">*</span>
            <span>Konsaltinq</span>
            <span className="marquee-separator">*</span>
            <span>Analitika & Hesabat</span>
            <span className="marquee-separator">*</span>
            <span>Vebsayt Dizayn</span>
            <span className="marquee-separator">*</span>
            <span>Rəqəmsal Marketinq</span>
            <span className="marquee-separator">*</span>
            <span>AI Avtomatlaşdırma</span>
            <span className="marquee-separator">*</span>
            <span>ERP Həlləri</span>
            <span className="marquee-separator">*</span>
            <span>Marketinq</span>
            <span className="marquee-separator">*</span>
            <span>Konsaltinq</span>
            <span className="marquee-separator">*</span>
            <span>Analitika & Hesabat</span>
            <span className="marquee-separator">*</span>
            <span>Vebsayt Dizayn</span>
            <span className="marquee-separator">*</span>
            <span>Rəqəmsal Marketinq</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div 
            className="feature-card" 
            ref={(el) => (featureCardsRef.current[0] = el)}
          >
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🤖</div>
            </div>
            <h3>AI Avtomatlaşdırma</h3>
            <p>Müasir AI texnologiyaları ilə biznes proseslərinizi avtomatlaşdırın</p>
            <div className="feature-overlay"></div>
          </div>
          <div 
            className="feature-card" 
            ref={(el) => (featureCardsRef.current[1] = el)}
          >
            <div className="feature-icon-wrapper">
              <div className="feature-icon">📊</div>
            </div>
            <h3>ERP Həlləri</h3>
            <p>Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri</p>
            <div className="feature-overlay"></div>
          </div>
          <div 
            className="feature-card" 
            ref={(el) => (featureCardsRef.current[2] = el)}
          >
            <div className="feature-icon-wrapper">
              <div className="feature-icon">📈</div>
            </div>
            <h3>Marketinq</h3>
            <p>Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın</p>
            <div className="feature-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

