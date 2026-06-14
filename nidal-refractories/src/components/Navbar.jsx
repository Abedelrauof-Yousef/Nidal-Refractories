import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/logo'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'الرئيسية' },
    { to: '/products', label: 'المنتجات' },
    { to: '/about', label: 'من نحن' },
    { to: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-[#242430] shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
      style={{ backgroundColor: '#0c0c0f' }}
    >
      {/* Top orange accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="flex items-center justify-between px-6 py-2 w-full">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Links — center */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive ? 'text-amber-500' : 'text-gray-300 hover:text-white'
                }`}
                style={{ textShadow: isActive ? '0 0 12px rgba(245,158,11,0.6)' : 'none' }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 rounded-full"
                    style={{ boxShadow: '0 0 8px rgba(245,158,11,0.8)' }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop Language + Mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Language button */}
          <button
            className="text-sm font-bold px-4 py-1.5 rounded border border-[#3a3a48] text-gray-300 transition-all duration-200 hover:border-amber-500 hover:text-amber-500 tracking-widest"
            style={{ backgroundColor: '#18181f' }}
          >
            EN
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block h-0.5 w-6 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#f59e0b',
                transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-6 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#f59e0b',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-6 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#f59e0b',
                transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }}
            />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0px',
          borderTop: menuOpen ? '1px solid #242430' : 'none',
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-right ${
                  isActive
                    ? 'text-amber-500 bg-[#18181f]'
                    : 'text-gray-300 hover:text-white hover:bg-[#18181f]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>

    </nav>
  )
}

export default Navbar