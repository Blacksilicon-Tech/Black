import { assets } from "../asset/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white py-8">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 mb-6">
        {/* Logo & Name */}
        <div className="">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img className="w-20" src={assets.black_logo} alt="Black Silicon Logo" />
          <h1 className="text-2xl font-serif mt-2">Black Silicon</h1>
          </Link>
        </div>

        {/* Our Services */}
        <div className="flex gap-20">
        <div>
          <ul className="text-lg space-y-1">
            <h2 className="text-gray-400 font-bold">Our Services</h2>
            <li>IT Platform Deployment and Support</li>
            <li>Research and Development</li>
            <li>Training and Strategic Representation</li>
            <li>Advisory Services</li>
            <li>Compliance Advisory</li>
          </ul>
        </div>

        {/* Our Values */}
        <div>
          <ul className="text-lg space-y-1">
            <h2 className="text-gray-400 font-bold w-24">Our Values</h2>
            <li>Quality</li>
            <li>Innovation</li>
            <li>Satisfaction</li>
            <li>Ethics</li>
            <li>Security</li>
          </ul>
        </div>
        </div>
      </div>

      {/* Divider */}

      <hr className="my-6 border-gray-700 max-w-7xl mx-auto" />

      {/* Office Addresses Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 mb-6">
        <div>
          <h3 className="text-white font-semibold mb-2">United State</h3>
          <p>16 Airway Circle Towson,</p>
          <p>21286, Maryland</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">United Kingdom</h3>
          <p>5, Landmann House</p>
          <p>Bermondsey SE16 3PF,</p>
          <p>London</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Ghana</h3>
          <p>3rd floor, Heritage Tower</p>
          <p>Ridge, Greater Accra,</p>
          <p>Accra. Ghana</p>
          <p className="mt-1">+2338064244726</p>
        </div>
      </div>

      <hr className="my-6 border-gray-700 max-w-7xl mx-auto"/>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 mt-6">
        <p>© 2025 Black Silicon. All rights Reserved.</p>
        <div className="flex space-x-4">
          <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          <span className="text-gray-500">|</span>
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
