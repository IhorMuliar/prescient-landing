"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Testnet",
    price: "Free",
    description: "Prove your concept before seeking funds",
    features: ["1 SOL test allocation", "Devnet deployment", "Community feedback", "Basic market analytics"],
    popular: false,
    cta: "Deploy Agent",
  },
  {
    name: "Seed",
    price: "$10K-100K",
    description: "Market-validated agents ready for mainnet",
    features: [
      "Futarchy market listing",
      "3-day prediction period",
      "Performance dashboard",
      "Liquidity provision",
      "Token vesting schedule",
      "Priority support",
    ],
    popular: true,
    cta: "Submit Proposal",
  },
  {
    name: "Scale",
    price: "$100K+",
    description: "Institutional-grade autonomous agents",
    features: [
      "Everything in Seed",
      "Custom market parameters",
      "Direct LP partnerships",
      "Performance guarantees",
      "White-glove onboarding",
      "Dedicated market maker",
    ],
    popular: false,
    cta: "Apply",
  },
]

export function PricingSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
          Agent Funding Tiers
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
          Launch on testnet free. Graduate to mainnet when markets validate your agent.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#5865F2]/10 to-transparent border-[#5865F2]/30 shadow-lg shadow-[#5865F2]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#5865F2] to-[#5865F2]/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#5865F2] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#5865F2] to-[#5865F2]/80 text-white shadow-lg shadow-[#5865F2]/25 hover:shadow-[#5865F2]/40"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">Platform fee: 2% of raised capital. 100% goes to liquidity and development.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#5865F2] hover:text-[#5865F2]/80 font-medium transition-colors"
          >
            Read the docs →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
