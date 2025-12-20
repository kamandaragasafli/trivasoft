import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const answerRefs = useRef([])

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
    setOpenIndex(prev => prev === index ? null : index)
  }

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.height = `${ref.scrollHeight}px`
        } else {
          ref.style.height = '0px'
        }
      }
    })
  }, [openIndex])

  return (
    <>
      <Helmet>
        <title>FAQ - Tez-tez Verilən Suallar | TrivaSoft</title>
        <meta 
          name="description" 
          content="TrivaSoft xidmətləri haqqında tez-tez verilən suallar və cavablar. AI, ERP, marketinq və veb xidmətləri haqqında məlumat." 
        />
        <meta 
          name="keywords" 
          content="TrivaSoft FAQ, tez-tez verilən suallar, AI xidmətləri sualları, ERP sualları" 
        />
        <link rel="canonical" href="https://trivasoft.az/faq" />
        <meta property="og:title" content="FAQ - Tez-tez Verilən Suallar | TrivaSoft" />
        <meta property="og:description" content="TrivaSoft xidmətləri haqqında tez-tez verilən suallar və cavablar." />
        <meta property="og:url" content="https://trivasoft.az/faq" />
      </Helmet>
      <div className="faq-page">
        <div className="faq-hero">
        <h1>Tez-tez Verilən Suallar</h1>
        <p>Suallarınızın cavablarını burada tapa bilərsiniz</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-card ${openIndex === index ? 'active' : ''}`}>
            <div 
              className="faq-header"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div 
              ref={el => answerRefs.current[index] = el}
              className="faq-body"
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default FAQ
