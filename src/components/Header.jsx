import { assets } from "../asset/assets";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex border border-gray-500 rounded-full items-center justify-between w-11/12 h-16 lg:ml-14 mt-4">
      <div className="flex items-center ml-8 ">
        <div>
          <Link to="/" className="flex gap-2"><img className="w-8" src={assets.black_logo} alt="" />
          <h1 className="text-white text-2xl font-bold">Black Silicon</h1></Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
