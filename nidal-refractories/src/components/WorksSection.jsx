import { useState, useEffect, useCallback } from 'react'

import work1 from '../assets/work1.png'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.jpg'
import work7 from '../assets/work7.jpg'
import work8 from '../assets/work8.jpg'
import work9 from '../assets/work9.jpg'
import work10 from '../assets/work10.jpg'
import work11 from '../assets/work11.jpg'
import vid1 from '../assets/VID-20260611-WA0016.mp4'
import vid2 from '../assets/VID-20260611-WA0019.mp4'
import vid3 from '../assets/VID-20260611-WA0020.mp4'

const categories = [
  { id: 'all',      label: 'الكل' },
  { id: 'furnace',  label: 'تبطين الأفران' },
  { id: 'brick',    label: 'أعمال الطوب' },
  { id: 'concrete', label: 'الخرسانة الحرارية' },
  { id: 'video',    label: 'فيديو' },
]

const media = [
  { id: 1,  type: 'image', src: work5,  category: 'furnace',  featured: true,  label: 'فرن صناعي — منظر داخلي بانورامي' },
  { id: 2,  type: 'image', src: work1,  category: 'furnace',  featured: false, label: 'تبطين فرن بالحجر الحراري' },
  { id: 3,  type: 'image', src: work6,  category: 'furnace',  featured: false, label: 'داخل فرن مكتمل التبطين' },
  { id: 4,  type: 'image', src: work7,  category: 'furnace',  featured: false, label: 'قاع الفرن الحراري' },
  { id: 5,  type: 'image', src: work10, category: 'brick',    featured: false, label: 'فرش طوب حراري — طابق كامل' },
  { id: 6,  type: 'image', src: work2,  category: 'brick',    featured: false, label: 'بناء جدار طوب حراري' },
  { id: 7,  type: 'image', src: work8,  category: 'brick',    featured: false, label: 'جدار طوب مع لوازم معدنية' },
  { id: 8,  type: 'image', src: work3,  category: 'brick',    featured: false, label: 'طوب حراري مع وصلات معدنية' },
  { id: 9,  type: 'image', src: work4,  category: 'brick',    featured: false, label: 'تفاصيل بناء جدار الفرن' },
  { id: 10, type: 'image', src: work9,  category: 'concrete', featured: false, label: 'ألواح خرسانة حرارية' },
  { id: 11, type: 'image', src: work11, category: 'concrete', featured: false, label: 'فرن صناعي ضخم' },
  { id: 12, type: 'video', src: vid1,   category: 'video',    featured: false, label: 'فيديو مشروع ١' },
  { id: 13, type: 'video', src: vid2,   category: 'video',    featured: false, label: 'فيديو مشروع ٢' },
  { id: 14, type: 'video', src: vid3,   category: 'video',    featured: false, label: 'فيديو مشروع ٣' },
]

function MediaTile({ item, size, onClick }) {
  const aspectMap = { hero: '16/7', wide: '16/9', tall: '3/4', square: '1/1' }

  return (
    <div
      onClick={() => onClick(item)}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: aspectMap[size] || '4/3',
        background: '#13131a',
        border: '0.5px solid #242430',
      }}
      onMouseEnter={e => {
        e.currentTarget.querySelector('.tile-img').style.transform = 'scale(1.05)'
        e.currentTarget.querySelector('.tile-overlay').style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.querySelector('.tile-img').style.transform = 'scale(1)'
        e.currentTarget.querySelector('.tile-overlay').style.opacity = '0'
      }}
    >
      {item.type === 'image' ? (
        <img
          className="tile-img"
          src={item.src}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
        />
      ) : (
        <video
          className="tile-img"
          src={item.src}
          muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
        />
      )}

      {/* Label bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '40px 14px 12px',
        background: 'linear-gradient(to top, rgba(12,12,15,0.9) 0%, transparent 100%)',
      }}>
        <p style={{ margin: 0, color: '#fff', fontSize: '12px', fontWeight: 600, textAlign: 'right' }}>
          {item.label}
        </p>
      </div>

      {/* Hover overlay */}
      <div
        className="tile-overlay"
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(12,12,15,0.4)',
          opacity: 0, transition: 'opacity 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(245,158,11,0.15)',
          border: '1.5px solid #f59e0b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {item.type === 'video' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="5,3 19,12 5,21"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          )}
        </div>
      </div>

      {item.type === 'video' && (
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          background: '#f59e0b', borderRadius: '99px',
          padding: '3px 10px', fontSize: '10px', fontWeight: 700, color: '#0c0c0f',
        }}>▶ فيديو</div>
      )}
    </div>
  )
}

function Lightbox({ items, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const item = items[index]

  const goPrev = useCallback(() => setIndex(i => (i + 1) % items.length), [items.length])
  const goNext = useCallback(() => setIndex(i => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goPrev()
      if (e.key === 'ArrowLeft') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, goPrev, goNext])

  const navBtn = {
    background: 'rgba(245,158,11,0.1)',
    border: '0.5px solid #f59e0b55',
    color: '#f59e0b', fontSize: '22px',
    cursor: 'pointer', borderRadius: '10px',
    padding: '10px 18px', lineHeight: 1,
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.96)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Top bar */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '0.5px solid #242430',
          background: '#0c0c0f',
        }}
      >
        <button onClick={onClose} style={{ ...navBtn, fontSize: '13px', padding: '8px 14px' }}>✕ إغلاق</button>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: '13px' }} dir="rtl">
          {item.label}&nbsp;&nbsp;<span style={{ color: '#f59e0b' }}>{index + 1} / {items.length}</span>
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={e => { e.stopPropagation(); goPrev() }} style={navBtn}>›</button>
          <button onClick={e => { e.stopPropagation(); goNext() }} style={navBtn}>‹</button>
        </div>
      </div>

      {/* Main media */}
      <div
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '74vh', marginTop: '56px', marginBottom: '80px' }}
      >
        {item.type === 'image' ? (
          <img
            key={item.id}
            src={item.src} alt={item.label}
            style={{ maxWidth: '90vw', maxHeight: '74vh', borderRadius: '10px', objectFit: 'contain', display: 'block' }}
          />
        ) : (
          <video
            key={item.id}
            src={item.src} controls autoPlay
            style={{ maxWidth: '90vw', maxHeight: '74vh', borderRadius: '10px', display: 'block' }}
          />
        )}
      </div>

      {/* Thumbnail strip */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '10px 24px',
          display: 'flex', gap: '8px', overflowX: 'auto',
          borderTop: '0.5px solid #242430',
          background: '#0c0c0f',
          scrollbarWidth: 'none',
        }}
      >
        {items.map((m, i) => (
          <div
            key={m.id}
            onClick={() => setIndex(i)}
            style={{
              flexShrink: 0, width: '64px', height: '46px',
              borderRadius: '6px', overflow: 'hidden', cursor: 'pointer',
              border: i === index ? '2px solid #f59e0b' : '2px solid transparent',
              opacity: i === index ? 1 : 0.45,
              transition: 'opacity 0.2s, border-color 0.2s',
            }}
          >
            {m.type === 'image'
              ? <img src={m.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <video src={m.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            }
          </div>
        ))}
      </div>
    </div>
  )
}

function WorksSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'all' ? media : media.filter(m => m.category === activeCategory)

  const openLightbox = (item) => {
    const idx = filtered.findIndex(m => m.id === item.id)
    setLightbox(idx)
  }

  const featured = filtered.find(m => m.featured) || filtered[0]
  const rest = filtered.filter(m => m.id !== featured?.id)

  return (
    <>
      <section
        dir="rtl"
        style={{ padding: '96px 32px', backgroundColor: '#0c0c0f', borderTop: '0.5px solid #242430' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header row */}
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px', flexWrap: 'wrap', gap: '24px',
          }}>
            {/* Filter pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '7px 18px', borderRadius: '99px',
                    border: activeCategory === cat.id ? '0.5px solid #f59e0b' : '0.5px solid #2e2e3a',
                    background: activeCategory === cat.id ? '#1a1208' : 'transparent',
                    color: activeCategory === cat.id ? '#f59e0b' : '#6b7280',
                    fontSize: '12px', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s',
                    letterSpacing: '0.04em',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Title */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 6px', color: '#f59e0b', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em' }}>
                المشاريع المنجزة
              </p>
              <h2 style={{ margin: '0 0 10px', color: '#fff', fontSize: '36px', fontWeight: 800 }}>
                بعض من أعمالي
              </h2>
              <div style={{ height: '3px', width: '32px', background: '#f59e0b', borderRadius: '2px' }} />
            </div>
          </div>

          {/* Hero */}
          {featured && (
            <div style={{ marginBottom: '16px' }}>
              <MediaTile item={featured} size="hero" onClick={openLightbox} />
            </div>
          )}

          {/* 4-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
            {rest.map((item, i) => {
              const size = i % 8 === 1 ? 'wide' : i % 6 === 3 ? 'tall' : 'square'
              return (
                <div key={item.id} style={{ gridColumn: size === 'wide' ? 'span 2' : 'span 1' }}>
                  <MediaTile item={item} size={size} onClick={openLightbox} />
                </div>
              )
            })}
          </div>

          {/* Footer count */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <div style={{
              padding: '8px 22px', borderRadius: '99px',
              border: '0.5px solid #2e2e3a',
              color: '#6b7280', fontSize: '12px', letterSpacing: '0.05em',
            }}>
              {filtered.length} عمل منجز
            </div>
          </div>

        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          items={filtered}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

export default WorksSection