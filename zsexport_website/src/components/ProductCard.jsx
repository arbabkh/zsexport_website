export default function ProductCard({ product, href }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      {...(href ? { href } : {})}
      className="group block h-full bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="aspect-[3/3] overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={product.alt}
          src={product.image}
          loading="lazy"
        />
      </div>
      <div className="p-space-lg">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-space-2xs">
          {product.category}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{product.title}</h3>
      </div>
    </Tag>
  )
}
