// src/components/ui/PdfModal.tsx
'use client';

import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

type PdfModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
};

export const PdfModal = ({ isOpen, onClose, pdfUrl, title }: PdfModalProps) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop (Dark overlay) - Clicking it closes the modal */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 truncate">{title || 'Document Viewer'}</h3>
          <div className="flex items-center gap-2">
            {/* Fallback button: Open in new tab if the embedded viewer fails */}
            {/* <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-primary transition-colors"
              title="Open in new tab"
            >
              <ExternalLink size={20} />
            </a> */}
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* PDF Viewer (Iframe) */}
        <div className="flex-1 bg-gray-50 relative">
          <iframe 
            src={`${pdfUrl}#toolbar=0`} 
            className="w-full h-full"
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
};