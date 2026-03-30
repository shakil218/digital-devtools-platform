import React from "react";
import playBtn from "../../assets/Play.png";
import heroImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:flex md:flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 backdrop-blur-md border border-base-300 shadow-sm text-sm text-primary font-medium">
            {/* Glow Dot */}
            <span className="relative flex h-2 w-2">
              {/* Glow Layer */}
              <span className="absolute inset-0 rounded-full bg-primary blur-[6px] opacity-70"></span>
              {/* Solid Dot */}
              <span className="relative h-2 w-2 rounded-full bg-primary"></span>
            </span>

            {/* Text */}
            <span>New: AI-Powered Tools Available</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Primary Button */}
            <button className="btn rounded-full text-white bgPrimary px-6">
              Explore Products
            </button>

            {/* Secondary Button */}
            <div className="inline-block p-[1.5px] rounded-full bg-linear-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7]">
              <button className="btn rounded-full flex items-center gap-2 px-6 bg-base-100">
                <img src={playBtn} alt="Watch Demo" className="w-4 h-4" />
                {/* Gradient Text */}
                <span className="bg-linear-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent font-medium">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Digital tools"
            className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
