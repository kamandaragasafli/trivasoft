import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form göndərmə məntiqini buraya əlavə edə bilərsiniz
    console.log('Form göndərildi:', formData)
    alert('Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
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
                <p>info@trivasoft.az</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Telefon</h3>
                <p>+994 50 476 88 43</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Ünvan</h3>
                <p>Bakı, Azərbaycan</p>
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
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+994 50 476 88 43"
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
            <button type="submit" className="submit-btn">
              Göndər
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact

