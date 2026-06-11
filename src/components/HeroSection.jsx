import { Link } from 'react-router-dom'
import heroBg from '../assets/upscalemedia-transformed.jpeg'

function HeroSection() {
  return (
    <section
      className="relative h-[650px] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
          مواد حرارية عالية الجودة
        </p> */}

        <h1 className="text-white text-4xl font-black leading-tight mb-10 mr-250">
         مؤسسة نضال يوسف للحراريات
        </h1>
        <br />
        <h1 className="text-white text-3xl font-black leading-tight mb-10 mr-250">خبرة في الحراريات… تقود صناعتك بثبات نحو الأداء الأعلى</h1>
        {/* <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
          نوفر أفضل مواد البناء الحراري من طوب وكاستبل ومونة لخدمة الصناعات الثقيلة والأفران العالية الحرارة
        </p> */}
      </div>
    </section>
  )
}

export default HeroSection