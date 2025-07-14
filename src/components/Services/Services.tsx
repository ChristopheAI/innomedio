import React, { memo } from 'react';
import { SERVICE_ITEMS } from '../../constants/content';
import ServiceCard from './ServiceCard';

const Services: React.FC = memo(() => {
  return (
    <section id="wat-ik-doe" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Wat ik naar Innomedio meebreng:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {SERVICE_ITEMS.map((service) => (
            <ServiceCard key={service.nr} service={service} />
          ))}
        </div>
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl font-bold text-orange-900 mb-2">
            "Foundation + Inzicht + Development"
          </p>
          <p className="text-base sm:text-lg text-orange-800">
            De perfecte combinatie voor Innomedio.
          </p>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;