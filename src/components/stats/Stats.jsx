import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Stats = () => {
  return (
    <section className="w-full bgPrimary">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-white">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-3 sm:border-r border-white/30">
            <FaUsers className="text-2xl md:text-3xl text-white/80" />
            <h2 className="text-3xl md:text-4xl font-extrabold">50K+</h2>
            <p className="text-sm md:text-base text-white/80">Active Users</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-3 sm:border-r border-white/30 mt-8 sm:mt-0">
            <MdBuild className="text-2xl md:text-3xl text-white/80" />
            <h2 className="text-3xl md:text-4xl font-extrabold">200+</h2>
            <p className="text-sm md:text-base text-white/80">Premium Tools</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-3 mt-8 sm:mt-0">
            <FaStar className="text-2xl md:text-3xl text-white/80" />
            <h2 className="text-3xl md:text-4xl font-extrabold">4.9</h2>
            <p className="text-sm md:text-base text-white/80">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
