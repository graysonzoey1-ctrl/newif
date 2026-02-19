import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GetInvolvedSection() {
  return (
    <section className="bg-primary py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Be Part of the Movement
          </h2>

          <p className="text-base sm:text-lg text-gray-100 mb-10 leading-relaxed">
            NEWIF welcomes individuals, institutions, and partners committed to advancing disability-inclusive
            women's empowerment locally and globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link href="/membership">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6">
                Become a Member
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-6"
              >
                Volunteer
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6">
                Partner With Us
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-6"
              >
                Support the Movement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
