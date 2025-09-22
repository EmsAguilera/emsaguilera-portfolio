import Link from 'next/link';
import type { Dictionary } from '@/types/content';
import { Button } from '../ui/Button';
import { ArrowDown } from 'lucide-react';

type HeroSectionProps = {
  content: Dictionary['hero'];
  lang: 'en' | 'es' | 'de';
}

export const HeroSection = ({ content, lang }: HeroSectionProps) => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative text-center p-12 md:p-16 bg-gray-500/10 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {content.greeting}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          {content.subtitle}
        </p>

        <div className="flex justify-center items-center gap-4">
          <Button href={`/${lang}/contact`} variant="primary">
            {content.button2}
          </Button>
          <Button href={`/${lang}/experience`} variant="secondary">
            {content.button}
          </Button>
        </div>
      </div>

      <Link
        href={`/${lang}/#about`}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-label="Scroll to next section"
      >
        <div className="w-13 h-13 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce hover:bg-white/10 transition-colors">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </Link>
    </section>
  );
};