import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 299, yearly: 2990 },
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 1,000 leads/month',
      '1 AI sales agent',
      'Email & chat support',
      'Basic analytics',
      'CRM integration',
    ],
  },
  {
    name: 'Professional',
    price: { monthly: 799, yearly: 7990 },
    description: 'For growing teams that need more power',
    popular: true,
    features: [
      'Up to 10,000 leads/month',
      '5 AI sales agents',
      'Priority support',
      'Advanced analytics',
      'All integrations',
      'Custom workflows',
      'A/B testing',
    ],
  },
  {
    name: 'Enterprise',
    price: { monthly: 1999, yearly: 19990 },
    description: 'For large teams with complex needs',
    features: [
      'Unlimited leads',
      'Unlimited AI agents',
      '24/7 dedicated support',
      'Custom AI training',
      'White-label options',
      'Advanced security',
      'API access',
      'Dedicated account manager',
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business needs
          </p>

          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isYearly
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-[#38BDF8]">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border rounded-2xl p-8 border-white/10`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] px-4 py-1.5 rounded-full">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#94A3B8] text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? Math.floor(plan.price.yearly / 12) : plan.price.monthly}
                  </span>
                  <span className="text-[#94A3B8]">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-[#38BDF8]">
                    Billed ${plan.price.yearly} annually
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#94A3B8]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
