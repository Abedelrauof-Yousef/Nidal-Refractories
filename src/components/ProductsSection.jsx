import { Link } from 'react-router-dom'
import { useState } from 'react'
import brickImg from '../assets/brick.png'
import cementImg from '../assets/cement.png'
import concreteImg from '../assets/concerete.png'

const products = [
  {
    id: 1,
    name: 'طوب حراري',
    nameEn: 'Refractory Bricks',
    description: 'طوب حراري مصنوع من مواد خام عالية الجودة، مثالي لبناء وتبطين الأفران والمحارق الصناعية.',
    details: [
      'تتحمل حتى 2000°م',
      'كثافة عالية ومتانة فائقة',
      'مقاوم للانكماش الحراري',
      'أبعاد قياسية ودقيقة',
    ],
    image: brickImg,
    temp: '2000°م',
  },
  {
    id: 2,
    name: 'اسمنت حراري',
    nameEn: 'Refractory Cement',
    description: 'اسمنت حراري متخصص يُستخدم في تركيب وإصلاح البطانات الحرارية للأفران والمداخن الصناعية.',
    details: [
      'تتحمل حتى 1650°م',
      'التصاق قوي بالأسطح',
      'مقاوم للتآكل الكيميائي',
      'جفاف سريع وثبات عالٍ',
    ],
    image: cementImg,
    temp: '1650°م',
  },
  {
    id: 3,
    name: 'خرسانة حرارية',
    nameEn: 'Refractory Concrete',
    description: 'خرسانة حرارية عالية الأداء مصممة لتحمل درجات الحرارة القصوى في الأفران الصناعية والمنشآت الثقيلة.',
    details: [
      'تتحمل حتى 1800°م',
      'مقاومة عالية للصدمات الحرارية',
      'سهلة التطبيق والصب',
      'متوفرة بكثافات مختلفة',
    ],
    image: concreteImg,
    temp: '1800°م',
  },
]

function ProductCard({ product, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: isOpen ? '0.5px solid #f59e0b' : '0.5px solid #242430',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        background: '#0c0c0f',
        boxShadow: isOpen ? '0 12px 40px rgba(245,158,11,0.18)' : '0 4px 24px rgba(0,0,0,0.4)',
        transform: isOpen ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: isOpen ? 'scale(1.06)' : 'scale(1)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isOpen
              ? 'linear-gradient(to top, #0c0c0f 15%, rgba(12,12,15,0.6) 60%, rgba(12,12,15,0.2) 100%)'
              : 'linear-gradient(to top, #0c0c0f 0%, rgba(12,12,15,0.35) 60%, transparent 100%)',
            transition: 'background 0.4s ease',
          }}
        />

        <span
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#1a1208',
            color: '#FAC775',
            fontSize: '12px',
            fontWeight: 500,
            padding: '5px 12px',
            borderRadius: '99px',
            letterSpacing: '0.04em',
            border: '0.5px solid #f59e0b44',
          }}
        >
          🌡 {product.temp}
        </span>

        <span
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(12,12,15,0.5)',
            color: '#f59e0b',
            fontSize: '11px',
            fontWeight: 600,
            padding: '5px 10px',
            borderRadius: '99px',
            border: '0.5px solid #f59e0b44',
            opacity: isOpen ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          اضغط للتفاصيل
        </span>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 1.5rem 1.25rem',
            textAlign: 'right',
          }}
        >
          <p style={{ margin: 0, color: '#fff', fontSize: '24px', fontWeight: 800 }}>
            {product.name}
          </p>
          <p style={{ margin: '4px 0 0', color: '#f59e0b', fontSize: '13px', letterSpacing: '0.07em' }}>
            {product.nameEn}
          </p>
        </div>
      </div>

      {/* Expandable body */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
          <div
            style={{
              padding: '1.5rem',
              borderTop: '0.5px solid #242430',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s',
            }}
          >
            <p
              style={{
                margin: '0 0 1.25rem',
                color: '#9ca3af',
                fontSize: '14px',
                lineHeight: '1.8',
                textAlign: 'right',
              }}
            >
              {product.description}
            </p>

            <div style={{ height: '0.5px', background: '#242430', marginBottom: '1.25rem' }} />

            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
              dir="rtl"
            >
              {product.details.map((detail, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13px',
                    color: '#d1d5db',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#f59e0b',
                      flexShrink: 0,
                    }}
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#f59e0b',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  )
}

function ProductsSection() {
  const [activeId, setActiveId] = useState(null)

  const handleToggle = (id) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <section style={{ padding: '96px 16px', backgroundColor: '#0c0c0f' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <Link
            to="/products"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: '#f59e0b',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '0.5px solid #f59e0b44',
              padding: '7px 14px',
              borderRadius: '8px',
              transition: 'background 0.2s',
            }}
          >
            ← عرض الكل
          </Link>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                margin: '0 0 6px',
                color: '#f59e0b',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ما نقدمه
            </p>
            <h2
              style={{
                margin: '0 0 10px',
                color: '#ffffff',
                fontSize: 'clamp(24px, 5vw, 36px)',
                fontWeight: 800,
              }}
            >
              منتجاتنا الحرارية
            </h2>
            <div
              style={{
                height: '3px',
                width: '32px',
                background: '#f59e0b',
                borderRadius: '2px',
                marginLeft: 'auto',
              }}
            />
          </div>
        </div>

        {/* Cards grid — 1 col on mobile, auto on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isOpen={activeId === product.id}
              onToggle={() => handleToggle(product.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 40px',
              borderRadius: '10px',
              background: '#f59e0b',
              color: '#0c0c0f',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'background 0.2s',
            }}
          >
            عرض المزيد ←
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ProductsSection