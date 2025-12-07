// src/app/[lang]/experience/[slug]/page.tsx
import { getDictionary } from '@/dictionaries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ExperienceLinks } from '@/components/sections/ExperienceLinks';
import { ExperienceDetailPageProps } from '@/types/pages';

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);

  const item = dict.experience.items.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-20 md:py-32 px-4">
      {/* 1. Back Button */}
      <Link
        href={`/${lang}/experience`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold mb-8 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        {dict.experience.back_button}
      </Link>

      {/* 2. Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {item.category}
          </span>
          <span className="text-gray-500 text-sm font-medium">{item.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">{item.title}</h1>
        <p className="text-xl text-gray-600 mt-2 font-medium">{item.company}</p>
      </div>

      {/* 3. Main Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* 4. Main Content (The "Blog" part) */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
        {/* If you want to support line breaks in your JSON text, you can split by \n */}
        {item.details.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* 5. Action Buttons (Links/Certificates) */}
      {item.links && item.links.length > 0 && (
        <div className="mb-16 border-t pt-8 border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Resources & Links</h3>
          <ExperienceLinks links={item.links} />
        </div>
      )}

      {/* 6. Extra Image Gallery */}
      {item.gallery && item.gallery.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Gallery</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {item.gallery.map((img, index) => (
              <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}