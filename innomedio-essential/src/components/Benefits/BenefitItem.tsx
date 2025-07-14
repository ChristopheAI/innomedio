import React, { memo } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BenefitItem as BenefitItemType } from '../../types';

interface BenefitItemProps {
  benefit: BenefitItemType;
}

const BenefitItem: React.FC<BenefitItemProps> = memo(({ benefit }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-orange-50 transition-colors">
      <CheckCircle2 className="text-orange-600 flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
      <p className="text-sm sm:text-base md:text-lg text-gray-700">{benefit.text}</p>
    </div>
  );
});

BenefitItem.displayName = 'BenefitItem';

export default BenefitItem;