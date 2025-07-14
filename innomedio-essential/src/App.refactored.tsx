import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MlCoatingStory from './pages/MlCoatingStory';
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
    "Christophe — Developer met Business Impact | Voor Innomedio",
    "Hey Jens, developer die business impact begrijpt. 16 jaar ervaring, klaar om Symfony te leren. Bewijs? Nicolas' webapp beheert €6 000/dag."
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
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hey, ik ben <strong className="text-gray-900">Christophe</strong>. <strong className="text-gray-900">16 jaar IT</strong> achter de rug, 
                van <strong className="text-gray-900">Fixzit</strong> oprichter tot business developer die <strong className="text-gray-900">duizend prospectiecalls</strong> deed. 
                En nu? Nu wil ik <strong className="text-gray-900">developer</strong> worden bij Innomedio. 
                Klinkt gek? Misschien wel. Maar sinds ik die webapp voor Nicolas bouwde, weet ik precies waar ik naartoe wil. 
                <strong className="text-gray-900">16 jaar IT + business ervaring?</strong> Dat is een stevige basis voor development. 
                Nu tijd om <strong className="text-gray-900">Symfony en jullie LAST stack</strong> te leren van de besten.
              </p>
              <p className="text-xl font-semibold text-gray-900 text-center bg-orange-50 rounded-lg py-4 px-6">
                <strong>Ik beloof je geen zakken vol goud — wel een webapp die wérkt.</strong>
              </p>
            </div>
          </section>
          
          <Timeline />
          <Services />
          
          {/* ML Coating Case Teaser */}
          <section id="klantverhaal" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">De ML Coating Case</h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="mb-8">
                  <div className="inline-block bg-green-100 rounded-full px-6 py-3 mb-4">
                    <p className="text-green-900 font-semibold">Van 0 naar €6.000/dag in 3 weken</p>
                  </div>
                  <p className="text-xl text-gray-700 mb-6">
                    Nicolas startte zijn coating business en vroeg: "Bestaat er software om mijn voorraad te beheren?" 
                    Na onderzoek: alleen dure tools met features die hij niet nodig had. Dus bouwde ik met Replit AI 
                    een webapp op maat - iteratief, feedback-driven. Vandaag beheert hij er nog steeds €6.000/dag mee.
                  </p>
                  <div className="bg-green-50 rounded-xl p-6 mb-6">
                    <p className="text-green-900 font-medium italic text-lg">
                      "Marcheert gelijk nen trein vriend. Echt zalig."
                    </p>
                    <p className="text-green-700 mt-2">— Nicolas via WhatsApp #likeabossentrepreneur</p>
                  </div>
                </div>
                <a href="/ml-coating-story" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
                  Lees het volledige verhaal
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </section>
          
          <Benefits />
          
          {/* CTA Section */}
          <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Helemaal tot hier gelezen? Laten we een lunch inplannen.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Awel, we kunnen gewoon babbelen over Symfony, Innomedio en hoe ik jullie team kan versterken. 
                Ik trakteer op een broodje — jij brengt de Innomedio-verhalen mee!
              </p>
              <a 
                href="mailto:vhchristophe@gmail.com?subject=Lunch%20inplannen&body=Hey%20Christophe,%0A%0ALaat%20ons%20een%20datum%20kiezen%20voor%20een%20broodje%20en%20brainstorm!%0A"
                className="cta-btn inline-flex items-center gap-2 bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-lg font-bold min-h-[48px] min-w-[120px]"
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