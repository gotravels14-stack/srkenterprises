"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function PrivacyPage() {
  const lastUpdated = "June 30, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Privacy Policy</h1>
            <p className="text-xs sm:text-sm text-gray-300">Last updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content body */}
        <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-gray-150 rounded-[2.5rem] my-12 shadow-sm">
          <div className="space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">1. Introduction</h2>
              <p>
                Welcome to the SKR Enterprises corporate website. We respect your privacy and are committed to protecting any personal information you provide when using our website, filling out quote request forms, or applying for job openings. This Privacy Policy details our practices concerning data collection and usage.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">2. Information We Collect</h2>
              <p>
                We only collect information that you explicitly submit to us. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact and Proposal Forms:</strong> Your full name, email address, telephone number, company affiliation, service of interest, and message content.
                </li>
                <li>
                  <strong>Career Applications:</strong> Name, phone number, email address, job role, years of experience, cover note details, and resume files uploaded.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">3. How We Use Your Data</h2>
              <p>
                The information collected is used solely to execute business communications:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To analyze project scopes, construct estimates, and respond to your quote requests.</li>
                <li>To evaluate candidates for open technical and mechanical job roles.</li>
                <li>To establish direct voice or WhatsApp communications regarding ongoing or future contracts.</li>
              </ul>
              <p>
                We do not sell, distribute, or lease your personal information to third parties under any circumstances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">4. Data Storage and Security</h2>
              <p>
                All data collected via our website forms is processed securely. We implement standard physical, electronic, and managerial procedures to safeguard and secure information online.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">5. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, or if you would like to request details of your data or request deletion, please contact us:
              </p>
              <p className="font-bold text-primary mt-2">
                SKR Enterprises<br />
                Haldi Rampur Kathar Baari, Belthra Road, Ballia, Uttar Pradesh – 221715<br />
                Proprietor: Mr. Sanjay Kumar Rajbhar<br />
                Email: pamjavi1981@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
