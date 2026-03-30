// icons
import pen from "../../assets/products/writing_2327400 1.png";
import designTool from "../../assets/products/design-tool.png";
import camera from "../../assets/products/Camera.png";
import operation_toolkit from "../../assets/products/operation.png";
import resume from "../../assets/products/portfolio.png";
import social from "../../assets/products/social-media.png";
import video from "../../assets/products/video-and-audio.png";
import search from "../../assets/products/optimization.png";
import cloud from "../../assets/products/cloud-server.png";
import chatbot from "../../assets/products/chat-bot.png";
import { toast } from "react-toastify";

// icon map
const iconMap = {
  pen: pen,
  designTool: designTool,
  camera: camera,
  operation_toolkit: operation_toolkit,
  resume: resume,
  social: social,
  video: video,
  search: search,
  cloud: cloud,
  chatbot: chatbot,
};

const Cart = ({ cart, setCart }) => {
  // ❌ Remove item
  const handleRemove = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p className="text-sm mb-2">Remove this item?</p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setCart((prev) => prev.filter((item) => item.id !== id));
                toast.success("Item removed!");
                closeToast();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Yes
            </button>

            <button
              onClick={closeToast}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      { autoClose: false },
    );
  };

  // 🛒 Handle checkout (clear cart & show success message)
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    toast(
      ({ closeToast }) => (
        <div>
          <p className="text-sm mb-2">Proceed to checkout?</p>

          <div className="flex gap-2">
            {/* ✅ YES BUTTON */}
            <button
              onClick={() => {
                setCart([]); // clear cart
                toast.success("Order placed successfully! 🎉");
                closeToast();
              }}
              className="px-3 py-1 bgPrimary text-white rounded"
            >
              Yes
            </button>

            {/* ❌ NO BUTTON */}
            <button
              onClick={() => {
                toast.info("Checkout cancelled");
                closeToast();
              }}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      { autoClose: false },
    );
  };

  // 💰 Total calculation
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto shadow-sm">
      {/* 🛒 Title */}
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

      {/* 🔥 EMPTY STATE OR ITEMS */}
      {cart.length === 0 ? (
        // 🛒 EMPTY UI
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🛒</div>
          <p className="text-gray-600 font-medium">Your cart is empty</p>
          <p className="text-sm text-gray-400 mt-1">
            Start adding products to see them here
          </p>
        </div>
      ) : (
        <>
          {/* 🧾 CART ITEMS */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-primary/5 p-3 rounded-lg"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  {/* 🎨 Icon */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <img
                      src={iconMap[item.icon]}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  {/* 📄 Info */}
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                </div>

                {/* Right */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-xs font-medium hover:underline cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* 💰 TOTAL */}
          <div className="flex justify-between mt-6 pt-4">
            <span className="text-sm text-gray-600">Total</span>
            <span className="font-bold text-lg">${total}</span>
          </div>

          {/* 🚀 CHECKOUT BUTTON */}
          <button
            onClick={handleCheckout}
            className="w-full mt-4 py-3 rounded-full bgPrimary text-white text-sm font-medium hover:opacity-90"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
