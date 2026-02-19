import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SupportSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Support Inclusive Empowerment
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
            Your contribution strengthens structured programs that advance women's leadership, disability inclusion,
            education access, and sustainable livelihoods. All contributions are managed in compliance with Ghana's
            nonprofit regulatory framework.
          </p>

          <Link href="/donate">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-10 py-6">
              Support the Movement
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
