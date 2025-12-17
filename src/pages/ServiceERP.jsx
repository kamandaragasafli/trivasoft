import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ServiceDetail.css'

const ServiceERP = () => {
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
      title: 'ERP Sistemlərinin Qurulması və Uyğunlaşdırılması',
      description: 'Şirkətin daxili proseslərinə uyğun vahid idarəetmə sisteminin qurulması və adaptasiyası.',
      benefits: [
        'Bütün biznes proseslərinin tək sistemdə birləşdirilməsi',
        'Əl ilə görülən işlərin minimuma endirilməsi',
        'Məlumatları mərkəzləşdirərək idarə olunması',
        'Proseslərdə şəffaflıq və nəzarətin artması',
        'Operativ və düzgün qərarvermə imkanı'
      ]
    },
    {
      id: 2,
      title: 'Maliyyə və Mühasibatlıq ERP Modulu',
      description: 'Şirkətin maliyyə axınlarını və mühasibat əməliyyatlarını avtomatlaşdıran ERP həlli.',
      benefits: [
        'Gəlir və xərclərin real vaxtda izlənməsi',
        'Maliyyə hesabatlarının avtomatik formalaşdırılması',
        'İnsan səhvlərinin azalması',
        'Büdcə planlamasının asanlaşması',
        'Maliyyə intizamının gücləndirilməsi'
      ]
    },
    {
      id: 3,
      title: 'Anbar və Stok İdarəetmə Sistemi',
      description: 'Məhsul və materialların hərəkətini dəqiq və avtomatik idarə edən ERP modulu.',
      benefits: [
        'Stokların real vaxtda izlənməsi',
        'Artıq və ya çatışmayan məhsul riskinin azalması',
        'Anbar əməliyyatlarının sürətlənməsi',
        'Satış və tədarük proseslərinin optimallaşdırılması',
        'Xərclərə nəzarətin güclənməsi'
      ]
    },
    {
      id: 4,
      title: 'Satış və Müştəri İdarəetmə ERP Modulu',
      description: 'Müştərilərlə əlaqələri və satış proseslərini sistemli şəkildə idarə edən həll.',
      benefits: [
        'Müştəri məlumatlarının vahid bazada saxlanması',
        'Satış proseslərinin izlənməsi və analiz edilməsi',
        'Satış performansının artırılması',
        'Müştəri məmnuniyyətinin yüksəlməsi',
        'Uzunmüddətli müştəri əlaqələrinin qurulması'
      ]
    },
    {
      id: 5,
      title: 'İnsan Resursları (HR) ERP Sistemi',
      description: 'İşçi heyətinin idarə olunmasını avtomatlaşdıran və sadələşdirən ERP həlli.',
      benefits: [
        'İşçi məlumatlarının mərkəzləşdirilmiş idarəsi',
        'Məzuniyyət və iş vaxtının avtomatik izlənməsi',
        'Performans qiymətləndirməsinin asanlaşdırılması',
        'HR proseslərində vaxta qənaət',
        'İnsan resursları üzrə daha dəqiq qərarlar'
      ]
    },
    {
      id: 6,
      title: 'ERP Hesabat və Analitika Sistemi',
      description: 'Biznes göstəricilərini analiz edən və rəhbərlik üçün hesabatlar yaradan ERP modulu.',
      benefits: [
        'Real vaxtda analitik hesabatlar',
        'Strateji qərarlar üçün dəqiq məlumat',
        'Risklərin vaxtında aşkar edilməsi',
        'Biznes performansının ölçülməsi',
        'Planlama və proqnozlaşdırmanın gücləndirilməsi'
      ]
    },
    {
      id: 7,
      title: 'ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası',
      description: 'ERP-ni digər proqram və sistemlərlə uyğunlaşdıran inteqrasiya həlləri.',
      benefits: [
        'CRM, bank, anbar və digər sistemlərlə əlaqə',
        'Məlumatların avtomatik ötürülməsi',
        'Təkrarlanan əməliyyatların aradan qaldırılması',
        'Proseslərin fasiləsiz işləməsi',
        'Ümumi sistem səmərəliliyinin artması'
      ]
    }
  ]

  return (
    <div className="service-detail">
      <section className="service-detail-hero">
        <div className="service-detail-hero-background"></div>
        <div className="service-detail-hero-container" ref={heroRef}>
          <Link to="/xidmetler" className="back-link">← Xidmətlərə qayıt</Link>
          <h1 className="service-detail-title">ERP Həllər</h1>
          <p className="service-detail-subtitle">
            Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri
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

export default ServiceERP

