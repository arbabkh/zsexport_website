import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProductCard({ product, href }) {
  const Tag = href ? 'a' : 'div'
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const openViewer = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setIsOpen(true)
  }

  return (
    <Tag
      {...(href ? { href } : {})}
      onClick={openViewer}
      className="group block cursor-zoom-in h-full bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="aspect-[3/3] overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={product.alt}
          src={product.image}
          loading="lazy"
        />
      </div>
      <div className="p-space-lg">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-space-2xs">
          {product.category}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{product.title}</h3>
      </div>
      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={product.title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8 cursor-zoom-out"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              setIsOpen(false)
            }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={(event) => {
                event.stopPropagation()
                setIsOpen(false)
              }}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img
              src={product.image}
              alt={product.alt}
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
              }}
              className="max-w-full max-h-full object-contain cursor-default shadow-2xl"
            />
          </div>,
          document.body,
        )}
    </Tag>
  )
}
