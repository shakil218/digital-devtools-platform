import { useEffect, useState } from "react";
import { Camera, Check } from "lucide-react";

// ✅ Import your custom icons (images)
import pen from "../../assets/products/writing_2327400 1.png";
import designTool from "../../assets/products/design-tool.png";
import camera from "../../assets/products/Camera.png";
import operation_toolkit from "../../assets/products/operation.png";
import resume from "../../assets/products/portfolio.png";
import social from "../../assets/products/social-media.png";

// ✅ Map JSON icon names → image files
const iconMap = {
  pen: pen,
  designTool: designTool,
  camera: camera,
  operation_toolkit: operation_toolkit,
  resume: resume,
  social: social,
};

// ✅ Tag colors
const tagStyles = {
  best: "bg-yellow-100 text-yellow-600",
  popular: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const Products = () => {
  const [products, setProducts] = useState([]);

  // ✅ Fetch JSON data
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      {/* 🔥 HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Premium Digital Tools
        </h1>

        <p className="text-gray-500 text-sm md:text-base mb-6">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-full bg-linear-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7] text-white text-sm">
            Products
          </button>
          <button className="text-sm text-gray-600">Cart (2)</button>
        </div>
      </div>

      {/* 🔥 PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 p-6 relative hover:shadow-md transition duration-300 hover:-translate-y-2"
          >
            {/* 🏷️ Tag */}
            <span
              className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${
                tagStyles[product.tagType]
              }`}
            >
              {product.tag}
            </span>

            {/* 🎨 Icon */}
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <img
                src={iconMap[product.icon]}
                alt={product.name}
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* 📝 Title */}
            <h2 className="font-semibold text-gray-800 mb-2">{product.name}</h2>

            {/* 📄 Description */}
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>

            {/* 💰 Price */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ${product.price}
              <span className="text-sm font-normal text-gray-500 ml-1">
                {product.period === "monthly" && "/mo"}
                {product.period === "yearly" && "/yr"}
                {product.period === "one-time" && "one-time"}
              </span>
            </h3>

            {/* ✅ Features */}
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* 🔘 Button */}
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-[#4f39f6] via-[#7c3aed] to-[#a855f7] text-white text-sm hover:opacity-90">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
