'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  headline: string;
  subheadline: string;
  buttons: Array<{
    label: string;
    href: string;
    variant: 'gold' | 'navy' | 'white-outline';
  }>;
  backgroundImage?: string;
  overlayColor?: string;
  textColor?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: 'Welcome to NEWIF',
    subheadline: 'Inclusive empowerment in action — advancing women and disability inclusion globally.',
    buttons: [
      { label: 'Learn About NEWIF', href: '/who-we-are', variant: 'white-outline' },
      { label: 'Get Involved', href: '/get-involved', variant: 'white-outline' },
    ],
    backgroundImage: '/slide1-women-empowerment.jpg',
    overlayColor: 'from-primary/80 via-primary/75 to-primary/80',
    textColor: 'text-white',
  },
  {
    id: 2,
    headline: 'Disability Inclusion',
    subheadline: 'Access, dignity, and economic participation for women and persons with disabilities.',
    buttons: [
      { label: 'See Our Impact', href: '/impact-statistics', variant: 'white-outline' },
    ],
    backgroundImage: '/slide2-disability-inclusion.jpg',
    overlayColor: 'from-[#E91E63]/75 via-[#E91E63]/70 to-[#E91E63]/75',
    textColor: 'text-white',
  },
  {
    id: 3,
    headline: 'Power in Action',
    subheadline: 'Structured programs transforming advocacy into measurable community impact.',
    buttons: [
      { label: 'Explore Our Work', href: '/programs', variant: 'navy' },
    ],
    backgroundImage: '/slide3-community-impact.jpg',
    overlayColor: 'from-[#D4AF37]/70 via-[#D4AF37]/65 to-[#D4AF37]/70',
    textColor: 'text-gray-900',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 1500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 1500);
  };

  const slide = slides[currentSlide];

  const getButtonClass = (variant: string) => {
    switch (variant) {
      case 'gold':
        return 'bg-accent hover:bg-accent/90 text-primary font-bold';
      case 'navy':
        return 'bg-primary hover:bg-primary/90 text-white font-bold';
      case 'white-outline':
        return 'bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold';
      default:
        return '';
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Entire Slide Container - transitions as a complete unit */}
      <div
        className={`absolute inset-0 transition-opacity ease-in-out ${
          isTransitioning ? 'opacity-0 duration-1500' : 'opacity-100 duration-1500'
        }`}
      >
        {/* Background Image */}
        {slide.backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm"
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
            }}
          />
        )}
        
        {/* Colored Overlay */}
        {slide.overlayColor && (
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlayColor}`} />
        )}

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="max-w-3xl w-full text-center">
            {/* Headline */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg ${
              slide.textColor || 'text-white'
            }`}>
              {slide.headline}
            </h1>

            {/* Subheadline */}
            <p className={`text-xl sm:text-2xl md:text-3xl mb-12 leading-relaxed drop-shadow-md ${
              slide.textColor || 'text-white'
            }`}>
              {slide.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap">
              {slide.buttons.map((button) => (
                <Link key={button.label} href={button.href}>
                  <Button
                    size="lg"
                    className={`text-lg px-12 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg ${getButtonClass(
                      button.variant
                    )}`}
                  >
                    {button.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white hover:text-accent transition-colors hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white hover:text-accent transition-colors hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
