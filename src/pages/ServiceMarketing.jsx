import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ServiceDetail.css'

const ServiceMarketing = () => {
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
      title: 'Rəqəmsal Marketinq Strategiyasının Hazırlanması',
      description: 'Biznes məqsədlərinə uyğun, ölçülə bilən və nəticəyönümlü marketinq strategiyalarının qurulması.',
      benefits: [
        'Dəqiq hədəf auditoriyanın müəyyən edilməsi',
        'Büdcənin səmərəli bölüşdürülməsi',
        'Marketinq fəaliyyətlərində ardıcıllıq',
        'Satış və brend məqsədlərinin uzlaşdırılması',
        'Uzunmüddətli inkişaf planı'
      ]
    },
    {
      id: 2,
      title: 'Brend Strategiyası və Mövqeləndirmə (Brending)',
      description: 'Brendin bazarda tanıdılması və mövqeləndirilməsi.',
      benefits: [
        'Brendin unikal dəyər təklifinin formalaşdırılması',
        'Rəqiblər qarşısında aydın mövqe',
        'Brend tanınmasının artması',
        'Müştəri etibarının güclənməsi',
        'Davamlı brend imici'
      ]
    },
    {
      id: 3,
      title: 'Sosial Media Marketinqi və İdarəetmə',
      description: 'Brendin sosial media kanallarında effektiv və satışyönümlü idarə olunması.',
      benefits: [
        'Peşəkar kontent planlaması',
        'Müştərilərlə aktiv və ardıcıl ünsiyyət',
        'Brend imicinin gücləndirilməsi',
        'Sosial mediadan satış imkanlarının artırılması',
        'Analitik nəticələr əsasında optimallaşdırma'
      ]
    },
    {
      id: 4,
      title: 'Reklam Kampaniyalarının Planlanması və İdarə Edilməsi',
      description: 'Onlayn reklam platformalarında effektiv və məqsədyönlü kampaniyaların qurulması.',
      benefits: [
        'Doğru auditoriyaya düzgün mesaj',
        'Reklam büdcəsinə nəzarət',
        'Kampaniya nəticələrinin ölçülməsi',
        'Geri dönüşün (ROI) artırılması',
        'Brend görünürlüyünün artması'
      ]
    },
    {
      id: 5,
      title: 'Vizual Kimlik və Brend Dizaynı',
      description: 'Brendin vizual üslubunu formalaşdıran dizayn və identifikasiya həlləri.',
      benefits: [
        'Peşəkar loqo və dizayn konsepti',
        'Brendin vizual olaraq fərqlənməsi',
        'Bütün platformalarda vahid üslub',
        'Brendin yadda qalan görünüşü',
        'Güclü vizual təsir'
      ]
    },
    {
      id: 6,
      title: 'Kontent Marketinqi və Kopiraytinq',
      description: 'Brend üçün dəyər yaradan, məlumatlandıran və satışa yönəldən mətn və məzmunların hazırlanması.',
      benefits: [
        'Satışyönümlü mətnlər',
        'Brend dilinə uyğun kontent',
        'Müştəri etibarının artması',
        'Axtarış sistemləri üçün optimallaşdırılmış məzmun',
        'Uzunmüddətli dəyər yaradan kontent strategiyası'
      ]
    },
    {
      id: 7,
      title: 'Analitika və Marketinq Hesabatları',
      description: 'Marketinq fəaliyyətlərinin nəticələrini ölçən və təhlil edən analitik xidmətlər.',
      benefits: [
        'Real nəticələrə əsaslanan qərarlar',
        'Marketinq xərclərinin optimallaşdırılması',
        'Effektiv kanalların müəyyən edilməsi',
        'Strategiyanın davamlı təkmilləşdirilməsi',
        'Şəffaf və anlaşılan hesabatlar'
      ]
    }
  ]

  return (
    <div className="service-detail">
      <section className="service-detail-hero">
        <div className="service-detail-hero-background"></div>
        <div className="service-detail-hero-container" ref={heroRef}>
          <Link to="/xidmetler" className="back-link">← Xidmətlərə qayıt</Link>
          <h1 className="service-detail-title">Marketinq</h1>
          <p className="service-detail-subtitle">
            Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın
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

export default ServiceMarketing

