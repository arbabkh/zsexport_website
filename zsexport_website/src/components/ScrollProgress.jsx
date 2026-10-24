import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="scroll-progress-bar fixed top-0 left-0 right-0 h-[2px] bg-secondary-fixed-dim z-[60]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
