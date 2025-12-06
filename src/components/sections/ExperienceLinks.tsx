// src/components/sections/ExperienceLinks.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PdfModal } from '@/components/ui/PdfModal';
import type { ExperienceLink } from '@/types/content';

export const ExperienceLinks = ({ links }: { links: ExperienceLink[] }) => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleClick = (link: ExperienceLink) => {
    // If it's a PDF (ends in .pdf), open modal
    if (link.url.toLowerCase().endsWith('.pdf')) {
      setSelectedPdf(link.url);
    } else {
      // Otherwise, open normally
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {links.map((link, index) => (
          link.url.toLowerCase().endsWith('.pdf') ? (
             // Render as a button for PDFs
             <button
               key={index}
               onClick={() => handleClick(link)}
               className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                 link.variant === 'primary' 
                   ? 'bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary' 
                   : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
               }`}
             >
               {link.text}
             </button>
          ) : (
            // Render as a standard Link for websites/repos
            <Button 
               key={index} 
               href={link.url} 
               variant={link.variant}
            >
              {link.text}
            </Button>
          )
        ))}
      </div>

      <PdfModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf || ''}
        title="Resource Viewer"
      />
    </>
  );
};