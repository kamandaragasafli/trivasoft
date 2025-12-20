import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Blog.css'

const BlogList = () => {
  const heroRef = useRef(null)
  const cardsRef = useRef([])

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'AI Avtomatlaşdırma nədir və bizneslər üçün nəyi dəyişir?',
      excerpt: 'ChatBot-ların rolu, işçi xərclərinin azalması və zamana qənaət. AI avtomatlaşdırma biznes proseslərini köklü şəkildə dəyişir.',
      image: '/source/ai-1.jpg',
      link: '/blog/ai-automation',
      category: 'AI & Avtomatlaşdırma'
    },
    {
      id: 2,
      title: 'ERP sistemi nədir və nə zaman lazımdır?',
      excerpt: 'Biznes idarəetməsi, Excel riskləri və böyük bizneslər üçün ERP-nin əhəmiyyəti. Sistemli idarəetmə üçün vacib həllər.',
      image: '/source/erp-1.jpg',
      link: '/blog/erp-system',
      category: 'ERP & Biznes İdarəetməsi'
    },
    {
      id: 3,
      title: 'Veb-sayt biznes üçün niyə satış alətidir?',
      excerpt: 'Online satış, satış artırılması və marketinq strategiyası. Müasir veb-sayt fasiləsiz işləyən satış menecerinə çevrilir.',
      image: '/source/web-4.png',
      link: '/blog/website-sales-tool',
      category: 'Web & Satış'
    },
    {
      id: 4,
      title: 'Marketinq strategiyası olmayan biznes niyə böyümür?',
      excerpt: 'Rəqəmsal marketinq, SMM, kontent marketinqi və satış qıfı. Marketinq strategiyası biznesin böyümə mexanizmidir.',
      image: '/source/marketing-1.jpg',
      link: '/blog/marketing-strategy',
      category: 'Marketinq & Strategiya'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blog - Rəqəmsal Biznes və Texnologiya Məqalələri | TrivaSoft</title>
        <meta 
          name="description" 
          content="AI avtomatlaşdırma, ERP sistemləri, rəqəmsal marketinq, veb dizayn və biznes transformasiyası haqqında məqalələr. TrivaSoft blog." 
        />
        <meta 
          name="keywords" 
          content="AI avtomatlaşdırma blog, ERP blog, rəqəmsal marketinq məqalələri, veb dizayn blog, biznes strategiyası" 
        />
        <link rel="canonical" href="https://trivasoft.az/blog" />
        <meta property="og:title" content="Blog - Rəqəmsal Biznes və Texnologiya Məqalələri | TrivaSoft" />
        <meta property="og:description" content="AI, ERP, marketinq və veb texnologiyaları haqqında məqalələr. TrivaSoft blog." />
        <meta property="og:url" content="https://trivasoft.az/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="blog-page">
        <section className="blog-hero">
          <div className="blog-hero-background"></div>
          <div className="blog-hero-container" ref={heroRef}>
            <h2 className="blog-hero-title">Blog</h2>
            <p className="blog-hero-subtitle">
              Rəqəmsal dünyada innovasiya və texnologiya haqqında məqalələr
            </p>
          </div>
        </section>

        <section className="blog-article">
          <div className="blog-container">
            <div className="blog-list-grid">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={post.link}
                  className="blog-list-card"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="blog-list-card-image-wrapper">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="blog-list-card-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-list-card-content">
                    <span className="blog-list-card-category">{post.category}</span>
                    <h3 className="blog-list-card-title">{post.title}</h3>
                    <p className="blog-list-card-excerpt">{post.excerpt}</p>
                    <div className="blog-list-card-meta">
                      <span className="blog-list-card-link">Oxu →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogList

