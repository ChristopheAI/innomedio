import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MlCoatingStory from './pages/MlCoatingStoryNew';
import Navigation from './components/Navigation/Navigation';
import Timeline from './components/Timeline/Timeline';
import Services from './components/Services/Services';
import Benefits from './components/Benefits/Benefits';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { useScrollHeader } from './hooks/useScrollHeader';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollHeader();

  useDocumentMeta(
    "Christophe — End-to-End Developer met 16+ jaar Business Foundation | Voor Innomedio",
    "Hey Jens & Karen, ik ben een end-to-end developer die de volledige digitale reis begrijpt. 16+ jaar business ervaring, klaar om Symfony te leren. Bewijs? Nicolas' webapp beheert €6 000/dag."
  );

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50">
          <Navigation 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            scrolled={scrolled}
          />
          
          <HeroSection />
          
          {/* Korte Intro */}
          <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-8">
                {/* Text Content */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Hey, ik ben <strong className="text-orange-600">Christophe</strong>.
                    </p>
                    
                    <div>
                      <p className="mb-2"><strong className="text-gray-900">16+ jaar business DNA</strong> opgebouwd:</p>
                      <ul className="list-none space-y-1 ml-4">
                        <li>• <strong className="text-gray-900">Fixzit</strong> → IT-foundation voor KMO's</li>
                        <li>• <strong className="text-gray-900">Business developer</strong> → 1000+ KMO calls</li>
                      </ul>
                    </div>

                    <p>Nu klaar voor development bij Innomedio.</p>

                    <p><strong className="text-gray-900">Waarom?</strong> Ik ken de basis waar jullie oplossingen op bouwen.</p>

                    <p>
                      <strong className="text-gray-900">Foundation + inzicht + development?</strong><br />
                      Dat is een krachtige combinatie.
                    </p>

                    <p>Met <strong className="text-gray-900">Symfony en jullie LAST stack</strong> bouw ik voort op wat ik al ken.</p>
                  </div>
                </div>
                
                {/* Photo */}
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-100 to-orange-200">
                        <img 
                          src="/Christophe.jpg" 
                          alt="Christophe - End-to-End Developer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Optional: Small badge/accent */}
                      <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg">
                        <span className="text-lg font-bold">👋</span>
                      </div>
                    </div>
                    
                    {/* Quote directly connected to photo */}
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                      <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                      <div className="text-sm sm:text-base font-medium text-gray-800 italic leading-relaxed space-y-2">
                        <p>"Ik beloof jullie geen zakken vol goud.</p>
                        <p><strong className="text-gray-900">Wel websites en webapps waar jullie trots op kunnen zijn."</strong></p>
                      </div>
                      <p className="text-right text-xs text-gray-500 mt-3">— Christophe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <Timeline />
          <Services />
          
          {/* ML Coating Case Teaser */}
          <section id="klantverhaal" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">De ML Coating Case</h2>
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
                <div className="mb-8">
                  <div className="inline-block bg-green-100 rounded-full px-6 py-3 mb-6">
                    <p className="text-green-900 font-semibold">Van 0 naar €6.000/dag in 3 weken</p>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="text-left max-w-3xl mx-auto">
                      <p className="text-lg sm:text-xl text-gray-700 mb-4">
                        <strong>Nicolas startte zijn coating business</strong> en vroeg:
                      </p>
                      <p className="text-lg sm:text-xl text-gray-600 italic mb-6 pl-4 border-l-3 border-gray-300">
                        "Bestaat er software om mijn voorraad te beheren?"
                      </p>
                      
                      <div className="space-y-3 text-base sm:text-lg text-gray-700">
                        <div className="flex items-start gap-3">
                          <span className="text-red-500 font-bold mt-1">✗</span>
                          <span><strong>Na onderzoek:</strong> alleen enterprise software met overkill features</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span><strong>Dus bouwde ik</strong> een webapp op maat — iteratief, feedback-driven</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-500 font-bold mt-1">🚀</span>
                          <span className="font-medium"><strong>Resultaat:</strong> beheert vandaag nog steeds €6.000/dag</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4 sm:p-6 mb-6 border-l-4 border-green-400">
                    <p className="text-green-900 font-medium italic text-base sm:text-lg mb-2">
                      "Marcheert gelijk nen trein vriend. Echt zalig."
                    </p>
                    <p className="text-green-700 text-sm sm:text-base">— Nicolas, eigenaar ML Coating</p>
                  </div>
                </div>
                <a href="/ml-coating-story" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base font-medium min-h-[48px]">
                  Lees het volledige verhaal
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </section>
          
          <Benefits />
          
          {/* CTA Section */}
          <section id="contact" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Helemaal tot hier gelezen?<br />
                <span className="text-orange-400">Perfect moment voor een lunch.</span>
              </h2>
              
              <div className="max-w-3xl mx-auto mb-8 space-y-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 font-bold mt-1">☕</span>
                      <span className="text-gray-200"><strong>Ik trakteer</strong> — broodje naar keuze</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 font-bold mt-1">💼</span>
                      <span className="text-gray-200"><strong>Jullie brengen mee</strong> — Innomedio verhalen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 font-bold mt-1">🚀</span>
                      <span className="text-gray-200"><strong>We praten over</strong> — Symfony, team fit, volgende stappen</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 italic">
                  Gewoon relaxed babbelen — geen stress, wel vooruitgang.
                </p>
              </div>
              <a 
                href="mailto:vhchristophe@gmail.com?subject=Lunch%20inplannen&body=Hey%20Christophe,%0A%0ALaat%20ons%20een%20datum%20kiezen%20voor%20een%20broodje%20en%20brainstorm!%0A"
                className="cta-btn inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-base sm:text-lg font-bold min-h-[48px] min-w-[120px]"
              >
                <span>LET'S TALK</span>
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </section>
        </div>
      } />
      <Route path="/ml-coating-story" element={<MlCoatingStory />} />
    </Routes>
  );
}

export default App;