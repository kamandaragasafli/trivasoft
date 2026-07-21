import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const heroRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)

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

    if (contactInfoRef.current) observer.observe(contactInfoRef.current)
    if (formRef.current) observer.observe(formRef.current)

    return () => {
      if (contactInfoRef.current) observer.unobserve(contactInfoRef.current)
      if (formRef.current) observer.unobserve(formRef.current)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // EmailJS artık otomatik olarak başlatılıyor, init gerekmiyor

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Debug: Form verilerini logla
    console.log('📝 Form göndərilir:', {
      name: formData.name,
      email: formData.email,
      messageLength: formData.message.length,
      timestamp: new Date().toISOString()
    })

    try {
      // EmailJS servis parametreleri
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Debug: Environment variables kontrolü
      console.log('🔧 Environment Variables:', {
        serviceID: serviceID ? `${serviceID.substring(0, 10)}...` : 'YOX',
        templateID: templateID ? `${templateID.substring(0, 10)}...` : 'YOX',
        publicKey: publicKey ? `${publicKey.substring(0, 10)}...` : 'YOX',
        allPresent: !!(serviceID && templateID && publicKey)
      })

      // Environment variable kontrolü
      if (!serviceID || !templateID || !publicKey) {
        console.error('❌ EmailJS konfigurasiyası tapılmadı:', {
          serviceID: !!serviceID,
          templateID: !!templateID,
          publicKey: !!publicKey,
          envMode: import.meta.env.MODE,
          envProd: import.meta.env.PROD
        })
        throw new Error('EmailJS konfigurasiyası tapılmadı. Zəhmət olmasa .env faylını yoxlayın.')
      }

      console.log('📧 EmailJS göndərilir...', {
        serviceID,
        templateID,
        publicKey: publicKey.substring(0, 10) + '...',
        templateParams: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message.substring(0, 50) + '...'
        }
      })

      // EmailJS ile email gönder
      // Not: Template'de kullanılan değişkenler: from_name, from_email, phone, message
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_name: formData.name,
        },
        publicKey
      )

      console.log('✅ Email uğurla göndərildi:', {
        status: result.status,
        text: result.text,
        timestamp: new Date().toISOString()
      })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Debug: Başarılı gönderim sonrası
      console.log('🎉 Form sıfırlandı və status mesajı gösterildi')

      // 5 saniye sonra status mesajını temizle
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      // Debug: Detaylı hata loglama
      console.error('❌ Email göndərmə xətası:', error)
      console.error('🔍 Xəta detayları:', {
        name: error.name,
        message: error.text || error.message,
        status: error.status,
        statusText: error.statusText,
        response: error.response,
        stack: error.stack,
        timestamp: new Date().toISOString()
      })
      
      // Network hatası kontrolü
      if (error.status === 0 || !navigator.onLine) {
        console.error('🌐 Network xətası: İnternet bağlantısını yoxlayın')
      }
      
      // EmailJS API hatası kontrolü
      if (error.status >= 400 && error.status < 500) {
        console.error('📧 EmailJS API xətası: Konfigurasiyanı yoxlayın')
      }
      
      if (error.status >= 500) {
        console.error('🔧 Server xətası: EmailJS servisi müvəqqəti olaraq əlçatan deyil')
      }
      
      // Daha detaylı hata mesajı
      let errorMessage = 'Mesaj göndərilərkən xəta baş verdi.'
      if (error.text) {
        errorMessage += ` Xəta: ${error.text}`
      } else if (error.message) {
        errorMessage += ` Xəta: ${error.message}`
      }
      
      setSubmitStatus('error')
      
      // 5 saniye sonra status mesajını temizle
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Əlaqə - CivilSofts ilə Əlaqə Saxlayın | Bakı</title>
        <meta 
          name="description" 
          content="CivilSofts ilə əlaqə saxlayın. Email: info@civilsofts.az, Telefon: +994 55 386 12 11. Bakı, Azərbaycan. Layihə təklifiniz üçün bizə yazın." 
        />
        <meta 
          name="keywords" 
          content="CivilSofts əlaqə, Bakı IT şirkəti, rəqəmsal həllər konsaltinqi, layihə təklifi" 
        />
        <link rel="canonical" href="https://civilsofts.az/contact" />
        <meta property="og:title" content="Əlaqə - CivilSofts ilə Əlaqə Saxlayın | Bakı" />
        <meta property="og:description" content="CivilSofts ilə əlaqə saxlayın. Email, telefon və WhatsApp. Layihə təklifiniz üçün bizə yazın." />
        <meta property="og:url" content="https://civilsofts.az/contact" />
        <meta property="og:image" content="https://civilsofts.az/favicon.png" />
      </Helmet>
      <div className="contact">
        <section className="contact-hero">
        <div className="contact-hero-background"></div>
        <div className="contact-hero-container" ref={heroRef}>
          <h1 className="contact-title">Əlaqə</h1>
          <p className="contact-subtitle">
            Bizimlə əlaqə saxlayın və layihəniz haqqında danışaq
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info" ref={contactInfoRef}>
            <h2 className="info-title">Əlaqə Məlumatları</h2>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@civilsofts.az</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Telefon</h3>
                <p>+994 55 386 12 11</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Ünvan</h3>
                <p>Nizami street AFF Business House</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <h2 className="form-title">Bizə Yazın</h2>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Adınızı daxil edin"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Mesajınızı yazın..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Göndərilir...' : 'Göndər'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-status success">
                ✓ Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-status error">
                ✗ Mesaj göndərilərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin və ya birbaşa email göndərin.
                <br />
                <small style={{ fontSize: '0.85rem', marginTop: '0.5rem', display: 'block' }}>
                  Browser console-da (F12) xəta detaylarını görə bilərsiniz.
                </small>
              </div>
            )}
          </form>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact

