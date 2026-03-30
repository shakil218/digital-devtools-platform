import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

// icons
import pen from "../../assets/products/writing_2327400 1.png";
import designTool from "../../assets/products/design-tool.png";
import camera from "../../assets/products/Camera.png";
import operation_toolkit from "../../assets/products/operation.png";
import resume from "../../assets/products/portfolio.png";
import social from "../../assets/products/social-media.png";
import video from "../../assets/products/video-and-audio.png";
import layout from "../../assets/products/web-template.png";
import search from "../../assets/products/optimization.png";
import cloud from "../../assets/products/cloud-server.png";
import project from "../../assets/products/project-plan.png";
import chatbot from "../../assets/products/chat-bot.png";

// icon map
const iconMap = {
  pen: pen,
  designTool: designTool,
  camera: camera,
  operation_toolkit: operation_toolkit,
  resume: resume,
  social: social,
  video: video,
  layout: layout,
  search: search,
  cloud: cloud,
  project: project,
  chatbot: chatbot,
};

// tag styles
const tagStyles = {
  best: "bg-yellow-100 text-yellow-600",
  popular: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.error("This product is already added!");
      return;
    }

    setCart((prev) => [...prev, product]);
    toast.success("Product added to cart!");
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl border border-gray-200 p-6 relative hover:shadow-md transition duration-300 hover:-translate-y-2"
        >
          {/* Tag */}
          <span
            className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${tagStyles[product.tagType]}`}
          >
            {product.tag}
          </span>

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <img src={iconMap[product.icon]} className="w-6 h-6" />
          </div>

          {/* Title */}
          <h2 className="font-semibold mb-2">{product.name}</h2>

          {/* Desc */}
          <p className="text-sm text-gray-500 mb-4">{product.description}</p>

          {/* Price */}
          <h3 className="font-bold mb-4">${product.price}</h3>

          {/* Features */}
          <ul className="text-sm mb-6 space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex gap-2 items-center">
                <Check size={14} /> {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            onClick={() => handleAddToCart(product)}
            disabled={cart.find((item) => item.id === product.id)}
            className="w-full py-2 rounded-full bgPrimary text-white text-sm hover:opacity-90 disabled:opacity-50"
          >
            {cart.find((item) => item.id === product.id) ? (
              <div className="inline-flex items-center justify-center gap-2 font-medium">
                <Check size={20} />
                Added to Cart!
              </div>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
