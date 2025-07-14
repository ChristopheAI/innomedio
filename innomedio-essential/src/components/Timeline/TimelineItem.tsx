import React, { memo } from 'react';
import { TimelineItem as TimelineItemType } from '../../types';

interface TimelineItemProps {
  item: TimelineItemType;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = memo(({ item, isLast }) => {
  return (
    <div className="relative flex gap-4 sm:gap-6 items-start">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 sm:left-6 top-10 sm:top-12 bottom-0 w-0.5 bg-orange-200"></div>
      )}
      
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center text-white z-10">
        {React.cloneElement(item.icon, { size: 16, className: "sm:w-5 sm:h-5" })}
      </div>
      
      {/* Content */}
      <div className="flex-grow bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="text-sm text-orange-600 font-semibold mb-1">{item.period}</div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.role}</h3>
        <p className="text-sm sm:text-base text-gray-700">{item.impact}</p>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

export default TimelineItem;