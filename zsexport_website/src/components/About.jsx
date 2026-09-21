import { BRAND } from '../data/siteData'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="w-full bg-surface py-space-5xl" id="about">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Vintage & Foundry Imagery Spread */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
            <Reveal direction="right" className="aspect-[3/4] bg-surface-container overflow-hidden shadow-lg mt-space-xl">
              <img
                className="w-full h-full object-cover"
                alt="Archival atmospheric photography of Moradabad master artisans hand-hammering large brass sheets around anvils using ancestral metal beating techniques in traditional workshops."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzdrAaPMDGyNMDu2wwlvRFfOl7SL6SKYppv_si5KXirgITdDpoeDy8WrosvtKtT9YE4hyf7k_CbejsNnCpKTlQgfzsdsiZXMkVLmWGyLr6el2LYmaF3lzk7BO7RKE83yNd81ShhnqCUCk12vAjRh2Wa10rl6YSm12RMRC43oQZxBSEkgs_htoQN3J4Ihb1D2ijzTsc0HKiXyw1KVf3fXTUG6nQ4D7DqoXdhBkfrVrzgA-OJs_3PlpYVg"
                loading="lazy"
              />
            </Reveal>
            <Reveal direction="right" delay={0.15} className="aspect-[3/4] bg-surface-container overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Modern precision induction furnace pouring molten glowing brass into ceramic shell molds in a high-compliance export-certified foundry facility in India."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_L4yiSy13QrVTRgk-D-6ckKpfYPM88bXt8Up_e8PGwGWgvF3ZscVevIAA9HpcTlyFJjeFNsHb_YVc-WjaTaU5HWClr9oMC3F6rrezSXs58wd_G8iKSi_oX7D9rrWMRPHuHqefpMuoGzXahucf06n9p8UXFDdGP88F5qPDfVY100d8dl-re3TLYUhS1ztC2eq3KD7cZXZLSnGOnJs6aM7m2snfu0DhTkcxJAn8wIqkKbTZbEHfPMpk7w"
                loading="lazy"
              />
            </Reveal>
          </div>

          {/* Editorial Story */}
          <div className="lg:col-span-6 flex flex-col lg:pl-space-xl">
            <Reveal>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold mb-space-xs block">
                Heritage &bull; Moradabad &bull; 1986
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-lg leading-tight">
                The Living Foundry of Peetal Nagri
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Moradabad, renowned across the subcontinent for over four centuries as the &ldquo;Brass City&rdquo;
                (Peetal Nagri), holds a lineage of metallurgical knowledge found nowhere else on earth. Founded here
                in 1986, {BRAND.name} began with a modest bank of sand-casting pits and a fierce commitment to
                preserving ancestral hand-forming arts.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl leading-relaxed">
                Over thirty-eight years, we transformed from an artisanal guild workshop into a globally certified
                manufacturing juggernaut. Today, our 120,000 sq. ft. campus bridges generational{' '}
                <em>Thathere</em> sheet-hammering techniques with ISO-controlled metallurgical testing, automated
                lathe profiling, and Sedex-audited ethical production.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="bg-surface-container-low p-space-xl shadow-sm mb-space-xl relative">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-[36px] absolute -top-4 left-6 bg-surface-container-low px-1">
                format_quote
              </span>
              <p className="font-title-editorial text-title-editorial italic text-on-surface mb-space-md">
                &ldquo;We do not merely supply metal hardware; we preserve the tactile soul of handmade metallurgy and
                translate it into flawless engineering for the world&rsquo;s most discerning interior
                environments.&rdquo;
              </p>
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-caps text-label-caps">
                  {BRAND.initial}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface font-semibold">
                    {BRAND.name} Atelier Board
                  </span>
                  <span className="font-label-spec text-label-spec text-on-surface-variant">
                    Foundry Directorate, Moradabad
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
