import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BRAND, NAV_LINKS } from '../data/siteData'

export default function Header({ route = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sectionPath, setSectionPath] = useState('home')
  const activePath = route === 'products' ? 'products' : sectionPath

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (route === 'products') return
    const sections = NAV_LINKS.filter((link) => !link.href.startsWith('#/'))
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV_LINKS.find((link) => `#${entry.target.id}` === link.href || (link.href === '#top' && entry.target.id === 'top'))
            if (match) setSectionPath(match.path)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [route])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-surface/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_8px_rgba(28,26,23,0.08)]' : 'shadow-none'
      }`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#top" className="flex items-center gap-space-md shrink-0">
          <img
            src="/website_logo.webp"
            alt={BRAND.name}
            className={`w-auto rounded-md transition-all duration-300 ${scrolled ? 'h-11' : 'h-14'}`}
          />
        </a>

        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.href}
              aria-current={activePath === link.path ? 'page' : undefined}
              className={`font-label-caps text-label-caps uppercase transition-colors py-space-xs relative ${
                activePath === link.path ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
              {activePath === link.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-secondary-fixed-dim"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md shrink-0">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:bg-surface-container-highest hover:text-on-surface transition-all duration-200"
            href="#trade-inquiry"
          >
            Send Enquiry
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            className="xl:hidden p-space-xs text-on-surface hover:text-on-surface-variant transition-colors flex items-center justify-center"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-[26px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden overflow-hidden bg-surface border-t border-outline-variant/40"
          >
            <div className="flex flex-col px-margin-mobile py-space-lg gap-space-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-label-caps text-label-caps uppercase py-space-sm transition-colors ${
                    activePath === link.path ? 'text-primary font-semibold' : 'text-on-surface-variant'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#trade-inquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-space-sm inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase"
              >
                Send Enquiry
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
