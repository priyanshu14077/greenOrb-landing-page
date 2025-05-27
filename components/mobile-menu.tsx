"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/greenorb-logo.png"
                  alt="GreenOrb Logo"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
              className="flex flex-col p-6 space-y-6 text-lg font-medium"
            >
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#about", label: "About" },
                { href: "#docs", label: "Docs" },
              ].map((item) => (
                <motion.div key={item.href} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <div className="mt-auto p-6 space-y-4">
              <button className="w-full py-3 text-white border border-white rounded-full hover:bg-white/10 transition-colors">
                Log in
              </button>
              <button className="w-full py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                Book a demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
