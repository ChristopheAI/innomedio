import React, { memo } from 'react';
import { BENEFIT_ITEMS } from '../../constants/content';
import BenefitItem from './BenefitItem';

const Benefits: React.FC = memo(() => {
  return (
    <section id="waarom-ik" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Why me?
        </h2>
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {BENEFIT_ITEMS.map((benefit) => (
            <BenefitItem key={benefit.text} benefit={benefit} />
          ))}
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">
            "End-to-end developer met KMO DNA —<br />
            ik begrijp jullie business én jullie klanten."
          </p>
        </div>
      </div>
    </section>
  );
});

Benefits.displayName = 'Benefits';

export default Benefits;