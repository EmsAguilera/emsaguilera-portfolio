import { getDictionary } from '@/dictionaries';
import { ExperienceClientPage } from '@/components/sections/ExperienceClientPage';
import { PageProps } from '@/types/pages';

export default async function ExperiencePage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  
  return <ExperienceClientPage content={dict.experience} lang={lang} />;
}