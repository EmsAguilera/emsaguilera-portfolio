'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLangFromPath = (path: string) => {
    return path.split('/')[1] || 'en';
  };

  const currentLang = getLangFromPath(pathname).toUpperCase();

  const getPathWithoutLang = (currentPath: string) => {
    const segments = currentPath.split('/');
    segments.splice(1, 1);
    return segments.join('/') || '/';
  };

  const pathWithoutLang = getPathWithoutLang(pathname);

  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-white/50 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors"
      >
        <Globe size={16} />
        <span>{currentLang}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-full bg-indigo-700 border border-white/50 rounded-md shadow-lg"
          onClick={() => setIsOpen(false)} 
        >
          {locales.map(({ code, label }) => (
            <Link
              key={code}
              href={`/${code}${pathWithoutLang}`}
              className="block w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};