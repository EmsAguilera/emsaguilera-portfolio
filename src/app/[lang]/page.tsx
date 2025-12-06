import { getDictionary } from '@/dictionaries';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { CtaSection } from '@/components/sections/CtaSection';

type HomePageProps = {
  params: Promise<{
    lang: 'en' | 'de' | 'es';
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <HeroSection content={dict.hero} lang={lang}/>
      <FadeInOnScroll>
        <AboutSection content={dict.about} lang={lang}/>
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <TimelineSection content={dict.timeline} />
      </FadeInOnScroll>
    
      <FadeInOnScroll>
        <GallerySection content={dict.gallery} />
      </FadeInOnScroll>
      
      <CtaSection content={dict.cta_global} lang={lang} />
    </div>
  );
}