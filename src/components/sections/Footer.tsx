import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Github } from 'lucide-react';
import type { Dictionary } from '@/types/content';

const socialIcons = {
  instagram: <Instagram size={24} />,
  youtube: <Youtube size={24} />,
  linkedin: <Linkedin size={24} />,
  github: <Github size={24} />,
};

type FooterProps = {
  content: Dictionary['footer'];
  lang: 'en' | 'es' | 'de';
};

export const Footer = ({ content, lang }: FooterProps) => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col gap-4">
            <Link href={`/${lang}/`} className="font-bold text-2xl">
              {/* EA Logo Component/Image would go here */}
              EA
            </Link>
            <div className="flex gap-4">
              {content.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                  aria-label={social.name}
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
          </div>

          {content.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <Link href={`/${lang}` + link.url} className="text-gray-300 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4 text-center mt-10">
        <p>© {new Date().getFullYear()} Emilio Aguilera Carlin. All Rights Reserved.</p>
      </div>
    </footer>
  );
};