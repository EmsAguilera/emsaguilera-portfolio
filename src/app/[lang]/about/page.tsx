import { getDictionary } from '@/dictionaries';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

type AboutPageProps = {
  params: {
    lang: 'en' | 'es' | 'de';
  };
};

export default async function AboutPage({ params }: AboutPageProps ) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <div>
      <AboutSection content={dict.about} showButton={false}/> 
    

      <FadeInOnScroll>
        <EducationSection content={dict.about.education_section} />
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <LogoCloud content={dict.about.logo_cloud} />
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <SkillsSection content={dict.about} />
      </FadeInOnScroll>

      {/* 4. Call to Action section */}
      <section className="py-20 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">{dict.about.cta_section.text}</h2>
        <Button href="/cv.pdf" variant="primary">
          {dict.about.cta_section.button}
        </Button> */}
      </section>
    </div>
  );
}