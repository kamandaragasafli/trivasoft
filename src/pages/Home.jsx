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
          <div className="features-intro">
            <h2>Əsas Xidmətlərimiz</h2>
            <p className="features-description">
              TrivaSoft olaraq, biznesinizin rəqəmsal transformasiyası üçün geniş spektrli 
              texnoloji həllər təqdim edirik. Müasir AI texnologiyalarından tutmuş tam 
              funksional ERP sistemlərinə qədər, müştərilərimizə ən yaxşı xidməti göstərmək 
              üçün çalışırıq.
            </p>
          </div>
          <div className="features-grid">
            <Link 
              to="/xidmetler/ai"
              className="feature-card" 
              ref={(el) => (featureCardsRef.current[0] = el)}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🤖</div>
              </div>
              <h3>AI Avtomatlaşdırma</h3>
              <p>Müasir AI texnologiyaları ilə biznes proseslərinizi avtomatlaşdırın</p>
              <div className="feature-overlay"></div>
            </Link>
            <Link 
              to="/xidmetler/erp"
              className="feature-card" 
              ref={(el) => (featureCardsRef.current[1] = el)}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📊</div>
              </div>
              <h3>ERP Həlləri</h3>
              <p>Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri</p>
              <div className="feature-overlay"></div>
            </Link>
            <Link 
              to="/xidmetler/marketinq"
              className="feature-card" 
              ref={(el) => (featureCardsRef.current[2] = el)}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📈</div>
              </div>
              <h3>Marketinq</h3>
              <p>Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın</p>
              <div className="feature-overlay"></div>
            </Link>
            <Link 
              to="/xidmetler/web"
              className="feature-card" 
              ref={(el) => (featureCardsRef.current[3] = el)}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🌐</div>
              </div>
              <h3>Web</h3>
              <p>Müasir və performanslı veb saytlar, veb tətbiqlər və e-ticarət platformaları</p>
              <div className="feature-overlay"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="seo-content">
        <div className="seo-content-container">
          <h2>Rəqəmsal Transformasiya üçün TrivaSoft Seçin</h2>
          <div className="seo-text-block">
            <p>
              TrivaSoft olaraq, Azərbaycanın aparıcı rəqəmsal həllər təminatçısı kimi, 
              bizneslərin texnoloji inkişafında mühüm rol oynayırıq. Bakıda yerləşən 
              komandamız, AI avtomatlaşdırma, ERP sistemləri, rəqəmsal marketinq və 
              veb dizayn sahələrində təcrübəli mütəxəssislərdən ibarətdir.
            </p>
            <h3>
              <Link to="/blog" className="seo-content-link">AI Avtomatlaşdırma Xidmətləri</Link>
            </h3>
            <p>
              Süni intellekt texnologiyaları ilə biznes proseslərinizi effektiv şəkildə 
              avtomatlaşdırırıq. Chatbot və virtual assistentlər, məlumat analizi, 
              proqnozlaşdırma modelləri və təbii dil emalı sistemləri ilə müştərilərinizin 
              qarşılıqlı əlaqəsini yaxşılaşdırın. AI avtomatlaşdırma həlləri ilə 
              əməliyyat xərclərinizi azaldın və istehsalçılığı artırın.
            </p>
            <h3>
              <Link to="/blog/erp-sistemi" className="seo-content-link">ERP Sistemləri və Biznes İdarəetməsi</Link>
            </h3>
            <p>
              Müəssisənizin bütün bölmələrini vahid sistem altında idarə edin. Maliyyə 
              idarəetməsi, inventar sistemləri, insan resursları modulları və satış 
              idarəetməsi ilə tam funksional ERP həlləri təqdim edirik. ERP sistemləri 
              ilə məlumatların mərkəzləşdirilməsi, proseslərin optimallaşdırılması və 
              qərar vermə imkanlarının yaxşılaşdırılması mümkündür.
            </p>
            <h3>
              <Link to="/blog" className="seo-content-link">Rəqəmsal Marketinq Strategiyaları</Link>
            </h3>
            <p>
              Onlayn görünüşünüzü gücləndirərək, hədəf auditoriyanıza çatın. SEO 
              optimallaşdırması, sosial media marketinqi, kontent marketinqi və 
              rəqəmsal reklam kampaniyaları ilə brend tanınırlığınızı artırın. 
              Rəqəmsal marketinq xidmətləri ilə müştəri əsaslı strateji yanaşmalar 
              təqdim edir və ROI-nizi maksimuma çatdırırıq.
            </p>
            <h3>
              <Link to="/blog/veb-sayt-satis-aleti" className="seo-content-link">Veb Dizayn və E-Ticarət Həlləri</Link>
            </h3>
            <p>
              Müasir, responsive və performanslı veb saytlar hazırlayırıq. Veb dizayn 
              və inkişaf xidmətlərimiz mobil uyğunluq, istifadəçi dostu interfeyslər və 
              SEO-friendly struktur təmin edir. E-ticarət platformaları ilə onlayn 
              satış imkanlarınızı genişləndirin və müştəri təcrübəsini yaxşılaşdırın.
            </p>
            <h3>Niyə TrivaSoft?</h3>
            <p>
              5 ildən çox təcrübə, 100-dən çox uğurlu layihə və 50-dən çox məmnun müştəri 
              ilə, TrivaSoft Azərbaycanda rəqəmsal transformasiyanın aparıcı təminatçısıdır. 
              Komandamız 24/7 texniki dəstək, şəffaf kommunikasiya və müştəri məmnuniyyətinə 
              yönəlmiş yanaşma ilə fərqlənir. Biznesinizin rəqəmsal inkişafı üçün birlikdə 
              işləyək və növbəti səviyyəyə qaldıraq.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home

