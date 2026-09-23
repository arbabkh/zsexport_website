import { motion } from 'framer-motion'
import { PRODUCT_GALLERY } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import { staggerItem } from '../lib/motionVariants'

export default function ProductGallery() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl" id="categories">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop mb-space-3xl">
        <Reveal>
          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold block mb-space-2xs">
            Curated Foundry Portfolios
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Manufactured for High-Caliber Spaces</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm">
            Precision-engineered metal architectural hardware and lifestyle accoutrements cast from certified
            pure-grade alloys.
          </p>
        </Reveal>
      </div>

      <Stagger
        className="flex gap-space-lg overflow-x-auto pb-space-md px-margin-mobile lg:px-margin-desktop snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {PRODUCT_GALLERY.map((product) => (
          <motion.div
            key={product.id}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[28%] snap-start bg-surface-container-lowest flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={product.alt}
                src={product.image}
                loading="lazy"
              />
              <span className="absolute top-space-sm right-space-sm bg-surface-container-lowest/90 px-space-sm py-1 font-label-spec text-label-spec uppercase tracking-wider text-on-surface backdrop-blur-sm">
                {product.tag}
              </span>
            </div>
            <div className="p-space-xl flex flex-col flex-1">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-space-2xs">
                {product.eyebrow}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{product.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg flex-1">
                {product.description}
              </p>
              <a
                className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface font-semibold group-hover:text-secondary transition-colors"
                href="#trade-inquiry"
              >
                Explore Collection
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  )
}
