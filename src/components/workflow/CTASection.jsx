import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary */}
          <button className="px-6 py-3 rounded-full bg-white text-purple-600 font-medium hover:scale-105 transition duration-300">
            Explore Products
          </button>

          {/* Secondary */}
          <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition duration-300">
            View Pricing
          </button>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-xs md:text-sm text-white/70">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
