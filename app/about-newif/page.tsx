'use client';

export default function AboutNewif() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-8">About NEWIF</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Organization</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Network Empowerment for Women International Force (NEWIF) is a non-profit organization dedicated to transforming lives through education, vocational training, and empowerment initiatives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since our establishment, we have been committed to creating sustainable development in communities across Africa, with a particular focus on women, children, and persons with disabilities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our History</h2>
            <p className="text-gray-700 leading-relaxed">
              NEWIF was founded with a vision to create systemic change in disadvantaged communities. Over the years, we have grown into a respected organization working across multiple countries, serving thousands of beneficiaries annually.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Reach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We operate in multiple countries across Africa and continue to expand our impact globally. Our programs reach communities in urban, peri-urban, and rural settings.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>16+ regions across Ghana</li>
              <li>International partnerships in 5+ countries</li>
              <li>10,000+ direct beneficiaries annually</li>
              <li>50+ partner organizations</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
