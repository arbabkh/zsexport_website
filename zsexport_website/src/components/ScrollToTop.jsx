import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 720)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25 }}
          aria-label="Back to top"
          className="fixed bottom-space-lg right-space-lg z-40 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
