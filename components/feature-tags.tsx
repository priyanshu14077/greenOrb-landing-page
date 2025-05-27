"use client"

import { useState } from "react"
import { CarbonCalculator } from "@/components/carbon-calculator"

export function FeatureTags() {
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
