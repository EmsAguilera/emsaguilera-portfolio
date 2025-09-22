import { getDictionary } from '@/dictionaries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ExperienceDetailPageProps } from '@/types/pages';

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps ) {
  const {lang, slug} = params;
  const dict = await getDictionary(lang);

  const item = dict.experience.items.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-20 md:py-32 px-4">
      <Link
        href={`/${lang}/experience`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold mb-8 transition-colors"
      >
        <ArrowLeft size={18} />
        {dict.experience.back_button}
      </Link>

      <div className="mb-8">
        <p className="text-lg font-semibold text-primary">{item.company}</p>
        <h1 className="text-5xl font-extrabold mt-2">{item.title}</h1>
        <p className="text-gray-500 mt-4">{item.date}</p>
      </div>

      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>

      <div className="prose max-w-none">
        <p>{item.details}</p>
      </div>
    </div>
  );
}