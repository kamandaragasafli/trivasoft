import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])
  const statsRef = useRef(null)

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [])

  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-background"></div>
        <div className="about-hero-container" ref={heroRef}>
          <h1 className="about-title">Haqqımızda</h1>
          <p className="about-subtitle">
            TrivaSoft - Rəqəmsal dünyada innovativ həllər
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div 
            className="about-section"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <h2 className="section-title">Biz Kimik?</h2>
            <p className="section-text">
              TrivaSoft olaraq, bizneslərin rəqəmsal transformasiyasında liderik. 
              Müasir texnologiyalar və innovativ yanaşmalarla müştərilərimizə 
              ən yaxşı həlləri təqdim edirik.
            </p>
            <p className="section-text">
              Komandamız təcrübəli mütəxəssislərdən ibarətdir və hər bir layihədə 
              müştərilərimizin uğuruna çatması üçün çalışırıq.
            </p>
          </div>

          <div 
            className="about-section"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2 className="section-title">Missiyamız</h2>
            <p className="section-text">
              Bizneslərin rəqəmsal dünyada uğur qazanmasına kömək etmək və 
              innovativ texnologiyalar vasitəsilə onların inkişafını sürətləndirmək.
            </p>
          </div>

          <div 
            className="about-section"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2 className="section-title">Vizyonumuz</h2>
            <p className="section-text">
              Azərbaycanda və regionda rəqəmsal transformasiyanın aparıcı 
              təminatçısı olmaq və müştərilərimizə dünya standartlarında 
              xidmət göstərmək.
            </p>
          </div>

          <div className="stats" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Layihə</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Müştəri</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">İl Təcrübə</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Dəstək</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

