import { getDictionary } from '@/dictionaries';
import { ExperienceClientPage } from '@/components/sections/ExperienceClientPage';


export default async function ExperiencePage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  
  return <ExperienceClientPage content={dict.experience} lang={lang} />;
}