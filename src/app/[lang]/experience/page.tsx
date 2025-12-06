import { getDictionary } from '@/dictionaries';
import { ExperienceClientPage } from '@/components/sections/ExperienceClientPage';
import { PageProps } from '@/types/pages';
import { CtaSection } from '@/components/sections/CtaSection';


export default async function ExperiencePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <div>
      <ExperienceClientPage content={dict.experience} lang={lang} /> 
      <CtaSection content={dict.cta_global} lang={lang} />;
    </div>
  );
}