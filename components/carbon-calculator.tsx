"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Car, Home, ShoppingBag, Utensils, BarChart4, Download, Share2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CarbonCalculatorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CarbonCalculator({ open, onOpenChange }: CarbonCalculatorProps) {
  const [transportEmissions, setTransportEmissions] = useState(0)
  const [homeEmissions, setHomeEmissions] = useState(0)
  const [foodEmissions, setFoodEmissions] = useState(0)
  const [shoppingEmissions, setShoppingEmissions] = useState(0)
  const [totalEmissions, setTotalEmissions] = useState(0)
  const [showResults, setShowResults] = useState(false)

  // Transport inputs
  const [carMiles, setCarMiles] = useState(0)
  const [carEfficiency, setCarEfficiency] = useState("average") // low, average, high
  const [flightHours, setFlightHours] = useState(0)
  const [publicTransportMiles, setPublicTransportMiles] = useState(0)

  // Home inputs
  const [electricityUsage, setElectricityUsage] = useState(0)
  const [gasUsage, setGasUsage] = useState(0)
  const [renewablePercentage, setRenewablePercentage] = useState(0)
  const [householdSize, setHouseholdSize] = useState(1)

  // Food inputs
  const [dietType, setDietType] = useState("mixed") // vegan, vegetarian, mixed, meat-heavy
  const [foodWaste, setFoodWaste] = useState(0) // percentage
  const [localFoodPercentage, setLocalFoodPercentage] = useState(0)

  // Shopping inputs
  const [monthlySpending, setMonthlySpending] = useState(0)
  const [recyclingRate, setRecyclingRate] = useState(0)

  const calculateEmissions = () => {
    // Transport calculations (simplified)
    const carEmissionFactor = carEfficiency === "low" ? 0.4 : carEfficiency === "high" ? 0.2 : 0.3 // kg CO2 per mile
    const flightEmissionFactor = 200 // kg CO2 per hour
    const publicTransportFactor = 0.1 // kg CO2 per mile

    const carEmissions = carMiles * carEmissionFactor
    const flightEmissions = flightHours * flightEmissionFactor
    const publicTransportEmissions = publicTransportMiles * publicTransportFactor

    const calculatedTransportEmissions = carEmissions + flightEmissions + publicTransportEmissions

    // Home calculations (simplified)
    const electricityFactor = 0.5 // kg CO2 per kWh
    const gasFactor = 0.2 // kg CO2 per kWh
    const renewableReduction = renewablePercentage / 100

    const electricityEmissions = electricityUsage * electricityFactor * (1 - renewableReduction)
    const gasEmissions = gasUsage * gasFactor
    const perPersonFactor = 1 / Math.max(1, householdSize)

    const calculatedHomeEmissions = (electricityEmissions + gasEmissions) * perPersonFactor

    // Food calculations (simplified)
    const dietFactor = dietType === "vegan" ? 1.5 : dietType === "vegetarian" ? 2.5 : dietType === "mixed" ? 4 : 7 // kg CO2 per day

    const wasteImpact = 1 + foodWaste / 100
    const localFoodImpact = 1 - localFoodPercentage / 200 // max 50% reduction

    const calculatedFoodEmissions = dietFactor * 30 * wasteImpact * localFoodImpact // monthly

    // Shopping calculations (simplified)
    const spendingFactor = 0.5 // kg CO2 per $
    const recyclingImpact = 1 - recyclingRate / 200 // max 50% reduction

    const calculatedShoppingEmissions = monthlySpending * spendingFactor * recyclingImpact

    // Update state
    setTransportEmissions(Math.round(calculatedTransportEmissions))
    setHomeEmissions(Math.round(calculatedHomeEmissions))
    setFoodEmissions(Math.round(calculatedFoodEmissions))
    setShoppingEmissions(Math.round(calculatedShoppingEmissions))

    const total =
      calculatedTransportEmissions + calculatedHomeEmissions + calculatedFoodEmissions + calculatedShoppingEmissions

    setTotalEmissions(Math.round(total))
    setShowResults(true)
  }

  const resetCalculator = () => {
    setCarMiles(0)
    setCarEfficiency("average")
    setFlightHours(0)
    setPublicTransportMiles(0)
    setElectricityUsage(0)
    setGasUsage(0)
    setRenewablePercentage(0)
    setHouseholdSize(1)
    setDietType("mixed")
    setFoodWaste(0)
    setLocalFoodPercentage(0)
    setMonthlySpending(0)
    setRecyclingRate(0)
    setShowResults(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-[#0d1b0d] border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Carbon Footprint Calculator</DialogTitle>
          <DialogDescription className="text-white/70">
            Estimate your monthly carbon emissions and discover ways to reduce your impact.
          </DialogDescription>
        </DialogHeader>

        {!showResults ? (
          <Tabs defaultValue="transport" className="w-full">
            <TabsList className="grid grid-cols-4 bg-black/40">
              <TabsTrigger
                value="transport"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                <Car className="h-4 w-4 mr-2" />
                Transport
              </TabsTrigger>
              <TabsTrigger value="home" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <Home className="h-4 w-4 mr-2" />
                Home
              </TabsTrigger>
              <TabsTrigger value="food" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <Utensils className="h-4 w-4 mr-2" />
                Food
              </TabsTrigger>
              <TabsTrigger value="shopping" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shopping
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transport" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="car-miles">Monthly car miles</Label>
                  <Input
                    id="car-miles"
                    type="number"
                    min="0"
                    className="bg-black/40 border-gray-700 text-white"
                    value={carMiles}
                    onChange={(e) => setCarMiles(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="car-efficiency">Car fuel efficiency</Label>
                  <Select value={carEfficiency} onValueChange={setCarEfficiency}>
                    <SelectTrigger id="car-efficiency" className="bg-black/40 border-gray-700 text-white">
                      <SelectValue placeholder="Select efficiency" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d1b0d] border-gray-700 text-white">
                      <SelectItem value="low">Low (SUV/Truck)</SelectItem>
                      <SelectItem value="average">Average (Sedan)</SelectItem>
                      <SelectItem value="high">High (Hybrid/Electric)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="flight-hours">Flight hours per month</Label>
                  <Input
                    id="flight-hours"
                    type="number"
                    min="0"
                    className="bg-black/40 border-gray-700 text-white"
                    value={flightHours}
                    onChange={(e) => setFlightHours(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="public-transport">Public transport miles per month</Label>
                  <Input
                    id="public-transport"
                    type="number"
                    min="0"
                    className="bg-black/40 border-gray-700 text-white"
                    value={publicTransportMiles}
                    onChange={(e) => setPublicTransportMiles(Number(e.target.value))}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="home" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="electricity">Monthly electricity usage (kWh)</Label>
                  <Input
                    id="electricity"
                    type="number"
                    min="0"
                    className="bg-black/40 border-gray-700 text-white"
                    value={electricityUsage}
                    onChange={(e) => setElectricityUsage(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gas">Monthly gas usage (kWh)</Label>
                  <Input
                    id="gas"
                    type="number"
                    min="0"
                    className="bg-black/40 border-gray-700 text-white"
                    value={gasUsage}
                    onChange={(e) => setGasUsage(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="renewable">Percentage of renewable energy ({renewablePercentage}%)</Label>
                  <Slider
                    id="renewable"
                    min={0}
                    max={100}
                    step={1}
                    value={[renewablePercentage]}
                    onValueChange={(value) => setRenewablePercentage(value[0])}
                    className="py-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="household">Household size</Label>
                  <Select value={householdSize.toString()} onValueChange={(value) => setHouseholdSize(Number(value))}>
                    <SelectTrigger id="household" className="bg-black/40 border-gray-700 text-white">
                      <SelectValue placeholder="Select household size" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d1b0d] border-gray-700 text-white">
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                      <SelectItem value="5">5+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="food" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="diet">Diet type</Label>
                  <Select value={dietType} onValueChange={setDietType}>
                    <SelectTrigger id="diet" className="bg-black/40 border-gray-700 text-white">
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d1b0d] border-gray-700 text-white">
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="mixed">Mixed/Flexitarian</SelectItem>
                      <SelectItem value="meat-heavy">Meat-heavy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="food-waste">Food waste percentage ({foodWaste}%)</Label>
                  <Slider
                    id="food-waste"
                    min={0}
                    max={50}
                    step={1}
                    value={[foodWaste]}
                    onValueChange={(value) => setFoodWaste(value[0])}
                    className="py-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="local-food">Locally sourced food percentage ({localFoodPercentage}%)</Label>
                  <Slider
                    id="local-food"
                    min={0}
                    max={100}
                    step={1}
                    value={[localFoodPercentage]}
                    onValueChange={(value) => setLocalFoodPercentage(value[0])}
                    className="py-4"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shopping" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="spending">Monthly spending on goods ($)</Label>
                  <Input
                    id="spending"
                    type="number"
                    min="0"
                    className="bg-black/40 border-gray-700 text-white"
                    value={monthlySpending}
                    onChange={(e) => setMonthlySpending(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recycling">Recycling rate ({recyclingRate}%)</Label>
                  <Slider
                    id="recycling"
                    min={0}
                    max={100}
                    step={1}
                    value={[recyclingRate]}
                    onValueChange={(value) => setRecyclingRate(value[0])}
                    className="py-4"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Your Carbon Footprint</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">{totalEmissions}</div>
                      <div className="text-sm text-white/70">kg CO₂e per month</div>
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Transport segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#22c55e"
                      strokeWidth="20"
                      strokeDasharray={`${(transportEmissions / totalEmissions) * 251.2} 251.2`}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Home segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#16a34a"
                      strokeWidth="20"
                      strokeDasharray={`${(homeEmissions / totalEmissions) * 251.2} 251.2`}
                      strokeDashoffset={`${-(transportEmissions / totalEmissions) * 251.2}`}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Food segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#15803d"
                      strokeWidth="20"
                      strokeDasharray={`${(foodEmissions / totalEmissions) * 251.2} 251.2`}
                      strokeDashoffset={`${-((transportEmissions + homeEmissions) / totalEmissions) * 251.2}`}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Shopping segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#166534"
                      strokeWidth="20"
                      strokeDasharray={`${(shoppingEmissions / totalEmissions) * 251.2} 251.2`}
                      strokeDashoffset={`${-((transportEmissions + homeEmissions + foodEmissions) / totalEmissions) * 251.2}`}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#22c55e] rounded-full"></div>
                  <span className="text-sm text-white/70">Transport: {transportEmissions} kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#16a34a] rounded-full"></div>
                  <span className="text-sm text-white/70">Home: {homeEmissions} kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#15803d] rounded-full"></div>
                  <span className="text-sm text-white/70">Food: {foodEmissions} kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#166534] rounded-full"></div>
                  <span className="text-sm text-white/70">Shopping: {shoppingEmissions} kg</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-white">Reduction Opportunities</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {transportEmissions > 100 && (
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Consider carpooling or using public transport to reduce your driving emissions.</span>
                  </li>
                )}
                {homeEmissions > 100 && (
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Switch to renewable energy sources or improve home insulation.</span>
                  </li>
                )}
                {foodEmissions > 100 && (
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Reduce meat consumption and food waste to lower your food footprint.</span>
                  </li>
                )}
                {shoppingEmissions > 50 && (
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Buy second-hand items and increase your recycling rate.</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        <DialogFooter className="flex-col sm:flex-row gap-2">
          {!showResults ? (
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors w-full sm:w-auto"
              onClick={calculateEmissions}
            >
              Calculate Footprint
            </button>
          ) : (
            <>
              <button
                className="px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                onClick={resetCalculator}
              >
                <BarChart4 className="h-4 w-4" />
                Recalculate
              </button>
              <button className="px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Results
              </button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
