'use client';

export default function Accessibility() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12">Accessibility Statement</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              NEWIF is committed to making our website accessible to everyone, including people with disabilities. We strive to provide an inclusive digital experience and comply with WCAG 2.1 accessibility guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Accessibility Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-accent mr-3">✓</span> Keyboard navigation support</li>
              <li className="flex items-start"><span className="text-accent mr-3">✓</span> Screen reader compatible</li>
              <li className="flex items-start"><span className="text-accent mr-3">✓</span> Alt text for images</li>
              <li className="flex items-start"><span className="text-accent mr-3">✓</span> Clear heading structure</li>
              <li className="flex items-start"><span className="text-accent mr-3">✓</span> Color contrast compliance</li>
              <li className="flex items-start"><span className="text-accent mr-3">✓</span> Adjustable text size</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Report Accessibility Issues</h2>
            <p className="text-gray-700 mb-4">
              If you encounter any accessibility barriers, please let us know so we can make improvements.
            </p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Email:</span> accessibility@newif.org</p>
            <p className="text-gray-700"><span className="font-bold">Phone:</span> +233 5535 74122</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Continuous Improvement</h2>
            <p className="text-gray-700">
              We continuously work to improve our website accessibility and welcome feedback from users. Our accessibility commitment extends beyond our website to all our programs and services.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
