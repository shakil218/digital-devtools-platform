import React from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import "../../utilities/styles.css";

const Navbar = ({ cart }) => {
  const listItems = (
    <>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Testimonials</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
    </>
  );

  return (
    <div className="backdrop-blur-md bg-base-100/80 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow nav-list"
            >
              {listItems}
            </ul>
          </div>

          {/* Logo */}
          <h3 className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
            DigiTools
          </h3>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 nav-list">{listItems}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Cart */}
          <div className="btn btn-ghost btn-circle">
            <div className="indicator">
              <LiaShoppingCartSolid className="h-5 w-5" />
              {/* ✅ Dynamic Badge */}
              {cart.length > 0 && (
                <span className="indicator-item badge badge-secondary badge-xs text-xs w-4 h-4 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          {/* Login */}
          <a className="hidden sm:block cursor-pointer font-semibold">Login</a>

          {/* CTA Button */}
          <a className="btn rounded-full text-white bgPrimary px-4 md:px-6 text-sm md:text-base">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
