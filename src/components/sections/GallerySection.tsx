'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Dictionary } from '@/types/content';

type GallerySectionProps = {
  content: Dictionary['gallery'];
};

export const GallerySection = ({ content }: GallerySectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{content.title}</h2>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 scroll-smooth scrollbar-hide"
          >
            {content.images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3" 
              >
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(-500)} 
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll(500)} 
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};