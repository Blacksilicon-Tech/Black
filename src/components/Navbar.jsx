import { useState } from "react";
import { assets } from "../asset/assets";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [visible, setVisible] = useState(false);


  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Link
          onClick={() => setVisible(false)}
          to="/"
          className="flex flex-col items-center gap-1"
        >
          <p className="font-extrabold hover:text-white">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link
          onClick={() => setVisible(false)}
          to="/about"
          className="flex flex-col items-center gap-1"
        >
          <p className="font-extrabold pr-10 hover:text-white">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
      </ul>

      <div className="flex items-center gap-6 mr-5">
        <div className="group relative">
          <div className="hidden group-hover:block absolute right-0 dropdown-menu pt-4">
          </div>
        </div>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back Icon"
            />
            <p>Back</p>
          </div>
          <Link
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </Link>
          <Link
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
