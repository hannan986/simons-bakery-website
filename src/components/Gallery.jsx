import { useState, useEffect, useCallback } from 'react'
import { GALLERY_PHOTOS } from '../data/content'

function GalleryItem({ photo, alt, label, bg, h, index, onOpen }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="gallery-item"
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${label}`}
      onClick={() => onOpen(index)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen(index)}
    >
      {!failed ? (
        <img
          src={photo}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="gallery-ph"
          style={{ background: bg, height: h, display: 'flex' }}
        >
          <span>{label}</span>
          <span className="gallery-ph-lbl">{label}</span>
        </div>
      )}
    </div>
  )
}

export default function Gallery() {
  const [lbIndex, setLbIndex] = useState(null) // null = closed
  const total = GALLERY_PHOTOS.length

  const close = useCallback(() => setLbIndex(null), [])
  const prev  = useCallback(() => setLbIndex(i => (i - 1 + total) % total), [total])
  const next  = useCallback(() => setLbIndex(i => (i + 1) % total), [total])

  // Keyboard & body scroll lock
  useEffect(() => {
    if (lbIndex === null) return
    document.body.style.overflow = 'hidden'
    const handler = (e) => {
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lbIndex, close, prev, next])

  const current = lbIndex !== null ? GALLERY_PHOTOS[lbIndex] : null

  return (
    <section className="section section-alt" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Fresh From the Oven</span>
          <h2 className="section-title" id="gallery-title">Our <em>Gallery</em></h2>
          <p className="section-sub">A peek inside our bakery — from the display case to the oven.</p>
        </div>

        <div className="gallery-grid" role="list" aria-label="Photo gallery">
          {GALLERY_PHOTOS.map((item, i) => (
            <GalleryItem key={item.id} {...item} index={i} onOpen={setLbIndex} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lbIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={e => e.target === e.currentTarget && close()}
        >
          <button className="lb-close" onClick={close} aria-label="Close">&#x2715;</button>

          <button className="lb-arrow lb-prev" onClick={prev} aria-label="Previous photo">&#8592;</button>

          <img
            className="lb-img"
            key={lbIndex}
            src={current.photo}
            alt={current.alt}
            onError={e => { e.currentTarget.style.opacity = '.3' }}
          />

          <button className="lb-arrow lb-next" onClick={next} aria-label="Next photo">&#8594;</button>

          <div className="lb-caption">{current.label}</div>
          <div className="lb-count" aria-live="polite">{lbIndex + 1} / {total}</div>
        </div>
      )}
    </section>
  )
}
