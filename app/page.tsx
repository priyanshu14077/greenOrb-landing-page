import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Moon, Users, Leaf, Wifi, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { CarbonCalculator } from "@/components/carbon-calculator"
import { useState } from "react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1b0d] text-white">
      {/* Grid background pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a2f1a_1px,transparent_1px),linear-gradient(to_bottom,#1a2f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Navigation */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur px-6 py-4 flex z-50">
        <div className="container flex items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Image
                src="/images/greenorb-logo.png"
                alt="GreenOrb Logo"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#features" className="text-white/80 transition-colors hover:text-white">
                Features
              </Link>
              <Link href="#pricing" className="text-white/80 transition-colors hover:text-white">
                Pricing
              </Link>
              <Link href="#about" className="text-white/80 transition-colors hover:text-white">
                About
              </Link>
              <Link href="#docs" className="text-white/80 transition-colors hover:text-white">
                Docs
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <button className="px-6 py-2 text-white border border-white rounded-full hover:bg-white/10 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
              Book a demo
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-4">
          <div className="container relative z-10">
            <div className="mx-auto max-w-[64rem] text-center">
              <div className="mb-6 flex flex-wrap gap-2 justify-center">
                <span className="bg-black/40 border border-gray-700 rounded-full px-3 py-1 text-sm">
                  <Sparkles className="inline-block mr-1 h-3 w-3" />
                  AI Sustainable Ecosystem
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Environmental assets based <span className="block">on real-world data</span>
              </h1>
              <p className="mb-8 text-lg text-white/70 sm:text-xl max-w-3xl mx-auto">
                GreenOrb offers real-time carbon transparency, automated offset management, and token-backed credibility
                all in one place.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors group">
                  Start Free Beta
                  <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-6 py-3 text-white border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                  Watch demo
                </button>
              </div>
              <FeatureTags />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-white">
                Engineered for planet-scale performance
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Scientists using build with the same tools as financial-grade leaders, only greener.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-black/40 border-gray-800 text-white">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
                    <Zap className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Lightning-fast ledger</CardTitle>
                  <CardDescription className="text-white/70">
                    5.5x faster for every ORM transaction—so audits never bottleneck performance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-black/40 border-gray-800 text-white">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
                    <Moon className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Dark & light modes</CardTitle>
                  <CardDescription className="text-white/70">
                    Low-glare night mode and high-contrast day mode, both energy-efficient
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-black/40 border-gray-800 text-white">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Unlimited seats</CardTitle>
                  <CardDescription className="text-white/70">
                    Flat pricing, invite Finance, Ops, and suppliers at no extra cost
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-black/40 border-gray-800 text-white">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
                    <Leaf className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Ultra-low energy</CardTitle>
                  <CardDescription className="text-white/70">
                    {"< 0.001 kWh per on-chain write (Hedera Hashgraph backbone)"}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-black/40 border-gray-800 text-white">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
                    <Wifi className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Offline audit pack</CardTitle>
                  <CardDescription className="text-white/70">
                    One-click ZIP of all signed data for regulators, no internet required
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-black/40 border-gray-800 text-white">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Enterprise Security</CardTitle>
                  <CardDescription className="text-white/70">
                    SOC 2 Type II certified with end-to-end encryption and compliance tools
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-gray-800 bg-black/40 py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-white">
                Responsible Impact Makers
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight sm:text-5xl text-white">99%</div>
                <div className="mt-2 text-sm text-white/70">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight sm:text-5xl text-white">45ms</div>
                <div className="mt-2 text-sm text-white/70">Average response time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight sm:text-5xl text-white">12M+</div>
                <div className="mt-2 text-sm text-white/70">Carbon credits issued</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight sm:text-5xl text-white">2030</div>
                <div className="mt-2 text-sm text-white/70">Net-zero commitment</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-white">
                Ready to build the future?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Join thousands of developers building sustainable applications at scale
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors group">
                  Get Started Free
                  <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-6 py-3 text-white border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 relative z-10">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-full lg:col-span-1">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/greenorb-logo.png"
                  alt="GreenOrb Logo"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm text-white/70">Building sustainable technology for a better tomorrow.</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Policies</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} GreenOrb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
// Client component for feature tags with calculator functionality
;("use client")
function FeatureTags() {
  const [calculatorOpen, setCalculatorOpen] = useState(false)

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-3 justify-center">
        <span className="bg-black/40 border border-gray-700 rounded-full px-4 py-2 text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          ESG Reporting
        </span>
        <span className="bg-black/40 border border-gray-700 rounded-full px-4 py-2 text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Offset
        </span>
        <button
          onClick={() => setCalculatorOpen(true)}
          className="bg-black/40 border border-gray-700 rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-black/60 transition-colors"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Carbon Calculator
        </button>
        <span className="bg-black/40 border border-gray-700 rounded-full px-4 py-2 text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Live tracking
        </span>
      </div>

      <CarbonCalculator open={calculatorOpen} onOpenChange={setCalculatorOpen} />
    </>
  )
}
