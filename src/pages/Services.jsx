import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const heroRef = useRef(null)
  const serviceCardsRef = useRef([])

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

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const services = [
    {
      id: 1,
      title: 'AI Avtomatlaşdırma',
      description: 'Müasir süni intellekt texnologiyaları ilə biznes proseslərinizi tam avtomatlaşdırın. Chatbotlar, məlumat analizi, proqnozlaşdırma və daha çox.',
      icon: '🤖',
      link: '/xidmetler/ai',
      features: [
        'Chatbot və virtual assistentlər',
        'Məlumat analizi və proqnozlaşdırma',
        'Proses avtomatlaşdırması',
        'Təbii dil emalı'
      ]
    },
    {
      id: 2,
      title: 'ERP',
      description: 'Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri. Maliyyə, inventar, insan resursları və daha çox modullar.',
      icon: '📊',
      link: '/xidmetler/erp',
      features: [
        'Maliyyə idarəetməsi',
        'İnventar idarəetməsi',
        'İnsan resursları',
        'Satış və marketinq'
      ]
    },
    {
      id: 3,
      title: 'Marketinq',
      description: 'Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın. SEO, sosial media, kontent marketinqi və daha çox.',
      icon: '📈',
      link: '/xidmetler/marketinq',
      features: [
        'SEO optimallaşdırması',
        'Sosial media marketinqi',
        'Kontent marketinqi',
        'Reklam kampaniyaları'
      ]
    },
    {
      id: 4,
      title: 'Web',
      description: 'Müasir və performanslı veb saytlar, veb tətbiqlər və e-ticarət platformaları hazırlayırıq. Responsive dizayn və istifadəçi dostu interfeyslər.',
      icon: '🌐',
      link: '/xidmetler/web',
      features: [
        'Veb sayt dizaynı və inkişafı',
        'Responsive və mobil uyğunluq',
        'E-ticarət platformaları',
        'Veb tətbiqlər (Web Apps)'
      ]
    }
  ]

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-background"></div>
        <div className="services-hero-container" ref={heroRef}>
          <h1 className="services-title">Xidmətlərimiz</h1>
          <p className="services-subtitle">
            Biznesinizin uğuru üçün geniş spektrli rəqəmsal həllər təqdim edirik
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="services-container">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.link}
              className="service-card-link"
            >
              <div 
                className="service-card"
                ref={(el) => (serviceCardsRef.current[index] = el)}
              >
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-overlay"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services

