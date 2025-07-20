import Header from "../components/Header";
import Footer from "../components/Footer";
import { assets } from "../asset/assets";
import Expertise from "../components/Expertise";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const values = [
  {
    title: "IT Platform Deployment And Support",
    description:
      "We offer seamless IT platform deployment and ongoing support to ensure your systems operate at peak efficiency and security",
  },
  {
    title: "Research And Development",
    description:
      "Our commitment to innovation drives us to continously develop and refine advanced solutions to meet evolving industry demands.",
  },
  {
    title: "Training and Strategic Representation",
    description:
      "We provide training to empower your team with the knowledge needed to harness our solutions effectively. Our strategic representation services ensure your growth.",
  },
  {
    title: "Advisory Services",
    description:
      "Leverage our expertise to make informed decisions about your technological infrastructure, ensuring optimal performance and growth",
  },
  {
    title: "Compliance Advisory",
    description:
      "Stay compliant with industry regulations and standards through our expert guidance and support",
  },
];

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  return (
    <div>
      <Header />

      {/* ABOUT SECTION */}
      <motion.div
        className="py-8 text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeLeft}
      >
        <p className="text-sm text-orange-500 font-semibold mb-2 ml-4">About</p>
        <h3 className="text-5xl font-bold text-white mb-6 ml-4">Who We Are</h3>
        <p className="ml-4 mb-4 w-full md:w-7/12 lg:w-5/12">
          Black Silicon Limited was founded in May 2018 by an industry veteran with over two decades of experience in the electronic payment space.
        </p>
        <p className="ml-4 w-full md:w-7/12 lg:w-5/12">
          These professionals were meticulously trained to understand clients&apos; needs and resolve complex issues by providing cost-effective and innovative solutions.
        </p>
      </motion.div>

      {/* SCROLLING LOGOS */}
      <motion.div
        className="whitespace-nowrap py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
      >
        <ul className="flex gap-20 animate-scroll items-center">
          {[assets.access_solutions_logo, assets.alaje_logo, assets.etranzact, assets.interconnect, assets.netapps, assets.onwl, assets.resident_fintech].map((src, i) => (
            <li key={i}>
              <img src={src} alt={`Logo ${i}`} className="w-44" />
            </li>
          ))}
        </ul>
      </motion.div>

      <hr className="my-6 border-gray-700 max-w-7xl mx-auto" />

      {/* VISION + MISSION + PRESENCE */}
      <motion.div
        className="text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="flex flex-col items-center py-8">
          <p className="text-md text-orange-500 font-semibold mb-2 ml-4">Our Vision</p>
          <p className="ml-4 mb-4 w-full md:w-7/12 lg:w-8/12">
            To be the foremost global innovator, empowering businesses with advanced technology solutions and fostering a world where efficiency, security, and innovation converge.
          </p>
        </div>
        <div className="flex flex-col items-center py-8">
          <p className="text-md text-orange-500 font-semibold mb-2 ml-4">Our Mission</p>
          <p className="ml-4 mb-4 w-full md:w-7/12 lg:w-8/12">
            At Black Silicon Limited, our mission is to transform industries through cutting-edge technology solutions. We are committed to providing exceptional software products and business process automation services that drive operational excellence and growth for our clients.
          </p>
          <p className="ml-4 mb-4 w-full md:w-7/12 lg:w-8/12">
            Our dedicated team of skilled professionals, guided by our core values of quality, innovation, satisfaction, ethics, and security, strives to create a future where businesses thrive in the digital era.
          </p>
        </div>
        <div className="flex flex-col items-center py-8">
          <p className="text-md text-orange-500 font-semibold mb-2 ml-4">Our Presence</p>
          <p className="ml-4 mb-4 w-full md:w-7/12 lg:w-8/12">
            With a branch office in London, United Kingdom, Nigeria, Ghana and our head office in USA, Black Silicon operates on a global scale.
          </p>
        </div>
      </motion.div>

      <hr className="my-6 border-gray-700 max-w-7xl mx-auto" />

      {/* SERVICES */}
      <motion.div
        className="py-8 text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
      >
        <p className="text-md text-orange-500 font-semibold mb-2 ml-5">Our Services</p>
        <h1 className="text-7xl font-bold ml-5">WHAT WE DO</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-gray-200">
          {values.map((value, idx) => (
            <div key={idx} className="bg-[#101c1c] rounded-xl p-6 space-y-2 shadow-md">
              <h3 className="text-xl font-bold text-orange-500">{value.title}</h3>
              <p className="font-semibold leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="my-6 border-gray-700 max-w-7xl mx-auto" />

      {/* STATS */}
      <motion.div
  className="py-8 text-gray-300 flex flex-col lg:flex-row gap-16 lg:gap-96 items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeRight}
>
  <div>
    <p className="text-sm text-orange-500 font-semibold mb-2 ml-4">Stats</p>
    <h3 className="text-5xl font-bold text-white mb-6 ml-4 w-96">
      We ensure that all our services offer value.
    </h3>
  </div>

  <div className="grid grid-cols-2 gap-12">
    <div>
      <div className="flex items-center">
        <p className="text-5xl font-bold">
          <CountUp start={0} end={5} duration={2} enableScrollSpy scrollSpyDelay={200} />
        </p>
        <p className="text-3xl font-bold mt-3">+</p>
      </div>
      <span className="font-semibold text-xl">Total Years In The Business</span>
    </div>

    <div>
      <div className="flex items-center">
        <p className="text-5xl font-bold">
          <CountUp start={0} end={25} duration={2} enableScrollSpy scrollSpyDelay={200} />
        </p>
        <p className="text-3xl font-bold mt-3">+</p>
      </div>
      <span className="font-semibold text-xl">Unique Projects & Clients</span>
    </div>

    <div>
      <div className="flex items-center">
        <p className="text-5xl font-bold">
          <CountUp start={0} end={5} duration={2} enableScrollSpy scrollSpyDelay={200} />
        </p>
        <p className="text-3xl font-bold mt-3">+</p>
      </div>
      <span className="font-semibold text-xl">World Wide Total Branch</span>
    </div>
  </div>
</motion.div>


      {/* EXPERTISE */}
      <motion.div
        className="py-8 text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-sm text-orange-500 font-semibold mb-2 ml-4">Our Expertise</p>
        <h3 className="text-5xl font-bold text-white mb-6 ml-4">With Extensive Experience</h3>
        <Expertise />
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
