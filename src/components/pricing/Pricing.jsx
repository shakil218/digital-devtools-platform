import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="w-full bg-base-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-sm md:text-base text-base-content/60">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-base-100 rounded-2xl p-8 shadow-sm border border-base-300 flex flex-col h-full">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="text-sm text-base-content/60 mt-1">
              Perfect for getting started
            </p>

            <h2 className="mt-6 text-3xl font-bold">
              $0
              <span className="text-base font-medium text-base-content/60">
                /Month
              </span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-green-500 w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 md:mt-auto w-full rounded-full py-3 text-white bgPrimary">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="relative rounded-2xl p-8 text-white shadow-lg bgPrimary">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium bg-yellow-300 text-black rounded-full">
              Most Popular
            </div>

            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-sm text-white/80 mt-1">Best for professionals</p>

            <h2 className="mt-6 text-3xl font-bold">
              $29
              <span className="text-base font-medium text-white/80">
                /Month
              </span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-white w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full py-3 bg-white text-purple-600 font-medium">
              <span className="bg-linear-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent font-medium">
                Start Pro Trial
              </span>
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-base-100 rounded-2xl p-8 shadow-sm border border-base-300">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="text-sm text-base-content/60 mt-1">
              For teams and businesses
            </p>

            <h2 className="mt-6 text-3xl font-bold">
              $99
              <span className="text-base font-medium text-base-content/60">
                /Month
              </span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-green-500 w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full py-3 text-white bgPrimary">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
