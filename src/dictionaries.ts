import 'server-only';
import type { Dictionary } from '@/types/content'; // Import our central type

const dictionaries = {
  en: () => import('@/content/en.json').then((module) => module.default),
  es: () => import('@/content/es.json').then((module) => module.default),
  de: () => import('@/content/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'de' | 'es'): Promise<Dictionary> => {
  return dictionaries[locale]();
};