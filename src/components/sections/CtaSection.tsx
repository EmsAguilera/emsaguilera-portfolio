// src/components/sections/CtaSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Send } from 'lucide-react';
import type { Dictionary } from '@/types/content';
import { PdfModal } from '@/components/ui/PdfModal';

type CtaSectionProps = {
  content: Dictionary['cta_global'];
  lang: string;
};

export const CtaSection = ({ content, lang }: CtaSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        
        {/* Decorative Background Elements (Subtle Circles) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              {content.title}
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              {content.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* 1. Contact Button (Solid White) */}
              <Link
                href={`/${lang}/contact`}
                className="group flex items-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                {content.button_contact}
              </Link>

              {/* 2. CV Button (Transparent Outline) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <FileText size={20} />
                {content.button_cv}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Modal for the CV */}
      <PdfModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pdfUrl="/Emilio Aguilera - CV.pdf" 
        title="Emilio Aguilera - CV"
      />
    </>
  );
};