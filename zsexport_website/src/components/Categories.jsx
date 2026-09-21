import { motion } from 'framer-motion'
import { CATEGORIES } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import { staggerItem } from '../lib/motionVariants'

export default function Categories() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl" id="categories">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl">
          <Reveal>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold block mb-space-2xs">
              Curated Foundry Portfolios
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Manufactured for High-Caliber Spaces</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
              Precision-engineered metal architectural hardware and lifestyle accoutrements cast from certified
              pure-grade alloys.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-surface-container-lowest flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={category.alt}
                  src={category.image}
                  loading="lazy"
                />
                <span className="absolute top-space-sm right-space-sm bg-surface-container-lowest/90 px-space-sm py-1 font-label-spec text-label-spec uppercase tracking-wider text-on-surface backdrop-blur-sm">
                  {category.tag}
                </span>
              </div>
              <div className="p-space-xl flex flex-col flex-1">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-space-2xs">
                  {category.eyebrow}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{category.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg flex-1">
                  {category.description}
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
      </div>
    </section>
  )
}
