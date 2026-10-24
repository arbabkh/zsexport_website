import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BRAND, RFQ_CATEGORIES } from '../data/siteData'
import Reveal from './Reveal'

const initialForm = {
  name: '',
  email: '',
  company: '',
  category: '',
  scope: '',
  nda: false,
}

export default function TradeInquiry() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="w-full bg-surface-container py-space-5xl" id="trade-inquiry">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <Reveal className="bg-surface-container-lowest p-space-xl lg:p-space-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
            {/* Text and Instructions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold mb-space-xs block">
                  Wholesale &bull; Institutional &bull; Contract
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md leading-tight">
                  Initiate a Commercial Trade Dialogue
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                  Connect directly with our Moradabad Foundry Export Directorate. Please outline your procurement
                  requirements, target delivery windows, and quantity projections.
                </p>
              </div>
              <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-sm mt-space-lg lg:mt-0">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    Direct RFQ Desk:{' '}
                    <a className="underline hover:text-secondary" href={`mailto:${BRAND.email}`}>
                      {BRAND.email}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px]">call</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    Foundry Liaison: {BRAND.phone}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Response SLA: Within 24 Business Hours
                  </span>
                </div>
              </div>
            </div>

            {/* The Trade RFQ Form */}
            <div className="lg:col-span-7">
              <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                      Buyer / Specifier Name *
                    </label>
                    <input
                      className="bg-surface-container-low px-space-md py-space-sm text-on-surface font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors"
                      placeholder="e.g. Alistair Vance"
                      required
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                      Corporate Email *
                    </label>
                    <input
                      className="bg-surface-container-low px-space-md py-space-sm text-on-surface font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors"
                      placeholder="name@firm.com"
                      required
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                      Company / Brand / Studio *
                    </label>
                    <input
                      className="bg-surface-container-low px-space-md py-space-sm text-on-surface font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors"
                      placeholder="e.g. Vance Architectural Interiors"
                      required
                      type="text"
                      value={form.company}
                      onChange={handleChange('company')}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                      Category of Interest *
                    </label>
                    <select
                      className="bg-surface-container-low px-space-md py-space-sm text-on-surface font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors"
                      required
                      value={form.category}
                      onChange={handleChange('category')}
                    >
                      <option disabled value="">
                        Select Foundry Category
                      </option>
                      {RFQ_CATEGORIES.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                    Volume Specifications &amp; Project Scope *
                  </label>
                  <textarea
                    className="bg-surface-container-low px-space-md py-space-sm text-on-surface font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors resize-none"
                    placeholder="Detail estimated order quantities, target alloy finishes, port of destination, and any custom engineering parameters..."
                    required
                    rows="4"
                    value={form.scope}
                    onChange={handleChange('scope')}
                  />
                </div>
                <div className="flex items-center gap-space-xs">
                  <input
                    className="rounded-none w-4 h-4 text-primary focus:ring-0"
                    id="ndaCheck"
                    type="checkbox"
                    checked={form.nda}
                    onChange={handleChange('nda')}
                  />
                  <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="ndaCheck">
                    We request an executed Mutual Non-Disclosure Agreement (NDA) prior to sharing CAD drawings.
                  </label>
                </div>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="self-start inline-flex items-center justify-center px-space-2xl py-space-md bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.18em] shadow-md hover:bg-surface-container-highest hover:text-on-surface transition-all duration-300"
                  type="submit"
                >
                  Send Trade Enquiry
                </motion.button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-space-md bg-surface-container-high text-on-surface font-body-sm">
                        Thank you. Your commercial RFQ has been received by our Export Directorate. A dedicated
                        foundry account executive will follow up with technical documentation within 24 business
                        hours.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
