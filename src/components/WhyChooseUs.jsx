function WhyChooseUsSection() {
  const reasons = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      label: 'الخبرة',
      title: '35 عاماً من الخبرة بين يديك',
      body: 'أكثر من ثلاثة عقود ونصف من العمل الميداني المتراكم في قطاع الحراريات. تحصل على خلاصة معرفة عميقة تضمن لك الحل الأصح لأفرانك ومنشآتك.',
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      label: 'الجودة',
      title: 'ضمان شخصي لأعلى معايير الجودة',
      body: 'أشرف بنفسي على اختيار وفحص كل منتج — طوب، أسمنت، وخرسانة حرارية — لضمان مواد متينة تتحمل أقصى درجات الحرارة والصدمات الميكانيكية.',
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      label: 'الحلول',
      title: 'حلول حرارية متكاملة من مصدر واحد',
      body: 'تشكيلة شاملة تلبي جميع احتياجات مشروعك الحراري تحت سقف واحد — من الطوب بمقاسات خاصة إلى الخرسانة الحرارية للصب المباشر.',
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      label: 'الدعم',
      title: 'استشارة تقنية مباشرة ودعم فني دقيق',
      body: 'لن تتعامل مع موظف مبيعات تقليدي. أساعدك شخصياً في تحديد التركيبة الحرارية المناسبة لطبيعة عملك لضمان أطول عمر للبطانة وأقل تكاليف صيانة.',
    },
    {
      id: 5,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      label: 'التوريد',
      title: 'التزام تام بالسرعة والتوريد',
      body: 'أتابع طلبك بنفسي من لحظة الاتفاق حتى التسليم، بجدول زمني صارم يضمن وصول الكميات المطلوبة في الوقت المحدد دون أي توقف في عملياتك.',
    },
  ]

  return (
    <section
      dir="rtl"
      style={{
        padding: '96px 32px',
        backgroundColor: '#18181f',
        borderTop: '0.5px solid #242430',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'right', marginBottom: '56px' }}>
          <p
            style={{
              margin: '0 0 8px',
              color: '#f59e0b',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            لماذا تختارنا
          </p>
          <h2
            style={{
              margin: '0 0 12px',
              color: '#ffffff',
              fontSize: '36px',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            نضال يوسف — الفرق الذي تشعر به
          </h2>
          <div
            style={{
              height: '3px',
              width: '32px',
              background: '#f59e0b',
              borderRadius: '2px',
              marginRight: 'auto',
            }}
          />
        </div>

        {/* Cards grid: 3 + 2 layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {reasons.slice(0, 3).map(reason => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginTop: '20px',
            maxWidth: 'calc(66.666% + 10px)',
            /* center the bottom row */
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {reasons.slice(3).map(reason => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ReasonCard({ reason }) {
  return (
    <div
      style={{
        background: '#13131a',
        border: '0.5px solid #242430',
        borderRadius: '16px',
        padding: '28px 24px',
        textAlign: 'right',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#f59e0b66'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#242430'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Subtle glow behind icon */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: '#1a1208',
          border: '0.5px solid #f59e0b33',
          marginBottom: '20px',
        }}
      >
        {reason.icon}
      </div>

      {/* Label */}
      <p
        style={{
          margin: '0 0 6px',
          color: '#f59e0b',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
        }}
      >
        {reason.label}
      </p>

      {/* Title */}
      <h3
        style={{
          margin: '0 0 12px',
          color: '#ffffff',
          fontSize: '17px',
          fontWeight: 700,
          lineHeight: 1.4,
        }}
      >
        {reason.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          height: '0.5px',
          background: '#242430',
          marginBottom: '12px',
        }}
      />

      {/* Body */}
      <p
        style={{
          margin: 0,
          color: '#9ca3af',
          fontSize: '13.5px',
          lineHeight: '1.8',
        }}
      >
        {reason.body}
      </p>
    </div>
  )
}

export default WhyChooseUsSection