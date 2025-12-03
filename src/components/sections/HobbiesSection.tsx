// src/components/sections/HobbiesSection.tsx
import Image from 'next/image';
import type { Dictionary } from '@/types/content';

type HobbiesSectionProps = {
  content: Dictionary['about']['hobbies_section'];
};

export const HobbiesSection = ({ content }: HobbiesSectionProps) => {
  return (
    <section id="hobbies" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.intro}
          </p>
        </div>

        <div className="space-y-20">
          {content.hobbies.map((hobby, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={hobby.title}
                // We use backticks ` ` to mix strings and variables
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  isEven ? "md:grid-flow-col" : ""
                }`}
              >
                {/* Image Column */}
                <div
                  className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={hobby.image.src}
                    alt={hobby.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Text Column */}
                <div
                  className={`${
                    isEven ? "md:pl-12" : "md:pr-12"
                  } ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {hobby.title}
                  </h3>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};