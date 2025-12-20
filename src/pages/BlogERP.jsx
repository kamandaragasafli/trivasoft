import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Blog.css'

const BlogERP = () => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

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

    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll('.blog-section, .blog-image')
      sections.forEach((section) => observer.observe(section))
    }

    return () => {
      if (contentRef.current) {
        const sections = contentRef.current.querySelectorAll('.blog-section, .blog-image')
        sections.forEach((section) => observer.unobserve(section))
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>ERP sistemi nədir və nə zaman lazımdır? | TrivaSoft Blog</title>
        <meta 
          name="description" 
          content="ERP sistemi, biznes idarəetməsi, Excel riskləri və böyük bizneslər üçün ERP-nin əhəmiyyəti haqqında məqalə. TrivaSoft ERP həlləri." 
        />
        <meta 
          name="keywords" 
          content="ERP sistemi, ERP nədir, biznes idarəetmə sistemi, Excel riskləri, böyük bizneslər üçün ERP, ERP Azərbaycan" 
        />
        <link rel="canonical" href="https://trivasoft.az/blog/erp-sistemi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ERP sistemi nədir və nə zaman lazımdır? | TrivaSoft Blog" />
        <meta property="og:description" content="ERP sistemi, biznes idarəetməsi və Excel riskləri haqqında məqalə. TrivaSoft ERP həlləri." />
        <meta property="og:url" content="https://trivasoft.az/blog/erp-sistemi" />
        <meta property="og:image" content="https://trivasoft.az/source/erp-1.jpg" />
        <meta property="article:published_time" content="2025-01-20T00:00:00+04:00" />
        <meta property="article:author" content="TrivaSoft" />
        <meta property="article:section" content="ERP & Biznes İdarəetməsi" />
        <meta property="article:tag" content="ERP" />
        <meta property="article:tag" content="Biznes İdarəetməsi" />
        <meta property="article:tag" content="Excel" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERP sistemi nədir və nə zaman lazımdır?" />
        <meta name="twitter:description" content="ERP sistemi və biznes idarəetməsi haqqında məqalə. TrivaSoft blog." />
        <meta name="twitter:image" content="https://trivasoft.az/source/erp-1.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "ERP sistemi nədir və nə zaman lazımdır?",
            "description": "ERP sistemi, biznes idarəetməsi, Excel riskləri və böyük bizneslər üçün ERP-nin əhəmiyyəti haqqında məqalə.",
            "image": "https://trivasoft.az/source/erp-1.jpg",
            "author": {
              "@type": "Organization",
              "name": "TrivaSoft",
              "url": "https://trivasoft.az"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TrivaSoft",
              "logo": {
                "@type": "ImageObject",
                "url": "https://trivasoft.az/favicon.png"
              }
            },
            "datePublished": "2025-01-20T00:00:00+04:00",
            "dateModified": "2025-01-20T00:00:00+04:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://trivasoft.az/blog/erp-sistemi"
            },
            "articleSection": "ERP & Biznes İdarəetməsi",
            "keywords": "ERP sistemi, ERP nədir, biznes idarəetmə sistemi, Excel riskləri"
          })}
        </script>
      </Helmet>
      <div className="blog-page">
        <section className="blog-hero">
          <div className="blog-hero-background"></div>
          <div className="blog-hero-container" ref={heroRef}>
            <Link to="/blog" className="back-link">← Bütün məqalələrə qayıt</Link>
            <h2 className="blog-hero-title">Blog</h2>
            <p className="blog-hero-subtitle">
              Rəqəmsal dünyada innovasiya və texnologiya haqqında məqalələr
            </p>
          </div>
        </section>

        <article className="blog-article" ref={contentRef} itemScope itemType="https://schema.org/BlogPosting">
          <div className="blog-container">
            <header className="blog-header" itemProp="headline">
              <h1 className="blog-title" itemProp="headline">ERP sistemi nədir və nə zaman lazımdır?</h1>
              <div className="blog-meta">
                <span className="blog-category" itemProp="articleSection">ERP & Biznes İdarəetməsi</span>
              </div>
              <meta itemProp="author" content="TrivaSoft" />
              <meta itemProp="publisher" content="TrivaSoft" />
            </header>

            <div className="blog-image">
              <img 
                src="/source/erp-1.jpg" 
                alt="ERP Sistemi - Biznes İdarəetməsi - TrivaSoft" 
                className="blog-featured-image"
                loading="eager"
              />
              <p className="blog-image-caption">
                ERP sistemi şirkətin bütün proseslərini vahid platformada idarə etməyə imkan verir
              </p>
            </div>

            <div className="blog-section">
              <p className="blog-intro">
                Biznes böyüdükcə idarəetmə çətinləşir. Əvvəllər Excel cədvəlləri ilə rahatlıqla aparılan proseslər zamanla qarışır, 
                məlumatlar dağılır və nəzarət zəifləyir. Bu mərhələdə bir çox <strong>şirkətlər</strong> eyni sualı verir:
              </p>
              <div className="blog-highlight">
                <p>
                  <strong>ERP nədir və doğrudanmı bizə lazımdır?</strong>
                </p>
              </div>
              <p>
                Bu yazıda ERP sisteminin nə olduğunu, <strong>biznesin idarə olunması</strong> üçün nəyi dəyişdiyini, 
                <strong>böyük bizneslər</strong> və sürətlə böyüyən şirkətlər üçün niyə vacib olduğunu, həmçinin 
                <strong>Excel-in risklərini</strong> aydın və peşəkar dildə izah edəcəyik.
              </p>
            </div>

            <div className="blog-section">
              <h2>ERP nədir?</h2>
              <p>
                <strong>ERP (Enterprise Resource Planning)</strong> — şirkətin bütün əsas proseslərini 
                <strong>vahid sistem üzərindən idarə etməyə</strong> imkan verən proqram təminatıdır.
              </p>
              <p>ERP sistemi adətən aşağıdakı sahələri bir platformada birləşdirir:</p>
              <ul className="blog-list">
                <li>maliyyə və mühasibatlıq,</li>
                <li>satış və müştəri idarəetməsi,</li>
                <li>anbar və stok nəzarəti,</li>
                <li>insan resursları,</li>
                <li>hesabat və analitika.</li>
              </ul>
              <div className="blog-highlight">
                <p>Sadə desək, ERP: <strong>şirkətin "beyni" rolunu oynayır.</strong></p>
              </div>
            </div>

            <div className="blog-section">
              <h2>ERP sistemi biznesin idarə olunmasını necə dəyişir?</h2>
              <p>Ən böyük dəyişiklik <strong>nəzarət və şəffaflıqdır</strong>.</p>
              
              <h3>ERP olmadan:</h3>
              <ul className="blog-list">
                <li>məlumatlar fərqli fayllardadır,</li>
                <li>hər şöbə öz cədvəli ilə işləyir,</li>
                <li>rəhbərlik real vəziyyəti gec görür.</li>
              </ul>

              <h3>ERP ilə isə:</h3>
              <ul className="blog-list">
                <li>bütün məlumatlar tək mərkəzdə toplanır,</li>
                <li>dəyişikliklər real vaxtda görünür,</li>
                <li>qərarlar faktlara əsaslanır.</li>
              </ul>
              <p>
                Bu, <strong>biznesin idarə olunması</strong> üçün keyfiyyətcə tam fərqli mərhələdir.
              </p>
            </div>

            <div className="blog-image">
              <img 
                src="/source/erp-2.png" 
                alt="Excel vs ERP - Risk Müqayisəsi - TrivaSoft" 
                className="blog-content-image"
                loading="lazy"
              />
            </div>

            <div className="blog-section">
              <h2>Excel ilə biznes idarəetmənin riskləri</h2>
              <p>
                Bir çox şirkət hələ də Excel-dən əsas idarəetmə aləti kimi istifadə edir. Excel faydalıdır, amma 
                <strong>ERP deyil</strong>.
              </p>
              
              <h3>Excel-in əsas riskləri:</h3>
              <ul className="blog-list">
                <li>Məlumatların silinməsi və ya səhv yazılması</li>
                <li>Faylların köhnəlməsi və uyğunsuzluq</li>
                <li>Eyni məlumatın bir neçə versiyasının yaranması</li>
                <li>İnsan faktorundan qaynaqlanan səhvlər</li>
                <li>Real vaxtda nəzarətin olmaması</li>
              </ul>
              <div className="blog-warning">
                <p>
                  Xüsusilə <strong>böyük bizneslər</strong> və sürətlə böyüyən şirkətlər üçün Excel: 
                  <strong>idarəetməni ləngidən və risk yaradan alətə çevrilir.</strong>
                </p>
              </div>
            </div>

            <div className="blog-section">
              <h2>ERP sistemi nə zaman lazımdır?</h2>
              <p>ERP sistemi adətən aşağıdakı mərhələdə zəruri olur:</p>
              
              <h3>1. Şirkət böyüyür</h3>
              <p>İşçi sayı artır, proseslər çoxalır, məlumat axını sürətlənir.</p>

              <h3>2. Şöbələr arasında əlaqə zəifləyir</h3>
              <p>Satış, maliyyə və anbar fərqli cədvəllərlə işləyir.</p>

              <h3>3. Hesabatlar gecikir</h3>
              <p>Rəhbərlik real vəziyyəti ancaq ay sonunda görə bilir.</p>

              <h3>4. Səhvlər və itkilər artır</h3>
              <p>Stok fərqləri, maliyyə uyğunsuzluqları, planlama problemləri yaranır.</p>
              
              <div className="blog-results">
                <p>
                  Bu mərhələdə ERP artıq <strong>lüks deyil, zərurət</strong> olur.
                </p>
              </div>
            </div>

            <div className="blog-section">
              <h2>ERP sistemi hansı şirkətlər üçün daha uyğundur?</h2>
              <p>
                ERP xüsusilə aşağıdakı <strong>şirkətlər</strong> üçün böyük üstünlük yaradır:
              </p>
              <ul className="blog-list">
                <li>orta və böyük bizneslər,</li>
                <li>istehsal və ticarət şirkətləri,</li>
                <li>distribusiya və anbarla işləyənlər,</li>
                <li>çoxşöbəli strukturu olan müəssisələr,</li>
                <li>sürətlə böyüyən startaplar.</li>
              </ul>
              <div className="blog-highlight">
                <p>Bu tip bizneslərdə ERP: <strong>xaosu sistemə çevirir.</strong></p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Böyük bizneslər üçün ERP-nin rolu</h2>
              <p>
                <strong>Böyük bizneslər</strong> üçün əsas problem əməliyyat deyil, <strong>nəzarətdir</strong>.
              </p>
              <p>ERP sistemi:</p>
              <ul className="blog-list">
                <li>rəhbərliyə real vaxtda məlumat verir,</li>
                <li>riskləri əvvəlcədən göstərir,</li>
                <li>strategiyanı dəstəkləyən analitika yaradır.</li>
              </ul>
              <p>
                Bu səbəbdən iri şirkətlər ERP-ni <strong>idarəetmənin ayrılmaz hissəsi</strong> kimi qəbul edir.
              </p>
            </div>

            <div className="blog-section">
              <h2>TrivaSoft-un ERP yanaşması</h2>
              <p>
                TrivaSoft ERP həllərinə texniki proqram kimi yox, <strong>biznes idarəetmə aləti</strong> kimi yanaşır.
              </p>
              <p>Biz:</p>
              <ul className="blog-list">
                <li>şirkətin proseslərini analiz edirik,</li>
                <li>ehtiyac olmayan modulları yükləmirik,</li>
                <li>ERP-ni biznesin ölçüsünə uyğun qururuq,</li>
                <li>mövcud sistemlərlə inteqrasiya edirik.</li>
              </ul>
              <div className="blog-highlight">
                <p>Məqsədimiz: <strong>ERP-ni çətin deyil, faydalı etməkdir.</strong></p>
              </div>
            </div>

            <div className="blog-image">
              <img 
                src="/source/erp-3.png" 
                alt="ERP Sisteminin Biznesə Faydaları - TrivaSoft" 
                className="blog-content-image"
                loading="lazy"
              />
            </div>

            <div className="blog-section">
              <h2>Nəticə: ERP sistemi vaxtında qurulmalıdır</h2>
              <p>ERP sistemi çox gec qurulanda:</p>
              <ul className="blog-list">
                <li>səhvlər artmış olur,</li>
                <li>proseslər artıq qarışmış olur,</li>
                <li>dəyişiklik daha çətin olur.</li>
              </ul>
              <p>Düzgün vaxtda qurulan ERP isə:</p>
              <ul className="blog-list">
                <li><strong>biznesin idarə olunmasını</strong> asanlaşdırır,</li>
                <li>riskləri azaldır,</li>
                <li>böyüməni dəstəkləyir.</li>
              </ul>
              <p>
                Əgər şirkətiniz Excel ilə idarəetmənin sərhədlərinə çatıbsa, bu artıq açıq siqnaldır.
              </p>
            </div>

            <div className="blog-cta">
              <h3>TrivaSoft ERP Həlləri</h3>
              <p>Sistemli idarəetmə. Şəffaf qərarlar. Dayanıqlı biznes.</p>
              <div className="blog-cta-buttons">
                <Link to="/xidmetler/erp" className="btn btn-primary">
                  ERP Xidmətlərimiz
                </Link>
                <Link to="/elaqe" className="btn btn-secondary">
                  Əlaqə Saxlayın
                </Link>
              </div>
            </div>

            <div className="blog-other-posts">
              <h3>Digər Məqalələr</h3>
              <div className="blog-other-posts-grid">
                <Link to="/blog" className="blog-other-post-card">
                  <h4>AI Avtomatlaşdırma nədir və bizneslər üçün nəyi dəyişir?</h4>
                  <p>ChatBot-ların rolu, işçi xərclərinin azalması və zamana qənaət...</p>
                  <span className="blog-post-link">Oxu →</span>
                </Link>
                <Link to="/blog/veb-sayt-satis-aleti" className="blog-other-post-card">
                  <h4>Veb-sayt biznes üçün niyə satış alətidir?</h4>
                  <p>Online satış, satış artırılması və marketinq strategiyası haqqında...</p>
                  <span className="blog-post-link">Oxu →</span>
                </Link>
                <Link to="/blog/marketinq-strategiyasi" className="blog-other-post-card">
                  <h4>Marketinq strategiyası olmayan biznes niyə böyümür?</h4>
                  <p>Rəqəmsal marketinq, SMM, kontent marketinqi və satış qıfı haqqında...</p>
                  <span className="blog-post-link">Oxu →</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default BlogERP

