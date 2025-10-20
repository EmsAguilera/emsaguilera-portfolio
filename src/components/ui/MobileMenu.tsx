// components/ui/MobileMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import type { Dictionary } from '@/types/content';

type MobileMenuProps = {
  navContent: Dictionary['navbar'];
  lang: 'en' | 'es' | 'de';
};

export const MobileMenu = ({ navContent, lang }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // A helper function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* The Hamburger/X Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 relative p-2"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* The Fullscreen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8">
          <Link
            href={`/${lang}/about`}
            className="text-white text-3xl font-bold"
            onClick={handleLinkClick}
          >
            {navContent.about}
          </Link>
          <Link
            href={`/${lang}/experience`}
            className="text-white text-3xl font-bold"
            onClick={handleLinkClick}
          >
            {navContent.experience}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="text-white text-3xl font-bold"
            onClick={handleLinkClick}
          >
            {navContent.contact}
          </Link>
        </div>
      )}
    </div>
  );
};