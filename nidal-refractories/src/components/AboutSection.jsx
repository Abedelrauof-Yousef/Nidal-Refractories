import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#18181f' }}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Images — Left */}
        <div className="relative w-full lg:w-1/2 flex-shrink-0 mb-20 lg:mb-0">
          {/* Main image */}
          <img
            src={about1}
            alt="مصنع نيدال"
            className="w-full rounded-lg object-cover"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
          />
          {/* Second image overlapping bottom right */}
          <img
            src={about2}
            alt="معدات نيدال"
            className="absolute -bottom-8 -left-4 w-24 sm:w-48 md:w-64 rounded-lg border-4 border-[#0c0c0f] object-cover"
            style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.7)' }}
          />
          {/* Orange accent box behind */}
          <div className="absolute -top-4 -right-4 w-full h-full rounded-lg border-2 border-amber-500 -z-10 opacity-40" />
        </div>

        {/* Text — Right */}
        <div className="w-full lg:w-1/2 text-right">

          {/* Label */}
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            من نحن
          </p>

          {/* Heading */}
          <h2 className="text-white text-4xl font-black leading-snug mb-6">
          خمس وثلاثون عاماً
            <br />
            <span className="text-amber-500">من الخبرة والجودة</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
           يمتلك نضال يوسف خبرة تتجاوز 35 عاماً في بناء وصيانة الأفران الصناعية، حيث عمل على بناء وصيانة أفران المصانع والمنشآت الثقيلة بكفاءة عالية.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
           وقد أكسبته هذه الخبرة العملية معرفة عميقة بالمواد الحرارية وخصائصها، مما جعله قادراً على اختيار وتوفير الحلول والمواد المناسبة التي تخدم احتياجات الأفران الصناعية بأعلى مستويات الأداء والجودة.
          </p>


        </div>
      </div>
    </section>
  )
}

export default AboutSection