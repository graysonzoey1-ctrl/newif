'use client';

export default function TermsConditions() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Intellectual Property Rights</h2>
            <p className="text-gray-700">
              All content on this website is the intellectual property of NEWIF. Reproduction, distribution, or transmission without permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Limitation of Liability</h2>
            <p className="text-gray-700">
              NEWIF shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Donations</h2>
            <p className="text-gray-700">
              All donations are voluntary and non-refundable. We will use donations according to our mission and programs. Tax receipts are provided where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Amendments</h2>
            <p className="text-gray-700">
              NEWIF reserves the right to amend these terms and conditions at any time. Continued use of the website constitutes acceptance of amendments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
            <p className="text-gray-700">
              These terms and conditions are governed by the laws of Ghana.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
