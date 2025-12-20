import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Blog.css'

const BlogMarketing = () => {
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
        <title>Marketinq strategiyası olmayan biznes niyə böyümür? | TrivaSoft Blog</title>
        <meta 
          name="description" 
          content="Marketinq strategiyası, rəqəmsal marketinq, SMM, kontent marketinqi və satış qıfı haqqında məqalə. TrivaSoft Marketinq xidmətləri." 
        />
        <meta 
          name="keywords" 
          content="marketinq strategiyası, rəqəmsal marketinq, SMM, kontent marketinqi, satış qıfı, marketinq planı, brend strategiyası" 
        />
        <link rel="canonical" href="https://trivasoft.az/blog/marketinq-strategiyasi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Marketinq strategiyası olmayan biznes niyə böyümür? | TrivaSoft Blog" />
        <meta property="og:description" content="Marketinq strategiyası, rəqəmsal marketinq və SMM haqqında məqalə. TrivaSoft Marketinq xidmətləri." />
        <meta property="og:url" content="https://trivasoft.az/blog/marketinq-strategiyasi" />
        <meta property="og:image" content="https://trivasoft.az/source/marketing-1.jpg" />
        <meta property="article:published_time" content="2025-01-30T00:00:00+04:00" />
        <meta property="article:author" content="TrivaSoft" />
        <meta property="article:section" content="Marketinq & Strategiya" />
        <meta property="article:tag" content="Marketinq Strategiyası" />
        <meta property="article:tag" content="Rəqəmsal Marketinq" />
        <meta property="article:tag" content="SMM" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketinq strategiyası olmayan biznes niyə böyümür?" />
        <meta name="twitter:description" content="Marketinq strategiyası və rəqəmsal marketinq haqqında məqalə. TrivaSoft blog." />
        <meta name="twitter:image" content="https://trivasoft.az/source/marketing-1.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Marketinq strategiyası olmayan biznes niyə böyümür?",
            "description": "Marketinq strategiyası, rəqəmsal marketinq, SMM, kontent marketinqi və satış qıfı haqqında məqalə.",
            "image": "https://trivasoft.az/source/marketing-1.jpg",
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
            "datePublished": "2025-01-30T00:00:00+04:00",
            "dateModified": "2025-01-30T00:00:00+04:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://trivasoft.az/blog/marketinq-strategiyasi"
            },
            "articleSection": "Marketinq & Strategiya",
            "keywords": "marketinq strategiyası, rəqəmsal marketinq, SMM, kontent marketinqi"
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
              <h1 className="blog-title" itemProp="headline">Marketinq strategiyası olmayan biznes niyə böyümür?</h1>
              <div className="blog-meta">
                <span className="blog-category" itemProp="articleSection">Marketinq & Strategiya</span>
              </div>
              <meta itemProp="author" content="TrivaSoft" />
              <meta itemProp="publisher" content="TrivaSoft" />
            </header>

            <div className="blog-image">
              <img 
                src="/source/marketing-1.jpg" 
                alt="Marketinq Strategiyası - Rəqəmsal Marketinq - TrivaSoft" 
                className="blog-featured-image"
                loading="eager"
              />
              <p className="blog-image-caption">
                Marketinq strategiyası biznesin böyümə mexanizmidir
              </p>
            </div>

            <div className="blog-section">
              <p className="blog-intro">
                Bir çox sahibkar belə düşünür:
              </p>
              <div className="blog-highlight">
                <p>
                  "Reklam veririk, sosial mediada paylaşım edirik, niyə satış artmır?"
                </p>
              </div>
              <p>
                Cavab adətən çox sadə, amma acıdır: <strong>çünki marketinq strategiyası yoxdur</strong>.
              </p>
              <p>
                Bu gün biznesin böyüməməsinin əsas səbəbi məhsulun zəifliyi deyil, 
                <strong>rəqəmsal marketinqin plansız aparılmasıdır</strong>. Marketinq təkcə reklam deyil. 
                Marketinq — <strong>düşünülmüş, mərhələli və ölçülə bilən bir sistemdir</strong>.
              </p>
            </div>

            <div className="blog-section">
              <h2>Marketinq strategiyası nədir və niyə vacibdir?</h2>
              <p>
                Marketinq strategiyası biznesin:
              </p>
              <ul className="blog-list">
                <li>kimə satdığını,</li>
                <li>nə satdığını,</li>
                <li>hansı kanalla satdığını,</li>
                <li>necə satdığını</li>
              </ul>
              <p>aydınlaşdıran yol xəritəsidir.</p>
              
              <p><strong>Strategiya olmadan edilən marketinq:</strong></p>
              <ul className="blog-list">
                <li>təsadüfi paylaşımlar,</li>
                <li>plansız reklamlar,</li>
                <li>ölçülməyən nəticələr</li>
              </ul>
              <p>deməkdir.</p>
              
              <div className="blog-warning">
                <p>Bu isə böyümə yox, <strong>resurs itkisi</strong> yaradır.</p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Rəqəmsal marketinq plansız olarsa nə baş verir?</h2>
              <p>
                Bu gün bir çox biznes <strong>rəqəmsal marketinq</strong> edir, amma nəticə almır. 
                Səbəb texniki deyil, stratejidir.
              </p>
              
              <p><strong>Plansız rəqəmsal marketinqin nəticələri:</strong></p>
              <ul className="blog-list">
                <li>reklam xərci artır, satış artmır,</li>
                <li>SMM var, amma mesaj yoxdur,</li>
                <li>kontent paylaşılır, amma müştəri cəlb olunmur,</li>
                <li>dizayn var, amma brend tanınmır.</li>
              </ul>
              
              <div className="blog-results">
                <p>
                  Çünki bütün bu alətlər <strong>vahid strategiyaya bağlı deyil</strong>.
                </p>
              </div>
            </div>

            <div className="blog-image">
              <img 
                src="/source/marketing-2.jpg" 
                alt="SMM və Kontent Marketinqi - TrivaSoft" 
                className="blog-content-image"
                loading="lazy"
              />
            </div>

            <div className="blog-section">
              <h2>SMM təkbaşına niyə biznesi böyütmür?</h2>
              <p>
                <strong>SMM (Social Media Marketing)</strong> çox vaxt səhv anlaşılır. 
                Sadəcə paylaşım etmək SMM deyil.
              </p>
              
              <p><strong>Əgər:</strong></p>
              <ul className="blog-list">
                <li>kontent strategiyası yoxdursa,</li>
                <li>paylaşımın məqsədi bilinmirsə,</li>
                <li>satış qıfı qurulmayıbsa,</li>
              </ul>
              <p>SMM sadəcə aktivlik yaradır, <strong>satış yox</strong>.</p>
              
              <p><strong>Effektiv SMM:</strong></p>
              <ul className="blog-list">
                <li>müştərini tanıyır,</li>
                <li>maraq yaradır,</li>
                <li>etibar qurur,</li>
                <li>satışa yönləndirir.</li>
              </ul>
            </div>

            <div className="blog-section">
              <h2>Kontent və dizayn niyə birlikdə düşünülməlidir?</h2>
              <p>
                Bir çox biznes ya yaxşı dizayn edir, ya da sadəcə mətn yazır. Halbuki:
              </p>
              <ul className="blog-list">
                <li><strong>kontent</strong> mesajdır,</li>
                <li><strong>dizayn</strong> isə o mesajın necə qəbul olunacağını müəyyən edir.</li>
              </ul>
              
              <p>Zəif dizayn güclü mesajı öldürür.</p>
              <p>Zəif mesaj isə ən yaxşı dizaynı belə dəyərsiz edir.</p>
              
              <div className="blog-highlight">
                <p>
                  Peşəkar marketinqdə kontent və dizayn <strong>bir strategiyanın iki tərəfidir</strong>.
                </p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Reklam niyə satış gətirmir?</h2>
              <p>
                Ən çox verilən suallardan biri budur.
              </p>
              <p>
                Cavab çox vaxt budur: <strong>satış qıfı yoxdur</strong>.
              </p>
              
              <p>
                Reklam təkcə müştərini cəlb etməlidir, satışı bağlamaq üçün isə:
              </p>
              <ul className="blog-list">
                <li>düzgün yönləndirmə,</li>
                <li>uyğun təklif,</li>
                <li>ardıcıl mesajlar lazımdır.</li>
              </ul>
              
              <div className="blog-results">
                <p>Reklam satış qıfının yalnız <strong>ilk mərhələsidir</strong>.</p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Satış qıfı olmadan böyümə mümkündürmü?</h2>
              <p>
                Qısa cavab: <strong>xeyr</strong>.
              </p>
              
              <p>
                <strong>Satış qıfı</strong> müştərinin:
              </p>
              <ol className="blog-list" style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
                <li>diqqətini çəkmə,</li>
                <li>maraq yaratma,</li>
                <li>qərar vermə,</li>
                <li>alış etmə</li>
              </ol>
              <p>mərhələlərini sistemli şəkildə idarə edir.</p>
              
              <p><strong>Satış qıfı olmayan biznes:</strong></p>
              <ul className="blog-list">
                <li>müştərini yarıyolda itirir,</li>
                <li>potensialı dəyərləndirmir,</li>
                <li>böyüməni təsadüfə buraxır.</li>
              </ul>
            </div>

            <div className="blog-image">
              <img 
                src="/source/marketing-3.png" 
                alt="4P Modeli və Marketinq Strategiyası - TrivaSoft" 
                className="blog-content-image"
                loading="lazy"
              />
            </div>

            <div className="blog-section">
              <h2>4P modeli olmadan strategiya yarımçıqdır</h2>
              <p>
                Klassik, amma hələ də ən effektiv model: <strong>4P</strong>
              </p>
              
              <ul className="blog-list">
                <li><strong>Product (Məhsul)</strong> – nə satırsan?</li>
                <li><strong>Price (Qiymət)</strong> – necə qiymətləndirirsən?</li>
                <li><strong>Place (Paylama)</strong> – harada satırsan?</li>
                <li><strong>Promotion (Təqdimat)</strong> – necə tanıdırsan?</li>
              </ul>
              
              <p>
                Bir çox biznes yalnız "Promotion"a fokuslanır. Halbuki digər 3P olmadan reklam 
                <strong>boş səs-küydür</strong>.
              </p>
            </div>

            <div className="blog-section">
              <h2>Marketinq strategiyası biznes düşüncəsini necə dəyişir?</h2>
              <p><strong>Strategiyası olan biznes:</strong></p>
              <ul className="blog-list">
                <li>nə etdiyini bilir,</li>
                <li>nəyi niyə etdiyini anlayır,</li>
                <li>nəticəni ölçür,</li>
                <li>qərarları emosiyaya yox, dataya əsaslandırır.</li>
              </ul>
              
              <p><strong>Strategiyası olmayan biznes isə:</strong></p>
              <ul className="blog-list">
                <li>sınaq-yanılma ilə gedir,</li>
                <li>büdcəni təsadüfi xərcləyir,</li>
                <li>böyüməni gecikdirir.</li>
              </ul>
            </div>

            <div className="blog-section">
              <h2>TrivaSoft-un marketinq yanaşması</h2>
              <p>
                TrivaSoft marketinqi:
              </p>
              <ul className="blog-list">
                <li>təkcə reklam kimi yox,</li>
                <li><strong>biznesin böyümə mexanizmi</strong> kimi qurur.</li>
              </ul>
              
              <p>Biz:</p>
              <ul className="blog-list">
                <li>rəqəmsal marketinq strategiyası hazırlayırıq,</li>
                <li>SMM, kontent və dizaynı vahid sistemə salırıq,</li>
                <li>reklamı satış qıfı ilə bağlayırıq,</li>
                <li>nəticəni ölçülə bilən edirik.</li>
              </ul>
              
              <div className="blog-highlight">
                <p>
                  Məqsədimiz: <strong>marketinqi xərclə yox, gəlirlə ölçməkdir.</strong>
                </p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Nəticə: Strategiya yoxdursa, böyümə yoxdur</h2>
              <p>
                Bu gün böyüməyən bizneslərin problemi:
              </p>
              <ul className="blog-list">
                <li>məhsulun zəifliyi deyil,</li>
                <li>bazarın kiçikliyi deyil,</li>
              </ul>
              <p>
                <strong>marketinq strategiyasının olmamasıdır</strong>.
              </p>
              
              <p>
                Əgər biznesiniz böyümürsə, sualı belə verin:
              </p>
              <div className="blog-checklist">
                <p>
                  <strong>"Biz marketinq edirik, yoxsa sadəcə nəsə paylaşırıq?"</strong>
                </p>
              </div>
            </div>

            <div className="blog-cta">
              <h3>TrivaSoft Marketinq Xidmətləri</h3>
              <p>Strategiya. Sistem. Ölçülə bilən böyümə.</p>
              <div className="blog-cta-buttons">
                <Link to="/xidmetler/marketinq" className="btn btn-primary">
                  Marketinq Xidmətlərimiz
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
                <Link to="/blog/erp-sistemi" className="blog-other-post-card">
                  <h4>ERP sistemi nədir və nə zaman lazımdır?</h4>
                  <p>Biznes idarəetməsi, Excel riskləri və böyük bizneslər üçün ERP...</p>
                  <span className="blog-post-link">Oxu →</span>
                </Link>
                <Link to="/blog/veb-sayt-satis-aleti" className="blog-other-post-card">
                  <h4>Veb-sayt biznes üçün niyə satış alətidir?</h4>
                  <p>Online satış, satış artırılması və marketinq strategiyası haqqında...</p>
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

export default BlogMarketing

