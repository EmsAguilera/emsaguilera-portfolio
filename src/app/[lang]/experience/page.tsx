import { getDictionary } from '@/dictionaries';
import { ExperienceClientPage } from '@/components/sections/ExperienceClientPage';

type ExperiencePageProps = {
  params: {
    lang: 'en' | 'es' | 'de';
  };
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  
  return <ExperienceClientPage content={dict.experience} lang={lang} />;
}