import nidalImg from '../assets/nidal.png'

const countries = [
  { name: 'الأردن', flag: '🇯🇴' },
  { name: 'السعودية', flag: '🇸🇦' },
  { name: 'مصر', flag: '🇪🇬' },
  { name: 'تركيا', flag: '🇹🇷' },
  { name: 'تونس', flag: '🇹🇳' },
  { name: 'الجزائر', flag: '🇩🇿' },
  { name: 'السودان', flag: '🇸🇩' },
]

const stats = [
  { number: '+35', label: 'سنة خبرة', sub: 'في الميدان' },
  { number: '+7', label: 'دول عربية', sub: 'تم العمل فيها' },
  { number: '+50', label: 'مشروع', sub: 'صناعي منجز' },
  { number: '+100', label: 'فرن', sub: 'من بناء وصيانة ' },
]

const timeline = [
  {
    tag: 'البداية',
    title: 'انطلاقة من الميدان',
    text: 'بدأ نضال يوسف مسيرته في أصعب البيئات الصناعية — داخل أفران الحديد والإسمنت — مكتسباً خبرة حقيقية لا تُتعلم من الكتب.',
  },
  {
    tag: '+35 عاماً',
    title: 'خبرة متراكمة',
    text: 'خلال عقود متواصلة، أتقن فنون التبطين الحراري وصيانة الأفران وإعادة تأهيلها وفق أعلى المعايير الفنية، مما رفع كفاءة التشغيل في كل منشأة عمل بها.',
  },
  {
    tag: '7 دول',
    title: 'امتداد عربي ودولي',
    text: 'من الأردن إلى السعودية ومصر وتركيا وتونس والجزائر والسودان — شارك في مشاريع متنوعة وبنى معرفة عميقة بمختلف أنواع الأفران والتحديات التشغيلية.',
  },
  {
    tag: 'اليوم',
    title: 'خبرة تخدم الصناعة',
    text: 'يواصل نضال يوسف تقديم حلول متكاملة في الطوب الحراري والإسمنت الحراري والخرسانة الحرارية والمواد العازلة — بجودة تعتمد عليها المصانع.',
  },
]

const products = [
  { name: 'بناء الأفران', icon: '🧱' },
  { name: 'صيانة', icon: '⚗️' },
  { name: 'بيع مواد حرارية', icon: '🏗️' },
  { name: 'المواد العازلة',  icon: '🛡️' },
]

function About() {
  return (
    <div style={{ backgroundColor: '#0c0c0f' }} dir="rtl">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Image — desktop only, left half */}
        <div className="absolute left-0 top-0 w-1/2 h-full hidden lg:block">
          <img
            src={nidalImg}
            alt="نضال يوسف"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, #0c0c0f 15%, rgba(12,12,15,0.5) 60%, transparent 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #0c0c0f 0%, transparent 40%)' }}
          />
        </div>

        {/* Mobile image — shows on small screens at top */}
        <div className="absolute top-0 left-0 right-0 h- lg:hidden">
          <img
            src={nidalImg}
            alt="نضال يوسف"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #0c0c0f 20%, rgba(12,12,15,0.3) 100%)' }}
          />
        </div>

        {/* Text */}
        <div className="relative z-10 w-full lg:w-1/2 lg:mr-30 px-6 lg:px-20 pt-72 lg:pt-0 pb-48 lg:pb-32">

          <div
            className="inline-block text-xs font-black tracking-widest px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: '#18181f', color: '#f59e0b', border: '1px solid #f59e0b33' }}
          >
            من نحن
          </div>

          <h1 className="text-white font-black leading-tight mb-2" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            من هو
          </h1>
          <h1 className="font-black leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: '#f59e0b' }}>
            نضال يوسف؟
          </h1>

          {/* Amber line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ backgroundColor: '#242430' }} />
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
          </div>

          <p className="text-gray-300 text-lg leading-loose mb-8" style={{ maxWidth: '540px' }}>
            يُعد نضال يوسف من أصحاب الخبرات الرائدة في مجال الحراريات والأفران الصناعية،
            حيث أمضى أكثر من{' '}
            <span className="text-amber-400 font-bold">35 عاماً</span>{' '}
            في العمل الميداني داخل مصانع الحديد والإسمنت والصناعات الثقيلة،
            مشاركاً في بناء وصيانة وتأهيل الأفران الحرارية في العديد من المشاريع الصناعية
            داخل الوطن العربي وخارجه.
          </p>

          {/* Countries */}
          <div className="flex flex-wrap gap-2 mb-10">
            {countries.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-300 transition-all hover:border-amber-500"
                style={{ backgroundColor: '#18181f', border: '1px solid #242430' }}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Stats bar */}
        <div
          className="absolute bottom-0 left-0 right-0 grid grid-cols-2 lg:grid-cols-4"
          style={{ backgroundColor: 'rgba(12,12,15,0.95)', borderTop: '1px solid #242430' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-5 px-4 text-center"
              style={{ borderRight: i % 2 === 0 ? '1px solid #242430' : 'none' }}
            >
              <span className="font-black text-2xl lg:text-3xl leading-none mb-1" style={{ color: '#f59e0b' }}>{s.number}</span>
              <span className="text-white text-xs lg:text-sm font-bold">{s.label}</span>
              <span className="text-gray-500 text-xs">{s.sub}</span>
            </div>
          ))}
        </div>

      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-16 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#0c0c0f' }}>
        <div className="max-w-5xl mx-auto">

          <div className="text-right mb-12 lg:mb-20">
            <p className="text-amber-500 text-xs font-black tracking-widest uppercase mb-4">المسيرة المهنية</p>
            <h2 className="text-white font-black" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>رحلة من الميدان</h2>
          </div>

          <div className="relative">
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ backgroundColor: '#242430', right: '11px' }}
            />

            <div className="flex flex-col gap-10 lg:gap-16">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 lg:gap-10 items-start pr-10 relative">

                  <div
                    className="absolute right-0 top-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: '#0c0c0f',
                      border: '2px solid #f59e0b',
                      boxShadow: '0 0 16px rgba(245,158,11,0.4)',
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                  </div>

                  <div
                    className="flex-1 p-5 lg:p-8 rounded-2xl"
                    style={{
                      backgroundColor: '#18181f',
                      border: '1px solid #242430',
                      boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
                    }}
                  >
                    <span
                      className="inline-block text-xs font-black px-3 py-1 rounded-full mb-4"
                      style={{ backgroundColor: '#0c0c0f', color: '#f59e0b', border: '1px solid #f59e0b44' }}
                    >
                      {item.tag}
                    </span>
                    <h3 className="text-white text-lg lg:text-xl font-black mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-loose text-sm lg:text-base">{item.text}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-16 lg:py-24 px-4 lg:px-8" style={{ backgroundColor: '#18181f' }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-right mb-10 lg:mb-14">
            <p className="text-amber-500 text-xs font-black tracking-widest uppercase mb-4">ما نقدمه</p>
            <h2 className="text-white font-black" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>حلول متكاملة في الحراريات</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl p-5 lg:p-8 text-right transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: '#0c0c0f', border: '1px solid #242430' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(245,158,11,0.08), transparent 70%)' }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: '#f59e0b' }}
                />
                <div className="text-3xl lg:text-4xl mb-4 lg:mb-6">{p.icon}</div>
                <h3 className="text-white font-black text-base lg:text-lg mb-2">{p.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CLOSING QUOTE ===== */}
      <section
        className="relative py-20 lg:py-32 px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: '#0c0c0f' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="text-7xl lg:text-8xl leading-none mb-8 opacity-20 font-serif" style={{ color: '#f59e0b' }}>
            "
          </div>
          <p className="text-white text-lg lg:text-2xl leading-loose font-semibold mb-4">
            35 عاماً من الخبرة الميدانية، وآلاف ساعات العمل داخل الأفران الصناعية،
            وعشرات المشاريع في عدة دول عربية
          </p>
          <p className="text-lg lg:text-2xl font-black mb-10" style={{ color: '#f59e0b' }}>
            خبرة صنعت اسماً يثق به العاملون في قطاع الحراريات والصناعات الثقيلة.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16" style={{ backgroundColor: '#242430' }} />
            <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#242430' }} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default About