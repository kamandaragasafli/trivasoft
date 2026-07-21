import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Blog.css'

const BlogWeb = () => {
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
        <title>Veb-sayt biznes üçün niyə satış alətidir? | CivilSofts Blog</title>
        <meta 
          name="description" 
          content="Veb-sayt satış aləti, online satış, satış artırılması və marketinq strategiyası haqqında məqalə. CivilSofts Web həlləri." 
        />
        <meta 
          name="keywords" 
          content="veb-sayt satış aləti, online satış, satış artırılması, veb dizayn, marketinq strategiyası, veb-sayt biznes üçün" 
        />
        <link rel="canonical" href="https://civilsofts.az/blog/website-sales-tool" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Veb-sayt biznes üçün niyə satış alətidir? | CivilSofts Blog" />
        <meta property="og:description" content="Veb-sayt satış aləti, online satış və satış artırılması haqqında məqalə. CivilSofts Web həlləri." />
        <meta property="og:url" content="https://civilsofts.az/blog/website-sales-tool" />
        <meta property="og:image" content="https://civilsofts.az/source/web-4.png" />
        <meta property="article:published_time" content="2025-01-25T00:00:00+04:00" />
        <meta property="article:author" content="CivilSofts" />
        <meta property="article:section" content="Web & Satış" />
        <meta property="article:tag" content="Veb-sayt" />
        <meta property="article:tag" content="Online Satış" />
        <meta property="article:tag" content="Marketinq" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Veb-sayt biznes üçün niyə satış alətidir?" />
        <meta name="twitter:description" content="Veb-sayt satış aləti və online satış haqqında məqalə. CivilSofts blog." />
        <meta name="twitter:image" content="https://civilsofts.az/source/web-4.png" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Veb-sayt biznes üçün niyə satış alətidir?",
            "description": "Veb-sayt satış aləti, online satış, satış artırılması və marketinq strategiyası haqqında məqalə.",
            "image": "https://civilsofts.az/source/web-4.png",
            "author": {
              "@type": "Organization",
              "name": "CivilSofts",
              "url": "https://civilsofts.az"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CivilSofts",
              "logo": {
                "@type": "ImageObject",
                "url": "https://civilsofts.az/favicon.png"
              }
            },
            "datePublished": "2025-01-25T00:00:00+04:00",
            "dateModified": "2025-01-25T00:00:00+04:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://civilsofts.az/blog/website-sales-tool"
            },
            "articleSection": "Web & Satış",
            "keywords": "veb-sayt satış aləti, online satış, satış artırılması, veb dizayn"
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
              <h1 className="blog-title" itemProp="headline">Veb-sayt biznes üçün niyə satış alətidir?</h1>
              <div className="blog-meta">
                <span className="blog-category" itemProp="articleSection">Web & Satış</span>
              </div>
              <meta itemProp="author" content="CivilSofts" />
              <meta itemProp="publisher" content="CivilSofts" />
            </header>

            <div className="blog-image">
              <img 
                src="/source/web-4.png" 
                alt="Veb-sayt Satış Aləti - Online Satış - CivilSofts" 
                className="blog-featured-image"
                loading="eager"
              />
              <p className="blog-image-caption">
                Müasir veb-sayt fasiləsiz işləyən satış menecerinə çevrilir
              </p>
            </div>

            <div className="blog-section">
              <p className="blog-intro">
                Bir çox sahibkar üçün veb-sayt hələ də sadəcə <strong>"şirkətin onlayn vizit kartı"</strong> kimi qəbul olunur. 
                Logo, əlaqə nömrəsi, bir neçə şəkil və vəssalam.
              </p>
              <p>
                Amma reallıq tam fərqlidir.
              </p>
              <p>
                Bu gün <strong>sayt</strong> sadəcə məlumat vermək üçün yox, <strong>online satış</strong> etmək, müştəri cəlb etmək və 
                <strong>satış artırılması</strong> üçün ən güclü alətlərdən biridir. Doğru qurulmuş veb-sayt, şirkət üçün fasiləsiz işləyən satış menecerinə çevrilir.
              </p>
            </div>

            <div className="blog-section">
              <h2>Veb-sayt anlayışı dəyişib</h2>
              
              <p><strong>Əvvəllər sayt:</strong></p>
              <ul className="blog-list">
                <li>"biz burdayıq" demək idi.</li>
              </ul>

              <p><strong>Bu gün isə sayt:</strong></p>
              <ul className="blog-list">
                <li>müştəri tapır,</li>
                <li>etibar yaradır,</li>
                <li>sualları cavablayır,</li>
                <li>satışa yönləndirir,</li>
                <li>nəticəni ölçür.</li>
              </ul>
              
              <div className="blog-highlight">
                <p>Yəni müasir veb-sayt <strong>marketinq və satış sisteminin mərkəzidir</strong>.</p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Online satış niyə məhz sayt üzərindən effektivdir?</h2>
              <p>
                Sosial şəbəkələr dəyişir, alqoritmlər yenilənir, hesablar bağlana bilər.
              </p>
              <p>Amma <strong>veb-sayt sənin nəzarətində olan platformadır</strong>.</p>
              
              <p>Online satış baxımından sayt:</p>
              <ul className="blog-list">
                <li>24/7 açıqdır,</li>
                <li>limitsiz müştəri qəbul edir,</li>
                <li>eyni anda yüzlərlə istifadəçiyə xidmət edir,</li>
                <li>reklamdan gələn trafiki satışa çevirir.</li>
              </ul>
              
              <div className="blog-warning">
                <p>
                  Əgər reklam edirsənsə, amma satış yoxdur — problem çox vaxt 
                  <strong>saytın satış üçün qurulmamasıdır</strong>.
                </p>
              </div>
            </div>

            <div className="blog-image">
              <img 
                src="/source/web-2.jpg" 
                alt="Online Satış və Satış Artırılması - CivilSofts" 
                className="blog-content-image"
                loading="lazy"
              />
            </div>

            <div className="blog-section">
              <h2>Satış artırılması sayt üzərindən necə baş verir?</h2>
              <p>
                Satış artırılması təkcə məhsul qiyməti ilə bağlı deyil. Əsas faktorlar bunlardır:
              </p>
              <ul className="blog-list">
                <li>istifadəçi təcrübəsi,</li>
                <li>sürət,</li>
                <li>etibar,</li>
                <li>düzgün yönləndirmə.</li>
              </ul>
              
              <p>Doğru qurulmuş sayt:</p>
              <ul className="blog-list">
                <li>ziyarətçini addım-addım qərara aparır,</li>
                <li>ehtiyacına uyğun mesaj verir,</li>
                <li>müraciəti asanlaşdırır.</li>
              </ul>
              
              <div className="blog-results">
                <p>Bu proses <strong>təsadüfi yox, planlı marketinq strategiyasıdır</strong>.</p>
              </div>
            </div>

            <div className="blog-section">
              <h2>Marketinq sayt olmadan niyə yarımçıq qalır?</h2>
              <p>Marketinq:</p>
              <ul className="blog-list">
                <li>reklam,</li>
                <li>sosial media,</li>
                <li>SEO</li>
              </ul>
              <p>kimi kanallardan ibarətdir. Amma bütün bu kanalların məqsədi birdir:</p>
              
              <div className="blog-highlight">
                <p>
                  <strong>👉 müştərini sayta gətirmək və satışı reallaşdırmaq</strong>.
                </p>
              </div>
              
              <p>Əgər sayt:</p>
              <ul className="blog-list">
                <li>yavaşdırsa,</li>
                <li>qarışıqdırsa,</li>
                <li>mobil uyğun deyilsə,</li>
                <li>mesajı aydın deyilsə,</li>
              </ul>
              <p>ən yaxşı marketinq belə nəticə verməyəcək.</p>
            </div>

            <div className="blog-section">
              <h2>Proqram və proqramlaşdırmanın rolu</h2>
              <p>
                Müasir sayt sadəcə dizayn deyil.
              </p>
              <p>
                O, <strong>proqramlaşdırma</strong> və düzgün <strong>proqram</strong> məntiqi üzərində qurulmalıdır.
              </p>
              
              <p>Məsələn:</p>
              <ul className="blog-list">
                <li>müraciət formaları,</li>
                <li>avtomatik cavablar,</li>
                <li>CRM inteqrasiyası,</li>
                <li>ChatBot,</li>
                <li>analitika alətləri</li>
              </ul>
              <p>bunların hamısı proqramlaşdırma ilə mümkün olur və saytı <strong>aktiv satış platformasına</strong> çevirir.</p>
            </div>

            <div className="blog-image">
              <img 
                src="/source/web-3.png" 
                alt="Proqramlaşdırma və Veb İnkişaf - CivilSofts" 
                className="blog-content-image"
                loading="lazy"
              />
            </div>

            <div className="blog-section">
              <h2>Sahibkar üçün əsas dəyişən düşüncə</h2>
              <p>
                Əsas problem texniki deyil, <strong>düşüncə problemidir</strong>.
              </p>
              
              <p>Sual belə olmalıdır:</p>
              <div className="blog-checklist">
                <p>❌ "Saytım varmı?"</p>
                <p>✅ "Saytım mənə müştəri gətirirmi?"</p>
              </div>
              
              <p>Əgər sayt:</p>
              <ul className="blog-list">
                <li>satış gətirmirsə,</li>
                <li>müraciət yaratmırsa,</li>
                <li>biznesə töhfə vermirsə,</li>
              </ul>
              <p>o sayt xərclə qurulmuş, amma <strong>işləməyən alətdir</strong>.</p>
            </div>

            <div className="blog-section">
              <h2>CivilSofts Web həlləri nəyi fərqli edir?</h2>
              <p>
                CivilSofts veb-saytı:
              </p>
              <ul className="blog-list">
                <li>dizayn layihəsi kimi yox,</li>
                <li><strong>satış və marketinq aləti</strong> kimi qurur.</li>
              </ul>
              
              <p>Biz:</p>
              <ul className="blog-list">
                <li>biznes modelini analiz edirik,</li>
                <li>hədəf müştərini müəyyən edirik,</li>
                <li>saytın strukturunu satış məqsədinə uyğun planlayırıq,</li>
                <li>SEO, sürət və mobil uyğunluğu birlikdə düşünürük.</li>
              </ul>
              
              <p>Nəticədə sayt:</p>
              <ul className="blog-list">
                <li>daha çox online satış yaradır,</li>
                <li>marketinq xərclərini səmərəli edir,</li>
                <li>brend etibarını gücləndirir.</li>
              </ul>
            </div>

            <div className="blog-section">
              <h2>Nəticə: Sayt xərclə yox, gəlirlə ölçülməlidir</h2>
              <p>Bu gün veb-sayt:</p>
              <ul className="blog-list">
                <li>biznes üçün məcburi xərclərdən biri deyil,</li>
                <li><strong>investisiyadır</strong>.</li>
              </ul>
              
              <p>Doğru qurulmuş sayt:</p>
              <ul className="blog-list">
                <li>satış artırır,</li>
                <li>marketinqi gücləndirir,</li>
                <li>biznesi böyüdür.</li>
              </ul>
              
              <p>
                Əgər saytın bu funksiyaları yerinə yetirmirsə, problem saytda yox — <strong>yanaşmadadır</strong>.
              </p>
            </div>

            <div className="blog-cta">
              <h3>CivilSofts Web Həlləri</h3>
              <p>Satış üçün qurulan saytlar. Ölçülə bilən nəticələr.</p>
              <div className="blog-cta-buttons">
                <Link to="/services/web" className="btn btn-primary">
                  Web Xidmətlərimiz
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Əlaqə Saxlayın
                </Link>
              </div>
            </div>

            <div className="blog-other-posts">
              <h3>Digər Məqalələr</h3>
              <div className="blog-other-posts-grid">
                <Link to="/blog/ai-automation" className="blog-other-post-card">
                  <h4>AI Avtomatlaşdırma nədir və bizneslər üçün nəyi dəyişir?</h4>
                  <p>ChatBot-ların rolu, işçi xərclərinin azalması və zamana qənaət...</p>
                  <span className="blog-post-link">Oxu →</span>
                </Link>
                <Link to="/blog/erp-system" className="blog-other-post-card">
                  <h4>ERP sistemi nədir və nə zaman lazımdır?</h4>
                  <p>Biznes idarəetməsi, Excel riskləri və böyük bizneslər üçün ERP...</p>
                  <span className="blog-post-link">Oxu →</span>
                </Link>
                <Link to="/blog/marketing-strategy" className="blog-other-post-card">
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

export default BlogWeb

