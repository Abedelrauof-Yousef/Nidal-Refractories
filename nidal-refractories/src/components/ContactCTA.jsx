import { Link } from 'react-router-dom'

function ContactCTA() {
  return (
    <section
      dir="rtl"
      style={{
        padding: '96px 32px',
        backgroundColor: '#18181f',
        borderTop: '0.5px solid #242430',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>

        {/* Label */}
        <p style={{
          margin: '0 0 16px',
          color: '#f59e0b',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>
          تواصل معنا
        </p>

        {/* Heading */}
        <h2 style={{
          margin: '0 0 20px',
          color: '#ffffff',
          fontSize: '40px',
          fontWeight: 800,
          lineHeight: 1.25,
        }}>
          هل فرنك يحتاج خبيراً ؟
          <br />
          <span style={{ color: '#f59e0b' }}>تواصل معي اليوم</span>
        </h2>

        {/* Subtext */}
        <p style={{
          margin: '0 0 40px',
          color: '#9ca3af',
          fontSize: '15px',
          lineHeight: 1.8,
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
         سواء كنت تبني فرناً من الصفر، أو بحاجة الى صيانة، أو تبحث عن مواد حرارية عالية الجودة — نضال يوسف يقدم لك  ما تحتاج من الاستشارة والتنفيذ والمواد تحت سقف واحد
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 36px',
              borderRadius: '10px',
              background: '#f59e0b',
              color: '#0c0c0f',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e08d00'}
            onMouseLeave={e => e.currentTarget.style.background = '#f59e0b'}
          >
            تواصل معنا عبر الإيميل←
          </Link>

          <a
            href="tel:+962789893991"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 36px',
              borderRadius: '10px',
              background: 'transparent',
              color: '#f59e0b',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              border: '0.5px solid #f59e0b55',
              letterSpacing: '0.02em',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1a1208'
              e.currentTarget.style.borderColor = '#f59e0b'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#f59e0b55'
            }}
          >
            ☎️ اتصل بي مباشرة
          </a>
        </div>

        {/* Divider line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          margin: '48px auto 0',
          maxWidth: '360px',
        }}>
          <div style={{ flex: 1, height: '0.5px', background: '#242430' }} />
          <p style={{ margin: 0, color: '#3d3d4a', fontSize: '11px', whiteSpace: 'nowrap' }}>
            35+ سنة خبرة في الحراريات
          </p>
          <div style={{ flex: 1, height: '0.5px', background: '#242430' }} />
        </div>

      </div>
    </section>
  )
}

export default ContactCTA