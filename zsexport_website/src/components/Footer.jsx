import { BRAND, CERTIFICATIONS, FOOTER_NAV, FOOTER_PRODUCTS } from '../data/siteData'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop pt-space-4xl pb-space-3xl">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <span className="font-title-editorial text-on-primary font-bold text-[15px]">{BRAND.initial}</span>
              </div>
              <span className="font-title-editorial text-title-editorial uppercase tracking-[0.16em] text-on-surface font-semibold">
                {BRAND.name}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-lg leading-relaxed">
              Forging artisanal excellence and heavy cast metalwork from Moradabad&rsquo;s historic foundry district
              since 2011. Trusted by luxury hospitality groups, architectural specifiers, and global retail brands
              worldwide.
            </p>
            <div className="flex flex-wrap gap-space-xs">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-space-sm py-space-2xs rounded-full bg-surface-container text-on-surface font-label-spec text-label-spec uppercase"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.18em] mb-space-md font-semibold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-space-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.label} className="leading-none">
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors inline-block py-1"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.18em] mb-space-md font-semibold">
              Product Categories
            </h3>
            <ul className="flex flex-col gap-space-sm">
              {FOOTER_PRODUCTS.map((product) => (
                <li key={product} className="leading-none">
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors inline-block py-1"
                    href="#categories"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.18em] mb-space-md font-semibold">
              Foundry Liaison
            </h3>
            <div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
              <p className="text-on-surface font-medium">Works &amp; Foundry Facility:</p>
              <p>{BRAND.address}</p>
              <p className="mt-space-2xs">
                <span className="text-on-surface font-medium">Ports of Dispatch:</span> Nhava Sheva (JNPT), Mundra
                &amp; ICD Moradabad
              </p>
              <p>
                <span className="text-on-surface font-medium">Direct Export Desk:</span>{' '}
                <a className="underline hover:text-on-surface transition-colors" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </p>
              <p>
                <span className="text-on-surface font-medium">Telephone:</span> {BRAND.phone}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-space-3xl pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md font-label-spec text-label-spec text-on-surface-variant">
          <p>&copy; 2011&ndash;2026 {BRAND.legalName} All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-space-lg">
            <a className="hover:text-on-surface transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Terms &amp; Conditions
            </a>
            <a className="hover:text-on-surface transition-colors" href="#trade-inquiry">
              Institutional Desk
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
