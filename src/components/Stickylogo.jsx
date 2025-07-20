// components/StickyLogo.jsx
import { useEffect, useState } from "react";
import { assets } from "../asset/assets"; // Update with actual path

const Stickylogo = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Trigger after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-5 left-4 z-50 transition-all duration-300 ${
        isSticky ? "opacity-100" : "opacity-0"
      }`}
    >
        <div className="flex items-center gap-2">
            <img src={assets.black_logo} alt="Black Silicon Logo" className="w-16 h-auto" />
            <h1 className="text-white text-2xl font-bold">Black Silicon</h1>
            </div>
      
    </div>
  );
};

export default Stickylogo;
