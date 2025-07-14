import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Clock, Zap, Users, Code, MessageSquare, CheckCircle2 } from 'lucide-react';
import HeroSection from './components/HeroSection';
import { Routes, Route } from 'react-router-dom';
import MlCoatingStory from './pages/MlCoatingStory';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Christophe — Developer met Business Impact | Voor Innomedio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Hey Jens, developer die business impact begrijpt. 16 jaar ervaring, klaar om Symfony te leren. Bewijs? Nicolas' webapp beheert €6 000/dag.");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = "Hey Jens, developer die business impact begrijpt. 16 jaar ervaring, klaar om Symfony te leren. Bewijs? Nicolas' webapp beheert €6 000/dag.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">Christophe</span>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#timeline" className="text-gray-700 hover:text-orange-600 transition-colors">Timeline</a>
                  <a href="#wat-ik-doe" className="text-gray-700 hover:text-orange-600 transition-colors">Wat ik doe</a>
                  <a href="#klantverhaal" className="text-gray-700 hover:text-orange-600 transition-colors">ML Coating</a>
                  <a href="#waarom-ik" className="text-gray-700 hover:text-orange-600 transition-colors">Waarom ik?</a>
                  <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">Contact</a>
                </div>
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2"
                  aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t shadow-lg">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a 
                    href="#timeline" 
                    className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Timeline
                  </a>
                  <a 
                    href="#wat-ik-doe" 
                    className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Wat ik doe
                  </a>
                  <a 
                    href="#klantverhaal" 
                    className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ML Coating
                  </a>
                  <a 
                    href="#waarom-ik" 
                    className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Waarom ik?
                  </a>
                  <a 
                    href="#contact" 
                    className="block px-3 py-3 bg-orange-600 text-white rounded-md text-center hover:bg-orange-700 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </nav>
          {/* Hero Section */}
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
          {/* Timeline */}
          <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Mijn Journey</h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { period: "2008 – 2014", role: "IT Support / Troubleshooter", impact: "Jaar in jaar uit eindgebruikers uit de IT-brand geholpen.", icon: <Users /> },
                  { period: "2015 – 2019", role: "Oprichter Fixzit", impact: "50+ KMO's hun IT-problemen structureel opgelost.", icon: <Zap /> },
                  { period: "2020 – 2024", role: "System Engineer", impact: "Enterprise-infrastructuur stabiel & veilig gehouden.", icon: <Code /> },
                  { period: "2024 – 2025", role: "Business Developer (CaptureTech · Elk Factory · Relaxy)", impact: "± 1 000 prospectiecalls ⇒ saleslens voor elke feature.", icon: <MessageSquare /> },
                  { period: "2025 – nu", role: "Developer (aankomend)", impact: "Klaar om Symfony & LAST stack te leren bij Innomedio.", icon: <Clock /> }
                ].map((item) => (
                  <div key={item.period} className="relative flex gap-6 items-start">
                    {/* Timeline line */}
                    {item.period !== "2025 – nu" && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-orange-200"></div>
                    )}
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white z-10">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    {/* Content */}
                    <div className="flex-grow bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-sm text-orange-600 font-semibold mb-1">{item.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.role}</h3>
                      <p className="text-gray-700">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Wat Ik Doe */}
          <section id="wat-ik-doe" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Wat Ik Doe</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { nr: "01", title: "AI-Driven Development", pitch: "Replit AI, Cursor, Claude Code — ik gebruik de beste tools voor snelle prototypes die écht werken." },
                  { nr: "02", title: "Probleem → Oplossing", pitch: "Eerst onderzoeken wat er bestaat, dan op maat bouwen. Geen overkill features, gewoon wat nodig is." },
                  { nr: "03", title: "Feedback-Driven Iteratie", pitch: "'Wil je dit? Bedoel je dat?' — iteratief werken tot het perfect past bij de klant." },
                  { nr: "04", title: "Business Context Snappen", pitch: "16 jaar ervaring = ik begrijp waarom we bouwen, niet alleen hoe. Context first, code second." },
                  { nr: "05", title: "Symfony + LAST Stack", pitch: "Van AI-tools naar jullie tech stack. Klaar om Symfony, Stimulus en Turbo onder de knie te krijgen." }
                ].map((service) => (
                  <div key={service.nr} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="text-4xl font-bold text-orange-200 mb-4">{service.nr}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.pitch}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-orange-100 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-orange-900">
                  "Een developer die weet waarom hij code schrijft."
                </p>
              </div>
            </div>
          </section>
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
          {/* Waarom Ik */}
          <section id="waarom-ik" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Waarom Ik?</h2>
              <div className="space-y-4 mb-12">
                {[
                  { text: "Leerbereidheid — developer mindset met 16 jaar business foundation" },
                  { text: "Business inzicht — 1000+ prospectiecalls, ik begrijp klantpijn van binnenuit" },
                  { text: "Team collaboration — van solo-ondernemer naar Innomedio team player" },
                  { text: "Symfony ambities — klaar om LAST stack, PHP en jullie methodiek te leren" },
                  { text: "Bewezen resultaat — ML Coating toont impact, nu met jullie tech stack" }
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4 bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors">
                    <CheckCircle2 className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
                <p className="text-2xl font-bold">
                  "Developer met business DNA — ik begrijp waarom we code schrijven."
                </p>
              </div>
            </div>
          </section>
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