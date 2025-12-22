import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import heroVideo from '../source/backround.mp4'

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
    <>
      <Helmet>
        <title>TrivaSoft - AI Avtomatlaşdırma, ERP, Rəqəmsal Marketinq | Bakı</title>
        <meta 
          name="description" 
          content="TrivaSoft - Bakıda AI avtomatlaşdırma, ERP həlləri, rəqəmsal marketinq və veb dizayn xidmətləri. Biznesinizi rəqəmsal dünyada uğura çatdırın." 
        />
        <meta 
          name="keywords" 
          content="AI avtomatlaşdırma Bakı, ERP sistemləri Azərbaycan, rəqəmsal marketinq, veb sayt dizaynı, chatbot, SEO xidmətləri, rəqəmsal transformasiya" 
        />
        <link rel="canonical" href="https://trivasoft.az/" />
        <meta property="og:title" content="TrivaSoft - AI Avtomatlaşdırma, ERP, Rəqəmsal Marketinq | Bakı" />
        <meta property="og:description" content="TrivaSoft - Bakıda AI avtomatlaşdırma, ERP həlləri, rəqəmsal marketinq və veb dizayn xidmətləri. Biznesinizi rəqəmsal dünyada uğura çatdırın." />
        <meta property="og:url" content="https://trivasoft.az/" />
        <meta property="og:image" content="https://trivasoft.az/favicon.png" />
      </Helmet>
      <div className="home">
        <section className="hero">
        <div className="hero-video-wrapper">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            aria-label="TrivaSoft rəqəmsal həllər arxa plan videosu"
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
            ERP həlləri, Web həlləri və marketinq strategiyaları ilə uğura çatın.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              <span>Xidmətlərimiz</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
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

      {/* Features / Services Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-intro">
            <h2>Xidmətlərimiz</h2>
            <p className="features-description">
              Biznesinizin uğuru üçün geniş rəqəmsal həllər təqdim edirik. 
              Hər bir xidmətimiz sizin biznesinizin ehtiyaclarına uyğun olaraq hazırlanır.
            </p>
          </div>
          <div className="features-grid">
            <Link
              to="/services/ai"
              className="feature-card"
              ref={(el) => (featureCardsRef.current[0] = el)}
            >
              <div className="feature-overlay"></div>
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🤖</span>
              </div>
              <h3>AI Avtomatlaşdırma</h3>
              <p>
                Müasir süni intellekt texnologiyaları ilə biznes proseslərinizi tam avtomatlaşdırın. 
                Chatbotlar, məlumat analizi, proqnozlaşdırma və daha çox.
              </p>
            </Link>

            <Link
              to="/services/erp"
              className="feature-card"
              ref={(el) => (featureCardsRef.current[1] = el)}
            >
              <div className="feature-overlay"></div>
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📊</span>
              </div>
              <h3>ERP</h3>
              <p>
                Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri. 
                Maliyyə, inventar, insan resursları və daha çox modullar.
              </p>
            </Link>

            <Link
              to="/services/marketing"
              className="feature-card"
              ref={(el) => (featureCardsRef.current[2] = el)}
            >
              <div className="feature-overlay"></div>
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📈</span>
              </div>
              <h3>Marketinq</h3>
              <p>
                Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın. 
                SEO, sosial media, kontent marketinqi və daha çox.
              </p>
            </Link>

            <Link
              to="/services/web"
              className="feature-card"
              ref={(el) => (featureCardsRef.current[3] = el)}
            >
              <div className="feature-overlay"></div>
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🌐</span>
              </div>
              <h3>Web</h3>
              <p>
                Müasir və performanslı veb saytlar, veb tətbiqlər və e-ticarət platformaları hazırlayırıq. 
                Responsive dizayn və istifadəçi dostu interfeyslər.
              </p>
            </Link>
          </div>
        </div>
      </section>

      </div>
    </>
  )
}

export default Home

