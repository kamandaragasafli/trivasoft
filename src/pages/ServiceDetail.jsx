import { useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ServiceDetail.css'

// Import services from each service page
import { aiServices } from './ServiceAI'
import { erpServices } from './ServiceERP'
import { marketingServices } from './ServiceMarketing'
import { webServices } from './ServiceWeb'

const ServiceDetail = () => {
  const { type, id } = useParams()
  const navigate = useNavigate()
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

  // Get services based on type
  const getServices = () => {
    switch(type) {
      case 'ai':
        return aiServices || []
      case 'erp':
        return erpServices || []
      case 'marketing':
        return marketingServices || []
      case 'web':
        return webServices || []
      default:
        return []
    }
  }

  const services = getServices()
  const service = services.find(s => s.id === parseInt(id))

  useEffect(() => {
    if (!service) {
      navigate(`/services/${type}`)
      return
    }

    if (heroRef.current) {
      heroRef.current.classList.add('animate-in')
    }

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

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [service, navigate, type])

  if (!service) {
    return null
  }

  const getTitle = () => {
    switch(type) {
      case 'ai':
        return 'AI Avtomatlaşdırma'
      case 'erp':
        return 'ERP Həllər'
      case 'marketing':
        return 'Marketinq'
      case 'web':
        return 'Web Həllər'
      default:
        return 'Xidmət'
    }
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - {getTitle()} | TrivaSoft</title>
        <meta 
          name="description" 
          content={service.description}
        />
        <link rel="canonical" href={`https://trivasoft.az/services/${type}/${id}`} />
      </Helmet>
      <div className="service-detail">
        <section className="service-detail-hero">
          <div className="service-detail-hero-background"></div>
          <div className="service-detail-hero-container" ref={heroRef}>
            <Link to={`/services/${type}`} className="back-link">← Geri qayıt</Link>
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="service-detail-subtitle">{service.description}</p>
          </div>
        </section>

        <section className="service-detail-content">
          <div className="service-detail-container">
            <article
              className="service-detail-card"
              ref={(el) => (sectionsRef.current[0] = el)}
            >
              {service.detailedContent && (
                <div className="service-detail-expanded">
                  <div className="service-detail-section">
                    <h3 className="service-detail-section-title">Nədir?</h3>
                    <p className="service-detail-text">{service.detailedContent.whatIs}</p>
                  </div>

                  {service.detailedContent.whyImportant && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Niyə vacibdir?</h3>
                      <p className="service-detail-text">{service.detailedContent.whyImportant}</p>
                    </div>
                  )}

                  {service.detailedContent.howItWorks && service.detailedContent.howItWorks.length > 0 && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Necə işləyir?</h3>
                      {service.detailedContent.howItWorks.map((item, idx) => (
                        <div key={idx} className="service-how-item">
                          <h4 className="service-how-title">{item.title}</h4>
                          <p className="service-how-description">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.detailedContent.suitableFor && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Hansı bizneslər üçün uyğundur?</h3>
                      <p className="service-detail-text">{service.detailedContent.suitableFor}</p>
                    </div>
                  )}

                  {service.detailedContent.conclusion && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Nəticə</h3>
                      <p className="service-detail-text">{service.detailedContent.conclusion}</p>
                    </div>
                  )}
                </div>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <div className="service-detail-benefits">
                  <h3 className="benefits-title">Müsbət cəhətləri:</h3>
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <span className="benefit-check">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </div>
          
          <div className="service-detail-cta">
            <a 
              href="https://wa.me/994553861211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              WhatsApp ilə Əlaqə
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServiceDetail
