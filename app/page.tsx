import { Zap, Moon, Users, Leaf, Wifi, Shield, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeatureTags } from "@/components/feature-tags"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { ParallaxBackground } from "@/components/parallax-background"
import { StatCounter } from "@/components/stat-counter"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1b0d] text-white overflow-x-hidden">
      {/* Parallax Background */}
      <ParallaxBackground />

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
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 text-white border border-white rounded-full hover:bg-white/10 transition-colors">
                Log in
              </button>
              <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                Book a demo
              </button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-4">
          <div className="container relative z-10">
            <div className="mx-auto max-w-[64rem] text-center">
              <AnimatedSection delay={0.1}>
                <div className="mb-6 flex flex-wrap gap-2 justify-center">
                  <span className="bg-black/40 border border-gray-700 rounded-full px-3 py-1 text-sm">
                    <Sparkles className="inline-block mr-1 h-3 w-3" />
                    AI Sustainable Ecosystem
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Environmental assets based <span className="block">on real-world data</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <p className="mb-8 text-lg text-white/70 sm:text-xl max-w-3xl mx-auto">
                  GreenOrb offers real-time carbon transparency, automated offset management, and token-backed
                  credibility all in one place.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors group">
                    Start Free Beta
                    <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="px-6 py-3 text-white border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                    Watch demo
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.9}>
                <FeatureTags />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 lg:py-32">
          <div className="container">
            <AnimatedSection className="mx-auto max-w-[58rem] text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-white">
                Engineered for planet-scale performance
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Scientists using build with the same tools as financial-grade leaders, only greener.
              </p>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedCard
                icon={<Zap className="h-6 w-6 text-green-400" />}
                title="Lightning-fast ledger"
                description="5.5x faster for every ORM transaction—so audits never bottleneck performance"
                delay={0.1}
              />

              <AnimatedCard
                icon={<Moon className="h-6 w-6 text-green-400" />}
                title="Dark & light modes"
                description="Low-glare night mode and high-contrast day mode, both energy-efficient"
                delay={0.2}
              />

              <AnimatedCard
                icon={<Users className="h-6 w-6 text-green-400" />}
                title="Unlimited seats"
                description="Flat pricing, invite Finance, Ops, and suppliers at no extra cost"
                delay={0.3}
              />

              <AnimatedCard
                icon={<Leaf className="h-6 w-6 text-green-400" />}
                title="Ultra-low energy"
                description="< 0.001 kWh per on-chain write (Hedera Hashgraph backbone)"
                delay={0.4}
              />

              <AnimatedCard
                icon={<Wifi className="h-6 w-6 text-green-400" />}
                title="Offline audit pack"
                description="One-click ZIP of all signed data for regulators, no internet required"
                delay={0.5}
              />

              <AnimatedCard
                icon={<Shield className="h-6 w-6 text-green-400" />}
                title="Enterprise Security"
                description="SOC 2 Type II certified with end-to-end encryption and compliance tools"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-gray-800 bg-black/40 py-24 lg:py-32">
          <div className="container">
            <AnimatedSection className="mx-auto max-w-[58rem] text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-white">
                Responsible Impact Makers
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <StatCounter end={99} suffix="%" title="Uptime SLA" delay={0.1} />
              <StatCounter end={45} suffix="ms" title="Average response time" delay={0.2} />
              <StatCounter end={12} suffix="M+" title="Carbon credits issued" delay={0.3} />
              <StatCounter end={2030} title="Net-zero commitment" delay={0.4} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="container">
            <AnimatedSection className="mx-auto max-w-[58rem] text-center">
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
            </AnimatedSection>
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
