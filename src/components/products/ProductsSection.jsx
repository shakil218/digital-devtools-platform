import { useState } from "react";
import Products from "./Products";
import Cart from "../Cart/Cart";

const ProductsSection = ({cart,setCart}) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section className="bg-gray-100 py-16">

      {/* 🔥 HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Premium Digital Tools
        </h1>

        <p className="text-gray-500 mb-6">
          Choose from our curated collection of premium digital products.
        </p>

        {/* ✅ TOGGLE BUTTON */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full text-sm cursor-pointer ${
              activeTab === "products"
                ? "bgPrimary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full text-sm cursor-pointer ${
              activeTab === "cart"
                ? "bgPrimary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* 🔥 SWITCH SECTION */}
      <div className="max-w-7xl mx-auto px-4">
        {activeTab === "products" && (
          <Products cart={cart} setCart={setCart} />
        )}

        {activeTab === "cart" && (
          <Cart cart={cart} setCart={setCart} />
        )}
      </div>
    </section>
  );
};

export default ProductsSection;