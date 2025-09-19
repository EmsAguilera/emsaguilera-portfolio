'use client';

import { useState, useMemo } from 'react';
import type { Dictionary, ExperienceItem } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';

const ExperienceCard = ({ item, lang, buttonText }: { item: ExperienceItem, lang: string, buttonText: string }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-56 w-full">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-primary">{item.company}</p>
        <h3 className="text-xl font-bold mt-1">{item.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{item.date}</p>
        <p className="text-gray-700 mt-4">{item.summary}</p>
        <Link href={`/${lang}/experience/${item.slug}`} className="inline-block mt-4 text-primary font-bold hover:underline">
          {buttonText} &rarr;
        </Link>
      </div>
    </div>
  );

export const ExperienceClientPage = ({ content, lang }: { content: Dictionary['experience'], lang: string }) => {
    const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return content.items;
    }
    return content.items.filter(
      (item) => item.category.toLowerCase() === activeFilter
    );
  }, [activeFilter, content.items]);

  return (
    <div className="container mx-auto px-4 py-20 md:py-32">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">{content.title}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{content.subheading}</p>
      </div>

      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {content.filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter.toLowerCase())}
            className={`px-5 py-2 rounded-full font-semibold transition-colors text-sm ${
              activeFilter === filter.toLowerCase()
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <ExperienceCard key={item.slug} item={item} lang={lang} buttonText={content.view_details_button} />
        ))}
      </div>
    </div>
  );
}