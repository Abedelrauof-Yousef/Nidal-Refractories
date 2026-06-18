import { useState } from 'react'
// import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        'YOUR_SERVICE_ID',      // ← replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // ← replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'       // ← replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  const fieldStyle = (fieldName) => ({
    backgroundColor: '#0c0c0f',
    border: focused === fieldName ? '1px solid #f59e0b' : '0.5px solid #2e2e3a',
    boxShadow: focused === fieldName ? '0 0 0 3px rgba(245,158,11,0.12), 0 0 20px rgba(245,158,11,0.15)' : 'none',
    transition: 'all 0.25s ease',
  })

  return (
    <section dir="rtl" className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#0c0c0f' }}>

      {/* Ambient glow top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px', right: '-120px',
          width: '420px', height: '420px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span style={{ width: '24px', height: '1px', background: '#f59e0b', opacity: 0.5 }} />
            <p className="text-amber-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              تواصل معنا
            </p>
            <span style={{ width: '24px', height: '1px', background: '#f59e0b', opacity: 0.5 }} />
          </div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-black leading-snug mb-3 sm:mb-4 px-2">
         خبرتي <span className="text-amber-500">في</span> خدمتك
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-md mx-auto px-2">
            استفسارك يصلني مباشرة، وسأرد عليك في أقرب وقت ممكن
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-5 sm:gap-6 lg:gap-8 items-start">

          {/* Info panel — industrial nameplate style */}
          <div
            className="relative rounded-xl p-6 sm:p-7 md:p-8 order-2 lg:order-1"
            style={{
              backgroundColor: '#18181f',
              border: '0.5px solid #242430',
              backgroundImage: 'linear-gradient(135deg, rgba(245,158,11,0.04) 0%, transparent 60%)',
            }}
          >
            {/* Corner rivets — nameplate detail */}
            <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full" style={{ background: '#3a3a48' }} />
            <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full" style={{ background: '#3a3a48' }} />
            <span className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full" style={{ background: '#3a3a48' }} />
            <span className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full" style={{ background: '#3a3a48' }} />

            <p className="text-amber-500 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase mb-5 sm:mb-6">
              معلومات التواصل
            </p>

            <div className="flex flex-col gap-5 sm:gap-6">
              <a href="tel:+962789893991" className="flex items-center gap-3 sm:gap-4 group">
                <div
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex-shrink-0 transition-all"
                  style={{ background: '#1a1208', border: '0.5px solid #3d2d10' }}
                >
                  <span style={{ color: '#f59e0b', fontSize: '15px' }}>📞</span>
                </div>
                <div className="text-right min-w-0">
                  <p className="text-gray-500 text-[10px] sm:text-[11px] mb-0.5">رقم الهاتف</p>
                  <p className="text-white text-xs sm:text-sm font-semibold break-all" dir="ltr">+962 78 989 3991</p>
                </div>
              </a>

              <a href="mailto:nidalyousef.refractories@gmail.com" className="flex items-center gap-3 sm:gap-4 group">
                <div
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex-shrink-0 transition-all"
                  style={{ background: '#1a1208', border: '0.5px solid #3d2d10' }}
                >
                  <span style={{ color: '#f59e0b', fontSize: '15px' }}>✉</span>
                </div>
                <div className="text-right min-w-0 flex-1">
                  <p className="text-gray-500 text-[10px] sm:text-[11px] mb-0.5">البريد الإلكتروني</p>
                  <p className="text-white text-xs sm:text-sm font-semibold break-all sm:truncate" dir="ltr">nidalyousef.refractories@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex-shrink-0"
                  style={{ background: '#1a1208', border: '0.5px solid #3d2d10' }}
                >
                  <span style={{ color: '#f59e0b', fontSize: '15px' }}>📍</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-[10px] sm:text-[11px] mb-0.5">الموقع</p>
                  <p className="text-white text-xs sm:text-sm font-semibold">الأردن</p>
                </div>
              </div>
            </div>

            <div className="my-6 sm:my-7" style={{ height: '0.5px', background: '#242430' }} />

            <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
              خبرة تمتد لأكثر من 35 عاماً في صناعة الحراريات — استشارة، تنفيذ، وتوريد مواد عالية الجودة لأكثر البيئات الصناعية قسوة.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-xl p-5 sm:p-6 md:p-9 order-1 lg:order-2"
            style={{ backgroundColor: '#18181f', border: '0.5px solid #242430' }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 right-6 sm:right-8 left-6 sm:left-8 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, #f59e0b, transparent)', opacity: 0.6 }}
            />

            {/* Name */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-gray-300 text-xs sm:text-sm font-semibold mb-2 text-right">
                الاسم
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                required
                placeholder="اكتب اسمك الكامل"
                className="w-full px-4 py-3 sm:py-3.5 rounded-lg text-white text-sm outline-none"
                style={fieldStyle('name')}
              />
            </div>

            {/* Email */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-gray-300 text-xs sm:text-sm font-semibold mb-2 text-right">
                الإيميل
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 sm:py-3.5 rounded-lg text-white text-sm outline-none"
                style={fieldStyle('email')}
              />
            </div>

            {/* Message */}
            <div className="mb-6 sm:mb-7">
              <label className="block text-gray-300 text-xs sm:text-sm font-semibold mb-2 text-right">
                الرسالة
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                required
                rows={4}
                placeholder="اكتب رسالتك هنا..."
                className="w-full px-4 py-3 sm:py-3.5 rounded-lg text-white text-sm outline-none resize-none"
                style={fieldStyle('message')}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 sm:py-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2"
              style={{
                backgroundColor: status === 'sending' ? '#7a5a13' : '#f59e0b',
                color: '#0c0c0f',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                boxShadow: status === 'sending' ? 'none' : '0 4px 20px rgba(245,158,11,0.25)',
              }}
              onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.boxShadow = '0 4px 28px rgba(245,158,11,0.4)' }}
              onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.25)' }}
            >
              {status === 'sending' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <p className="text-center text-xs sm:text-sm font-semibold mt-4" style={{ color: '#34d399' }}>
                ✓ تم إرسال رسالتك بنجاح، سنتواصل معك قريباً
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-xs sm:text-sm font-semibold mt-4" style={{ color: '#f87171' }}>
                ✕ حدث خطأ، حاول مرة أخرى
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact