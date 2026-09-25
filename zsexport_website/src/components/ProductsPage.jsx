import { useEffect, useState } from 'react'
import { PRODUCT_CATEGORIES, categoryPath } from '../data/siteData'
import ProductCard from './ProductCard'

const linkClass = (isActive) =>
  `flex items-center justify-between gap-space-md px-space-md py-space-sm border-l-2 font-body-sm text-body-sm whitespace-nowrap transition-colors ${
    isActive
      ? 'bg-surface-container-lowest border-secondary text-on-surface font-semibold shadow-sm'
      : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60'
  }`

export default function ProductsPage({ slug, sub }) {
  const category = PRODUCT_CATEGORIES.find((item) => item.slug === slug) ?? PRODUCT_CATEGORIES[0]
  const subcategory = category.subcategories.find((item) => item.slug === sub)
  const products = subcategory ? subcategory.products : category.products
  const [collapsedSlug, setCollapsedSlug] = useState(null)

  useEffect(() => {
    setCollapsedSlug(null)
  }, [category.slug])

  return (
    <section className="w-full bg-surface-container-low min-h-[80vh] py-space-3xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="mb-space-2xl">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold block mb-space-2xs">
            {subcategory ? category.name : 'Our Collections'}
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">{subcategory ? subcategory.name : category.name}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-space-2xl">
          <aside className="lg:w-72 shrink-0">
            <h2 className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant mb-space-md">
              Categories
            </h2>
            <ul className="flex flex-col gap-space-xs lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-space-xs">
              {PRODUCT_CATEGORIES.map((item) => {
                const isCurrent = item.slug === category.slug
                const isExpanded = isCurrent && collapsedSlug !== item.slug
                return (
                  <li key={item.slug}>
                    <a
                      href={categoryPath(item.slug)}
                      onClick={(event) => {
                        if (isCurrent && !subcategory) {
                          event.preventDefault()
                          setCollapsedSlug((prev) => (prev === item.slug ? null : item.slug))
                        }
                      }}
                      aria-current={isCurrent && !subcategory ? 'page' : undefined}
                      aria-expanded={isCurrent ? isExpanded : undefined}
                      className={`${linkClass(isCurrent && !subcategory)} lg:sticky lg:top-0 lg:z-10 bg-surface-container-low`}
                    >
                      {item.name}
                      <span className="font-label-spec text-label-spec text-on-surface-variant">{item.products.length}</span>
                    </a>
                    {isExpanded && item.subcategories.length > 0 && (
                      <ul className="mt-space-xs ml-space-md flex flex-col gap-space-xs">
                        {item.subcategories.map((child) => {
                          const isActive = child.slug === subcategory?.slug
                          return (
                            <li key={child.slug}>
                              <a
                                href={categoryPath(item.slug, child.slug)}
                                aria-current={isActive ? 'page' : undefined}
                                className={linkClass(isActive)}
                              >
                                {child.name}
                                <span className="font-label-spec text-label-spec text-on-surface-variant">
                                  {child.products.length}
                                </span>
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </aside>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-space-lg content-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
