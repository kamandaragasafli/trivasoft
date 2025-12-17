import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ServiceDetail.css'

const ServiceWeb = () => {
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
      title: 'Web-Saytların Hazırlanması',
      description: 'Biznesin rəqəmsal imicini gücləndirən, satış və təqdimat məqsədli peşəkar veb-saytların hazırlanması.',
      benefits: [
        'Biznes məqsədlərinə uyğun fərdi dizayn',
        'Sürətli və təhlükəsiz texniki struktur',
        'Mobil və planşetlərə tam uyğunluq',
        'İstifadəçi üçün sadə və anlaşılan interfeys',
        'Satışa və müraciətə yönəldilmiş səhifə quruluşu',
        'Brend etibarının və onlayn görünürlüyün artması'
      ]
    },
    {
      id: 2,
      title: 'İnternet Mağazaların Yaradılması (E-commerce)',
      description: 'Onlayn satışları artırmaq üçün funksional və etibarlı internet mağazalarının hazırlanması.',
      benefits: [
        'Məhsul qalığının və sifarişlərin rahat idarə edilməsi',
        'Onlayn ödəniş sistemlərinin inteqrasiyası',
        'Səbət və sifariş prosesinin optimallaşdırılması',
        'Mobil istifadəçilər üçün rahat alış təcrübəsi',
        'Satış statistikasının və hesabatların izlənməsi',
        'Onlayn satış potensialının artması'
      ]
    },
    {
      id: 3,
      title: 'Mobil Tətbiqlərin Hazırlanması',
      description: 'iOS və Android platformaları üçün biznesə uyğun mobil tətbiqlərin hazırlanması.',
      benefits: [
        'Müştərilərlə birbaşa əlaqə imkanı',
        'Sürətli və stabil işləyən tətbiqlər',
        'İstifadəçi təcrübəsinə uyğun dizayn',
        'Push bildirişləri ilə aktiv kommunikasiya',
        'Brendə sadiqliyin artırılması',
        'Rəqiblər qarşısında üstünlük əldə edilməsi'
      ]
    },
    {
      id: 4,
      title: 'SEO Xidmətləri',
      description: 'Veb-saytların Google və digər axtarış platformalarında daha üst sıralarda çıxması üçün peşəkar SEO həlləri.',
      benefits: [
        'Orqanik ziyarətçi sayının artması',
        'Düzgün açar söz strategiyası',
        'Texniki və məzmun əsaslı optimallaşdırma',
        'Uzunmüddətli və stabil nəticələr',
        'Reklam xərclərindən asılılığın azalması',
        'Brendin onlayn etibarının güclənməsi'
      ]
    }
  ]

  return (
    <div className="service-detail">
      <section className="service-detail-hero">
        <div className="service-detail-hero-background"></div>
        <div className="service-detail-hero-container" ref={heroRef}>
          <Link to="/xidmetler" className="back-link">← Xidmətlərə qayıt</Link>
          <h1 className="service-detail-title">Web Həllər</h1>
          <p className="service-detail-subtitle">
            Müasir və performanslı veb saytlar, veb tətbiqlər və e-ticarət platformaları
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

export default ServiceWeb

