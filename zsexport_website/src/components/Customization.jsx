import { motion } from 'framer-motion'
import { CUSTOMIZATION_FEATURES, CUSTOMIZATION_POINTS } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import { staggerItem } from '../lib/motionVariants'

export default function Customization() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl" id="customization">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold mb-space-xs block">
                Contract Manufacturing &amp; OEM
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">
                Engineered to Your Exact Blueprint
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                We operate as the invisible, ultra-reliable foundry partner for luxury global furniture houses,
                architectural hardware brands, and retail chains. From CAD modeling to certified master casts, our
                engineering studio handles complete private-label lifecycles.
              </p>
            </Reveal>

            <Stagger className="flex flex-col gap-space-md mb-space-xl">
              {CUSTOMIZATION_POINTS.map((point) => (
                <motion.div key={point.title} variants={staggerItem} className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">
                    <strong>{point.title}</strong> {point.description}
                  </span>
                </motion.div>
              ))}
            </Stagger>

            <Reveal delay={0.2}>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center self-start justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.16em] hover:bg-surface-container-highest hover:text-on-surface transition-all duration-300"
                href="#trade-inquiry"
              >
                Discuss Custom Production
              </motion.a>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="lg:col-span-7 bg-surface-container-lowest p-space-xl shadow-lg">
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              {CUSTOMIZATION_FEATURES.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="flex flex-col bg-surface-container p-space-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                  </div>
                  <h4 className="font-title-editorial text-title-editorial text-on-surface font-semibold mb-space-xs">
                    {feature.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
                </motion.div>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
