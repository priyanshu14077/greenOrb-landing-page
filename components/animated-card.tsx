"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface AnimatedCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function AnimatedCard({ icon, title, description, delay = 0 }: AnimatedCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Card className="bg-black/40 border-gray-800 text-white h-full hover:bg-black/60 transition-colors">
        <CardHeader>
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">{icon}</div>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-white/70">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
