import React, { memo } from 'react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ service }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="text-3xl sm:text-4xl font-bold text-orange-200 mb-3 sm:mb-4">{service.nr}</div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
      <div className="text-sm sm:text-base text-gray-700 whitespace-pre-line">{service.pitch}</div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;