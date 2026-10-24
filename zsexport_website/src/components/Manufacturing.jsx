import { motion } from 'framer-motion'
import { PROCESS_PHASES } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import { staggerItem } from '../lib/motionVariants'

export default function Manufacturing() {
  return (
    <section className="w-full bg-surface-container-highest py-space-4xl" id="manufacturing">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <Reveal className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold block mb-space-2xs">
            Provenance Pipeline
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
            The Anatomy of Precision Metalwork
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every object manufactured in our works passes through four non-negotiable stages of physical creation
            and rigorous testing.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {PROCESS_PHASES.map((phase) => (
            <motion.div
              key={phase.number}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="bg-surface-container-lowest p-space-xl flex flex-col shadow-sm"
            >
              <span className="font-headline-md text-headline-md text-secondary-fixed-dim font-bold mb-space-sm">
                {phase.number}
              </span>
              <h3 className="font-title-editorial text-title-editorial text-on-surface font-semibold mb-space-xs">
                {phase.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{phase.description}</p>
              <div className="mt-auto pt-space-md bg-surface-container-low p-space-sm">
                <span className="font-label-spec text-label-spec uppercase tracking-wider text-on-surface font-medium block">
                  {phase.spec}
                </span>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
