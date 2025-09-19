import { getDictionary } from '@/dictionaries';
import { ContactForm } from '@/components/sections/ContactForm';
import { Instagram, Youtube, Linkedin, Github } from 'lucide-react';

const socials = [
  { name: "instagram", url: "https://www.instagram.com/", icon: <Instagram /> },
  { name: "youtube", url: "https://www.youtube.com/", icon: <Youtube /> },
  { name: "linkedin", url: "https://www.linkedin.com/", icon: <Linkedin /> },
  { name: "github", url: "https://github.com/", icon: <Github /> },
];

type ContactPageProps = {
  params: {
    lang: 'en' | 'de' | 'es';
  };
};

export default async function ContactPage({ params: { lang } }: ContactPageProps) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto max-w-4xl py-20 md:py-32 px-4">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-primary">{dict.contact.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{dict.contact.subheading}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        <ContactForm content={dict.contact.form} />

        <div className="mt-8 md:mt-0">
          <h3 className="text-2xl font-bold mb-4">{dict.contact.social_title}</h3>
          <div className="flex flex-col gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <span className="text-primary">{social.icon}</span>
                <span className="font-semibold capitalize">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}