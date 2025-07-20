import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Scroll from "./components/Scroll"; // <-- Import

const App = () => {
  return (
    <div className="bg-gray-950">
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </div>
  );
};

export default App;
