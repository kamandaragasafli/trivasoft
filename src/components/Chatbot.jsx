import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: 'Salam! CivilSofts-a xoş gəlmisiniz. Sizə necə kömək edə bilərəm?',
      sender: 'bot'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef(null)

  const quickReplies = [
    'Xidmətləriniz haqqında məlumat',
    'Qiymətlər haqqında soruşmaq istəyirəm',
    'Sifariş vermək istəyirəm',
    'Əlaqə məlumatları',
    'FAQ'
  ]

  const handleQuickReply = async (message) => {
    setShowQuickReplies(false)
    
    const userMessage = {
      text: message,
      sender: 'user'
    }

    const conversation = [...messages, userMessage]
    setMessages(prev => [...prev, userMessage])

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY

    if (!apiKey) {
      setMessages(prev => [
        ...prev,
        {
          text: 'OpenAI API key təyin edilməyib. Zəhmət olmasa .env faylında VITE_OPENAI_API_KEY əlavə edin.',
          sender: 'bot'
        }
      ])
      return
    }

    try {
      const systemPrompt = `Sən CivilSofts saytının chatbotusan.
- Dil: əsasən Azərbaycan türkcəsi, lazım olsa sadə türkçe.
- Şirkət: CivilSofts – AI avtomatlaşdırma, Web həllər, ERP sistemləri və rəqəmsal marketinq xidməti göstərir.
- Xidmətlər: 
  * AI Avtomatlaşdırma: AI Chat Bot, Korporativ Satış Sistemi, Hotel AI ChatBot, AI SMM + ChatBot
  * Web Həllər: Web-Saytların Hazırlanması, E-commerce, Mobil Tətbiqlər, SEO Xidmətləri
  * ERP Həllər: ERP Sistem Quraşdırılması, Maliyyə & Mühasibat, Anbar & Stok İdarəetməsi, Satış & Müştəri İdarəetməsi, HR Sistemi, Hesabat & Analitika
  * Marketinq: Rəqəmsal Marketinq Strategiyası, Brend Strategiyası, Sosial Media Marketinq, Reklam Kampaniyaları, Vizual İdentiya, Kontent Marketinq, Analitika
- Səhifələr: Ana səhifə, Xidmətlər (AI Avtomatlaşdırma, Web Həllər, ERP Həllər, Marketinq), Haqqımızda, FAQ, Əlaqə.
- Əlaqə: Nizami street AFF Business House, Bakı, Azərbaycan. Telefon: +994 55 386 12 11, Email: info@civilsofts.az.

SİPARİŞ ALMA TALİMATI (ÇOX MÜHİMDİR):
Əgər istifadəçi "sipariş", "sifariş", "xidmət sifarişi", "layihə istəyirəm", "sifariş vermək istəyirəm" və ya oxşar bir şey deyirsə:
1. İstifadəçidən aşağıdakı məlumatları TƏDRİCƏN və AYRI-AYRI soruş:
   - Ad Soyad (mütləq lazımdır)
   - Telefon nömrəsi (mütləq lazımdır)
   - Email ünvanı (mütləq lazımdır)
   - Hansı xidmət və ya layihə haqqında (detaylı təsvir)
   - Büdçə (varsa)
   - Tələb olunan müddət (varsa)
   - Əlavə qeydlər və ya tələblər (varsa)

2. BÜTÜN məlumatlar (ad, telefon, email, sipariş detayları) toplandıqda, cavabının SONUNDA MUTLAQ aşağıdakı formatda JSON əlavə et:
SIPARIS_TAMAMLANDI:
{"isim":"istifadəçinin tam adı","telefon":"telefon nömrəsi","email":"email ünvanı","siparis_detaylari":"bütün toplanan məlumatların detaylı təsviri"}

3. JSON formatı ÇOX MÜHİMDİR:
   - Düzgün JSON olmalıdır, heç bir markdown code block (üç backtick json və ya üç backtick) İSTİFADƏ ETMƏ
   - Sadece düz JSON yaz: {"isim":"...","telefon":"...","email":"...","siparis_detaylari":"..."}
   - JSON-dan əvvəl "SIPARIS_TAMAMLANDI:" yazmalısan
   - JSON-dan sonra başqa mətn yazma

4. JSON-dan sonra istifadəçiyə normal cavab ver: "Sifarişiniz qeydə alındı! Tezliklə sizinlə əlaqə saxlayacağıq."

İstifadəçiyə qısa, aydın cavab ver, çox texniki olma, lazım olanda sayt strukturu və xidmətlərdən misal çək.`

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversation.map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          ],
          temperature: 0.6
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error?.message || 'OpenAI API xətası')
      }

      const botResponseText = data.choices[0]?.message?.content || 'Cavab yaradıla bilmədi.'
      
      // Sipariş bilgilerini kontrol et
      let jsonString = null;
      const markdownMatch = botResponseText.match(/```(?:json)?\s*(\{[\s\S]*?"isim"[\s\S]*?\})\s*```/);
      if (markdownMatch) {
        jsonString = markdownMatch[1].trim();
      } else {
        const siparisMatch = botResponseText.match(/SIPARIS_TAMAMLANDI:\s*(\{[\s\S]*?\})/);
        if (siparisMatch) {
          jsonString = siparisMatch[1].trim();
        } else {
          const jsonOnlyMatch = botResponseText.match(/\{"isim"[\s\S]*?"email"[\s\S]*?\}/);
          if (jsonOnlyMatch) {
            jsonString = jsonOnlyMatch[0].trim();
          }
        }
      }
      
      if (jsonString) {
        try {
          const siparisData = JSON.parse(jsonString);
          const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
          const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

          if (serviceID && templateID && publicKey) {
            const siparisMesaji = `
Yeni Sifariş - CivilSofts Chatbot

Müştəri Məlumatları:
- Ad Soyad: ${siparisData.isim || 'Təyin edilməyib'}
- Telefon: ${siparisData.telefon || 'Təyin edilməyib'}
- Email: ${siparisData.email || 'Təyin edilməyib'}

Sifariş Detayları:
${siparisData.siparis_detaylari || 'Təyin edilməyib'}

---
Bu sifariş CivilSofts chatbot vasitəsilə alınmışdır.
Tarix: ${new Date().toLocaleString('az-AZ')}
            `.trim()

            await emailjs.send(
              serviceID,
              templateID,
              {
                from_name: siparisData.isim || 'Chatbot İstifadəçisi',
                from_email: siparisData.email || 'chatbot@civilsofts.az',
                reply_to: siparisData.email || 'chatbot@civilsofts.az',
                message: siparisMesaji,
                to_name: siparisData.isim || 'Müştəri',
              },
              publicKey
            )
            
            let cleanResponse = botResponseText
              .replace(/SIPARIS_TAMAMLANDI:[\s\S]*$/, '')
              .replace(/```(?:json)?\s*\{[\s\S]*?"isim"[\s\S]*?\}\s*```/g, '')
              .replace(/\{"isim"[\s\S]*?\}/g, '')
              .trim()
            
            const botResponse = {
              text: cleanResponse + '\n\n✅ Sifarişiniz uğurla qeydə alındı və email göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
              sender: 'bot'
            }
            
            setMessages(prev => [...prev, botResponse])
          } else {
            let cleanResponse = botResponseText
              .replace(/SIPARIS_TAMAMLANDI:[\s\S]*$/, '')
              .replace(/```(?:json)?\s*\{[\s\S]*?"isim"[\s\S]*?\}\s*```/g, '')
              .replace(/\{"isim"[\s\S]*?\}/g, '')
              .trim()
            const botResponse = {
              text: cleanResponse + '\n\n⚠️ Sifariş qeydə alındı, lakin email göndərilmədi. Zəhmət olmasa birbaşa bizimlə əlaqə saxlayın.',
              sender: 'bot'
            }
            setMessages(prev => [...prev, botResponse])
          }
        } catch (error) {
          console.error('❌ Sipariş email göndərmə xətası:', error)
          let cleanResponse = botResponseText
            .replace(/SIPARIS_TAMAMLANDI:[\s\S]*$/, '')
            .replace(/```(?:json)?\s*\{[\s\S]*?"isim"[\s\S]*?\}\s*```/g, '')
            .replace(/\{"isim"[\s\S]*?\}/g, '')
            .trim()
          const botResponse = {
            text: cleanResponse + '\n\n⚠️ Sifariş qeydə alındı, lakin email göndərilmədi. Zəhmət olmasa birbaşa bizimlə əlaqə saxlayın: info@civilsofts.az',
            sender: 'bot'
          }
          setMessages(prev => [...prev, botResponse])
        }
      } else {
        const botResponse = {
          text: botResponseText,
          sender: 'bot'
        }
        setMessages(prev => [...prev, botResponse])
      }
    } catch (error) {
      console.error('Chatbot cavab xətası:', error)
      setMessages(prev => [
        ...prev,
        {
          text: `Chatbot cavab verə bilmədi: ${error.message}. Zəhmət olmasa bir az sonra yenidən yoxlayın.`,
          sender: 'bot'
        }
      ])
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e, quickMessage = null) => {
    e?.preventDefault()
    const messageText = quickMessage || inputValue
    if (!messageText.trim()) return

    setShowQuickReplies(false) // Hazır mesajları gizle

    const userMessage = {
      text: messageText,
      sender: 'user'
    }

    const conversation = [...messages, userMessage]
    setMessages(prev => [...prev, userMessage])
    if (!quickMessage) {
      setInputValue('')
    }

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY

    if (!apiKey) {
      setMessages(prev => [
        ...prev,
        {
          text: 'OpenAI API key təyin edilməyib. Zəhmət olmasa .env faylında VITE_OPENAI_API_KEY əlavə edin.',
          sender: 'bot'
        }
      ])
      return
    }

    try {
      const systemPrompt = `Sən CivilSofts saytının chatbotusan.
- Dil: əsasən Azərbaycan türkcəsi, lazım olsa sadə türkçe.
- Şirkət: CivilSofts – AI avtomatlaşdırma, Web həllər, ERP sistemləri və rəqəmsal marketinq xidməti göstərir.
- Xidmətlər: 
  * AI Avtomatlaşdırma: AI Chat Bot, Korporativ Satış Sistemi, Hotel AI ChatBot, AI SMM + ChatBot
  * Web Həllər: Web-Saytların Hazırlanması, E-commerce, Mobil Tətbiqlər, SEO Xidmətləri
  * ERP Həllər: ERP Sistem Quraşdırılması, Maliyyə & Mühasibat, Anbar & Stok İdarəetməsi, Satış & Müştəri İdarəetməsi, HR Sistemi, Hesabat & Analitika
  * Marketinq: Rəqəmsal Marketinq Strategiyası, Brend Strategiyası, Sosial Media Marketinq, Reklam Kampaniyaları, Vizual İdentiya, Kontent Marketinq, Analitika
- Səhifələr: Ana səhifə, Xidmətlər (AI Avtomatlaşdırma, Web Həllər, ERP Həllər, Marketinq), Haqqımızda, FAQ, Əlaqə.
- Əlaqə: Nizami street AFF Business House, Bakı, Azərbaycan. Telefon: +994 55 386 12 11, Email: info@civilsofts.az.

SİPARİŞ ALMA TALİMATI (ÇOX MÜHİMDİR):
Əgər istifadəçi "sipariş", "sifariş", "xidmət sifarişi", "layihə istəyirəm", "sifariş vermək istəyirəm" və ya oxşar bir şey deyirsə:
1. İstifadəçidən aşağıdakı məlumatları TƏDRİCƏN və AYRI-AYRI soruş:
   - Ad Soyad (mütləq lazımdır)
   - Telefon nömrəsi (mütləq lazımdır)
   - Email ünvanı (mütləq lazımdır)
   - Hansı xidmət və ya layihə haqqında (detaylı təsvir)
   - Büdçə (varsa)
   - Tələb olunan müddət (varsa)
   - Əlavə qeydlər və ya tələblər (varsa)

2. BÜTÜN məlumatlar (ad, telefon, email, sipariş detayları) toplandıqda, cavabının SONUNDA MUTLAQ aşağıdakı formatda JSON əlavə et:
SIPARIS_TAMAMLANDI:
{"isim":"istifadəçinin tam adı","telefon":"telefon nömrəsi","email":"email ünvanı","siparis_detaylari":"bütün toplanan məlumatların detaylı təsviri"}

3. JSON formatı ÇOX MÜHİMDİR:
   - Düzgün JSON olmalıdır, heç bir markdown code block (üç backtick json və ya üç backtick) İSTİFADƏ ETMƏ
   - Sadece düz JSON yaz: {"isim":"...","telefon":"...","email":"...","siparis_detaylari":"..."}
   - JSON-dan əvvəl "SIPARIS_TAMAMLANDI:" yazmalısan
   - JSON-dan sonra başqa mətn yazma

4. JSON-dan sonra istifadəçiyə normal cavab ver: "Sifarişiniz qeydə alındı! Tezliklə sizinlə əlaqə saxlayacağıq."

İstifadəçiyə qısa, aydın cavab ver, çox texniki olma, lazım olanda sayt strukturu və xidmətlərdən misal çək.`

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversation.map((m) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          ],
          temperature: 0.6
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error?.message || 'OpenAI API xətası')
      }

      const botResponseText = data.choices[0]?.message?.content || 'Cavab yaradıla bilmədi.'
      
      // Debug: AI'nin döndürdüğü metni logla
      console.log('🤖 AI Cavabı:', botResponseText)
      
      // Sipariş bilgilerini kontrol et - markdown code block'ları da yakala
      let jsonString = null;
      
      // 1. Önce markdown code block içindeki JSON'u ara (en yaygın format)
      const markdownMatch = botResponseText.match(/```(?:json)?\s*(\{[\s\S]*?"isim"[\s\S]*?\})\s*```/);
      if (markdownMatch) {
        jsonString = markdownMatch[1].trim();
        console.log('📦 Markdown code block-dan JSON çıkarıldı:', jsonString)
      } else {
        // 2. SIPARIS_TAMAMLANDI ile başlayan JSON'u ara
        const siparisMatch = botResponseText.match(/SIPARIS_TAMAMLANDI:\s*(\{[\s\S]*?\})/);
        if (siparisMatch) {
          jsonString = siparisMatch[1].trim();
          console.log('📦 SIPARIS_TAMAMLANDI formatından JSON tapıldı:', jsonString)
        } else {
          // 3. Sadece JSON objesi ara (isim, telefon, email içeren)
          const jsonOnlyMatch = botResponseText.match(/\{"isim"[\s\S]*?"email"[\s\S]*?\}/);
          if (jsonOnlyMatch) {
            jsonString = jsonOnlyMatch[0].trim();
            console.log('📦 JSON doğrudan tapıldı:', jsonString)
          }
        }
      }
      
      if (jsonString) {
        console.log('📦 Sipariş JSON tapıldı:', jsonString)
        
        try {
          const siparisData = JSON.parse(jsonString);
          console.log('✅ Sipariş məlumatları parse edildi:', siparisData)
          
          // EmailJS ile sipariş email'i gönder
          const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
          const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

          console.log('📧 EmailJS Konfigurasiyası:', {
            serviceID: serviceID ? '✓' : '✗',
            templateID: templateID ? '✓' : '✗',
            publicKey: publicKey ? '✓' : '✗'
          })

          if (serviceID && templateID && publicKey) {
            // Sipariş detaylarını formatla
            const siparisMesaji = `
Yeni Sifariş - CivilSofts Chatbot

Müştəri Məlumatları:
- Ad Soyad: ${siparisData.isim || 'Təyin edilməyib'}
- Telefon: ${siparisData.telefon || 'Təyin edilməyib'}
- Email: ${siparisData.email || 'Təyin edilməyib'}

Sifariş Detayları:
${siparisData.siparis_detaylari || 'Təyin edilməyib'}

---
Bu sifariş CivilSofts chatbot vasitəsilə alınmışdır.
Tarix: ${new Date().toLocaleString('az-AZ')}
            `.trim()

            console.log('📤 Email göndərilir...', {
              to: 'info@civilsofts.az',
              from: siparisData.email || 'chatbot@civilsofts.az',
              subject: 'Yeni Sifariş - Chatbot'
            })

            const emailResult = await emailjs.send(
              serviceID,
              templateID,
              {
                from_name: siparisData.isim || 'Chatbot İstifadəçisi',
                from_email: siparisData.email || 'chatbot@civilsofts.az',
                message: siparisMesaji,
              },
              publicKey
            )

            console.log('✅ Sipariş email uğurla göndərildi!', {
              status: emailResult.status,
              text: emailResult.text,
              siparisData
            })
            
            // JSON kısmını mesajdan çıkar, sadece normal metni göster
            let cleanResponse = botResponseText
              .replace(/SIPARIS_TAMAMLANDI:[\s\S]*$/, '') // SIPARIS_TAMAMLANDI ile başlayan kısmı sil
              .replace(/```(?:json)?\s*\{[\s\S]*?"isim"[\s\S]*?\}\s*```/g, '') // Markdown code block'ları sil
              .replace(/\{"isim"[\s\S]*?\}/g, '') // Sadece JSON objesini sil
              .trim()
            
            const botResponse = {
              text: cleanResponse + '\n\n✅ Sifarişiniz uğurla qeydə alındı və email göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
              sender: 'bot'
            }
            
            setMessages(prev => [...prev, botResponse])
          } else {
            console.error('❌ EmailJS konfigurasiyası tam deyil!')
            let cleanResponse = botResponseText
              .replace(/SIPARIS_TAMAMLANDI:[\s\S]*$/, '')
              .replace(/```(?:json)?\s*\{[\s\S]*?"isim"[\s\S]*?\}\s*```/g, '')
              .replace(/\{"isim"[\s\S]*?\}/g, '')
              .trim()
            const botResponse = {
              text: cleanResponse + '\n\n⚠️ Sifariş qeydə alındı, lakin email göndərilmədi. Zəhmət olmasa birbaşa bizimlə əlaqə saxlayın.',
              sender: 'bot'
            }
            setMessages(prev => [...prev, botResponse])
          }
        } catch (error) {
          console.error('❌ Sipariş email göndərmə xətası:', error)
          console.error('Xəta detayları:', {
            message: error.message,
            text: error.text,
            status: error.status
          })
          
          let cleanResponse = botResponseText
            .replace(/SIPARIS_TAMAMLANDI:[\s\S]*$/, '')
            .replace(/```(?:json)?\s*\{[\s\S]*?"isim"[\s\S]*?\}\s*```/g, '')
            .replace(/\{"isim"[\s\S]*?\}/g, '')
            .trim()
          const botResponse = {
            text: cleanResponse + '\n\n⚠️ Sifariş qeydə alındı, lakin email göndərilmədi. Zəhmət olmasa birbaşa bizimlə əlaqə saxlayın: info@civilsofts.az',
            sender: 'bot'
          }
          setMessages(prev => [...prev, botResponse])
        }
      } else {
        // Sipariş JSON'u bulunamadı - normal mesaj olarak göster
        console.log('ℹ️ Sipariş JSON tapılmadı, normal mesaj olaraq göstərilir')
        const botResponse = {
          text: botResponseText,
          sender: 'bot'
        }

        setMessages(prev => [...prev, botResponse])
      }
    } catch (error) {
      console.error('Chatbot cavab xətası:', error)
      setMessages(prev => [
        ...prev,
        {
          text: `Chatbot cavab verə bilmədi: ${error.message}. Zəhmət olmasa bir az sonra yenidən yoxlayın.`,
          sender: 'bot'
        }
      ])
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <button
        className={`chatbot-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Chatbot aç"
      >
        <div className="chatbot-robot">
          <div className="robot-head">
            <div className="robot-antenna" />
            <div className="robot-face">
              <span className="robot-eye left" />
              <span className="robot-eye right" />
              <span className="robot-mouth" />
            </div>
          </div>
        </div>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">T</div>
              <div>
                <h3>CivilSofts Dəstək</h3>
                <p>Onlayn</p>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Chatbot bağla"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
              </div>
            ))}
            
            {/* Hazır Mesaj Butonları */}
            {showQuickReplies && messages.length <= 1 && (
              <div className="quick-replies">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSend}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Mesaj yazın..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="chatbot-send" aria-label="Göndər">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot

