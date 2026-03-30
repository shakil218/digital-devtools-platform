import React from "react";
import user from "../../assets/user.png"
import rocket from "../../assets/rocket.png"
import cube from "../../assets/package.png"

const Steps = () => {
  return (
    <section className="w-full bg-base-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Get Started In 3 Steps
          </h2>
          <p className="mt-3 text-sm md:text-base text-base-content/60">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-base-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-2">
            {/* Step Number */}
            <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-sm font-semibold text-white rounded-full bgPrimary">
              01
            </div>

            {/* Image */}
            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
              <img
                src={user}
                alt="Create Account"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="mt-6 text-lg font-semibold">Create Account</h3>

            <p className="mt-2 text-sm text-base-content/60">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-base-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-2">
            <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-sm font-semibold text-white rounded-full bgPrimary">
              02
            </div>

            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
              <img
                src={cube}
                alt="Choose Products"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="mt-6 text-lg font-semibold">Choose Products</h3>

            <p className="mt-2 text-sm text-base-content/60">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-base-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-2">
            <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-sm font-semibold text-white rounded-full bgPrimary">
              03
            </div>

            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
              <img
                src={rocket}
                alt="Start Creating"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="mt-6 text-lg font-semibold">Start Creating</h3>

            <p className="mt-2 text-sm text-base-content/60">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
