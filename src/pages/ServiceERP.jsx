import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ServiceDetail.css'

const ServiceERP = () => {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const services = [
    {
      id: 1,
      title: 'ERP Sistemlərinin Qurulması və Uyğunlaşdırılması',
      description: 'Şirkətin daxili proseslərinə uyğun vahid idarəetmə sisteminin qurulması və adaptasiyası.',
      detailedContent: {
        whatIs: 'ERP (Enterprise Resource Planning) sistemləri — şirkətin bütün əsas əməliyyatlarını vahid platformada birləşdirən və biznesin mərkəzləşdirilmiş şəkildə idarə olunmasını təmin edən proqram həlləridir. ERP Sistemlərinin Qurulması və Uyğunlaşdırılması xidməti şirkətin mövcud iş proseslərini analiz etməyi, uyğun ERP strukturunu qurmağı, sistemi biznesin real ehtiyaclarına uyğunlaşdırmağı, işçi heyətinin istifadəsinə hazır hala gətirməyi əhatə edən kompleks yanaşmadır. Bu xidmət hazır proqram quraşdırmaq deyil — biznesə uyğun sistem qurmaqdır.',
        whyImportant: 'Biznes böyüdükcə məlumatlar Excel fayllarında dağılır, şöbələr arasında əlaqə zəifləyir, hesabatlar gecikir, səhvlər və uyğunsuzluqlar artır, rəhbərlik real vəziyyəti tam görə bilmir. Bu mərhələdə ERP sistemi biznes üçün zərurətə çevrilir. ERP məlumatı mərkəzləşdirir, prosesləri standartlaşdırır, nəzarəti gücləndirir, qərarverməni sürətləndirir.',
        howItWorks: [
          { 
            title: '1. Proseslərin mərkəzləşdirilmiş idarə olunması', 
            description: 'ERP satış, maliyyə, anbar, insan resursları, hesabat kimi bütün əsas funksiyaları vahid sistemdə birləşdirir. Bu, biznesin idarə olunmasını sadələşdirir və şəffaf edir.' 
          },
          { 
            title: '2. Zamana qənaət və əməliyyat sürəti', 
            description: 'Manual proseslər vaxt aparır, səhv riskini artırır. ERP isə məlumatları avtomatik yeniləyir, hesabatları bir neçə saniyəyə təqdim edir, təkrar əməliyyatları aradan qaldırır. Bu, zamana qənaət etmək və iş sürətini artırmaq deməkdir.' 
          },
          { 
            title: '3. Səhvlərin və itkilərin azalması', 
            description: 'ERP ikiqat məlumat daxil edilməsini aradan qaldırır, yanlış hesablamaları minimuma endirir, maliyyə və stok fərqlərini azaldır. Bu isə birbaşa maddi itkilərin qarşısını alır.' 
          },
          { 
            title: '4. Rəhbərlik üçün real vaxtda nəzarət', 
            description: 'ERP sistemləri rəhbərliyə real vaxtda hesabatlar, analitik göstəricilər, risk xəbərdarlıqları təqdim edir. Bu, qərarverməni təxminə yox, faktlara əsaslanan prosesə çevirir.' 
          },
          { 
            title: '5. Biznesin böyüməsinə hazır struktur', 
            description: 'ERP sistemi yeni şöbələrin, filialların, məhsul və xidmətlərin asanlıqla əlavə olunmasına imkan yaradır. Bu da biznesin miqyaslanmasını problemsiz edir.' 
          }
        ],
        suitableFor: 'ERP həlləri xüsusilə orta və böyük bizneslər, istehsal və ticarət şirkətləri, anbar və logistika ilə işləyənlər, çoxşöbəli strukturu olan müəssisələr, sürətlə böyüyən şirkətlər üçün idealdır. Əgər biznesiniz artıq Excel-in imkanlarını aşırsa, bu ERP üçün açıq siqnaldır.',
        conclusion: 'Yanlış qurulan ERP işçiləri yorar, prosesi çətinləşdirər, sistemə müqavimət yaradar. Düzgün qurulmuş və uyğunlaşdırılmış ERP isə biznesi sistemləşdirir, xərcləri azaldır, nəzarəti gücləndirir, böyüməni sürətləndirir.'
      },
      benefits: [
        'Bütün biznes proseslərinin tək sistemdə birləşdirilməsi',
        'Əl ilə görülən işlərin minimuma endirilməsi',
        'Məlumatları mərkəzləşdirərək idarə olunması',
        'Proseslərdə şəffaflıq və nəzarətin artması',
        'Operativ və düzgün qərarvermə imkanı'
      ]
    },
    {
      id: 2,
      title: 'Maliyyə və Mühasibatlıq ERP Modulu',
      description: 'Şirkətin maliyyə axınlarını və mühasibat əməliyyatlarını avtomatlaşdıran ERP həlli.',
      detailedContent: {
        whatIs: 'Maliyyə və Mühasibatlıq ERP Modulu — şirkətin bütün maliyyə əməliyyatlarını, mühasibat uçotunu, xərcləri, gəlirləri və hesabatları vahid, mərkəzləşdirilmiş sistem üzərindən idarə etməyə imkan verən ERP həllidir. Bu modul gündəlik maliyyə əməliyyatlarını avtomatlaşdırır, mühasibat uçotunu sistemli və şəffaf edir, rəhbərliyə real vaxtda maliyyə vəziyyətini göstərir. Yəni bu modul sadəcə "hesab aparmaq" üçün yox, biznesin maliyyə sağlamlığını qorumaq və inkişaf etdirmək üçün qurulur.',
        whyImportant: 'Biznes böyüdükcə maliyyə idarəetməsi daha da çətinləşir. Ən çox rast gəlinən problemlər: gəlir və xərclərin gec hesablama ilə görünməsi, Excel fayllarında dağınıq mühasibat uçotu, yanlış və gecikmiş hesabatlar, insan faktorundan yaranan səhvlər, rəhbərliyin real maliyyə vəziyyətini anında görə bilməməsi. Bu mərhələdə Maliyyə və Mühasibatlıq ERP Modulu zəruri alətə çevrilir.',
        howItWorks: [
          { 
            title: '1. Real vaxtda maliyyə nəzarəti', 
            description: 'Rəhbərlik cari gəliri, xərcləri, mənfəəti istənilən anda görə bilir. Bu, qərarverməni gecikmədən və faktlara əsaslanaraq aparmağa imkan yaradır.' 
          },
          { 
            title: '2. Zamana qənaət və əməliyyatların sürətlənməsi', 
            description: 'Manual mühasibat uçotu vaxt aparır, səhv ehtimalını artırır. ERP Modulu isə hesablamaları avtomatik edir, hesabatları saniyələr içində təqdim edir, təkrar əməliyyatları aradan qaldırır. Bu, zamana qənaət etmək və əməliyyat səmərəliliyini artırmaq deməkdir.' 
          },
          { 
            title: '3. Səhvlərin və maliyyə risklərinin azalması', 
            description: 'ERP sistemi məlumatları avtomatik yoxlayır, uyğunsuzluqları erkən mərhələdə göstərir, ikiqat və yanlış qeydlərin qarşısını alır. Bu isə maliyyə itkilərinin və audit risklərinin azalması deməkdir.' 
          },
          { 
            title: '4. Şəffaflıq və auditə hazır sistem', 
            description: 'ERP Modulu bütün əməliyyatları qeyd edir, tarixçə saxlayır, audit və yoxlama proseslərini asanlaşdırır. Bu, həm daxili nəzarət, həm də xarici audit üçün böyük üstünlükdür.' 
          },
          { 
            title: '5. Biznesin böyüməsinə uyğun maliyyə strukturu', 
            description: 'Şirkət böyüdükcə əməliyyat sayı artır, maliyyə axını mürəkkəbləşir. ERP Modulu isə yeni filialların, yeni layihələrin, artan əməliyyatların asanlıqla idarə olunmasına imkan verir.' 
          }
        ],
        suitableFor: 'Bu modul orta və böyük şirkətlər, sürətlə böyüyən bizneslər, çoxfiliallı strukturlar üçün idealdır.',
        conclusion: 'Bu modul sizə daha dəqiq maliyyə nəzarəti, daha az səhv, daha sürətli hesabatlar, daha şəffaf mühasibatlıq, daha sağlam qərarvermə qazandırır. Düzgün qurulmuş Maliyyə və Mühasibatlıq ERP Modulu biznesin dayanıqlı inkişafının əsas sütunlarından biridir.'
      },
      benefits: [
        'Gəlir və xərclərin real vaxtda izlənməsi',
        'Maliyyə hesabatlarının avtomatik formalaşdırılması',
        'İnsan səhvlərinin azalması',
        'Büdcə planlamasının asanlaşması',
        'Maliyyə intizamının gücləndirilməsi'
      ]
    },
    {
      id: 3,
      title: 'Anbar və Stok İdarəetmə Sistemi',
      description: 'Məhsul və materialların hərəkətini dəqiq və avtomatik idarə edən ERP modulu.',
      detailedContent: {
        whatIs: 'Anbar və Stok İdarəetmə Sistemi — şirkətin məhsul hərəkətlərini, anbar qalığını, giriş-çıxış əməliyyatlarını və stok dövriyyəsini vahid və mərkəzləşdirilmiş platforma üzərindən real vaxtda idarə etməyə imkan verən proqram həllidir. Bu sistem hansı məhsulun harada olduğunu, neçə ədəd qaldığını, nə vaxt tükənəcəyini, hansı məhsulun artıq yığıldığını dəqiq və şəffaf şəkildə göstərir. Sadə desək, bu sistem stokla bağlı qeyri-müəyyənliyi aradan qaldırır.',
        whyImportant: 'Bir çox şirkətdə stok idarəetməsi hələ də Excel faylları, əl ilə qeydlər, gec yenilənən məlumatlar üzərindən aparılır. Bu isə stok fərqləri və uyğunsuzluqlar, artıq və ya çatışmayan məhsullar, satış zamanı "stokda var" deyilib əslində olmaması, anbarda lazımsız məhsul yığılması, maddi itkilər və planlama səhvləri kimi problemlərə səbəb olur. Anbar və Stok İdarəetmə Sistemi bu riskləri minimuma endirmək üçün qurulur.',
        howItWorks: [
          { 
            title: '1. Real vaxtda stok nəzarəti', 
            description: 'Sistem bütün məhsul giriş-çıxışlarını anında qeyd edir, anbar qalığını real vaxtda göstərir. Bu, satış və satınalma qərarlarını təxminə yox, faktlara əsaslandırır.' 
          },
          { 
            title: '2. Artıq və çatışmayan stokun qarşısının alınması', 
            description: 'Sistem artıq yığılan məhsulları göstərir, kritik səviyyədən aşağı düşən stoklar üçün xəbərdarlıq verir. Bu isə artıq stok xərclərini azaldır, satış itkisini minimuma endirir.' 
          },
          { 
            title: '3. Satış və anbar arasında tam uyğunluq', 
            description: 'Satış sistemi ilə inteqrasiya sayəsində satılan məhsul avtomatik stokdan düşür, "ikiqat satış" və ya "olmayan məhsulun satışı" riski aradan qalxır. Bu, müştəri məmnuniyyətini və brend etibarını qoruyur.' 
          },
          { 
            title: '4. Zamana qənaət və əməliyyat səmərəliliyi', 
            description: 'Manual stok uçotu vaxt aparır, işçi yükünü artırır. Avtomatlaşdırılmış sistem isə prosesləri sürətləndirir, əməliyyat xərclərini azaldır, işçi xərclərinin azalmasına töhfə verir.' 
          },
          { 
            title: '5. Dəqiq və aydın hesabatlar', 
            description: 'Sistem stok dövriyyəsini, məhsul üzrə satış sürətini, anbar performansını aydın hesabatlarla təqdim edir. Bu, rəhbərliyə strateji planlama üçün güclü alət verir.' 
          }
        ],
        suitableFor: 'Bu sistem xüsusilə ticarət və distribusiya şirkətləri, istehsal müəssisələri, onlayn mağazalar, çoxsaylı məhsul çeşidi olan bizneslər, sürətlə böyüyən şirkətlər üçün vacibdir. Əgər biznesinizdə stok qarışıqlığı varsa, satışla anbar arasında uyğunsuzluq yaşanırsa, məhsul itkisi baş verirsə, bu sistem zərurətə çevrilib.',
        conclusion: 'Stok nəzarətsizdirsə satış itirilir, xərclər artır, planlama çətinləşir. Düzgün qurulmuş Anbar və Stok İdarəetmə Sistemi isə satış itkilərini azaldır, xərcləri optimallaşdırır, biznesi daha idarəolunan edir.'
      },
      benefits: [
        'Stokların real vaxtda izlənməsi',
        'Artıq və ya çatışmayan məhsul riskinin azalması',
        'Anbar əməliyyatlarının sürətlənməsi',
        'Satış və tədarük proseslərinin optimallaşdırılması',
        'Xərclərə nəzarətin güclənməsi'
      ]
    },
    {
      id: 4,
      title: 'Satış və Müştəri İdarəetmə ERP Modulu',
      description: 'Müştərilərlə əlaqələri və satış proseslərini sistemli şəkildə idarə edən həll.',
      detailedContent: {
        whatIs: 'Satış və Müştəri İdarəetmə ERP Modulu — şirkətin bütün satış proseslərini, müştəri məlumatlarını və satış sonrası əlaqələri vahid sistem üzərindən idarə etməyə imkan verən ERP həllidir. Bu modul potensial müştərilərin qeydiyyatını, aktiv satış proseslərini, mövcud müştərilərlə əlaqəni, satış nəticələrinin analizini mərkəzləşdirilmiş və nəzarətli şəkildə həyata keçirir. Sadə desək, bu modul satışı təsadüfdən çıxarıb sistemə çevirir.',
        whyImportant: 'Bir çox şirkətdə satış prosesi müştəri məlumatları fərqli fayllarda saxlanılır, satış menecerləri məlumatları fərqli üsullarla qeyd edir, potensial müştərilər unudulur və ya itirilir, satış mərhələləri izlənilə bilmir, rəhbərlik real satış vəziyyətini tam görə bilmir kimi problemlərlə üzləşir. Nəticədə satış imkanları itirilir, müştəri təcrübəsi zəifləyir, gəlir potensialı tam istifadə olunmur. Satış və Müştəri İdarəetmə ERP Modulu bu boşluqları aradan qaldırmaq üçün qurulur.',
        howItWorks: [
          { 
            title: '1. Satış prosesinin tam nəzarətdə olması', 
            description: 'ERP Modulu hər bir satışın hansı mərhələdə olduğunu göstərir, gecikən və riskli satışları öncədən aşkarlayır. Bu, satış menecerlərinin işini daha planlı və nəticəyönümlü edir.' 
          },
          { 
            title: '2. Müştəri məlumatlarının mərkəzləşdirilməsi', 
            description: 'Bütün müştəri məlumatları əlaqə tarixçəsi, əvvəlki alışlar, xüsusi qeydlər vahid profildə saxlanılır. Bu, müştəriyə daha peşəkar və fərdiləşdirilmiş yanaşma imkanı yaradır.' 
          },
          { 
            title: '3. Satışların artması və itkilərin azalması', 
            description: 'ERP sistemi potensial müştərilərin unudulmasının qarşısını alır, satış prosesini sistemli edir, satışların bağlanma ehtimalını artırır. Nəticə: daha çox satış, daha az itki.' 
          },
          { 
            title: '4. Zamana qənaət və işçi səmərəliliyi', 
            description: 'Manual satış idarəetməsi vaxt aparır, işçi yükünü artırır. ERP Modulu isə məlumatların avtomatik qeydini təmin edir, hesabatları saniyələr içində təqdim edir, satış komandasının vaxtını azad edir. Bu, zamana qənaət etmək və işçi xərclərinin azalması deməkdir.' 
          },
          { 
            title: '5. Rəhbərlik üçün real vaxtda satış analitikası', 
            description: 'ERP Modulu rəhbərliyə satış həcmini, satış komandası performansını, müştəri davranışlarını real vaxtda göstərir. Bu, strateji qərarların təxminə yox, faktlara əsaslanmasına imkan yaradır.' 
          }
        ],
        suitableFor: 'Bu modul xüsusilə B2B satış edən şirkətlər, xidmət sektorunda fəaliyyət göstərən bizneslər, çoxsaylı satış meneceri olan müəssisələr, sürətlə böyüyən şirkətlər üçün idealdır. Əgər satış prosesiniz dağınıqdırsa, izlənilə bilmirsə, müştəri itkiləri yaşanırsa, bu modul artıq zəruridir.',
        conclusion: 'Satış prosesi nə qədər sistemlidirsə müştəri məmnuniyyəti artır, satış itkiləri azalır, biznes daha sürətli böyüyür. Düzgün qurulmuş Satış və Müştəri İdarəetmə ERP Modulu şirkətin gəlir artımının əsas dayaqlarından biridir.'
      },
      benefits: [
        'Müştəri məlumatlarının vahid bazada saxlanması',
        'Satış proseslərinin izlənməsi və analiz edilməsi',
        'Satış performansının artırılması',
        'Müştəri məmnuniyyətinin yüksəlməsi',
        'Uzunmüddətli müştəri əlaqələrinin qurulması'
      ]
    },
    {
      id: 5,
      title: 'İnsan Resursları (HR) ERP Sistemi',
      description: 'İşçi heyətinin idarə olunmasını avtomatlaşdıran və sadələşdirən ERP həlli.',
      detailedContent: {
        whatIs: 'İnsan Resursları (HR) ERP Sistemi — şirkətdə çalışan əməkdaşların bütün həyat dövrünü (işə qəbuldan işdən çıxışa qədər) vahid, mərkəzləşdirilmiş və avtomatlaşdırılmış sistem üzərindən idarə etməyə imkan verən ERP moduludur. Bu sistem işçi məlumatlarını bir mərkəzdə saxlayır, HR proseslərini avtomatlaşdırır, rəhbərliyə real vaxtda işçi strukturu və performans haqqında məlumat verir. Sadə desək, HR ERP Sistemi insan resurslarını təsadüfi deyil, sistemli şəkildə idarə etməyə imkan yaradır.',
        whyImportant: 'Bir çox şirkətdə HR prosesi hələ də Excel faylları, kağız sənədlər, fərdi qeydlər üzərindən idarə olunur. Bu isə işçi məlumatlarının dağınıq saxlanması, məzuniyyət və iş vaxtı qarışıqlığı, performansın obyektiv ölçülməməsi, maaş və bonuslarda səhvlər, rəhbərliyin real HR vəziyyətini görə bilməməsi kimi problemlərə səbəb olur. HR ERP Sistemi bu problemləri aradan qaldırmaq üçün qurulur.',
        howItWorks: [
          { 
            title: '1. İşçi məlumatlarının mərkəzləşdirilməsi', 
            description: 'Bütün əməkdaş məlumatları şəxsi məlumatlar, vəzifə və struktur, əmək haqqı və tarixçə vahid profildə saxlanılır. Bu, HR komandasının işini daha sürətli və dəqiq edir.' 
          },
          { 
            title: '2. Zamana qənaət və HR proseslərinin avtomatlaşdırılması', 
            description: 'Manual HR əməliyyatları vaxt aparır, səhv ehtimalını artırır. HR ERP Sistemi rutin işləri avtomatlaşdırır, HR komandasını strateji işlərə fokuslanmağa imkan verir. Bu isə zamana qənaət etmək və işçi xərclərinin azalması deməkdir.' 
          },
          { 
            title: '3. İşçi performansının obyektiv qiymətləndirilməsi', 
            description: 'Sistem KPI və performans göstəricilərini izləyir, inkişaf ehtiyaclarını göstərir, ədalətli qiymətləndirmə mühiti yaradır. Bu, işçi motivasiyasını və məhsuldarlığı artırır.' 
          },
          { 
            title: '4. Rəhbərlik üçün real vaxtda HR analitikası', 
            description: 'HR ERP Sistemi rəhbərliyə işçi sayı və struktur, dövriyyə (turnover), performans göstəriciləri, HR xərcləri haqqında real vaxtda analitik məlumatlar təqdim edir. Bu, qərarverməni təxminə yox, dataya əsaslanan prosesə çevirir.' 
          },
          { 
            title: '5. Şirkət mədəniyyətinin və nizam-intizamın güclənməsi', 
            description: 'HR proseslərinin sistemləşdirilməsi qaydaların şəffaf tətbiqini, işçilər arasında bərabərliyi, məsuliyyət bölgüsünü gücləndirir. Bu isə uzunmüddətli perspektivdə şirkət mədəniyyətini möhkəmləndirir.' 
          }
        ],
        suitableFor: 'Bu sistem xüsusilə orta və böyük şirkətlər, sürətlə böyüyən bizneslər, çoxsaylı işçisi olan müəssisələr, strukturlaşma mərhələsində olan şirkətlər üçün idealdır. Əgər şirkətinizdə HR prosesi qarışıqdısa, işçi məlumatları dağınıqdısa, performans ölçülmürsə, HR ERP Sistemi artıq zərurətə çevrilib.',
        conclusion: 'İnsan resursları düzgün idarə olunmadıqda motivasiya azalır, məhsuldarlıq düşür, işçi dövriyyəsi artır. Düzgün qurulmuş İnsan Resursları (HR) ERP Sistemi isə işçilərin potensialını açır, rəhbərliyə nəzarət verir, biznesin dayanıqlı inkişafını təmin edir.'
      },
      benefits: [
        'İşçi məlumatlarının mərkəzləşdirilmiş idarəsi',
        'Məzuniyyət və iş vaxtının avtomatik izlənməsi',
        'Performans qiymətləndirməsinin asanlaşdırılması',
        'HR proseslərində vaxta qənaət',
        'İnsan resursları üzrə daha dəqiq qərarlar'
      ]
    },
    {
      id: 6,
      title: 'ERP Hesabat və Analitika Sistemi',
      description: 'Biznes göstəricilərini analiz edən və rəhbərlik üçün hesabatlar yaradan ERP modulu.',
      detailedContent: {
        whatIs: 'ERP Hesabat və Analitika Sistemi — şirkətin bütün əməliyyat məlumatlarını (satış, maliyyə, anbar, HR və s.) vahid mərkəzdə toplayaraq, onları aydın, ölçülə bilən və qərarverməyə uyğun hesabatlara çevirən analitik ERP moduludur. Bu sistem xam məlumatları mənalı göstəricilərə çevirir, rəhbərliyə real vaxtda vəziyyəti göstərir, strateji qərarların dataya əsaslanmasını təmin edir. Sadə desək, bu sistem "nə baş verir?" sualına yox, "niyə baş verir və nə etməliyik?" sualına cavab verir.',
        whyImportant: 'Bir çox şirkətdə hesabatlar fərqli şöbələrdən əl ilə toplanır, Excel fayllarında hazırlanır, gecikmiş və natamam olur, real vəziyyəti tam əks etdirmir. Bu isə yanlış qərarlar, gec reaksiya, gəlir və xərclərə nəzarətin itməsi, rəhbərliyin vəziyyəti hissiyatla idarə etməsi kimi problemlərə səbəb olur. ERP Hesabat və Analitika Sistemi bu dağınıqlığı aradan qaldırmaq üçün qurulur.',
        howItWorks: [
          { 
            title: '1. Real vaxtda qərarvermə imkanı', 
            description: 'Sistem məlumatları anında yeniləyir, gecikmiş hesabat problemini aradan qaldırır. Bu, rəhbərliyə vaxtında və düzgün qərar vermək imkanı yaradır.' 
          },
          { 
            title: '2. Gəlir və xərclərə tam nəzarət', 
            description: 'ERP Analitika Sistemi gəlir mənbələrini, xərclərin harada artdığını, mənfəət marjalarını aydın şəkildə göstərir. Bu isə xərclərin optimallaşdırılması və mənfəətin artırılması deməkdir.' 
          },
          { 
            title: '3. Şəffaflıq və nəzarət', 
            description: 'Bütün göstəricilər sistemdə açıq olduğu üçün manipulyasiya azalır, daxili nəzarət güclənir, məsuliyyət bölgüsü aydınlaşır. Bu, korporativ idarəetməni gücləndirir.' 
          },
          { 
            title: '4. Zamana qənaət və avtomatlaşdırma', 
            description: 'Manual hesabatlar saatlarla vaxt aparır, insan səhvinə açıqdır. ERP Analitika Sistemi hesabatları avtomatik yaradır, rəhbər və menecerlərin vaxtını azad edir. Bu, zamana qənaət etmək və əməliyyat səmərəliliyini artırmaq deməkdir.' 
          },
          { 
            title: '5. Biznesin böyüməsi üçün strateji baxış', 
            description: 'Analitika trendləri göstərir, riskləri öncədən aşkarlayır, inkişaf imkanlarını ortaya çıxarır. Bu sistem qısamüddətli yox, uzunmüddətli böyümə üçün əsas yaradır.' 
          }
        ],
        suitableFor: 'Bu sistem xüsusilə orta və böyük şirkətlər, sürətlə böyüyən bizneslər, çoxşöbəli müəssisələr, rəhbərliyin dataya əsaslanan qərar vermək istədiyi şirkətlər üçün idealdır. Əgər hesabatlar gec hazırlanırsa, rəqəmlər bir-birini tutmursa, qərarlar hissiyatla verilirsə, bu sistem artıq vacib ehtiyacdır.',
        conclusion: 'Əgər biznes ölçülmürsə, analiz olunmursa, izlənilmirsə, onun böyüməsi təsadüfə qalır. Düzgün qurulmuş ERP Hesabat və Analitika Sistemi isə nəzarət yaradır, riskləri azaldır, gəliri artırır, biznesi idarə olunan hala gətirir.'
      },
      benefits: [
        'Real vaxtda analitik hesabatlar',
        'Strateji qərarlar üçün dəqiq məlumat',
        'Risklərin vaxtında aşkar edilməsi',
        'Biznes performansının ölçülməsi',
        'Planlama və proqnozlaşdırmanın gücləndirilməsi'
      ]
    },
    {
      id: 7,
      title: 'ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası',
      description: 'ERP-ni digər proqram və sistemlərlə uyğunlaşdıran inteqrasiya həlləri.',
      detailedContent: {
        whatIs: 'ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası — şirkətin hal-hazırda istifadə etdiyi proqram və platformaların (mühasibatlıq proqramları, CRM, e-commerce saytlar, bank sistemləri, POS, anbar proqramları, HR alətləri və s.) vahid ERP sistemi ilə əlaqələndirilməsi və sinxron işləməsinin təmin edilməsidir. Bu xidmət sayəsində məlumatlar bir sistemdən digərinə əl ilə ötürülmür, eyni məlumat bir neçə dəfə daxil edilmir, bütün proseslər avtomatik və real vaxtda işləyir. Sadə desək, bu inteqrasiya dağınıq proqramları bir-biri ilə danışan vahid sistemə çevirir.',
        whyImportant: 'Bir çox şirkətdə mühasibatlıq üçün bir proqram, satış üçün başqa sistem, anbar üçün ayrıca proqram, online satış üçün veb-sayt, bank əməliyyatları üçün ayrıca platforma istifadə olunur. Amma bu sistemlər bir-biri ilə əlaqəli deyil. Nəticədə məlumatlar uyğun gəlmir, hesabatlar fərqli rəqəmlər göstərir, proseslər yavaşıyır, səhvlər artır, qərarvermə çətinləşir. ERP inteqrasiyası bu problemi kökündən həll edir.',
        howItWorks: [
          { 
            title: '1. Vahid və etibarlı məlumat mənbəyi', 
            description: 'ERP inteqrasiyası ilə bütün məlumatlar bir mərkəzdə toplanır, fərqli sistemlərdə fərqli rəqəmlər problemi aradan qalxır. Rəhbərlik bir rəqəmə baxaraq qərar verir.' 
          },
          { 
            title: '2. Zamana qənaət və işçi yükünün azalması', 
            description: 'Avtomatik inteqrasiya təkrarlanan əməliyyatları ləğv edir, işçilərin vaxtını azad edir, əməliyyat sürətini artırır. Bu, birbaşa zamana qənaət etmək və işçi xərclərinin azalması deməkdir.' 
          },
          { 
            title: '3. Səhvlərin və risklərin minimuma endirilməsi', 
            description: 'Sistemlər arasında avtomatik məlumat axını insan səhvlərini azaldır, maliyyə və stok risklərini minimuma endirir, nəzarəti gücləndirir. Bu isə biznesin təhlükəsizliyini artırır.' 
          },
          { 
            title: '4. Real vaxtda hesabat və analitika', 
            description: 'İnteqrasiya olunmuş ERP bütün platformalardan məlumatları toplayır, real vaxtda hesabatlar yaradır, rəhbərliyə anlıq vəziyyəti göstərir. Bu, operativ və düzgün qərarvermə imkanı yaradır.' 
          },
          { 
            title: '5. Biznesin böyüməsinə hazır infrastruktur', 
            description: 'ERP inteqrasiyası yeni platformaların asan əlavə edilməsini, biznesin miqyaslanmasını, texnoloji dayanıqlığı təmin edir. Bu sistem bu gün üçün yox, gələcək böyümə üçün qurulur.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə çoxsaylı proqramlardan istifadə edən şirkətlər, sürətlə böyüyən bizneslər, e-commerce və fiziki satışları paralel aparan müəssisələr, maliyyə və əməliyyat nəzarətini gücləndirmək istəyən rəhbərlik üçün zəruridir. Əgər sistemləriniz bir-biri ilə uyğun gəlmirsə, məlumatlar üst-üstə düşmürsə, hesabatlara tam etibar etmirsinizsə, ERP inteqrasiyası qaçılmazdır.',
        conclusion: 'Əgər sistemləriniz ayrı-ayrı işləyirsə biznes yavaşlayır, xərclər artır, qərarlar riskli olur. Düzgün qurulmuş ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası isə prosesi sürətləndirir, xərcləri azaldır, biznesə tam nəzarət verir.'
      },
      benefits: [
        'CRM, bank, anbar və digər sistemlərlə əlaqə',
        'Məlumatların avtomatik ötürülməsi',
        'Təkrarlanan əməliyyatların aradan qaldırılması',
        'Proseslərin fasiləsiz işləməsi',
        'Ümumi sistem səmərəliliyinin artması'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>ERP Həllər - Biznes İdarəetmə Sistemi | TrivaSoft</title>
        <meta 
          name="description" 
          content="ERP sistemləri: maliyyə, inventar, satış, HR modulları. Biznesinizi vahid sistemdə idarə edin. Bakıda ERP həlləri." 
        />
        <meta 
          name="keywords" 
          content="ERP sistemləri Azərbaycan, biznes idarəetmə sistemi, ERP konsaltinq Bakı, inventar idarəetmə sistemi" 
        />
        <link rel="canonical" href="https://trivasoft.az/services/erp" />
        <meta property="og:title" content="ERP Həllər - Biznes İdarəetmə Sistemi | TrivaSoft" />
        <meta property="og:description" content="ERP sistemləri: maliyyə, inventar, satış, HR modulları. Biznesinizi vahid sistemdə idarə edin." />
        <meta property="og:url" content="https://trivasoft.az/services/erp" />
      </Helmet>
      <div className="service-detail">
        <section className="service-detail-hero">
        <div className="service-detail-hero-background"></div>
        <div className="service-detail-hero-container" ref={heroRef}>
          <Link to="/services" className="back-link">← Xidmətlərə qayıt</Link>
          <h1 className="service-detail-title">ERP Həllər</h1>
          <p className="service-detail-subtitle">
            Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri
          </p>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-detail-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-detail-card"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <h2 className="service-detail-card-title">{service.title}</h2>
              <p className="service-detail-card-description">{service.description}</p>
              
              {service.detailedContent && (
                <div className="service-detail-expanded">
                  <div className="service-detail-section">
                    <h3 className="service-detail-section-title">Nədir?</h3>
                    <p className="service-detail-text">{service.detailedContent.whatIs}</p>
                  </div>

                  {service.detailedContent.whyImportant && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Niyə vacibdir?</h3>
                      <p className="service-detail-text">{service.detailedContent.whyImportant}</p>
                    </div>
                  )}

                  {service.detailedContent.howItWorks && service.detailedContent.howItWorks.length > 0 && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Necə işləyir?</h3>
                      {service.detailedContent.howItWorks.map((item, idx) => (
                        <div key={idx} className="service-how-item">
                          <h4 className="service-how-title">{item.title}</h4>
                          <p className="service-how-description">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.detailedContent.suitableFor && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Hansı şirkətlər üçün uyğundur?</h3>
                      <p className="service-detail-text">{service.detailedContent.suitableFor}</p>
                    </div>
                  )}

                  {service.detailedContent.conclusion && (
                    <div className="service-detail-section">
                      <h3 className="service-detail-section-title">Nəticə</h3>
                      <p className="service-detail-text">{service.detailedContent.conclusion}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="service-detail-benefits">
                <h3 className="benefits-title">Müsbət cəhətləri:</h3>
                <ul className="benefits-list">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="benefit-item">
                      <span className="benefit-check">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="service-detail-cta">
          <a 
            href="https://wa.me/994553861211" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            WhatsApp ilə Əlaqə
          </a>
        </div>
      </section>
      </div>
    </>
  )
}

export default ServiceERP

