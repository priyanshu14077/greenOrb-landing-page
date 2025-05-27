"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface StatCounterProps {
  end: number
  suffix?: string
  duration?: number
  delay?: number
  title: string
}

export function StatCounter({ end, suffix = "", duration = 2, delay = 0, title }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const step = end / (duration * 60)

      const timer = setInterval(() => {
        start += step
        setCount(Math.min(Math.floor(start), end))

        if (start >= end) {
          clearInterval(timer)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/70">{title}</div>
    </motion.div>
  )
}
