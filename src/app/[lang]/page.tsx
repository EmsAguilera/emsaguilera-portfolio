import { getDictionary } from '@/dictionaries';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

type HomePageProps = {
  params: {
    lang: 'en' | 'de' | 'es';
  };
};

export default async function HomePage({ params }: HomePageProps) {
  const lang = params.lang;
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
    </div>
  );
}