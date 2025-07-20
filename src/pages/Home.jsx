import Header from "../components/Header";
import Footer from "../components/Footer";
import Stickylogo from "../components/Stickylogo";
import { assets } from "../asset/assets";
import { FaLaptopCode, FaServer, FaLock, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Stickylogo />
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={assets.Network}
          alt="Abstract network technology background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Innovations Through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 font-medium">
            Welcome to <span className="text-orange-500 font-semibold">Black Silicon</span>, your premier partner in information technology solutions.
          </p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        className="py-20 px-6 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 mb-6">
            Founded in 2018, Black Silicon is a leader in providing enterprise-grade IT solutions...
          </p>
          <motion.img
            src="/images/about-illustration.svg"
            alt="Tech illustration"
            className="w-3/4 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        className="py-20 px-6 bg-gray-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[FaLaptopCode, FaServer, FaLock, FaCloud].map((Icon, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition"
                custom={i}
                variants={fadeInUp}
              >
                <Icon className="text-4xl text-yellow-500 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">
                  {["Software Development", "Cloud Infrastructure", "Cybersecurity", "DevOps & Automation"][i]}
                </h4>
                <p className="text-gray-400 text-sm">
                  {
                    [
                      "Custom applications tailored to your business needs...",
                      "Deploy and scale your systems with AWS, Azure, or GCP...",
                      "Protect your data and systems with robust security...",
                      "Optimize deployment with CI/CD pipelines..."
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        className="py-20 px-6 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Black Silicon?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.img
              src="/images/why-choose-us.svg"
              alt="Team collaboration illustration"
              className="w-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="space-y-6">
              {["Experienced Team", "Reliable Support", "Quality Assurance"].map((title, i) => (
                <motion.div key={i} custom={i} variants={fadeInUp}>
                  <h4 className="text-xl font-semibold text-yellow-500">✔ {title}</h4>
                  <p className="text-gray-400 text-sm">
                    {
                      [
                        "Our engineers bring decades of expertise from industries across the globe.",
                        "24/7 support services for mission-critical systems and enterprise apps.",
                        "Each solution is rigorously tested to ensure top performance and reliability."
                      ][i]
                    }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className="py-20 px-6 bg-gray-950 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              quote:
                "Black Silicon completely transformed our legacy systems into a modern cloud-based infrastructure. Highly recommended!",
              name: "Sarah Johnson, CTO of FinLink",
            },
            {
              quote:
                "The team delivered on time and exceeded our expectations with the design and functionality of our new app.",
              name: "James Okoro, Founder of HypeTech",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl"
              custom={i}
              variants={fadeInUp}
            >
              <p className="text-gray-300 italic">“{item.quote}”</p>
              <h4 className="text-yellow-500 mt-4 font-semibold">— {item.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TEAM SECTION */}
<motion.section
  className="py-20 px-6 bg-gray-900"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          name: "Jane Doe",
          role: "Chief Technology Officer",
          img: assets.John
        },
        {
          name: "Michael Smith",
          role: "Lead Backend Engineer",
          img: assets.John
        },
        {
          name: "Emily Johnson",
          role: "UX/UI Designer",
          img: assets.John

        },
        {
          name: "David Brown",
          role: "DevOps Engineer",
          img: assets.John
        },
      ].map((member, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 p-6 rounded-xl text-center"
          custom={i}
          variants={fadeInUp}
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          />
          <h4 className="text-lg font-semibold text-white">{member.name}</h4>
          <p className="text-gray-400 text-sm">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
