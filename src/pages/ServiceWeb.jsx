import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Services.css'

export const webServices = [
    {
      id: 1,
      title: 'Web-Saytların Hazırlanması',
      description: 'Biznesin rəqəmsal imicini gücləndirən, satış və təqdimat məqsədli peşəkar veb-saytların hazırlanması.',
      detailedContent: {
        whatIs: 'Web-Saytların Hazırlanması — biznesin rəqəmsal mühitdə necə təqdim olunacağını, müştərinin sizi necə tapacağını və sayt üzərindən necə satış və müraciət yaradacağını müəyyən edən strateji texnoloji prosesdir. Müasir biznes üçün sayt sadəcə vizit kartı deyil. Sayt müştərinin ilk təmas nöqtəsidir, etibarın əsas mənbəyidir, satış və marketinqin mərkəzidir. CivilSofts üçün web-sayt dizayn edilmiş səhifə yox, satış və böyümə alətidir.',
        whyImportant: 'Bir çox biznesdə sayt mövcuddur, dizayn edilib, məlumat yerləşdirilib, amma müştəri yazmır, satış gəlmir, sayt Google-da görünmür, etibar yaratmır. Bunun səbəbi saytın olmasında yox, strateji və satış yönümlü qurulmamasındadır.',
        howItWorks: [
          { 
            title: '1. Etibar və peşəkar imic', 
            description: 'Peşəkar sayt müştərinin sizə güvənməsini artırır, qərar verməni sürətləndirir. İlk təəssürat satışın əsas hissəsidir.' 
          },
          { 
            title: '2. Satış və müraciətlərin artması', 
            description: 'Satış yönümlü sayt müştərini yönləndirir, CTA vasitəsilə hərəkətə keçirir, müraciətləri artırır. Sayt aktiv satış işçisi kimi işləyir.' 
          },
          { 
            title: '3. SEO ilə uzunmüddətli müştəri axını', 
            description: 'SEO-ya uyğun sayt Google-da görünürlük yaradır, reklamsız trafik gətirir, uzunmüddətli müştəri axını təmin edir. Bu, marketinq xərclərinin uzunmüddətli azalması deməkdir.' 
          },
          { 
            title: '4. Marketinq və reklam effektivliyinin yüksəlməsi', 
            description: 'Reklam sayta yönələndə dönüş faizi artır, büdcə daha səmərəli xərclənir. Zəif sayt reklama mane olur, güclü sayt isə reklama dəstək verir.' 
          },
          { 
            title: '5. Biznesin böyüməyə hazır olması', 
            description: 'Yaxşı qurulmuş sayt yeni xidmətlərin əlavə olunmasına, yeni bazarlara çıxışa, texniki genişlənməyə hazır olur.' 
          }
        ],
        suitableFor: 'Bu xidmət bütün bizneslər üçün vacibdir: korporativ şirkətlər, xidmət sahələri, B2B və B2C bizneslər, yeni startaplar. Əgər saytınız müştəri gətirmirsə, satış yaratmırsa, Google-da görünmürsə, problem saytın strateji qurulmamasındadır.',
        conclusion: 'Zəif sayt müştəri itirir, reklamı boşa çıxarır. Düzgün qurulmuş Web-Sayt isə etibar yaradır, satışları artırır, biznesi böyüdür.'
      },
      benefits: [
        'Biznes məqsədlərinə uyğun fərdi dizayn',
        'Sürətli və təhlükəsiz texniki struktur',
        'Mobil və planşetlərə tam uyğunluq',
        'İstifadəçi üçün sadə və anlaşılan interfeys',
        'Satışa və müraciətə yönəldilmiş səhifə quruluşu',
        'Brend etibarının və onlayn görünürlüyün artması'
      ]
    },
    {
      id: 2,
      title: 'İnternet Mağazaların Yaradılması (E-commerce)',
      description: 'Onlayn satışları artırmaq üçün funksional və etibarlı internet mağazalarının hazırlanması.',
      detailedContent: {
        whatIs: 'İnternet Mağazaların Yaradılması (E-commerce) — məhsul və ya xidmətlərin online mühitdə 24/7 satılmasını təmin edən, ödəniş, sifariş, stok və müştəri proseslərini tam avtomatlaşdıran satış sistemidir. Müasir dövrdə e-commerce sadəcə alternativ satış kanalı deyil. E-commerce satışın davamlı mənbəyidir, coğrafi məhdudiyyəti aradan qaldırır, biznesi miqyaslana bilən edir. CivilSofts üçün internet mağaza məhsul sərgilənən sayt yox, satış istehsal edən sistemdir.',
        whyImportant: 'Bir çox biznesdə məhsulu var, bazarı var, tələbi var, amma satış yalnız fiziki məkandan asılıdır, sosial media üzərindən qeyri-sistemli satış edir, sifariş və stok qarışıqlığı yaşayır. Bu isə satış imkanlarının itirilməsi, vaxt və resurs itkisi, böyümənin ləngiməsi deməkdir.',
        howItWorks: [
          { 
            title: '1. 24/7 fasiləsiz satış', 
            description: 'İnternet mağaza iş saatından asılı deyil, eyni anda yüzlərlə sifariş qəbul edir. Bu, satışın avtomatlaşdırılması deməkdir.' 
          },
          { 
            title: '2. Satışların və gəlirin artması', 
            description: 'Online satış daha geniş auditoriyaya çıxış, daha çox sifariş imkanı yaradır. Biznes lokal sərhədləri aşır.' 
          },
          { 
            title: '3. Stok və sifarişlərin avtomatik idarə edilməsi', 
            description: 'E-commerce sistemi stok qalığını avtomatik yeniləyir, sifarişləri qeyd edir, səhvləri minimuma endirir. Bu, zamana qənaət etmək və işçi xərclərinin azalması deməkdir.' 
          },
          { 
            title: '4. Reklam və marketinq effektivliyinin yüksəlməsi', 
            description: 'Reklam e-commerce saytına yönləndikdə dönüş faizi artır, müştəri davranışı izlənir, kampaniyalar optimallaşdırılır.' 
          },
          { 
            title: '5. Biznesin miqyaslana bilməsi', 
            description: 'Yaxşı qurulmuş e-commerce məhsul sayının artırılmasına, yeni bazarlara çıxışa, beynəlxalq satışa hazır olur.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə fiziki məhsul satan bizneslər, pərakəndə satış şirkətləri, distribusiya şirkətləri, rəqəmsal məhsul satan brendlər üçün vacibdir. Əgər satışınız yalnız fiziki məkandan asılıdırsa, sifariş prosesləri qarışıqdırsa, online satış sistemi yoxdursa, e-commerce artıq zəruridir.',
        conclusion: 'Fiziki satışla məhdud biznes zamanla yarışa bilmir, bazarı itirir. Düzgün qurulmuş İnternet Mağaza (E-commerce) isə satışı artırır, xərcləri azaldır, biznesi böyüdür.'
      },
      benefits: [
        'Məhsul qalığının və sifarişlərin rahat idarə edilməsi',
        'Onlayn ödəniş sistemlərinin inteqrasiyası',
        'Səbət və sifariş prosesinin optimallaşdırılması',
        'Mobil istifadəçilər üçün rahat alış təcrübəsi',
        'Satış statistikasının və hesabatların izlənməsi',
        'Onlayn satış potensialının artması'
      ]
    },
    {
      id: 3,
      title: 'Mobil Tətbiqlərin Hazırlanması',
      description: 'iOS və Android platformaları üçün biznesə uyğun mobil tətbiqlərin hazırlanması.',
      detailedContent: {
        whatIs: 'Mobil Tətbiqlərin Hazırlanması — biznesin müştəri ilə birbaşa, sürətli və daimi əlaqə qurmasını təmin edən, satış, xidmət və idarəetmə proseslərini mobil platformaya daşıyan rəqəmsal həllərdir. Bugünkü istifadəçi davranışı göstərir ki müştərilər daha çox mobil telefondan istifadə edir, sürətli və rahat tətbiqləri seçir, brauzerdən çox tətbiq üzərindən ünsiyyət qurur. CivilSofts üçün mobil tətbiq sadəcə texnoloji məhsul yox, müştəriyə ən yaxın satış və xidmət kanalıdır.',
        whyImportant: 'Bir çox biznesdə sayt sahibidir, sosial mediada aktivdir, reklam edir, amma müştəri ilə daimi əlaqə qura bilmir, sifariş və xidmət proseslərini mobil səviyyədə optimallaşdıra bilmir, müştəri sədaqətini itirir. Bu isə təkrar satışların azalması, müştərinin rəqibə keçməsi, xidmət keyfiyyətinin zəifləməsi ilə nəticələnir.',
        howItWorks: [
          { 
            title: '1. Müştəri ilə daimi əlaqə', 
            description: 'Mobil tətbiq telefonun içindədir, bildiriş göndərir, müştərini aktiv saxlayır. Bu, təkrar satışların artması deməkdir.' 
          },
          { 
            title: '2. Satış və xidmət proseslərinin sürətlənməsi', 
            description: 'Mobil tətbiq sifarişi asanlaşdırır, vaxt itkisini azaldır, müştəri məmnuniyyətini artırır.' 
          },
          { 
            title: '3. İşçi xərclərinin azalması', 
            description: 'Avtomatlaşdırılmış mobil proseslər manuel işləri azaldır, səhvləri minimuma endirir, insan resursuna qənaət edir.' 
          },
          { 
            title: '4. Brendə bağlılığın artması', 
            description: 'Mobil tətbiqi olan brendlər daha peşəkar görünür, müştərinin yaddaşında qalır, rəqiblərdən seçilir.' 
          },
          { 
            title: '5. Biznesin miqyaslana bilməsi', 
            description: 'Yaxşı qurulmuş mobil tətbiq yeni funksiyalarla genişlənir, digər sistemlərlə inteqrasiya olunur, böyüyən biznesə uyğunlaşır.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə müştəri ilə daimi əlaqə qurmaq istəyən bizneslər, e-commerce sahibləri, xidmət sahələri, otellər, klinikalar, təlim mərkəzləri, rəqabətli bazarda fərqlənmək istəyən şirkətlər üçün vacibdir. Əgər müştəri ilə əlaqə zəifdirsə, sifariş prosesləri mobil üzərindən optimallaşdırılmayıbsa, müştəri sədaqəti itirilibsə, mobil tətbiq artıq zəruridir.',
        conclusion: 'Mobil həlli olmayan biznes müştərini itirir, rəqiblərdən geri düşür. Düzgün hazırlanmış Mobil Tətbiq isə satışı artırır, müştəri sədaqəti yaradır, biznesi gələcəyə daşıyır.'
      },
      benefits: [
        'Müştərilərlə birbaşa əlaqə imkanı',
        'Sürətli və stabil işləyən tətbiqlər',
        'İstifadəçi təcrübəsinə uyğun dizayn',
        'Push bildirişləri ilə aktiv kommunikasiya',
        'Brendə sadiqliyin artırılması',
        'Rəqiblər qarşısında üstünlük əldə edilməsi'
      ]
    },
    {
      id: 4,
      title: 'SEO Xidmətləri',
      description: 'Veb-saytların Google və digər axtarış platformalarında daha üst sıralarda çıxması üçün peşəkar SEO həlləri.',
      detailedContent: {
        whatIs: 'SEO (Search Engine Optimization) — veb-saytın Google və digər axtarış sistemlərində ödənişsiz şəkildə yuxarı sıralarda görünməsini, daha çox potensial müştəri cəlb etməsini və satışa çevrilməsini təmin edən strateji rəqəmsal marketinq prosesidir. SEO sadəcə "Google-da çıxmaq" deyil. SEO düzgün auditoriyanı tapmaq, doğru zamanda görünmək, müştərini sayta gətirib qərara yönləndirmək deməkdir. CivilSofts üçün SEO reklama davamlı pul xərcləmədən stabil müştəri axını yaradan sistemdir.',
        whyImportant: 'Bir çox biznesdə reklam verir, büdcə xərcləyir, kampaniyalar edir, amma reklam dayanan kimi müraciətlər kəsilir, uzunmüddətli müştəri axını yoxdur, Google-da rəqiblər önə çıxır. Bu problemin kökü SEO-nun olmamasıdır.',
        howItWorks: [
          { 
            title: '1. Davamlı və ödənişsiz müştəri axını', 
            description: 'SEO reklamdan fərqli olaraq dayanmır, zaman keçdikcə güclənir, stabil trafik yaradır.' 
          },
          { 
            title: '2. Marketinq xərclərinin azalması', 
            description: 'SEO olan biznes reklama daha az pul xərcləyir, eyni büdcə ilə daha çox nəticə alır. Bu, uzunmüddətli qənaət deməkdir.' 
          },
          { 
            title: '3. Daha keyfiyyətli müştərilər', 
            description: 'SEO ilə gələn müştəri özü sizi axtarır, ehtiyaclıdır, satın almağa daha yaxındır.' 
          },
          { 
            title: '4. Rəqabətdə üstünlük', 
            description: 'SEO sizi rəqiblərin önünə çıxarır, bazarda mövqe yaradır, brendi gücləndirir.' 
          },
          { 
            title: '5. Satışların artması', 
            description: 'Düzgün qurulmuş SEO daha çox ziyarətçi, daha çox müraciət, daha çox satış yaradır.' 
          }
        ],
        suitableFor: 'Bu xidmət bütün online fəaliyyət göstərən bizneslər üçün vacibdir: korporativ saytlar, e-commerce platformaları, xidmət sahələri, lokal bizneslər. Əgər saytınız Google-da görünmürsə, reklam dayandıqda müraciət kəsilibsə, rəqiblər önə çıxıbsa, SEO qaçılmaz ehtiyacdır.',
        conclusion: 'SEO olmayan biznes müştəri itirir, rəqiblərin kölgəsində qalır. Düzgün qurulmuş SEO Xidmətləri isə brendi gücləndirir, satışı artırır, biznesi böyüdür.'
      },
      benefits: [
        'Orqanik ziyarətçi sayının artması',
        'Düzgün açar söz strategiyası',
        'Texniki və məzmun əsaslı optimallaşdırma',
        'Uzunmüddətli və stabil nəticələr',
        'Reklam xərclərindən asılılığın azalması',
        'Brendin onlayn etibarının güclənməsi'
      ]
    }
  ]

const ServiceWeb = () => {
  const heroRef = useRef(null)
  const serviceCardsRef = useRef([])

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

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Web Həllər - Vebsayt, E-ticarət, SEO | CivilSofts</title>
        <meta 
          name="description" 
          content="Vebsayt dizaynı, e-ticarət platformaları, mobil tətbiqlər və SEO xidmətləri. Bakıda peşəkar veb həlləri." 
        />
        <meta 
          name="keywords" 
          content="vebsayt dizaynı Bakı, e-ticarət platforması, mobil tətbiq hazırlama, SEO xidmətləri Azərbaycan" 
        />
        <link rel="canonical" href="https://civilsofts.az/services/web" />
        <meta property="og:title" content="Web Həllər - Vebsayt, E-ticarət, SEO | CivilSofts" />
        <meta property="og:description" content="Vebsayt dizaynı, e-ticarət platformaları, mobil tətbiqlər və SEO xidmətləri. Bakıda peşəkar veb həlləri." />
        <meta property="og:url" content="https://civilsofts.az/services/web" />
        <meta property="og:image" content="https://civilsofts.az/favicon.png" />
      </Helmet>
      <div className="services">
        <section className="services-hero">
          <div className="services-hero-background"></div>
          <div className="services-hero-container" ref={heroRef}>
            <Link to="/services" className="back-link">← Xidmətlərə qayıt</Link>
            <h1 className="services-title">Web Həllər</h1>
            <p className="services-subtitle">
              Müasir və performanslı veb saytlar, veb tətbiqlər və e-ticarət platformaları
            </p>
          </div>
        </section>

        <section className="services-content">
          <div className="services-container">
            {webServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/web/${service.id}`}
                className="service-card-link"
              >
                <div 
                  className="service-card"
                  ref={(el) => (serviceCardsRef.current[index] = el)}
                >
                  <div className="service-icon-wrapper">
                    <div className="service-icon">🌐</div>
                  </div>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} className="service-feature">
                        <span className="feature-check">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-overlay"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default ServiceWeb

