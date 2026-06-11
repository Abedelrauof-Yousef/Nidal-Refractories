import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo'

function Navbar() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'الرئيسية' },
    { to: '/products', label: 'المنتجات' },
    { to: '/about', label: 'من نحن' },
    { to: '/contact', label: 'تواصل معنا' },
  ]

  return (
<nav className="sticky top-0 z-50 border-b border-[#242430] shadow-[0_2px_20px_rgba(0,0,0,0.8)]" style={{ backgroundColor: '#0c0c0f' }}>
      {/* Top orange accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="flex items-center justify-between px-8 py-2">

        {/* Logo — Left */}
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Links — Center */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  relative px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200
                  ${isActive
                    ? 'text-orange-500'
                    : 'text-gray-300 hover:text-white'
                  }
                `}
                style={{
                  textShadow: isActive ? '0 0 12px rgba(249,115,22,0.6)' : 'none',
                }}
              >
                {link.label}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 rounded-full"
                    style={{ boxShadow: '0 0 8px rgba(249,115,22,0.8)' }}
                  />
                )}
                {/* Hover underline */}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-600 rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Language Switcher — Right */}
        <button
          className="text-sm font-bold px-4 py-1.5 rounded border border-gray-600 text-gray-300 transition-all duration-200 hover:border-amber-500 hover:text-amber-500 tracking-widest"
          style={{
            background: '#18181f',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          EN
        </button>

      </div>
    </nav>
  )
}

export default Navbar