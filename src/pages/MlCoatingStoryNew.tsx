import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function MlCoatingStory() {
  return (
    <>
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <a href="/" className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft size={20} />
              <span>Terug naar Homepage</span>
            </a>
          </div>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-orange-600 mb-4 text-sm font-semibold">Het Echte Verhaal</p>
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 text-gray-900">
          Van business consultant naar<br />
          <span className="text-orange-600">AI-driven developer</span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Business Mind</div>
                <div className="text-sm text-gray-600">16+ jaar ervaring</div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-orange-500 text-2xl">→</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">AI Tools</div>
                <div className="text-sm text-gray-600">Moderne development</div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-orange-500 text-2xl">→</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">Live Software</div>
                <div className="text-sm text-gray-600">Dagelijks gebruik</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-start gap-3 text-left">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-lg text-gray-700"><strong>Business-critical software</strong> dat dagelijks gebruikt wordt</span>
          </div>
          <div className="flex items-start gap-3 text-left">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-lg text-gray-700"><strong>€5.600+ voorraad</strong> accuraat bijgehouden</span>
          </div>
          <div className="flex items-start gap-3 text-left">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-lg text-gray-700"><strong>WhatsApp-driven development</strong> — snelle feedback, echte resultaten</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 italic">
          16+ jaar business ervaring + AI-tools = unieke development aanpak.
        </p>
      </div>
      {/* Timeline Visual */}
      <div className="my-20 text-center relative">
        <div className="h-0.5 bg-gray-200 relative my-10" />
        <div className="flex justify-between -mt-5">
          {[
            { date: 'April 2025', label: 'Warehouse Visit' },
            { date: 'April 17', label: 'First Prototype' },
            { date: 'April 25', label: 'UI Evolution' },
            { date: 'May 6', label: 'Production Ready' },
            { date: 'July 2025', label: '941.5kg Managed' },
          ].map((point, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-4" />
              <div className="text-xs font-semibold text-gray-900">{point.date}</div>
              <div className="text-xs text-gray-500 mt-1">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Section 1 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">01</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Business Mind ontmoet Software Vraagstuk</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">💼</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Mijn achtergrond:</strong> Business consultant • 16+ jaar ervaring • Geen coding achtergrond</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">❓</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Nicolas z'n vraag:</strong> "Kun je eens bekijken wat daar vandaag allemaal mogelijk is?" • Software research opdracht</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">✗</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Research resultaat:</strong> Bestaande software te complex, te duur • Geen perfecte match voor zijn behoeften</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">💡</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Mijn idee:</strong> "Waarom niet zelf iets bouwen?" • AI-tools maken het mogelijk als niet-developer</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat - Enhanced */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="text-center text-xs text-gray-500 mb-4">WhatsApp • 6 April 2025, 19:40</div>
          <div className="flex items-end gap-2 mb-2">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              <strong>Makker, kan je eens bellen als je tijd hebt 😉</strong>
              <div className="text-xs text-gray-400 mt-1">Het gesprek dat tot de webapp leidde</div>
            </div>
          </div>
        </div>

        {/* Key Insight Quote */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg border border-green-200 mb-8">
          <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="text-base font-medium text-gray-800 italic leading-relaxed">
            <p>"Ik ontdekte een manier om als niet-developer</p>
            <p><strong className="text-gray-900">toch 100% werkende software te bouwen."</strong></p>
          </div>
          <p className="text-right text-xs text-gray-500 mt-3">— AI-driven development</p>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">02</span>
          <h2 className="text-2xl sm:text-3xl font-bold">WhatsApp = Development Superpower</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">✗</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Traditioneel:</strong> Lange meetings • Dikke specificaties • Email threads</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Mijn aanpak:</strong> WhatsApp screenshots • Voice messages • Real-time feedback</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">🚀</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Resultaat:</strong> Features binnen uren • Zero miscommunicatie • Gebruiker 100% tevreden</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="text-center text-xs text-gray-500 mb-4">WhatsApp • 18 april 2025, 19:18</div>
          <div className="flex flex-col gap-2">
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              Heb de kleur oranje (zelfde als op uwe website) gebruikt in de web applicatie. Geef me nog eens wat andere feedback 😉🤓
              <div className="text-xs text-gray-400 mt-1">19:18</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              [Screenshot: Webapp met oranje styling]
              <div className="text-xs text-gray-400 mt-1">19:19</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              👌🏼💪🏽💪🏽
              <div className="text-xs text-gray-400 mt-1">19:19</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              <strong>Zalig</strong>
              <div className="text-xs text-gray-400 mt-1">19:19</div>
            </div>
          </div>
        </div>

        {/* Speech Bubble Quote */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg border border-orange-200 mb-8">
          <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="text-base font-medium text-gray-800 italic leading-relaxed">
            <p><strong className="text-gray-900">"Directe feedback, directe appreciatie."</strong></p>
          </div>
          <p className="text-right text-xs text-gray-500 mt-3">— Waarom WhatsApp-development werkt</p>
        </div>
      </section>
      {/* Section 3 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">03</span>
          <h2 className="text-2xl sm:text-3xl font-bold">De Nicolas Filter</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">✗</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Complexe software:</strong> Nicolas kan emails sturen • Maar complexe apps? Vergeet het</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">🎯</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Zijn filter:</strong> "Niet te veel en te moeilijk maken" • Elke feature door deze test</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">🚀</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Mijn voordeel:</strong> Gedwongen tot echte eenvoud • Geen overbodige features</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="text-center text-xs text-gray-500 mb-4">WhatsApp • 20:56</div>
          <div className="flex flex-col gap-2">
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Bij het openen van nieuwe doos, zijn veel te veel velden.<br />Hadden dit toch besproken dat die allemaal weg mochten ... <span className="text-lg">🙄</span>
              <div className="text-xs text-gray-400 mt-1">20:56</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-green-400 text-white rounded-full mr-2">🎤</span>
              <span>Voice message - 0:22</span>
              <div className="text-xs text-gray-400 mt-1 ml-2">20:58</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              dit mag weg?
              <div className="text-xs text-gray-400 mt-1">20:58</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Dat al zeker ja
              <div className="text-xs text-gray-400 mt-1">20:59</div>
            </div>
          </div>
        </div>

        {/* What Got Removed */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2 text-red-500">✗</div>
            <div className="font-semibold mb-1">Barcode Scanning</div>
            <div className="text-gray-500 text-sm italic">"zelfs niet nodig"</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2 text-red-500">✗</div>
            <div className="font-semibold mb-1">Locatie Velden</div>
            <div className="text-gray-500 text-sm italic">"alles is 'stock'"</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2 text-red-500">✗</div>
            <div className="font-semibold mb-1">Product Foto's</div>
            <div className="text-gray-500 text-sm italic">"niet nodig"</div>
          </div>
        </div>

        {/* Speech Bubble Quote */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg border border-blue-200 mb-8">
          <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="text-base font-medium text-gray-800 italic leading-relaxed">
            <p>"Nicolas z'n simpelheid dwong mij</p>
            <p><strong className="text-gray-900">tot software waar iedereen mee kan werken."</strong></p>
          </div>
          <p className="text-right text-xs text-gray-500 mt-3">— Soms zijn beperkingen een cadeau</p>
        </div>
      </section>
      {/* Section 4 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">04</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Modern AI Development Stack</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">🤖</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>AI-first mindset:</strong> Moderne tools gebruiken voor snelle iteratie • Geen traditionele development</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Tool evolution:</strong> Lovable → Netlify → Replit • Elke platform z'n sterkte benutten</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">🚀</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Result:</strong> Nicolas test 24/7 • "ziet er goed uit 🧑‍🍳" • Live business software</span>
            </div>
          </div>
        </div>

        {/* Platform Journey */}
        <div className="space-y-6 mb-8">
          <div className="bg-white border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Lovable (Rapid Prototyping)</h4>
                <p className="text-gray-600 text-sm">18 april: Eerste werkende demo</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">18 april: Eerste demo • Nicolas: "Zalig" • Oranje styling toegepast</p>
            
            {/* Interactive Demo */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <div className="font-semibold text-gray-900">Live Demo - Probeer het zelf!</div>
                  <div className="text-sm text-gray-600">Exact dezelfde demo die Nicolas toen zag</div>
                </div>
              </div>
              <a 
                href="https://powder-pal-inventory-control.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all text-sm font-medium"
              >
                <span>🚀 Open Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <p className="text-xs text-gray-500 mt-2 italic">💡 Tip: Open in nieuw tabblad en test de voorraad features terwijl je verder leest</p>
            </div>
          </div>

          <div className="bg-white border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Netlify (Testing Deployment)</h4>
                <p className="text-gray-600 text-sm">mlcoating.netlify.app/voorraad</p>
              </div>
            </div>
            <p className="text-gray-700">29 april: "Andere versie opgezet" • Nicolas: "Ziet er goed uit ja" • Live testing fase</p>
          </div>

          <div className="bg-white border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Replit (Production)</h4>
                <p className="text-gray-600 text-sm">nicolas-ml-coating.replit.app</p>
              </div>
            </div>
            <p className="text-gray-700">6 mei: "een werkende web app &gt;&gt; testen zou ik zeggen vriend" • Live productie • 635kg → 941.5kg</p>
          </div>
        </div>

        {/* Speech Bubble Quote */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg border border-blue-200 mb-8">
          <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="text-base font-medium text-gray-800 italic leading-relaxed">
            <p>"Heb wat liggen doen op gsm want lig al in bed,</p>
            <p><strong className="text-gray-900">maar ziet er goed uit 🧑‍🍳🧑‍🍳"</strong></p>
          </div>
          <p className="text-right text-xs text-gray-500 mt-3">— Nicolas, 22:32 testing</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-blue-600 font-bold text-lg">"een werkende web app &gt;&gt; testen zou ik zeggen vriend" ✨</div>
          </div>
          <div className="text-blue-800 text-center">
            <strong>Prototype fast → Test live → Ship to production</strong><br/>
            Geen eindloze specs, iteratief bouwen, testen, en verbeteren—samen.
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">05</span>
          <h2 className="text-2xl sm:text-3xl font-bold">De Cijfers Liegen Niet</h2>
        </div>
        
        {/* WhatsApp Chat - Compact */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="text-center text-xs text-gray-500 mb-4">WhatsApp • 14 mei 2025</div>
          <div className="flex flex-col gap-2">
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              <strong>Marcheert gelijk nen trein vriend.</strong> Echt zalig.
              <div className="text-xs text-gray-400 mt-1">22:04</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Ik kan niet zien hoeveel kg in totaal heb.
              <div className="text-xs text-gray-400 mt-1">22:04</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              [Screenshot fix - 6 minuten later]
              <div className="text-xs text-gray-400 mt-1">22:10</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              <strong>Gaat snel zo 👌🏼😂😂</strong>
              <div className="text-xs text-gray-400 mt-1">22:11</div>
            </div>
          </div>
        </div>

        {/* Results Dashboard - Compact */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <span className="block text-3xl font-extrabold text-orange-500 mb-1">33</span>
              <span className="text-gray-700 text-sm">Verschillende Poeders</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-orange-500 mb-1">635kg</span>
              <span className="text-gray-700 text-sm">Totaal Gewicht</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-orange-500 mb-1">€5.600+</span>
              <span className="text-gray-700 text-sm">Voorraadwaarde</span>
            </div>
          </div>
        </div>

        {/* Single Quote */}
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Dat <strong className="text-gray-900">"Marcheert gelijk nen trein"</strong> moment – toen wist ik dat we geen demo hadden gebouwd, maar een tool die Nicolas' business elke dag laat draaien.</p>
        </div>
      </section>
      {/* Section 6 - Now 07 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">06</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Voor Innomedio</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">🏢</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Nicolas is geen uitzondering:</strong> Elke KMO heeft maatwerk software nodig • Bestaande oplossingen zijn te duur of te complex</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Jullie klanten vragen dit:</strong> "Bestaat er geen software om heel dit te beheren?" • Precies wat Nicolas zei</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">🚀</span>
              <span className="text-gray-800 whitespace-pre-line"><strong>Christophe + Innomedio:</strong> Business consultant + AI tools + jullie Symfony expertise = unieke combinatie</span>
            </div>
          </div>
        </div>

        {/* KMO Problems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 rounded-lg p-6">
            <h4 className="font-bold text-red-900 mb-3">KMO Frustraties</h4>
            <ul className="text-red-800 text-sm space-y-2">
              <li>• "Software is te duur voor ons"</li>
              <li>• "Te complex voor onze mensen"</li>
              <li>• "Past niet bij onze manier van werken"</li>
              <li>• "Developers begrijpen ons niet"</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-bold text-green-900 mb-3">Mijn Oplossing</h4>
            <ul className="text-green-800 text-sm space-y-2">
              <li>• WhatsApp-driven development</li>
              <li>• Business consultant perspective</li>
              <li>• AI tools voor snelle prototypes</li>
              <li>• Echte gebruikers, echte feedback</li>
            </ul>
          </div>
        </div>

        {/* For Innomedio */}
        <div className="border-l-4 border-orange-400 bg-orange-50 p-6 mb-8">
          <h4 className="font-bold text-orange-900 mb-2">Voor Innomedio betekent dit:</h4>
          <div className="text-orange-800">
            <strong>Nieuwe revenue stream:</strong> Maatwerk software voor KMO's<br/>
            <strong>Competitive advantage:</strong> WhatsApp development + business expertise<br/>
            <strong>Perfect match:</strong> Jullie focus op KMO's + mijn ervaring
          </div>
        </div>

        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Ik beloof jullie geen zakken vol goud. Wel <strong className="text-gray-900">websites en webapps waar jullie trots op kunnen zijn</strong> – en klanten die elke dag "Marcheert gelijk nen trein" zeggen.</p>
        </div>
      </section>
      </div>
    </>
  );
}
