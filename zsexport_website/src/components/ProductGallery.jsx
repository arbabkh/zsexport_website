import { motion } from 'framer-motion'
import { FEATURED_PRODUCTS, categoryPath, PRODUCT_CATEGORIES } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import ProductCard from './ProductCard'
import { staggerItem } from '../lib/motionVariants'

export default function ProductGallery() {
  const slugFor = (name) => PRODUCT_CATEGORIES.find((category) => category.name === name).slug

  return (
    <section className="w-full bg-surface-container-low py-space-4xl" id="categories">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="mb-space-3xl flex flex-col md:flex-row md:items-end md:justify-between gap-space-lg">
          <div>
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
          <Reveal delay={0.2}>
            <a
              href="#/products"
              className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface font-semibold hover:text-secondary transition-colors"
            >
              View All Categories
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </Reveal>
        </div>

        <Stagger className="flex gap-space-lg overflow-x-auto snap-x snap-mandatory pb-space-md -mx-margin-mobile px-margin-mobile lg:-mx-margin-desktop lg:px-margin-desktop">
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={staggerItem}
              className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ProductCard product={product} href={categoryPath(slugFor(product.category))} />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
