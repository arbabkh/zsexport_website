import { motion } from 'framer-motion'
import { staggerContainer } from '../lib/motionVariants'

export default function Stagger({ children, className = '', as = 'div', once = true, amount = 0.15 }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Component>
  )
}
