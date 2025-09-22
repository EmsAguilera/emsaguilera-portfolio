import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Dictionary } from '@/types/content';

type NavbarProps = {
  navContent: Dictionary['navbar'];
  lang: 'en' | 'es' | 'de';
};

export const Navbar = ({ navContent, lang }: NavbarProps) => {
  return (
    <nav className="bg-primary text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href={`/${lang}`} className="hover:opacity-80 transition-opacity">
          EAC
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href={`/${lang}/about`} className="hover:text-gray-300 transition-colors">{navContent.about}</Link>
          <Link href={`/${lang}/experience`} className="hover:text-gray-300 transition-colors">{navContent.experience}</Link>
          <Link href={`/${lang}/#gallery`} className="hover:text-gray-300 transition-colors">Gallery</Link>
          <Link href={`/${lang}/contact`} className="hover:text-gray-300 transition-colors">{navContent.contact}</Link>
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};