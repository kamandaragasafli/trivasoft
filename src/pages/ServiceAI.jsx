import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ServiceDetail.css'

const ServiceAI = () => {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
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
  }, [])

  const services = [
    {
      id: 1,
      title: 'AI Chat Bot (Sosial Media Satış Botu)',
      description: 'Sosial media üzərindən gələn mesaj və rəyləri müştərinin psixologiyasına uyğun cavablayan və satışı həyata keçirən ağıllı sistem.',
      benefits: [
        'Instagram və Facebook mesajlarına 24/7 avtomatik cavab',
        'Müştərinin yazı tərzinə və niyyətinə uyğun fərdi cavablar',
        'Satışa yönəldilmiş dialoq strukturu',
        'İnsan faktoru və gec cavab riskinin aradan qaldırılması',
        'Müştəri məmnuniyyətinin və satış ehtimalının artması',
        'Sosial media üzərindən gələn potensial müştərilərin itirilməməsi'
      ]
    },
    {
      id: 2,
      title: 'Korporativ Satış Mütəxəssisləri üçün AI Soyuq Satış Sistemi',
      description: 'Korporativ satış mütəxəssislərinin öz müştəri bazaları və ya bizim 10 000 şirkətdən bazamızın üzərindən avtomatik soyuq satış e-mailləri göndərməsini və geri dönüşlərin izlənməsini təmin edən AI həlli.',
      benefits: [
        'İstifadəçinin Excel faylı əsasında avtomatik e-mail göndərişi',
        'Peşəkar soyuq satış mətnlərinin AI tərəfindən hazırlanması',
        'Geri dönüşlərin Google Sheets-də avtomatik qeydiyyatı',
        'Sadə və effektiv CRM strukturu',
        'Satış prosesinin sürətlənməsi',
        'Satış mütəxəssisinin operativliyinin artması'
      ]
    },
    {
      id: 3,
      title: 'Hotel AI ChatBot (Avtomatik Rezervasiya Sistemi)',
      description: 'Otellərə sosial media və mesajlaşma platformalarından gələn sorğuları cavablayan, boş otaqları təyin edən və avtomatik rezervasiya həyata keçirən ağıllı sistem.',
      benefits: [
        'Instagram, Facebook və WhatsApp mesajlarına ani cavab',
        'Boş otaqların real vaxtda müəyyən edilməsi',
        'Müştərinin istəklərinə uyğun otaq təklifləri',
        'Avtomatik bron və qeydiyyat',
        'Rezervasiya barədə otelə dərhal bildiriş',
        'Rezervasiya səhvlərinin və insan faktorunun aradan qaldırılması',
        'Rezervasiya sayının artması'
      ]
    },
    {
      id: 4,
      title: 'AI SMM + ChatBot Sistemi',
      description: 'Sosial media kontentini avtomatik yaradan, paylaşan, analiz edən və eyni zamanda mesajlar üzərindən satış edən kompleks AI sistemi.',
      benefits: [
        'Avtomatik post və məzmun yaradılması',
        'Paylaşımların performansının analizi',
        'Sistem tərəfindən özünü daim təkmilləşdirmə',
        'Mesaj və rəylərin avtomatik cavablandırılması',
        'Satışa yönəlik sosial media idarəçiliyi',
        'SMM xərclərinin azalması və effektivliyin artması'
      ]
    }
  ]

  return (
    <div className="service-detail">
      <section className="service-detail-hero">
        <div className="service-detail-hero-background"></div>
        <div className="service-detail-hero-container" ref={heroRef}>
          <Link to="/xidmetler" className="back-link">← Xidmətlərə qayıt</Link>
          <h1 className="service-detail-title">AI Avtomatlaşdırma</h1>
          <p className="service-detail-subtitle">
            Müasir süni intellekt texnologiyaları ilə biznes proseslərinizi tam avtomatlaşdırın
          </p>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-detail-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-detail-card"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <h2 className="service-detail-card-title">{service.title}</h2>
              <p className="service-detail-card-description">{service.description}</p>
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
            </div>
          ))}
        </div>
        
        <div className="service-detail-cta">
          <a 
            href="https://wa.me/994504768843" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            WhatsApp ilə Əlaqə
          </a>
        </div>
      </section>
    </div>
  )
}

export default ServiceAI

