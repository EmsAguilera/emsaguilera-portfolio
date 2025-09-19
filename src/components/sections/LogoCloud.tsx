import type { Dictionary } from '@/types/content';
import Image from 'next/image';

type LogoCloudProps = {
  content: Dictionary['about']['logo_cloud'];
};

export const LogoCloud = ({ content }: LogoCloudProps) => {

  const extendedLogos = [...content.logos, ...content.logos];

  return (
    <section id="logo-cloud" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-500 mb-12">
          {content.title}
        </h2>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-[scroll_40s_linear_infinite]">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="relative h-12 w-48 mx-6 flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};