import { Link } from 'react-router-dom'
import heroBg from '../assets/upscalemedia-transformed.jpeg'

function HeroSection() {
  return (
<section
  className="relative h-screen md:h-[650px] flex items-center justify-center text-center px-6 bg-cover bg-[800px_center] md:bg-[right_center]"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Right fire-accent border */}
      <div className="absolute top-0 right-0 w-1 h-full bg-orange-600"></div>

      {/* Content */}
      <div className="relative z-10 text-right max-w-2xl w-full px-4 md:mr-48 lg:mr-300">

        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="text-orange-400 text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-orange-800/50 bg-orange-900/20 rounded-sm">
            حراريات · صناعة ثقيلة
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-white text-3xl md:text-4xl font-medium leading-snug mb-2">
          مؤسسة نضال يوسف
          <br />
          <span className="text-orange-500">للحراريات</span>
        </h1>

        {/* Divider */}
        <div className="w-10 h-[1px] bg-white/15 mr-0 ml-auto my-5"></div>

        {/* Subtitle */}
        <p className="text-white/45 text-sm leading-relaxed">
          خبرة في الحراريات… تقود صناعتك بثبات نحو الأداء الأعلى
        </p>

      </div>
    </section>
  )
}

export default HeroSection