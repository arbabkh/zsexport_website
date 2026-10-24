import { motion } from 'framer-motion'
import { PILLARS } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import { staggerItem } from '../lib/motionVariants'

export default function Pillars() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl" id="quality">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <Reveal className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold block mb-space-2xs">
            Foundry Credentials
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">The Five Pillars of ZS Export</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Why tier-1 global specifiers and luxury lifestyle conglomerates entrust their metal contract
            manufacturing to us.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="bg-surface-container-lowest p-space-lg flex flex-col shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center mb-space-md text-secondary">
                <span className="material-symbols-outlined text-[22px]">{pillar.icon}</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-on-surface font-semibold mb-space-xs">
                {pillar.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
