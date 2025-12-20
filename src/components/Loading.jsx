import { useEffect, useState } from 'react'
import './Loading.css'
import logoImage from '../source/icon.png'

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [lettersVisible, setLettersVisible] = useState([])
  const [logoVisible, setLogoVisible] = useState(false)
  const [zoomStarted, setZoomStarted] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Ses bağlamını başlat (tarayıcı kısıtlamaları için)
    let audioContext = null
    
    const initAudio = async () => {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)()
        // Eğer suspended durumundaysa resume et
        if (audioContext.state === 'suspended') {
          await audioContext.resume()
        }
      } catch (error) {
        console.log('Ses bağlamı başlatılamadı:', error)
      }
    }

    // Sayfa yüklendiğinde ses bağlamını başlat
    initAudio()

    // Ses oluştur (Web Audio API) - Daha zengin ve profesyonel ses
    const playSound = async () => {
      try {
        // Eğer audioContext yoksa oluştur
        if (!audioContext) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)()
        }

        // Eğer suspended durumundaysa resume et
        if (audioContext.state === 'suspended') {
          await audioContext.resume()
        }
        
        // Ana ton - Daha yumuşak başlangıç
        const oscillator1 = audioContext.createOscillator()
        const gainNode1 = audioContext.createGain()
        
        // Üst harmonik - Zenginlik için
        const oscillator2 = audioContext.createOscillator()
        const gainNode2 = audioContext.createGain()
        
        // Alt harmonik - Derinlik için
        const oscillator3 = audioContext.createOscillator()
        const gainNode3 = audioContext.createGain()
        
        oscillator1.connect(gainNode1)
        oscillator2.connect(gainNode2)
        oscillator3.connect(gainNode3)
        gainNode1.connect(audioContext.destination)
        gainNode2.connect(audioContext.destination)
        gainNode3.connect(audioContext.destination)

        const now = audioContext.currentTime
        const duration = 0.8

        // Ana ton - A4 (440 Hz) - Yumuşak sine wave
        oscillator1.frequency.value = 440
        oscillator1.type = 'sine'
        gainNode1.gain.setValueAtTime(0, now)
        gainNode1.gain.linearRampToValueAtTime(0.3, now + 0.1)
        gainNode1.gain.exponentialRampToValueAtTime(0.01, now + duration)

        // Üst harmonik - E5 (659.25 Hz) - Parlaklık için
        oscillator2.frequency.value = 659.25
        oscillator2.type = 'sine'
        gainNode2.gain.setValueAtTime(0, now)
        gainNode2.gain.linearRampToValueAtTime(0.2, now + 0.1)
        gainNode2.gain.exponentialRampToValueAtTime(0.01, now + duration)

        // Alt harmonik - A3 (220 Hz) - Derinlik için
        oscillator3.frequency.value = 220
        oscillator3.type = 'sine'
        gainNode3.gain.setValueAtTime(0, now)
        gainNode3.gain.linearRampToValueAtTime(0.15, now + 0.1)
        gainNode3.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator1.start(now)
        oscillator2.start(now)
        oscillator3.start(now)
        oscillator1.stop(now + duration)
        oscillator2.stop(now + duration)
        oscillator3.stop(now + duration)
      } catch (error) {
        console.log('Ses çalınamadı:', error)
      }
    }

    // Logo sembolünü göster
    setTimeout(() => {
      setLogoVisible(true)
      playSound() // Logo göründüğünde ses çal
    }, 300)

    // Harfleri sırayla göster (logo göründükten sonra)
    const word = 'trıvasoft'
    const letterStartDelay = 800 // Logo göründükten sonra başla
    const letterInterval = 120 // Her harf arası 120ms

    word.split('').forEach((letter, index) => {
      setTimeout(() => {
        setLettersVisible(prev => [...prev, index])
      }, letterStartDelay + (index * letterInterval))
    })

    // Progress bar animasyonu
    const duration = 3000 // 3 saniye
    const interval = 50
    const increment = (100 / duration) * interval

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + increment
      })
    }, interval)

    // 3 saniye sonra zoom başlat
    const zoomTimeout = setTimeout(() => {
      setZoomStarted(true)
      // Fade out başlat
      setTimeout(() => {
        setFadeOut(true)
      }, 400)
      // Zoom animasyonu bittikten sonra sayfayı aç (0.6 saniye sonra)
      setTimeout(() => {
        // Sayfa geçişini daha akıcı hale getirmek için
        onComplete()
      }, 600)
    }, duration)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(zoomTimeout)
    }
  }, [onComplete])

  const word = 'trıvasoft'

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Logo görseli */}
        <div className={`logo-symbol ${logoVisible ? 'visible' : ''} ${zoomStarted ? 'zoom-out' : ''}`}>
          <img 
            src={logoImage} 
            alt="TrivaSoft Logo" 
            className="logo-image"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Logo yazısı */}
        {!zoomStarted && (
          <div className="loading-text">
            {word.split('').map((letter, index) => (
              <span
                key={index}
                className={`loading-letter ${lettersVisible.includes(index) ? 'visible' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                {letter === 'ı' ? (
                  <>
                    <span className="i-dot"></span>
                    {letter}
                  </>
                ) : (
                  letter
                )}
              </span>
            ))}
          </div>
        )}
        
        {!zoomStarted && (
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${progress}%` }}></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Loading

