
export interface PageProps {
  params: Promise<{
    lang: 'en' | 'de' | 'es';
  }>;
};

export interface ExperienceDetailPageProps {
  params: Promise<{
    lang: 'en' | 'es' | 'de';
    slug: string;
  }>;
};