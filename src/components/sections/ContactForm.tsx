'use client';

import { useState } from 'react';
import type { Dictionary } from '@/types/content';

type ContactFormProps = {
  content: Dictionary['contact']['form'];
};

export const ContactForm = ({ content }: ContactFormProps) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(content.status.sending);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus(content.status.success);
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setStatus(content.status.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-semibold">{content.name}</label>
        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
      </div>
      <div>
        <label htmlFor="surname" className="font-semibold">{content.surname}</label>
        <input type="text" id="surname" name="surname" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">{content.email}</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">{content.message}</label>
        <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-opacity">
          {content.submit}
        </button>
        {status && <p className="text-sm">{status}</p>}
      </div>
    </form>
  );
};