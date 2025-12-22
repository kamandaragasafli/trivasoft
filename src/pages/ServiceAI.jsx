import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Services.css'

export const aiServices = [
    {
      id: 1,
      title: 'AI Chat Bot (Sosial Media Satış Botu)',
      description: 'Sosial media üzərindən gələn mesaj və rəyləri müştərinin psixologiyasına uyğun cavablayan və satışı həyata keçirən ağıllı sistem.',
      detailedContent: {
        whatIs: 'AI Chat Bot – sosial media platformalarında (Instagram, Facebook, WhatsApp və s.) müştərilərdən gələn mesajları süni intellekt vasitəsilə avtomatik cavablayan, müştərinin ehtiyacını anlayan və satışı yönləndirən ağıllı satış sistemidir. Bu sistem klassik "hazır cavab botu" deyil. AI Chat Bot müştərinin sualını anlayır, yazı tərzinə və niyyətinə uyğun cavab verir, dialoqu mərhələli şəkildə satışa aparır, heç bir müraciəti cavabsız qoymur.',
        whyImportant: 'Bu gün müştərilərin böyük əksəriyyəti birbaşa zəng etmir, e-mail yazmır, əvvəlcə sosial mediadan mesaj atır. Ən böyük problem isə budur: gec cavab = itirilmiş satış. AI Chat Bot bu problemi tam aradan qaldırır: 24/7 aktivdir, saniyələr içində cavab verir, eyni anda onlarla müştəri ilə danışa bilir.',
        howItWorks: [
          { 
            title: '1. Hər mesaj real satış imkanına çevrilir', 
            description: 'Ən çox satış itkiləri cavabsız və ya gec cavablanan mesajlara görə baş verir. AI Chat Bot gələn hər mesajı avtomatik qarşılayır, müştərini düzgün istiqamətləndirir, satış prosesini yarımçıq qoymur. Nəticə: itirilən müştəri sayı minimuma enir.' 
          },
          { 
            title: '2. Müştərinin psixologiyasına uyğun cavab verir', 
            description: 'AI Chat Bot aqressiv satmır, müştərini sıxmır, ehtiyacına uyğun danışır. Bu, klassik satış skriptlərindən fərqli olaraq daha təbii və etibarlı dialoq yaradır. Müştəri özünü robotla yox, real satış meneceri ilə danışırmış kimi hiss edir.' 
          },
          { 
            title: '3. Satış komandası üçün real dəstəkdir', 
            description: 'AI Chat Bot satış əməkdaşlarını əvəz etmək üçün yox, onların yükünü azaltmaq üçün qurulur. Bot ilkin sualları cavablayır, maraqlı müştəriləri ayırır, real satışa hazır olanları komandaya ötürür. Bu, satış komandasının daha keyfiyyətli müştərilərlə işləməsinə imkan yaradır.' 
          },
          { 
            title: '4. Eyni anda limitsiz müştəri ilə işləyir', 
            description: 'Kampaniya, endirim və reklam dövrlərində mesaj sayı kəskin artır. İnsan resursu bu yükü daşıya bilmir. AI Chat Bot isə paralel şəkildə yüzlərlə yazışmanı idarə edir, heç bir müştərini gözlətmir, performans itirmir.' 
          },
          { 
            title: '5. Brend etibarını gücləndirir', 
            description: 'Daim vaxtında, nəzakətli və peşəkar cavab verən brend daha etibarlı görünür, müştəri məmnuniyyətini artırır, təkrar alış ehtimalını yüksəldir. AI Chat Bot bu standartı sabit şəkildə qoruyur.' 
          }
        ],
        suitableFor: 'AI Chat Bot xüsusilə aşağıdakı sahələrdə yüksək nəticə verir: xidmət sektorları, onlayn satış edən şirkətlər, otellər və rezervasiya biznesləri, klinikalar və təlim mərkəzləri, sosial mediadan aktiv satış edən bütün bizneslər. Əgər müştəriləriniz sizə yazırsa, AI Chat Bot artıq ehtiyacdır.',
        conclusion: 'AI Chat Bot sizə daha çox cavablanmış mesaj, daha az itirilmiş müştəri, daha yüksək satış dönüşü, daha az işçi yükü, daha peşəkar brend imici qazandırır. Bu sistem bir dəfə qurulur və davamlı şəkildə biznes üçün işləyir.'
      },
      benefits: [
        'Instagram və Facebook mesajlarına 24/7 avtomatik cavab',
        'Müştərinin yazı tərzinə və niyyətinə uyğun fərdi cavablar',
        'Satışa yönəldilmiş dialoq strukturu',
        'İnsan faktoru və gec cavab riskinin aradan qaldırılması',
        'Müştəri məmnuniyyətinin və satış ehtimalının artması',
        'Sosial media üzərindən gələn potensial müştərilərin itirilməməsi'
      ]
    },
    {
      id: 2,
      title: 'Korporativ Satış Mütəxəssisləri üçün AI Soyuq Satış Sistemi',
      description: 'Korporativ satış mütəxəssislərinin öz müştəri bazaları və ya bizim 10 000 şirkətdən bazamızın üzərindən avtomatik soyuq satış e-mailləri göndərməsini və geri dönüşlərin izlənməsini təmin edən AI həlli.',
      detailedContent: {
        whatIs: 'AI Soyuq Satış Sistemi — korporativ satış mütəxəssislərinin və satış komandalarının potensial müştəriləri daha sürətli tapması, onlarla sistemli şəkildə əlaqə qurması və satışa çevirməsi üçün hazırlanmış süni intellekt əsaslı avtomatlaşdırma həllidir.',
        whyImportant: 'Ənənəvi soyuq satış prosesində potensial müştəri tapmaq çox vaxt aparır, e-mail-lərə geri dönüş faizi aşağı olur, WhatsApp və zənglər gecikdirilir, görüşlər dağınıq planlanır.',
        howItWorks: [
          { title: 'Potensial müştərilərin avtomatik seçimi', description: 'İstifadəçi öz bazasını (Excel və ya Google Sheets) sistemə əlavə edir. AI şirkət adlarını analiz edir, sahə və fəaliyyət istiqamətini müəyyənləşdirir, uyğun müştəri profilini ayırır.' },
          { title: 'AI tərəfindən soyuq e-mail göndərişi', description: 'Sistem seçilmiş müştərilərə peşəkar, fərdiləşdirilmiş, satış məqsədli soyuq e-mail-lər göndərir. E-mail-lər spam görünmür, klassik kopyala-yapışdır mətnlər deyil.' },
          { title: 'Geri dönüşlərin avtomatik izlənməsi (mini CRM)', description: 'AI kim cavab verdi, kim maraq göstərdi, kim cavabsız qaldı bütün bu məlumatları Google Sheets üzərindən CRM kimi qeyd edir.' },
          { title: 'WhatsApp üzərindən dialoqun davamı', description: 'Potensial müştəri WhatsApp-dan yazdıqda AI avtomatik cavab verir, sualları cavablandırır, marağı dərinləşdirir, satışı növbəti mərhələyə aparır.' },
          { title: 'Görüş təyini və Google Calendar inteqrasiyası', description: 'Müştəri görüşə hazır olduqda sistem avtomatik görüş vaxtı təyin edir, Google Calendar-a əlavə edir, həm müştəriyə, həm satış mütəxəssisinə bildiriş göndərir.' }
        ],
        suitableFor: 'Bu sistem korporativ satış mütəxəssisləri, satış komandaları, B2B satış edən şirkətlər üçün idealdır.',
        conclusion: 'AI Soyuq Satış Sistemi satışa təsadüfi yox, sistemli yanaşma gətirir. Bu sistem satış mütəxəssisini robotlaşdırmır, əksinə onu strateji satışçıya çevirir.'
      },
      benefits: [
        'İstifadəçinin Excel faylı əsasında avtomatik e-mail göndərişi',
        'Peşəkar soyuq satış mətnlərinin AI tərəfindən hazırlanması',
        'Geri dönüşlərin Google Sheets-də avtomatik qeydiyyatı',
        'Sadə və effektiv CRM strukturu',
        'Satış prosesinin sürətlənməsi',
        'Satış mütəxəssisinin operativliyinin artması'
      ]
    },
    {
      id: 3,
      title: 'Hotel AI ChatBot (Avtomatik Rezervasiya Sistemi)',
      description: 'Otellərə sosial media və mesajlaşma platformalarından gələn sorğuları cavablayan, boş otaqları təyin edən və avtomatik rezervasiya həyata keçirən ağıllı sistem.',
      detailedContent: {
        whatIs: 'Hotel AI ChatBot — hotellərə sosial media və messencerlər üzərindən (Instagram, Facebook, WhatsApp və s.) daxil olan müraciətləri süni intellekt vasitəsilə avtomatik cavablayan, boş otaqları real vaxtda müəyyən edən və müştərinin istəyinə uyğun rezervasiyanı avtomatik həyata keçirən ağıllı sistemdir. Bu sistem klassik "mesaj cavablayan bot" deyil. Hotel AI ChatBot müştərinin sualını anlayır, tarix, saat, otaq növü və qiymət əsasında uyğun təklif verir, boş otaqları yoxlayır, rezervasiyanı avtomatik qeyd edir, həm müştəriyə, həm otelə məlumat göndərir.',
        whyImportant: 'Otellərdə satış itkisi çox vaxt bu səbəblərdən yaranır: gec cavablanan mesajlar, gecə saatlarında cavabsız müraciətlər, işçi çatışmazlığı, qarışıq rezervasiya qeydləri, telefon və sosial media arasında dağınıq idarəetmə. Nəticə: müştəri başqa otelə keçir, otaq boş qalır, potensial gəlir itirilir. Hotel AI ChatBot bu problemləri tam avtomatik şəkildə aradan qaldırır.',
        howItWorks: [
          { 
            title: '1. 24/7 fasiləsiz rezervasiya qəbulu', 
            description: 'Hotel AI ChatBot gecə-gündüz işləyir, istirahət günü tanımır, müştəriyə saniyələr içində cavab verir. Bu isə xüsusilə gecə saatlarında, son dəqiqə rezervasiyalarında, kampaniya dövrlərində rezervasiya sayının artmasına birbaşa təsir edir.' 
          },
          { 
            title: '2. Boş otaqlar avtomatik müəyyən olunur', 
            description: 'Sistem Google Sheets və ya otelin rezervasiya cədvəli ilə işləyir, seçilən tarix və saat aralığında boş otaqları tapır, müştəriyə uyğun variantları təklif edir. Əgər istənilən otaq doludursa, AI avtomatik alternativ otaqları təklif edir. Bu da "yox" cavabını satış fürsətinə çevirir.' 
          },
          { 
            title: '3. Saatlıq və sutkalıq rezervasiyalar üçün uyğundur', 
            description: 'Hotel AI ChatBot 4 saatlıq, 6 saatlıq, 12 saatlıq, 24 saatlıq və sutkalıq rezervasiya modellərini dəstəkləyir. Bu xüsusiyyət şəhər hotelləri, saatlıq xidmət göstərən obyektlər, yüksək dövriyyəli hotellər üçün ciddi üstünlük yaradır.' 
          },
          { 
            title: '4. İşçi yükünü azaldır, səhvləri minimuma endirir', 
            description: 'Manual rezervasiya zamanı tarix səhvləri, otaq qarışıqlığı, ikiqat bronlama tez-tez baş verir. Hotel AI ChatBot isə bütün məlumatları avtomatik qeyd edir, rezervasiyanı sistemli saxlayır, insan faktorundan qaynaqlanan səhvləri aradan qaldırır. Bu, işçi xərclərinin azalması və zamana qənaət etmək deməkdir.' 
          },
          { 
            title: '5. Müştəri təcrübəsini yüksəldir', 
            description: 'Müştəri sürətli cavab alır, aydın məlumat görür, prosesin sonunda təsdiq mesajı alır. Bu, otelin peşəkar görünməsinə, etibar qazanmasına, təkrar rezervasiya ehtimalının artmasına birbaşa təsir edir.' 
          }
        ],
        suitableFor: 'Bu sistem xüsusilə aşağıdakılar üçün idealdır: şəhər hotelləri, butik hotellər, saatlıq rezervasiya qəbul edən obyektlər, sosial mediadan aktiv müraciət alan hotellər, kiçik və orta ölçülü otellər. Əgər otelinizə Instagram, Facebook, WhatsApp üzərindən tez-tez mesaj gəlirsə, Hotel AI ChatBot artıq ehtiyacdır.',
        conclusion: 'Hotel AI ChatBot sizə daha çox rezervasiya, daha az boş otaq, daha az işçi yükü, daha sürətli cavablar, daha yüksək müştəri məmnuniyyəti qazandırır. Bu sistem bir dəfə qurulur və hər gün otel üçün işləyir.'
      },
      benefits: [
        'Instagram, Facebook və WhatsApp mesajlarına ani cavab',
        'Boş otaqların real vaxtda müəyyən edilməsi',
        'Müştərinin istəklərinə uyğun otaq təklifləri',
        'Avtomatik bron və qeydiyyat',
        'Rezervasiya barədə otelə dərhal bildiriş',
        'Rezervasiya səhvlərinin və insan faktorunun aradan qaldırılması',
        'Rezervasiya sayının artması'
      ]
    },
    {
      id: 4,
      title: 'AI SMM + ChatBot Sistemi',
      description: 'Sosial media kontentini avtomatik yaradan, paylaşan, analiz edən və eyni zamanda mesajlar üzərindən satış edən kompleks AI sistemi.',
      detailedContent: {
        whatIs: 'AI SMM + ChatBot Sistemi — sosial media hesablarının idarə olunmasını, kontent istehsalını, paylaşımların analizini və müştərilərlə yazışma üzərindən satışı süni intellekt vasitəsilə avtomatlaşdıran kompleks marketinq və satış həllidir. Bu sistem ayrı-ayrı alətlərdən ibarət deyil. AI SMM + ChatBot Sistemi sosial media üçün kontent yaradır, paylaşımları planlı şəkildə yayımlayır, nəticələri analiz edir, özünü təkmilləşdirir, gələn mesaj və rəyləri cavablayır, müştərini satışa yönləndirir. Yəni bu sistem SMM + satış + müştəri xidməti funksiyalarını vahid platformada birləşdirir.',
        whyImportant: 'Bir çox biznes sosial mediada aktivdir, amma nəticə almır. Bunun əsas səbəbləri: plansız paylaşımlar, zəif kontent strategiyası, gec cavablanan mesajlar, rəy və şərhlərin nəzarətsiz qalması, SMM ilə satışın bir-birindən ayrı idarə olunmasıdır. Nəticə: izləyici var, satış yoxdur; mesaj gəlir, cavab gecikir; kontent paylaşılır, amma təsir yaratmır. AI SMM + ChatBot Sistemi bu parçalanmış prosesi vahid və ağıllı sistemə çevirir.',
        howItWorks: [
          { 
            title: '1. Avtomatik və strategiyalı kontent istehsalı', 
            description: 'AI biznesin sahəsini analiz edir, hədəf auditoriyanı müəyyənləşdirir, kontent ideyaları yaradır, paylaşım mətnlərini formalaşdırır. Bu, təsadüfi postlar yox, məqsədli və satışa yönəlmiş kontent deməkdir.' 
          },
          { 
            title: '2. Paylaşımların planlı yayımlanması', 
            description: 'AI SMM postları optimal vaxtlarda paylaşır, davamlılığı qoruyur, səhifənin aktivliyini stabil saxlayır. Bu isə sosial media alqoritmləri baxımından daha çox görünürlük yaradır.' 
          },
          { 
            title: '3. Analiz və özünü təkmilləşdirmə', 
            description: 'Sistem hansı postun daha çox maraq gördüyünü, hansı kontentin satışa daha çox təsir etdiyini, hansı mesajların cavab yaratdığını analiz edir və növbəti kontenti buna uyğun formalaşdırır. Bu, klassik SMM-dən fərqli olaraq datalı və ağıllı marketinq yanaşmasıdır.' 
          },
          { 
            title: '4. ChatBot satış prosesinə qoşulur', 
            description: 'AI ChatBot paylaşımlar altına gələn şərhləri cavablayır, inbox mesajlarını avtomatik qarşılayır, müştərinin ehtiyacını anlayır, dialoqu satışa doğru aparır. Yəni SMM sadəcə "bəyənmə" yaratmır, birbaşa satış mexanizminə çevrilir.' 
          },
          { 
            title: '5. İşçi yükü və xərclər azalır', 
            description: 'AI SMM menecerinin işinin böyük hissəsini avtomatlaşdırır, satış komandası üçün filtr rolunu oynayır, əlavə işçi ehtiyacını azaldır. Bu, işçi xərclərinin azalması və zamana qənaət etmək deməkdir.' 
          }
        ],
        suitableFor: 'Bu sistem xüsusilə xidmət sektoru, onlayn satış edən şirkətlər, klinikalar və təlim mərkəzləri, otellər, şəxsi brendlər, sosial mediadan aktiv müştəri alan bütün bizneslər üçün idealdır. Əgər biznesiniz sosial mediadan müştəri cəlb edirsə, bu sistem birbaşa gəlir alətidir.',
        conclusion: 'AI SMM + ChatBot Sistemi sizə daha çox görünürlük, daha yüksək müştəri etibarı, daha çox mesaj və müraciət, daha çox satış, daha az əməliyyat yükü qazandırır. AI SMM + ChatBot Sistemi bir dəfə qurulur və davamlı olaraq biznes üçün işləyir.'
      },
      benefits: [
        'Avtomatik post və məzmun yaradılması',
        'Paylaşımların performansının analizi',
        'Sistem tərəfindən özünü daim təkmilləşdirmə',
        'Mesaj və rəylərin avtomatik cavablandırılması',
        'Satışa yönəlik sosial media idarəçiliyi',
        'SMM xərclərinin azalması və effektivliyin artması'
      ]
    }
  ]

const ServiceAI = () => {
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
        <title>AI Avtomatlaşdırma - Chatbot, Satış Botu | TrivaSoft</title>
        <meta 
          name="description" 
          content="AI avtomatlaşdırma həlləri: chatbot, satış botları, hotel rezervasiya sistemləri, SMM avtomatlaşdırma. Bakıda AI xidmətləri." 
        />
        <meta 
          name="keywords" 
          content="AI chatbot Azərbaycan, satış botu, AI avtomatlaşdırma Bakı, chatbot xidmətləri, hotel AI sistemləri" 
        />
        <link rel="canonical" href="https://trivasoft.az/services/ai" />
        <meta property="og:title" content="AI Avtomatlaşdırma - Chatbot, Satış Botu | TrivaSoft" />
        <meta property="og:description" content="AI avtomatlaşdırma həlləri: chatbot, satış botları, hotel rezervasiya sistemləri. Bakıda AI xidmətləri." />
        <meta property="og:url" content="https://trivasoft.az/services/ai" />
        <meta property="og:image" content="https://trivasoft.az/favicon.png" />
      </Helmet>
      <div className="services">
        <section className="services-hero">
          <div className="services-hero-background"></div>
          <div className="services-hero-container" ref={heroRef}>
            <Link to="/services" className="back-link">← Xidmətlərə qayıt</Link>
            <h1 className="services-title">AI Avtomatlaşdırma</h1>
            <p className="services-subtitle">
              Müasir süni intellekt texnologiyaları ilə biznes proseslərinizi tam avtomatlaşdırın
            </p>
          </div>
        </section>

        <section className="services-content">
          <div className="services-container">
            {aiServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/ai/${service.id}`}
                className="service-card-link"
              >
                <div 
                  className="service-card"
                  ref={(el) => (serviceCardsRef.current[index] = el)}
                >
                  <div className="service-icon-wrapper">
                    <div className="service-icon">🤖</div>
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

export default ServiceAI

