import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, className = '' }) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? Number(match[2]) : 0
  const suffix = match?.[3] ?? ''

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) motionValue.set(target)
  }, [isInView, motionValue, target])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => setDisplay(Math.round(latest)))
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
