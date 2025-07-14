import React, { memo } from 'react';
import { TIMELINE_ITEMS } from '../../constants/content';
import TimelineItem from './TimelineItem';

const Timeline: React.FC = memo(() => {
  return (
    <section id="timeline" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-900">
          Van IT foundation naar development
        </h2>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {TIMELINE_ITEMS.map((item, index) => (
            <TimelineItem 
              key={item.period} 
              item={item} 
              isLast={index === TIMELINE_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;