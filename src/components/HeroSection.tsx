import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <p className="groet text-xl sm:text-2xl text-orange-600 mb-4">Hey Jens & Karen 👋</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
          End-to-End Developer<br className="hidden sm:block"/>
          <span className="block sm:inline">met 16+ jaar business DNA.</span>
        </h1>
        <p className="sub text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
          Symfony + LAST stack? <br className="hidden sm:block" />
          <span className="text-orange-600 font-bold">Challenge accepted! 🚀</span>
        </p>
        {/* Value Proposition */}
        <div className="value-prop bg-gray-50 rounded-xl p-4 sm:p-6 mb-8 border-l-4 border-orange-600">
          <div className="space-y-3 text-gray-800">
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold mt-1">🔧</span>
              <span className="font-medium text-base sm:text-lg"><strong>16+ jaar IT foundation</strong> — van troubleshooting tot infrastructuur</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold mt-1">📞</span>
              <span className="font-medium text-base sm:text-lg"><strong>1000+ KMO sales calls</strong> — ik ken jullie klanten hun pijn</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-600 font-bold mt-1">💡</span>
              <span className="font-medium text-base sm:text-lg"><strong>= Developer die snapt</strong> waarom jullie bouwen, niet alleen hoe</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href="#klantverhaal" className="cta-case inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl text-base sm:text-lg font-bold min-h-[56px] justify-center">
            Bekijk wat ik voor Nicolas bouwde
            <ChevronRight size={24} />
          </a>
          <a href="#wat-ik-doe" className="cta-secondary inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:bg-gray-200 transition-all font-medium min-h-[56px] justify-center">
            Bekijk mijn skills
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
} 