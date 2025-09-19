import type { Dictionary, TimelineEvent } from '@/types/content';
import { Briefcase, GraduationCap, HandHeart, PartyPopper } from 'lucide-react';
import { FadeInOnScroll } from '../ui/FadeInOnScroll';

const categoryIcons = {
  education: <GraduationCap />,
  work: <Briefcase />,
  volunteer: <HandHeart />,
  milestone: <PartyPopper />,
};

const TimelineItem = ({ event, index }: { event: TimelineEvent, index: number }) => {
  const isOdd = index % 2 !== 0; 

  return (
    <FadeInOnScroll>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 items-center">
        {isOdd ? (
          <div></div> 
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">{event.date}</p>
            <h3 className="font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        )}

        <div className="flex flex-col items-center h-full">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            {categoryIcons[event.category] || <Briefcase />}
          </div>
          <div className="w-1 bg-gray-200 h-full"></div>
        </div>

        {isOdd ? (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">{event.date}</p>
            <h3 className="font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ) : (
          <div></div> 
        )}
      </div>
    </FadeInOnScroll>
  );
};

export const TimelineSection = ({ content }: { content: Dictionary['timeline'] }) => {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{content.title}</h2>
        <div className="relative">
          {content.events.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};