'use client';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
            <p className="text-gray-700">
              NEWIF collects personal information necessary to provide our services and programs. This may include names, contact information, and relevant background information for program participation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• To deliver our programs and services</li>
              <li>• To communicate with you about our activities</li>
              <li>• To improve our services based on feedback</li>
              <li>• To maintain organizational records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Data Protection</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or request deletion of your personal information. Contact us at privacy@newif.org for any requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy, please contact us at privacy@newif.org
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
