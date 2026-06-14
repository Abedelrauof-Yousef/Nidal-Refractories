import { Link } from 'react-router-dom'
import Logo from '../assets/logo'

function Footer() {
  const links = [
    { to: '/', label: 'الرئيسية' },
    { to: '/products', label: 'المنتجات' },
    { to: '/about', label: 'من نحن' },
    { to: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <footer
      dir="rtl"
      style={{ backgroundColor: '#0c0c0f', borderTop: '0.5px solid #242430' }}
    >
      {/* Main footer body */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Brand column */}
          <div>
            <Logo />
            <p style={{
              margin: '16px 0 20px',
              color: '#6b7280',
              fontSize: '13.5px',
              lineHeight: 1.8,
              maxWidth: '300px',
            }}>
              خبرة تمتد لأكثر من 35 عاماً في الحراريات الصناعية — استشارة، بناء، صيانة، وتوريد مواد حرارية عالية الجودة.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="tel:+962789893991"
                style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span style={{ color: '#f59e0b' }}>📞</span>
                +96789893991
              </a>
              <a
                href="mailto:info@nidal-refractories.com"
                style={{ color: '#9ca3af', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span style={{ color: '#f59e0b' }}>✉</span>
                nidalyousef.refractories@gmail.com
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ margin: '0 0 16px', color: '#f59e0b', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em' }}>
              روابط سريعة
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color: '#6b7280',
                    fontSize: '13.5px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ margin: '0 0 16px', color: '#f59e0b', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em' }}>
              منتجاتنا
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['طوب حراري', 'اسمنت حراري', 'خرسانة حرارية'].map(p => (
                <Link
                  key={p}
                  to="/products"
                  style={{
                    color: '#6b7280',
                    fontSize: '13.5px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '0.5px solid #242430' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '16px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ margin: 0, color: '#3d3d4a', fontSize: '12px' }}>
            © {new Date().getFullYear()} نضال عبدالرؤوف يوسف — جميع الحقوق محفوظة
          </p>
          <div style={{ height: '3px', width: '24px', background: '#f59e0b', borderRadius: '2px', opacity: 0.6 }} />
          <p style={{ margin: 0, color: '#3d3d4a', fontSize: '12px' }}>
            حراريات صناعية — الأردن
          </p>
        </div>
      </div>

      {/* Bottom amber accent line — mirrors navbar top line */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(to right, transparent, #f59e0b, transparent)',
        opacity: 0.5,
      }} />
    </footer>
  )
}

export default Footer