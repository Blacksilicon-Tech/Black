// ExpertiseScroll.jsx
import { motion } from "framer-motion";
import { assets } from "../asset/assets";

const services = [
  {
    id: "01",
    title: "Payment Gateways",
    description: `Introducing NettGate, a comprehensive payment facilitation system that aggregates various payment schemes such as VISA, MasterCard, Verve, UnionPay, NIP, and BankTransfer.`,
    img: assets.Expertise,
  },
  {
    id: "02",
    title: "Payment & Collection Platforms",
    description: `Our suite of solutions aids both private and public institutions in revenue collection (IGR, school fees) and disbursement (grants, salaries).`,
    img: assets.Expertise2,
  },
  {
    id: "03",
    title: "Multimedia Mobile Messaging (3S) Systems",
    description: `This advanced platform drives high-end carrier-grade messaging for VAS aggregators, Mobile Network Operations, and value-added service products, supporting SMS, USSD, IVR, and more.`,
    img: assets.Expertise3,
  },
  {
    id: "04",
    title: "Payment Switching and Terminal Management Systems",
    description: `The "PayStreams" product powers payment processing, switch management, and terminal control, benefiting entities like Card Processors, Acquiring Banks, and Payment Aggregators.`,
    img: assets.Expertise4,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: () => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Expertise = () => {
  return (
    <div className="py-12 text-gray-300 px-4 md:px-16 bg-black">
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            className="border border-gray-800 p-6 rounded-lg shadow-md transition"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="relative mb-6 w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-3xl overflow-hidden">
              <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {service.id}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
