import { getDictionary } from '@/dictionaries';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { PageProps } from '@/types/pages';

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <AboutSection content={dict.about} lang={lang} showButton={false}/> 
    

      <FadeInOnScroll>
        <EducationSection content={dict.about.education_section} />
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <LogoCloud content={dict.about.logo_cloud} />
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <SkillsSection content={dict.about} />
      </FadeInOnScroll>

      <section className="py-20 text-center">
        
      </section>
    </div>
  );
}