import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="bg-black text-gray-300">
      <Header />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-400">Last Updated: July 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Introduction
          </h2>
          <p className="leading-relaxed">
            At Black Silicon Limited, we value your privacy and are committed
            to protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your data when you use our
            services, websites, and applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Information We Collect
          </h2>
          <p className="leading-relaxed mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal details such as name, email, and contact number.</li>
            <li>
              Payment information (processed securely through third-party
              gateways).
            </li>
            <li>Technical data such as IP address, browser type, and device information.</li>
            <li>
              Usage data, including pages visited, time spent on our platform,
              and interactions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            How We Use Your Information
          </h2>
          <p className="leading-relaxed mb-2">
            Your information is used to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Process payments and manage accounts.</li>
            <li>Send important notifications, updates, and promotional offers.</li>
            <li>Ensure platform security and fraud prevention.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Data Protection
          </h2>
          <p className="leading-relaxed">
            We implement advanced security measures, including encryption and
            secure servers, to protect your personal information from
            unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Third-Party Sharing
          </h2>
          <p className="leading-relaxed">
            We do not sell your personal data. However, we may share
            information with trusted third parties who assist us in operating
            our services, provided they adhere to strict data protection
            policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Your Rights
          </h2>
          <p className="leading-relaxed">
            You have the right to access, correct, or delete your personal data.
            You may also opt out of receiving marketing communications by
            contacting us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions regarding this Privacy Policy or how your
            data is handled, please contact us at:
            <br />
            <span className="text-white font-semibold">
              privacy@blacksilicon.com
            </span>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
