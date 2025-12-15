import { useState, useEffect, useRef } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const heroRef = useRef(null)
  const faqItemsRef = useRef([])

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

    faqItemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      faqItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const faqs = [
    {
      question: 'TrivaSoft nə xidmətlər təqdim edir?',
      answer: 'TrivaSoft AI avtomatlaşdırma, ERP sistemləri və rəqəmsal marketinq xidmətləri təqdim edir. Biznesinizin ehtiyaclarına uyğun geniş spektrli həllər təklif edirik.'
    },
    {
      question: 'Layihə nə qədər müddətdə tamamlanır?',
      answer: 'Layihənin müddəti onun mürəkkəbliyindən və həcmindən asılıdır. Kiçik layihələr 2-4 həftə, orta layihələr 1-3 ay, böyük layihələr isə 3-6 ay müddətində tamamlanır.'
    },
    {
      question: 'Xidmətlərinizin qiyməti nə qədərdir?',
      answer: 'Hər layihə unikaldır və müştərinin ehtiyaclarına görə fərqlənir. Dəqiq qiymət təklifi üçün bizimlə əlaqə saxlayın və biz sizin üçün ən uyğun paketi hazırlayaq.'
    },
    {
      question: 'Dəstək xidməti təqdim edirsiniz?',
      answer: 'Bəli, bütün layihələrimizə 24/7 texniki dəstək xidməti daxildir. Komandamız hər zaman sizin suallarınıza cavab verməyə hazırdır.'
    },
    {
      question: 'ERP sistemini mövcud sistemimizlə inteqrasiya etmək olarmı?',
      answer: 'Bəli, ERP sistemlərimiz müxtəlif sistemlərlə inteqrasiya oluna bilər. Komandamız mövcud infrastrukturunuzu təhlil edərək ən uyğun inteqrasiya həllini təklif edəcək.'
    },
    {
      question: 'AI avtomatlaşdırma hansı sahələrdə tətbiq oluna bilər?',
      answer: 'AI avtomatlaşdırma müştəri xidmətləri, məlumat analizi, inventar idarəetməsi, marketinq kampaniyaları və daha bir çox biznes proseslərində tətbiq oluna bilər.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq">
      <section className="faq-hero">
        <div className="faq-hero-background"></div>
        <div className="faq-hero-container" ref={heroRef}>
          <h1 className="faq-title">Tez-tez Verilən Suallar</h1>
          <p className="faq-subtitle">
            Suallarınızın cavablarını burada tapa bilərsiniz
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              ref={(el) => (faqItemsRef.current[index] = el)}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQ

