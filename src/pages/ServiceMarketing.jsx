import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ServiceDetail.css'

const ServiceMarketing = () => {
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
      title: 'Rəqəmsal Marketinq Strategiyasının Hazırlanması',
      description: 'Biznes məqsədlərinə uyğun, ölçülə bilən və nəticəyönümlü marketinq strategiyalarının qurulması.',
      detailedContent: {
        whatIs: 'Rəqəmsal Marketinq Strategiyası — biznesin online mühitdə necə görünəcəyini, müştəriyə necə çatacağını, hansı kanallardan satış edəcəyini və marketinq büdcəsini necə səmərəli istifadə edəcəyini müəyyən edən strateji yol xəritəsidir. Strategiya olmadan edilən marketinq təsadüfi olur, pul xərcləyir amma nəticə vermir, satışa çevrilmir. Trivasoft-un hazırladığı rəqəmsal marketinq strategiyası marketinqi xərc yox, ölçülə bilən investisiyaya çevirir.',
        whyImportant: 'Bir çox biznesdə sosial mediada paylaşım edilir, reklam verilir, dizayn hazırlanır, amma bunlar vahid məqsədə xidmət etmir. Nəticədə izləyici var satış yoxdur, reklam gedir geri dönüş zəifdir, marketinq xərcləri boşa gedir, rəhbərlik marketinqin real təsirini görmür. Bu nöqtədə problem icra deyil — strateji boşluqdur.',
        howItWorks: [
          { 
            title: '1. Doğru müştəriyə doğru mesaj', 
            description: 'Strategiya kimə danışmalı olduğunuzu, nə deməli olduğunuzu, harada görünməli olduğunuzu dəqiq müəyyən edir. Bu isə satışa çevrilən marketinq yaradır.' 
          },
          { 
            title: '2. Marketinq büdcəsinin səmərəli istifadəsi', 
            description: 'Strateji planlama lazımsız reklam xərclərini azaldır, doğru kanallara fokuslanır, büdcəni ölçülə bilən nəticələrə yönəldir. Bu, xərci azaldıb gəliri artırmaq deməkdir.' 
          },
          { 
            title: '3. Satış qıfının (funnel) qurulması', 
            description: 'Strategiya müştərini tanımaqdan satışa qədər olan yolu planlaşdırır, potensial müştərini mərhələ-mərhələ satışa hazırlayır. Bu, təsadüfi yox, davamlı satış yaradır.' 
          },
          { 
            title: '4. Brendin güclü mövqeləndirilməsi', 
            description: 'Düzgün strategiya brendi rəqiblərdən fərqləndirir, bazarda etibarlı mövqe yaradır, uzunmüddətli tanınma təmin edir. Bu, qiymət yarışından çıxıb dəyər üzərindən satış etməyə imkan verir.' 
          },
          { 
            title: '5. Ölçülə bilən nəticələr və nəzarət', 
            description: 'Strategiya çərçivəsində KPI-lar müəyyən edilir, nəticələr ölçülür, zəif nöqtələr optimallaşdırılır. Rəhbərlik marketinqin real təsirini rəqəmlərlə görür.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə satışlarını artırmaq istəyən şirkətlər, reklam verib nəticə ala bilməyən bizneslər, bazarda güclü mövqelənmək istəyən brendlər, B2B və B2C şirkətlər üçün vacibdir. Əgər marketinq var amma satış artmırsa, reklam gedir amma geri dönüş zəifdirsə, brend qarışıqlığı varsa, problem icrada yox, strategiyanın olmamasındadır.',
        conclusion: 'Əgər biznes plan olmadan reklam edirsə, ölçmədən marketinq edirsə, satışa fokuslanmırsa, orada artım təsadüfi olur. Düzgün hazırlanmış Rəqəmsal Marketinq Strategiyası isə satışları artırır, xərcləri optimallaşdırır, brendi gücləndirir, biznesi böyüdür.'
      },
      benefits: [
        'Dəqiq hədəf auditoriyanın müəyyən edilməsi',
        'Büdcənin səmərəli bölüşdürülməsi',
        'Marketinq fəaliyyətlərində ardıcıllıq',
        'Satış və brend məqsədlərinin uzlaşdırılması',
        'Uzunmüddətli inkişaf planı'
      ]
    },
    {
      id: 2,
      title: 'Brend Strategiyası və Mövqeləndirmə (Brending)',
      description: 'Brendin bazarda tanıdılması və mövqeləndirilməsi.',
      detailedContent: {
        whatIs: 'Brend Strategiyası və Mövqeləndirmə (Brending) — biznesin bazarda necə tanınacağını, müştərinin sizi necə xatırlayacağını və rəqiblərdən nə ilə fərqlənəcəyinizi müəyyən edən strateji prosesdir. Brend sadəcə loqo və rənglər deyil. Brend müştərinin sizə olan etibarıdır, seçim anında sizi xatırlamasıdır, qiymətə yox dəyərə görə seçilməyinizdir. Trivasoft-un brend strategiyası xidməti şirkəti bazarda görünən yox, seçilən brendə çevirir.',
        whyImportant: 'Bir çox biznesdə loqoya malikdir, sosial mediada paylaşımlar edir, reklam verir, amma müştərinin beynində aydın mövqe tutmur. Nəticədə müştəri sizi rəqiblərlə qarışdırır, qiymət yarışına düşürsünüz, fərqlənmə gücünüz zəifləyir, satışlar təsadüfi olur. Bu problemin kökü strateji brend mövqeləndirməsinin olmamasıdır.',
        howItWorks: [
          { 
            title: '1. Rəqiblərdən aydın şəkildə fərqlənmə', 
            description: 'Düzgün mövqeləndirmə sizi bazarda unikal edir, eyni xidməti göstərən rəqiblərdən ayırır. Bu, qiymət yox, dəyər üzərindən satış imkanı yaradır.' 
          },
          { 
            title: '2. Müştəri etibarının formalaşması', 
            description: 'Güclü brend inam yaradır, qərarvermə müddətini qısaldır, müştərinin sizi seçməsini asanlaşdırır. İnsanlar tanıdığı və güvəndiyi brendlərdən alır.' 
          },
          { 
            title: '3. Satışların davamlı artımı', 
            description: 'Brend strategiyası müştərini təkcə cəlb etmir, onu geri qaytarır. Bu isə təkrarlanan satışlar və uzunmüddətli gəlir deməkdir.' 
          },
          { 
            title: '4. Marketinq xərclərinin optimallaşdırılması', 
            description: 'Aydın brend mesajı reklamların daha effektiv olmasını, daha az büdcə ilə daha çox nəticə əldə edilməsini təmin edir.' 
          },
          { 
            title: '5. Brendin miqyaslana bilməsi', 
            description: 'Strateji brend yeni məhsul və xidmətlərin asan qəbul olunmasını, yeni bazarlara girişin sürətlənməsini təmin edir. Bu, böyüməyə hazır brend infrastrukturu yaradır.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə bazarda fərqlənmək istəyən şirkətlər, qiymət yarışından çıxmaq istəyən bizneslər, yeni brend yaradan və ya rebrending edən şirkətlər, B2B və B2C sahəsində fəaliyyət göstərən müəssisələr üçün vacibdir. Əgər müştərilər sizi xatırlamırsa, eyni xidmət göstərənlərlə qarışdırılırsınızsa, satışlar stabil deyilsə, problem məhsulda yox, brend mövqeyindədir.',
        conclusion: 'Zəif brend daha çox izah tələb edir, daha çox reklam xərci yaradır, daha az etibar qazandırır. Güclü brend isə özü danışır, özü satır, bazarda qalıcı olur.'
      },
      benefits: [
        'Brendin unikal dəyər təklifinin formalaşdırılması',
        'Rəqiblər qarşısında aydın mövqe',
        'Brend tanınmasının artması',
        'Müştəri etibarının güclənməsi',
        'Davamlı brend imici'
      ]
    },
    {
      id: 3,
      title: 'Sosial Media Marketinqi və İdarəetmə',
      description: 'Brendin sosial media kanallarında effektiv və satışyönümlü idarə olunması.',
      detailedContent: {
        whatIs: 'Sosial Media Marketinqi və İdarəetmə — brendin sosial platformalarda (Instagram, Facebook, LinkedIn və s.) planlı, strateji və satış yönümlü şəkildə idarə olunmasıdır. Bu xidmət sadəcə paylaşım etmək deyil, müştəri cəlb etmək, etibar yaratmaq və satışı artırmaq üçün qurulan sistemdir. Trivasoft-un yanaşmasında sosial media vaxt dolduran platforma yox, satış və böyümə alətidir.',
        whyImportant: 'Bir çox biznesdə paylaşımlar edilir, dizayn hazırlayır, reklam verir, amma müştəri yazmır, satış artmır, brend yadda qalmır. Çünki problem paylaşımda yox, idarəetmənin strategiyasız olmasındadır.',
        howItWorks: [
          { 
            title: '1. Brendin davamlı və peşəkar görünməsi', 
            description: 'Düzgün idarə olunan sosial media brendi etibarlı göstərir, müştərinin qərar verməsini asanlaşdırır, bazarda peşəkar imic yaradır. İnsanlar güvəndiyi brendlərdən alır.' 
          },
          { 
            title: '2. Müştəri ilə birbaşa və sürətli əlaqə', 
            description: 'Sosial media müştərinin ilk təmas nöqtəsidir, sualların və marağın yarandığı yerdir. Düzgün idarəetmə mesajlara vaxtında cavab, münasib ünsiyyət, satışa yönləndirmə imkanı yaradır.' 
          },
          { 
            title: '3. Satışların artması', 
            description: 'Planlı kontent və düzgün çağırışlar (CTA) izləyicini potensial müştəriyə, potensial müştərini real alıcıya çevirir. Bu, sosial medianın birbaşa satış kanalına çevrilməsi deməkdir.' 
          },
          { 
            title: '4. Marketinq xərclərinin optimallaşdırılması', 
            description: 'Strategiyalı sosial media reklamlarda daha yüksək geri dönüş (ROI), düzgün auditoriyaya fokuslanma, lazımsız xərclərin azalması yaradır.' 
          },
          { 
            title: '5. Ölçülə bilən nəticələr və nəzarət', 
            description: 'Trivasoft idarəetməsində baxışlar, kliklər, mesajlar, müraciətlər və satışa təsir ölçülür və analiz olunur. Rəhbərlik sosial medianın real biznes təsirini rəqəmlərlə görür.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə müştəri ilə birbaşa əlaqə quran bizneslər, xidmət və pərakəndə satış sektorları, otellər, klinikalar, təlim mərkəzləri, B2B və B2C şirkətlər üçün vacibdir. Əgər sosial media aktivdir amma satış yoxdur, mesajlar gec cavablanır, brend qarışıqlığı yaşanırsa, problem idarəetmədədir.',
        conclusion: 'Plansız sosial media brendi zəiflədir, satış imkanlarını itirir. Düzgün idarə olunan Sosial Media Marketinqi və İdarəetmə isə müştəri sayını artırır, satışları gücləndirir, brendi böyüdür.'
      },
      benefits: [
        'Peşəkar kontent planlaması',
        'Müştərilərlə aktiv və ardıcıl ünsiyyət',
        'Brend imicinin gücləndirilməsi',
        'Sosial mediadan satış imkanlarının artırılması',
        'Analitik nəticələr əsasında optimallaşdırma'
      ]
    },
    {
      id: 4,
      title: 'Reklam Kampaniyalarının Planlanması və İdarə Edilməsi',
      description: 'Onlayn reklam platformalarında effektiv və məqsədyönlü kampaniyaların qurulması.',
      detailedContent: {
        whatIs: 'Reklam Kampaniyalarının Planlanması və İdarə Edilməsi — biznesin məhsul və xidmətlərini doğru auditoriyaya, doğru zamanda və doğru mesajla çatdırmaq üçün reklam proseslərinin strateji şəkildə qurulması, icrası və optimallaşdırılmasıdır. Bu xidmət sadəcə reklam vermək deyil. Bu xidmət büdcəni qoruyan, satışı artıran, ölçülə bilən nəticə yaradan peşəkar reklam idarəetmə sistemidir. Trivasoft üçün reklam xərc yox, geri dönüşü olan investisiyadır.',
        whyImportant: 'Bir çox biznesdə reklam verir, büdcə xərcləyir, klik və baxış alır, amma real müştəri gəlmir, satış artmır, geri dönüş (ROI) zəif olur. Bunun səbəbi reklamın özü yox, plansız və nəzarətsiz idarə olunmasıdır.',
        howItWorks: [
          { 
            title: '1. Doğru auditoriyaya çıxış', 
            description: 'Peşəkar planlama sayəsində reklam yalnız potensial müştərilərə göstərilir, maraqsız auditoriyaya pul xərclənmir. Bu, daha az büdcə ilə daha çox nəticə deməkdir.' 
          },
          { 
            title: '2. Satışların və müraciətlərin artması', 
            description: 'Düzgün qurulmuş kampaniyalar müştərini cəlb edir, satışa yönləndirir, müraciət sayını artırır. Reklam birbaşa satış mexanizminə çevrilir.' 
          },
          { 
            title: '3. Büdcənin effektiv idarə olunması', 
            description: 'Trivasoft reklam idarəetməsində büdcə gündəlik nəzarətdə saxlanılır, zəif kampaniyalar dayandırılır, effektiv kampaniyalar gücləndirilir. Bu, reklam xərclərinin optimallaşdırılması deməkdir.' 
          },
          { 
            title: '4. Ölçülə bilən nəticələr və şəffaflıq', 
            description: 'Hər kampaniya üzrə kliklər, müraciətlər, satışa təsir ölçülür və hesabatlandırılır. Rəhbərlik reklama xərclənən hər manatın qarşılığını görür.' 
          },
          { 
            title: '5. Brend tanınmasının güclənməsi', 
            description: 'Davamlı və düzgün reklam brendin bazarda görünməsini artırır, etibar yaradır, müştərinin sizi tanımasını təmin edir. Bu, uzunmüddətli satışlara zəmin yaradır.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə satışını artırmaq istəyən şirkətlər, reklam verib nəticə ala bilməyən bizneslər, yeni məhsul və xidmət təqdim edən brendlər, B2B və B2C şirkətlər üçün vacibdir. Əgər reklam xərci artır satış artmırsa, kampaniyalar nəzarətsizdirsə, geri dönüş zəifdirsə, problem idarəetmədədir.',
        conclusion: 'Plansız reklam büdcəni əritir, biznesi yavaşladır. Düzgün planlanmış və idarə olunan Reklam Kampaniyaları isə satışları artırır, brendi gücləndirir, biznesi böyüdür.'
      },
      benefits: [
        'Doğru auditoriyaya düzgün mesaj',
        'Reklam büdcəsinə nəzarət',
        'Kampaniya nəticələrinin ölçülməsi',
        'Geri dönüşün (ROI) artırılması',
        'Brend görünürlüyünün artması'
      ]
    },
    {
      id: 5,
      title: 'Vizual Kimlik və Brend Dizaynı',
      description: 'Brendin vizual üslubunu formalaşdıran dizayn və identifikasiya həlləri.',
      detailedContent: {
        whatIs: 'Vizual Kimlik və Brend Dizaynı — brendin bazarda necə görünəcəyini, müştərinin sizi ilk baxışda necə tanıyacağını və yadda saxlayacağını müəyyən edən strateji dizayn prosesidir. Vizual kimlik sadəcə loqo deyil. Vizual kimlik brendin xarakteridir, etibarın ilk təmas nöqtəsidir, müştərinin şüuraltı qərarına təsir edən əsas amildir. Trivasoft üçün dizayn gözəllik yox, satış və etibar yaradan alətdir.',
        whyImportant: 'Bir çox biznesdə loqo mövcuddur, rənglər istifadə olunur, postlar paylaşılır, amma bütün platformalarda fərqli görünür, peşəkar təəssürat yaratmır, brend yadda qalmır. Bu problem dizaynda yox, vizual kimliyin strateji qurulmamasındadır.',
        howItWorks: [
          { 
            title: '1. İlk baxışda etibar və peşəkarlıq', 
            description: 'Peşəkar vizual kimlik müştərinin qərar verməsini asanlaşdırır, sizi bazarda ciddi və güvənilir göstərir. İlk təəssürat satışın yarısını həll edir.' 
          },
          { 
            title: '2. Brendin yadda qalması', 
            description: 'Düzgün dizayn sizi rəqiblərdən ayırır, brendi tanınan edir, müştərinin beynində iz buraxır. Bu, uzunmüddətli satış üçün vacibdir.' 
          },
          { 
            title: '3. Marketinq və reklam effektivliyinin artması', 
            description: 'Vahid vizual dil reklamların daha təsirli olmasını, mesajların daha tez qəbul edilməsini təmin edir. Bu, reklam büdcəsinin daha səmərəli xərclənməsi deməkdir.' 
          },
          { 
            title: '4. Satış prosesinin asanlaşması', 
            description: 'Peşəkar görünən brend daha az izah tələb edir, daha tez etibar qazanır, qiymət müzakirəsini azaldır. Bu isə satışların daha rahat bağlanmasına kömək edir.' 
          },
          { 
            title: '5. Brendin böyüməyə hazır olması', 
            description: 'Strateji vizual kimlik yeni məhsul və xidmətlərin rahat təqdim edilməsini, yeni bazarlara girişin asanlaşmasını təmin edir. Bu, brendi miqyaslana bilən hala gətirir.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə yeni brend yaradan şirkətlər, rebrending edən bizneslər, premium mövqelənmək istəyən markalar, B2B və B2C sahəsində fəaliyyət göstərən şirkətlər üçün vacibdir. Əgər brendiniz qarışıq görünürsə, müştərilər sizi rəqiblərlə qarışdırırsa, dizayn satışa kömək etmirsə, problem vizual kimlikdədir.',
        conclusion: 'Zəif dizayn satışı çətinləşdirir, etibarı azaldır. Güclü vizual kimlik isə müştəri cəlb edir, etibar yaradır, satışları sürətləndirir.'
      },
      benefits: [
        'Peşəkar loqo və dizayn konsepti',
        'Brendin vizual olaraq fərqlənməsi',
        'Bütün platformalarda vahid üslub',
        'Brendin yadda qalan görünüşü',
        'Güclü vizual təsir'
      ]
    },
    {
      id: 6,
      title: 'Kontent Marketinqi və Kopiraytinq',
      description: 'Brend üçün dəyər yaradan, məlumatlandıran və satışa yönəldən mətn və məzmunların hazırlanması.',
      detailedContent: {
        whatIs: 'Kontent Marketinqi və Kopiraytinq — biznesin hədəf auditoriyası ilə doğru dildə, doğru mesajla və doğru platformada ünsiyyət qurmasını təmin edən strateji məzmun istehsalı prosesidir. Bu xidmət sadəcə mətn yazmaq deyil. Bu xidmət müştərinin diqqətini çəkmək, etibar yaratmaq, qərarverməni sürətləndirmək üçün qurulan satış yönümlü kommunikasiya sistemidir. Trivasoft üçün kontent söz yığını yox, satışa xidmət edən alətdir.',
        whyImportant: 'Bir çox biznesdə paylaşımlar edilir, mətnlər yazılır, bloqlar dərc edilir, amma müştəri reaksiya vermir, sayt oxunur amma müraciət gəlmir, sosial media aktivdir amma satış yoxdur. Çünki problem kontentin olmasında yox, strateji və satış yönümlü yazılmamasındadır.',
        howItWorks: [
          { 
            title: '1. Müştərinin diqqətini cəlb edən mesajlar', 
            description: 'Düzgün yazılmış kontent müştərinin problemini tanıyır, onun dilində danışır, maraq yaradır. Bu, satış prosesinin ilk və ən vacib mərhələsidir.' 
          },
          { 
            title: '2. Etibar və ekspert imicinin formalaşması', 
            description: 'Keyfiyyətli kontent brendi mütəxəssis kimi göstərir, müştərinin güvənini artırır, seçim anında sizi önə çıxarır. İnsanlar güvəndiyi brendlərdən alır.' 
          },
          { 
            title: '3. Satışa çevrilən məzmun', 
            description: 'Satış yönümlü kopiraytinq oxuyanı düşünməyə, maraqlananı yazmağa, yazanı almağa yönləndirir. Bu, kontentin birbaşa gəlir gətirməsi deməkdir.' 
          },
          { 
            title: '4. SEO ilə uzunmüddətli trafik', 
            description: 'SEO-yə uyğun yazılmış kontent Google axtarışlarında görünürlük yaradır, uzunmüddətli orqanik trafik gətirir, reklamsız müştəri axını təmin edir. Bu isə marketinq xərclərinin uzunmüddətli azalması deməkdir.' 
          },
          { 
            title: '5. Marketinq və reklam effektivliyinin artması', 
            description: 'Düzgün kontent reklamların dönüşünü yüksəldir, kliklərin keyfiyyətini artırır, satış qıfını gücləndirir. Kontent reklamın performansını birbaşa təsir edir.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə xidmət sektoru şirkətləri, B2B satış edən bizneslər, otellər, klinikalar, təlim mərkəzləri, e-commerce və korporativ brendlər üçün vacibdir. Əgər sayt oxunur amma müraciət gəlmirsə, sosial media aktivdir amma satış yoxdur, reklam gedir amma geri dönüş zəifdirsə, problem kontentin satış yönümlü olmamasıdır.',
        conclusion: 'Zəif kontent diqqət çəkmir, etibar yaratmır, satışı ləngidir. Güclü kontent isə maraq yaradır, güvən qazandırır, satışları artırır.'
      },
      benefits: [
        'Satışyönümlü mətnlər',
        'Brend dilinə uyğun kontent',
        'Müştəri etibarının artması',
        'Axtarış sistemləri üçün optimallaşdırılmış məzmun',
        'Uzunmüddətli dəyər yaradan kontent strategiyası'
      ]
    },
    {
      id: 7,
      title: 'Analitika və Marketinq Hesabatları',
      description: 'Marketinq fəaliyyətlərinin nəticələrini ölçən və təhlil edən analitik xidmətlər.',
      detailedContent: {
        whatIs: 'Analitika və Marketinq Hesabatları — marketinq fəaliyyətlərindən əldə olunan bütün məlumatların (reklamlar, sosial media, sayt trafiki, müraciətlər, satışa təsir və s.) toplanması, analiz edilməsi və qərarverməyə uyğun hesabatlara çevrilməsi prosesidir. Bu xidmətin məqsədi sadəcə rəqəm göstərmək deyil. Məqsəd nəyin işlədiyini, nəyin işləmədiyini, büdcənin hara getdiyini, satışa nəyin təsir etdiyini aydın şəkildə göstərməkdir. Trivasoft üçün analitika marketinqi hissiyatdan çıxarıb rəqəmlə idarə etməyə imkan verən alətdir.',
        whyImportant: 'Bir çox biznesdə reklam verir, postlar paylaşır, kampaniyalar edir, amma real nəticəni ölçmür, hansı kanalın işlədiyini bilmir, büdcəni kor-koranə xərcləyir. Nəticədə rəhbərlik "Marketinqə pul gedir, amma nə qədər gəlir gətirdiyini bilmirik" deyə düşünür. Bu nöqtədə problem marketinqin özündə yox, analitikanın olmamasındadır.',
        howItWorks: [
          { 
            title: '1. Marketinq büdcəsinə tam nəzarət', 
            description: 'Analitika hansı reklamın nəticə verdiyini, hansının büdcəni boşa xərclədiyini aydın göstərir. Bu, lazımsız xərclərin azaldılması deməkdir.' 
          },
          { 
            title: '2. Satışa real təsirin ölçülməsi', 
            description: 'Trivasoft hesabatları marketinqin satışa necə təsir etdiyini, hansı kanalın daha çox müştəri gətirdiyini rəqəmlərlə sübut edir. Bu, marketinqin dəyərini rəhbərliyə göstərir.' 
          },
          { 
            title: '3. Doğru qərarvermə', 
            description: 'Rəqəmlərə əsaslanan analitika riskli qərarları azaldır, fürsətləri öncədən göstərir, strategiyanı vaxtında dəyişməyə imkan verir. Bu, təxmin yox, fakt əsasında idarəetmə deməkdir.' 
          },
          { 
            title: '4. Marketinq strategiyasının optimallaşdırılması', 
            description: 'Analitika sayəsində zəif kampaniyalar dayandırılır, güclü kampaniyalar böyüdülür, mesajlar və auditoriya optimallaşdırılır. Bu, daha az büdcə ilə daha çox nəticə yaradır.' 
          },
          { 
            title: '5. Rəhbərlik üçün aydın və oxunaqlı hesabatlar', 
            description: 'Trivasoft hesabatları texniki deyil, aydın, qərarverməyə fokuslanmış olur. CEO və rəhbərlik bir baxışda vəziyyəti anlayır.' 
          }
        ],
        suitableFor: 'Bu xidmət xüsusilə aktiv reklam verən şirkətlər, marketinq büdcəsi olan bizneslər, B2B və B2C şirkətlər, rəhbərliyin nəticə görmək istədiyi müəssisələr üçün vacibdir. Əgər reklam xərcləri artır satış artmırsa, marketinqin dəyəri sübut olunmursa, qərarlar hissiyatla verilirsə, analitika qaçılmaz ehtiyacdır.',
        conclusion: 'Əgər marketinq ölçülmürsə, analiz olunmursa, nəticə ilə əlaqələndirilmirsə, orada inkişaf təsadüfi olur. Düzgün qurulmuş Analitika və Marketinq Hesabatları isə xərcləri nəzarətdə saxlayır, satışları artırır, marketinqi real dəyərə çevirir.'
      },
      benefits: [
        'Real nəticələrə əsaslanan qərarlar',
        'Marketinq xərclərinin optimallaşdırılması',
        'Effektiv kanalların müəyyən edilməsi',
        'Strategiyanın davamlı təkmilləşdirilməsi',
        'Şəffaf və anlaşılan hesabatlar'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Marketinq - Rəqəmsal Marketinq, SMM, SEO | TrivaSoft</title>
        <meta 
          name="description" 
          content="Rəqəmsal marketinq, SMM, SEO, brend strategiyası və kontent marketinqi xidmətləri. Bakıda marketinq həlləri." 
        />
        <meta 
          name="keywords" 
          content="rəqəmsal marketinq Bakı, SMM xidmətləri, SEO optimallaşdırma, brend strategiyası Azərbaycan" 
        />
        <link rel="canonical" href="https://trivasoft.az/xidmetler/marketinq" />
        <meta property="og:title" content="Marketinq - Rəqəmsal Marketinq, SMM, SEO | TrivaSoft" />
        <meta property="og:description" content="Rəqəmsal marketinq, SMM, SEO, brend strategiyası və kontent marketinqi xidmətləri." />
        <meta property="og:url" content="https://trivasoft.az/xidmetler/marketinq" />
      </Helmet>
      <div className="service-detail">
        <section className="service-detail-hero">
        <div className="service-detail-hero-background"></div>
        <div className="service-detail-hero-container" ref={heroRef}>
          <Link to="/xidmetler" className="back-link">← Xidmətlərə qayıt</Link>
          <h1 className="service-detail-title">Marketinq</h1>
          <p className="service-detail-subtitle">
            Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın
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
                      <h3 className="service-detail-section-title">Hansı bizneslər üçün vacibdir?</h3>
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

export default ServiceMarketing

