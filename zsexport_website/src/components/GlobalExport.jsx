import { motion } from 'framer-motion'
import { FREIGHT_CORRIDORS, SUPPLY_CHAIN_ROUTE } from '../data/siteData'
import Reveal from './Reveal'
import Stagger from './Stagger'
import { staggerItem } from '../lib/motionVariants'

export default function GlobalExport() {
  return (
    <section className="w-full bg-surface py-space-5xl" id="global-presence">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Logistics stats and text */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold mb-space-xs block">
                Global Trade Logistics
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">
                Seamless Dispatch from Foundry to Harbor
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl leading-relaxed">
                With over 15 years handling cross-border maritime shipping, ZS Export operates a frictionless export
                conduit. Our container loading teams optimize Full Container Loads (20ft/40ft FCL) and Less than
                Container Loads (LCL) directly bonded to India&rsquo;s leading deep-water gateways.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-2 gap-space-md mb-space-xl">
              <motion.div variants={staggerItem} className="bg-surface-container-low p-space-md">
                <span className="font-label-spec text-label-spec uppercase tracking-wider text-secondary font-semibold block mb-1">
                  Primary Drayage Ports
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">JNPT &amp; Mundra</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Direct dry port ICD linkage from Moradabad.
                </p>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-surface-container-low p-space-md">
                <span className="font-label-spec text-label-spec uppercase tracking-wider text-secondary font-semibold block mb-1">
                  Trade Terms Handled
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">FOB &bull; CIF &bull; DDP</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Complete customs clearance support.
                </p>
              </motion.div>
            </Stagger>

            <Reveal delay={0.15} className="flex flex-wrap gap-space-xs items-center">
              <span className="font-label-spec text-label-spec uppercase text-on-surface font-semibold mr-2">
                Top Freight Corridors:
              </span>
              {FREIGHT_CORRIDORS.map((corridor) => (
                <span
                  key={corridor}
                  className="px-space-sm py-1 bg-surface-container font-label-spec text-label-spec uppercase text-on-surface-variant"
                >
                  {corridor}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Supply Chain Diagram / Graphic Card */}
          <Reveal
            direction="left"
            delay={0.2}
            className="lg:col-span-6 bg-surface-container-lowest p-space-2xl shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-space-xl">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">
                Live Operational Flow
              </span>
              <span className="inline-flex items-center gap-1.5 font-label-spec text-label-spec text-on-surface-variant">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed-dim opacity-75" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-secondary-fixed-dim" />
                </span>{' '}
                Moradabad Works
              </span>
            </div>

            <div className="w-full mb-space-xl">
              <svg className="w-full h-24 text-on-surface-variant" fill="none" viewBox="0 0 500 80" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 30 40 L 150 40 L 270 40 L 390 40 L 470 40"
                  stroke="currentColor"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                <motion.circle
                  r="4"
                  fill="#775a00"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: [0, 1, 1, 0],
                    cx: [30, 470, 470],
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 3, times: [0, 0.85, 1], ease: 'linear', delay: 0.4 }}
                  cy="40"
                />
                {SUPPLY_CHAIN_ROUTE.map((point, index) => (
                  <motion.circle
                    key={point.label}
                    cx={point.x}
                    cy="40"
                    r="6"
                    fill={point.accent ? '#1b1c1a' : '#775a00'}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  />
                ))}
                {SUPPLY_CHAIN_ROUTE.map((point) => (
                  <text
                    key={point.label}
                    className="font-label-spec text-[10px] fill-current uppercase"
                    textAnchor="middle"
                    x={point.x}
                    y="65"
                  >
                    {point.label}
                  </text>
                ))}
              </svg>
            </div>

            <div className="bg-surface-container p-space-md flex items-center justify-between">
              <div>
                <span className="font-label-spec text-label-spec uppercase tracking-wider text-on-surface-variant block">
                  Average Ocean Transit
                </span>
                <span className="font-body-md text-body-md text-on-surface font-semibold">
                  18–26 Days to US East Coast &amp; Europe
                </span>
              </div>
              <span className="material-symbols-outlined text-secondary text-[28px]">directions_boat</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
