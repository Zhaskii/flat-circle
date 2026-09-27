"use client";

import React, { useState, useMemo } from "react";
import { Calculator, ArrowRight } from "lucide-react";

interface RoiCalculatorProps {
  onOpenContactModal?: (details?: string) => void;
}

export default function RoiCalculator({
  onOpenContactModal,
}: RoiCalculatorProps) {
  const [currency, setCurrency] = useState<"NPR" | "USD">("NPR");
  const [adSpendNPR, setAdSpendNPR] = useState<number>(250000); // 2.5 Lakhs
  const [aovNPR, setAovNPR] = useState<number>(3500); // 3500 NRs
  const [conversionRate, setConversionRate] = useState<number>(1.8);

  const [adSpendUSD, setAdSpendUSD] = useState<number>(2500);
  const [aovUSD, setAovUSD] = useState<number>(85);

  const isNPR = currency === "NPR";
  const currentAdSpend = isNPR ? adSpendNPR : adSpendUSD;
  const currentAov = isNPR ? aovNPR : aovUSD;
  const symbol = isNPR ? "रू " : "$";

  const calculations = useMemo(() => {
    // Illustrative planning assumptions. Actual campaign results vary by market, offer, and execution.
    const cpc = isNPR ? 22 : 0.22;
    const currentTraffic = Math.max(1, Math.round(currentAdSpend / cpc));
    const currentOrders = Math.round(currentTraffic * (conversionRate / 100));
    const currentRevenue = currentOrders * currentAov;
    const currentRoas =
      currentRevenue > 0 ? (currentRevenue / currentAdSpend).toFixed(2) : "1.0";

    const optimizedCR = conversionRate * 1.25;
    const optimizedAOV = currentAov * 1.1;
    const optimizedOrders = Math.round(currentTraffic * (optimizedCR / 100));
    const projectedRevenue = Math.round(optimizedOrders * optimizedAOV);
    const projectedRoas = (projectedRevenue / currentAdSpend).toFixed(2);
    const monthlyLift = Math.max(0, projectedRevenue - currentRevenue);
    const annualLift = monthlyLift * 12;

    return {
      currentOrders,
      currentRevenue,
      currentRoas,
      optimizedOrders,
      projectedRevenue,
      projectedRoas,
      monthlyLift,
      annualLift,
    };
  }, [currentAdSpend, currentAov, conversionRate, isNPR]);

  return (
    <section
      id="roi-calculator"
      className="relative py-28 bg-black text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">
            <Calculator className="w-3.5 h-3.5 text-white" />
            <span>Interactive Campaign Planner</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-6">
            Plan Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
              Marketing Scenario
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Explore how campaign budget, conversion rate, and average order value
            can shape an illustrative revenue scenario for your business.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-zinc-900 border border-white/10">
            <button
              onClick={() => setCurrency("NPR")}
              className={`px-5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                isNPR
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              NPR (रू Nepali Rupees)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                !isNPR
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              USD ($ Dollar Card)
            </button>
          </div>
        </div>

        {/* Interactive Calculator Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Input Sliders */}
            <div className="lg:col-span-6 space-y-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Campaign Baseline
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  Currency: {currency}
                </span>
              </div>

              {/* Monthly Ad Spend Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-zinc-400">Monthly Marketing Budget</span>
                  <span className="text-white font-extrabold text-base bg-zinc-900 px-3 py-1 rounded-lg border border-white/10">
                    {symbol}
                    {currentAdSpend.toLocaleString()}
                  </span>
                </div>
                {isNPR ? (
                  <input
                    type="range"
                    min="30000"
                    max="2000000"
                    step="20000"
                    value={adSpendNPR}
                    onChange={(e) => setAdSpendNPR(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                ) : (
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="250"
                    value={adSpendUSD}
                    onChange={(e) => setAdSpendUSD(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                )}
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>
                    {symbol}
                    {isNPR ? "30,000" : "500"}
                  </span>
                  <span>
                    {symbol}
                    {isNPR ? "10,00,000 (10L)" : "10,000"}
                  </span>
                  <span>
                    {symbol}
                    {isNPR ? "20,00,000+ (20L)" : "20,000+"}
                  </span>
                </div>
              </div>

              {/* Average Order Value Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-zinc-400">
                    Average Order / Deal Value
                  </span>
                  <span className="text-white font-extrabold text-base bg-zinc-900 px-3 py-1 rounded-lg border border-white/10">
                    {symbol}
                    {currentAov.toLocaleString()}
                  </span>
                </div>
                {isNPR ? (
                  <input
                    type="range"
                    min="500"
                    max="30000"
                    step="500"
                    value={aovNPR}
                    onChange={(e) => setAovNPR(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                ) : (
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={aovUSD}
                    onChange={(e) => setAovUSD(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                )}
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>
                    {symbol}
                    {isNPR ? "500" : "20"}
                  </span>
                  <span>
                    {symbol}
                    {isNPR ? "15,000" : "250"}
                  </span>
                  <span>
                    {symbol}
                    {isNPR ? "30,000+" : "500+"}
                  </span>
                </div>
              </div>

              {/* Conversion Rate Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-zinc-400">Current Conversion Rate</span>
                  <span className="text-white font-extrabold text-base bg-zinc-900 px-3 py-1 rounded-lg border border-white/10">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>0.5% (Low)</span>
                  <span>2.0% (Average)</span>
                  <span>5.0% (High)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-400 font-light leading-relaxed">
                * This is an illustrative planning tool, not a performance
                guarantee. Actual outcomes depend on the offer, audience,
                creative, channel mix, and execution.
              </div>
            </div>

            {/* Results Output Card */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Illustrative Marketing Scenario
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>Planning model</span>
                  </div>
                </div>

                {/* Big Projected Annual Revenue Lift */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                    Projected 12-Month Additional Revenue
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                    +{symbol}
                    {calculations.annualLift.toLocaleString()}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-sans">
                    +{symbol}
                    {calculations.monthlyLift.toLocaleString()} estimated
                    additional revenue every month
                  </p>
                </div>

                {/* Sub Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                      Projected ROAS
                    </span>
                    <div className="text-2xl font-black font-mono text-white">
                      {calculations.projectedRoas}x
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      vs {calculations.currentRoas}x current
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                      Monthly Customers / Orders
                    </span>
                    <div className="text-2xl font-black font-mono text-white">
                      {calculations.optimizedOrders.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      +
                      {calculations.optimizedOrders -
                        calculations.currentOrders}{" "}
                      new conversions/mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onOpenContactModal?.(
                    `Nepal ROI Estimate: Monthly budget ${symbol}${currentAdSpend.toLocaleString()}, Projected annual revenue lift +${symbol}${calculations.annualLift.toLocaleString()}`,
                  )
                }
                className="w-full py-4 px-6 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-95 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-3 group"
              >
                <span>Lock In This Growth Model</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
