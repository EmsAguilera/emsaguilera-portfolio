import type { Dictionary } from '@/types/content';
import { Button } from '@/components/ui/Button';

type EducationSectionProps = {
  content: Dictionary['about']['education_section'];
};

export const EducationSection = ({ content }: EducationSectionProps) => {
  return (
    <section id="education" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">

          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-primary sticky top-24">
              {content.title}
            </h2>
          </div>

          <div className="md:col-span-2 space-y-12">
            {content.entries.map((entry) => (
              <div key={entry.degree} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-500 mb-1">{entry.date}</p>
                <h3 className="text-2xl font-bold">{entry.degree}</h3>
                <p className="text-lg font-semibold text-gray-700">{entry.institution}</p>
                <p className="text-gray-600 mt-4">{entry.description}</p>

                {entry.certificates && entry.certificates.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {entry.certificates.map((cert) => (
                      <Button key={cert.text} href={cert.url} variant="secondary">
                        {cert.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};