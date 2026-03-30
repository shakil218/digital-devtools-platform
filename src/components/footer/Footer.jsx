import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-300 px-6 md:px-16 lg:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div className="mx-auto">
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-105 transition">
              <PiInstagramLogoFill size={14} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-105 transition">
              <FaFacebookSquare size={14} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-105 transition">
              <FaXTwitter size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} Digitools. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
