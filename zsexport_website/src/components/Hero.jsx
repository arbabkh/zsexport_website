import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BRAND, HERO_STATS } from '../data/siteData'
import CountUp from './CountUp'
import Reveal from './Reveal'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <section id="top" ref={sectionRef} className="relative w-full bg-surface-container-lowest overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-space-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter-desktop items-center">
          {/* Text Column */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 flex flex-col z-10">
            <Reveal
              direction="none"
              className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container text-on-surface mb-space-lg shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim" />
              <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface-variant font-medium">
                Est. 2011 &bull; Moradabad Foundry &amp; Atelier &bull; Exporting to 48+ Nations
              </span>
            </Reveal>

            <h1 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface tracking-tight mb-space-lg">
              <Reveal as="span" delay={0.1} className="block">
                Indian Craftsmanship.
              </Reveal>
              <Reveal as="span" delay={0.22} className="italic font-normal text-on-surface-variant block">
                Made for the World.
              </Reveal>
            </h1>

            <Reveal delay={0.32}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-2xl leading-relaxed">
                For nearly four decades, {BRAND.name} has pioneered the fine art of bespoke metalcraft—hand-forged,
                precision-finished, and exported to global luxury retailers, interior design studios, and
                high-caliber hospitality specifiers across North America, Europe, and the Middle East.
              </p>
            </Reveal>

            <Reveal delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md mb-space-3xl">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-space-xl py-space-md bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.18em] shadow-md hover:bg-surface-container-highest hover:text-on-surface transition-all duration-300"
                href="#categories"
              >
                Explore Collections
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-space-xl py-space-md bg-surface-container text-on-surface font-label-caps text-label-caps uppercase tracking-[0.18em] hover:bg-surface-container-high transition-all duration-300"
                href="#trade-inquiry"
              >
                Send an Enquiry <span className="material-symbols-outlined text-[16px] ml-2">arrow_forward</span>
              </motion.a>
            </Reveal>

            <Reveal
              delay={0.5}
              className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-xl bg-surface-container-low p-space-lg"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    <CountUp value={stat.value} />
                  </span>
                  <span className="font-label-spec text-label-spec text-on-surface-variant mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </Reveal>
          </motion.div>

          {/* Hero Visual Composition */}
          <Reveal direction="left" delay={0.2} className="lg:col-span-5 relative mt-space-lg lg:mt-0">
            <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden shadow-xl">
              <motion.img
                style={{ y: imageY }}
                className="w-full h-full object-cover scale-110"
                alt="High-end studio still life of monumental hand-hammered brass vessel and an architectural raw brass sconce against a warm chalk plaster background with warm natural raking sunlight highlighting the patinated gold and amber reflections."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAIDIBlhouhk8cbzbNKJwtRd7ObD848VckLYGC8pKxwRxmXqQDgbbiXxXXixzSBUyDrOOs-HI_r77ZyU_Fw0qqKYfzqhnGmu0U_CYPQdIHy08NXcKRaKqNXRENoIg8lZYmWsrlUK-KR4wnSIBEI1xzm8Jlr71JOo35UVfLoqcjTrqeLTj7eOvvy1oths1Vfqa4OU_bjjO9iyn2ImRtrpNurs06ZYihnBYFxyJu_tQ5pNb31AWGVapVpA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-space-lg text-on-primary">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary-fixed-dim block mb-1">
                  Architectural Series MMXXIV
                </span>
                <h2 className="font-title-editorial text-title-editorial text-on-primary">
                  Heavy Sand-Cast Brass Fluted Vessels
                </h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:flex absolute -bottom-space-lg -left-space-lg bg-surface-container-lowest p-space-md shadow-xl flex-col max-w-[220px]"
            >
              <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold mb-1">
                Certification
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Sedex SMETA &amp; ISO 9001:2015 Continuous Quality Assured
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
