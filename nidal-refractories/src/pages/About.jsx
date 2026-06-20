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
{/* ===== PRODUCTS ===== */}
      <section className="py-16 lg:py-24 px-4 lg:px-8" style={{ backgroundColor: '#18181f' }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-right mb-12 lg:mb-16">
            <p className="text-amber-500 text-xs font-black tracking-widest uppercase mb-4">ما نقدمه</p>
            <h2 className="text-white font-black" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>حلول متكاملة في الحراريات</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Card 1 - بناء الأفران : bricks build up filling the whole card */}
            <div className="product-card" style={{ backgroundColor: '#0c0c0f', border: '1px solid #242430' }}>
              <svg viewBox="0 0 220 260" className="card-scene">
                <rect x="14" y="190" width="60" height="40" className="brick" style={{ animationDelay: '0s' }} fill="#f59e0b" />
                <rect x="78" y="190" width="60" height="40" className="brick" style={{ animationDelay: '0.1s' }} fill="#d97706" />
                <rect x="142" y="190" width="60" height="40" className="brick" style={{ animationDelay: '0.2s' }} fill="#f59e0b" />
                <rect x="46" y="150" width="60" height="40" className="brick" style={{ animationDelay: '0.3s' }} fill="#d97706" />
                <rect x="110" y="150" width="60" height="40" className="brick" style={{ animationDelay: '0.4s' }} fill="#f59e0b" />
                <rect x="14" y="110" width="60" height="40" className="brick" style={{ animationDelay: '0.5s' }} fill="#f59e0b" />
                <rect x="78" y="110" width="60" height="40" className="brick" style={{ animationDelay: '0.6s' }} fill="#d97706" />
                <rect x="142" y="110" width="60" height="40" className="brick" style={{ animationDelay: '0.7s' }} fill="#f59e0b" />
                <rect x="46" y="70" width="60" height="40" className="brick" style={{ animationDelay: '0.8s' }} fill="#d97706" />
                <rect x="110" y="70" width="60" height="40" className="brick" style={{ animationDelay: '0.9s' }} fill="#f59e0b" />
                <line x1="0" y1="230" x2="220" y2="230" stroke="#3a3a48" strokeWidth="3" />
              </svg>
              <h3 className="card-title">بناء الأفران</h3>
            </div>

            {/* Card 2 - صيانة : wrench actively turning a bolt at center */}
            <div className="product-card" style={{ backgroundColor: '#0c0c0f', border: '1px solid #242430' }}>
              <svg viewBox="0 0 220 260" className="card-scene">
                <circle cx="110" cy="130" r="55" fill="none" stroke="#3a3a48" strokeWidth="2" strokeDasharray="6 6" />
                <g className="bolt-spin" style={{ transformOrigin: '110px 130px' }}>
                  <polygon points="110,95 128,106 128,128 110,139 92,128 92,106" fill="#1a1a20" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="110" cy="117" r="10" fill="#0c0c0f" stroke="#f59e0b" strokeWidth="1.5" />
                </g>
                <g className="wrench-tighten" style={{ transformOrigin: '110px 117px' }}>
                  <rect x="106" y="60" width="8" height="70" rx="4" fill="#f59e0b" />
                  <circle cx="110" cy="55" r="16" fill="none" stroke="#f59e0b" strokeWidth="6" />
                </g>
              </svg>
              <h3 className="card-title">صيانة</h3>
            </div>

            {/* Card 3 - بيع مواد حرارية : flames rising and filling the card */}
            <div className="product-card" style={{ backgroundColor: '#0c0c0f', border: '1px solid #242430' }}>
              <svg viewBox="0 0 220 260" className="card-scene">
                <path className="flame-big" d="M110 40 C90 80 60 95 60 140 a50 50 0 0 0 100 0 c0-22-14-36-22-50 c4 22-7 28-14 21 c7-22-3-36-14-71 z" fill="#f59e0b" />
                <path className="flame-mid" d="M110 80 C98 105 82 113 82 140 a28 28 0 0 0 56 0 c0-13-8-20-12-28 c2 12-7 15-11 11 c4-12-2-20-15-43 z" fill="#fbbf24" />
                <path className="flame-small" d="M110 110 C103 124 94 128 94 142 a16 16 0 0 0 32 0 c0-7-4-11-7-15 c1 6-4 8-6 6 c2-6-1-11-9-23 z" fill="#fde68a" />
                <ellipse cx="110" cy="200" rx="70" ry="10" fill="#f59e0b" opacity="0.15" />
              </svg>
              <h3 className="card-title">بيع مواد حرارية</h3>
            </div>

            {/* Card 4 - المواد العازلة : shield charging with layered pulse rings */}
            <div className="product-card" style={{ backgroundColor: '#0c0c0f', border: '1px solid #242430' }}>
              <svg viewBox="0 0 220 260" className="card-scene">
                <circle cx="110" cy="130" r="35" className="pulse-ring" fill="none" stroke="#f59e0b" strokeWidth="2" style={{ animationDelay: '0s' }} />
                <circle cx="110" cy="130" r="35" className="pulse-ring" fill="none" stroke="#f59e0b" strokeWidth="2" style={{ animationDelay: '0.6s' }} />
                <circle cx="110" cy="130" r="35" className="pulse-ring" fill="none" stroke="#f59e0b" strokeWidth="2" style={{ animationDelay: '1.2s' }} />
                <path d="M110 75 L150 90 V125 C150 155 132 175 110 185 C88 175 70 155 70 125 V90 Z" fill="#0c0c0f" stroke="#f59e0b" strokeWidth="3" strokeLinejoin="round" />
                <path className="check-draw" d="M90 128 L102 142 L132 108" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="card-title">المواد العازلة</h3>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        .product-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          text-align: right;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-6px);
          border-color: #f59e0b66 !important;
        }
        .card-scene {
          width: 100%;
          height: 200px;
          display: block;
        }
        .card-title {
          color: #fff;
          font-weight: 900;
          font-size: 18px;
          padding: 18px 20px 22px;
          margin: 0;
        }

        .brick {
          animation: brickUp 0.5s ease-out backwards;
          transform-box: fill-box;
        }
        @keyframes brickUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .bolt-spin {
          animation: boltTurn 3s linear infinite;
        }
        @keyframes boltTurn {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .wrench-tighten {
          animation: wrenchPush 2s ease-in-out infinite;
        }
        @keyframes wrenchPush {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }

        .flame-big {
          animation: flameSway 1.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        .flame-mid {
          animation: flameSway 1.3s ease-in-out infinite reverse;
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        .flame-small {
          animation: flameSway 1s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        @keyframes flameSway {
          0%, 100% { transform: scaleY(1) scaleX(1) rotate(0deg); }
          33% { transform: scaleY(1.06) scaleX(0.96) rotate(-1.5deg); }
          66% { transform: scaleY(0.96) scaleX(1.04) rotate(1.5deg); }
        }

        .pulse-ring {
          animation: ringPulse 1.8s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes ringPulse {
          0% { r: 35; opacity: 0.8; }
          100% { r: 60; opacity: 0; }
        }
        .check-draw {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: checkIn 0.6s ease-out 0.3s infinite;
          animation-iteration-count: 1;
        }
      `}</style>

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