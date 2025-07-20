import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div>
      <Header />
      <div className="px-6 py-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. About Black Silicon</h2>
        <p>
          Black Silicon is a technology company offering innovative solutions in the electronic payment
          ecosystem. Our services may include payment gateway integrations, software tools, dashboards,
          and other digital services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
        <p>
          You agree to use the Services only for lawful purposes and in a way that does not violate the
          rights of any third party or restrict their use and enjoyment. Prohibited uses include:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Engaging in fraudulent or misleading activities</li>
          <li>Violating any applicable laws or regulations</li>
          <li>Attempting to gain unauthorized access to our systems or data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
        <p>
          Some features may require you to register and maintain an account. You are responsible for
          safeguarding your login information and for any activity conducted under your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Privacy</h2>
        <p>
          Your use of the Services is also governed by our{" "}
          <Link to="/privacy-policy" className="text-blue-700 underline">
            Privacy Policy
          </Link>
          , which explains how we collect, use, and protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <p>
          All content, logos, designs, and technology provided by Black Silicon remain the intellectual
          property of Black Silicon. You may not copy, modify, or distribute any part of our Services
          without our written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          Our Services may link to or integrate with third-party services. We are not responsible for the
          content, policies, or practices of any third-party services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Services at any time if you
          violate these Terms or engage in behavior we deem harmful to our systems or users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
        <p>
          Black Silicon shall not be held liable for any indirect, incidental, special, or consequential
          damages arising from your use of our Services. Use of the Services is at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Changes will be posted on this page and your continued
          use of the Services constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Insert Country or Jurisdiction]. Any disputes arising
          out of these Terms shall be subject to the exclusive jurisdiction of the courts located in
          [Insert Location].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p>
          If you have any questions about these Terms, feel free to contact us:
          <br />
          <strong>Email:</strong> support@blacksilicon.com
          <br />
          <strong>Address:</strong> [Insert Company Address]
        </p>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
