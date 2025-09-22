import type { Dictionary } from '@/types/content';
import Image from 'next/image';
import { Button } from '../ui/Button';

type AboutSectionProps = {
  content: Dictionary['about'];
  lang: 'en' | 'es' | 'de';
  showButton?: boolean;
};

export const AboutSection = ({ content, lang, showButton = true }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={content.about_me.image.src}
              alt={content.about_me.image.alt}
              fill 
              className="object-cover" 
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-700 mb-2">
              {content.about_me.title}
            </h2>
            <p className="text-lg font-semibold text-gray-600 mb-4">
              {content.about_me.subheading}
            </p>
            {content.about_me.body.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {showButton && (
        <div className="text-center mt-16">
          <Button href={`/${lang}/about `}variant="primary">
            {content.about_me.button}
          </Button>
        </div>
        )}
      </div>
    </section>
  );
};