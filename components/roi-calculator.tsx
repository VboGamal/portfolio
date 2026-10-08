"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator } from "lucide-react"

export function ROICalculator() {
  const [currency, setCurrency] = useState<"EGP" | "USD">("EGP")
  const [adSpend, setAdSpend] = useState(4000)

  // Assuming conservative 2.5x to 5x ROAS based on media buying efficiency
  const minROAS = 2.5
  const maxROAS = 5.0
  const minReturn = Math.round(adSpend * minROAS)
  const maxReturn = Math.round(adSpend * maxROAS)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="relative overflow-hidden rounded-none border border-foreground/15 bg-card p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center border border-foreground/15 bg-primary/10">
            <Calculator className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="font-black text-xl tracking-tight">ROI Calculator</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">Estimate your returns</p>
          </div>
        </div>
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider">
          <button 
            onClick={() => setCurrency("EGP")}
            className={`border border-foreground/15 px-3 py-1.5 transition-colors ${currency === "EGP" ? "bg-primary text-primary-foreground border-primary" : "text-foreground/50 hover:text-foreground"}`}
          >
            EGP
          </button>
          <button 
            onClick={() => setCurrency("USD")}
            className={`border border-foreground/15 px-3 py-1.5 transition-colors ${currency === "USD" ? "bg-primary text-primary-foreground border-primary" : "text-foreground/50 hover:text-foreground"}`}
          >
            USD
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-4 flex justify-between">
          <label className="text-sm font-bold text-foreground/70">Monthly Ad Spend</label>
          <span className="font-black text-primary">{formatCurrency(adSpend)}</span>
        </div>
        <input 
          type="range" 
          min={currency === "EGP" ? 1000 : 100} 
          max={currency === "EGP" ? 50000 : 5000} 
          step={currency === "EGP" ? 500 : 50}
          value={adSpend} 
          onChange={(e) => setAdSpend(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-foreground/40">
          <span>{formatCurrency(currency === "EGP" ? 1000 : 100)}</span>
          <span>{formatCurrency(currency === "EGP" ? 50000 : 5000)}</span>
        </div>
      </div>

      <div className="border-t border-foreground/15 pt-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/50">Estimated Monthly Return</p>
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground">
            {formatCurrency(minReturn)}
          </span>
          <span className="text-xl font-black text-foreground/40">—</span>
          <span className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground">
            {formatCurrency(maxReturn)}
          </span>
        </div>
        <p className="mt-4 text-xs leading-5 text-foreground/50">
          *Estimates are based on a standard 2.5x - 5.0x ROAS (Return on Ad Spend) for optimized performance marketing campaigns. Actual results depend on product/market fit.
        </p>
      </div>
    </div>
  )
}
