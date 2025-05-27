"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -100])
  const y2 = useTransform(scrollY, [0, 1000], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <motion.div
        style={{ y: y1, opacity }}
        className="fixed inset-0 bg-[linear-gradient(to_right,#1a2f1a_1px,transparent_1px),linear-gradient(to_bottom,#1a2f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      />
      <motion.div
        style={{ y: y2 }}
        className="fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1a3a1a,transparent)] opacity-30"
      />
    </>
  )
}
