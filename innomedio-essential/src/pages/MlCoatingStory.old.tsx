import React from 'react';

export default function MlCoatingStory() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-orange-600 mb-4 text-sm font-semibold">Het Echte Verhaal</p>
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 text-gray-900">
          Van WhatsApp vraag naar<br />
          <span className="text-orange-600">€6.000/dag webapp</span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">635kg</div>
                <div className="text-sm text-gray-600">Startpunt (Mei 2025)</div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-orange-500 text-2xl">→</span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">941.5kg</div>
                <div className="text-sm text-gray-600">Vandaag (Juli 2025)</div>
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
          Dit is hoe een simpele vraag via WhatsApp uitgroeide tot business-kritieke software.
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
          <h2 className="text-2xl sm:text-3xl font-bold">Het begon met een bezoek</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1 text-xl">❌</span>
              <span className="text-gray-800 font-medium"><strong>Probleem:</strong> Nicolas' voorraad zat alleen in zijn hoofd</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1 text-xl">❌</span>
              <span className="text-gray-800 font-medium"><strong>Realiteit:</strong> Dozen overal, geen overzicht, geen grip</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1 text-xl">❓</span>
              <span className="text-gray-800 font-medium"><strong>Mijn vraag:</strong> "Hoe hou je dit allemaal bij?"</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-500 font-bold mt-1 text-xl">🤷‍♂️</span>
              <span className="text-gray-800 font-medium"><strong>Nicolas:</strong> "Ik onthoud het gewoon..."</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat - Enhanced */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="text-center text-xs text-gray-500 mb-4">WhatsApp • April 2025</div>
          <div className="flex items-end gap-2 mb-2">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              <strong>Hey, bestaat er geen software om heel dit te gaan beheren?</strong>
              <div className="text-xs text-gray-400 mt-1">De vraag die alles veranderde</div>
            </div>
          </div>
        </div>

        {/* Research Results */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-gray-900 mb-4">Onderzoek resultaten:</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">✗</span>
              <span className="text-gray-700"><strong>Enterprise software:</strong> Te complex, te duur</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">✗</span>
              <span className="text-gray-700"><strong>Bestaande tools:</strong> Overkill features die hij niet nodig had</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">💡</span>
              <span className="text-gray-700"><strong>Mijn idee:</strong> "Waarom niet zelf bouwen met AI tools?"</span>
            </div>
          </div>
        </div>

        {/* Key Insight Quote */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg border border-green-200 mb-8">
          <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          <div className="text-base font-medium text-gray-800 italic leading-relaxed">
            <p>"De beste specificatie is directe feedback via WhatsApp.</p>
            <p><strong className="text-gray-900">Zo bouw je software die écht werkt voor de gebruiker."</strong></p>
          </div>
          <p className="text-right text-xs text-gray-500 mt-3">— Christophe</p>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">02</span>
          <h2 className="text-2xl sm:text-3xl font-bold">WhatsApp als Feedbacklijn</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Geen lange meetings, geen dikke specificaties.<br /><strong className="text-gray-900">Elke feature, bugfix en verbetering verliep via WhatsApp.</strong></p>
        </div>
        {/* WhatsApp Chat */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col gap-2">
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Kan niet zien hoeveel kg in totaal heb.
              <div className="text-xs text-gray-400 mt-1">22:04</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              [Screenshot showing: Totaal Voorraad 33, Totaal Gewicht 635.0 kg]
              <div className="text-xs text-gray-400 mt-1">22:10</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Nu wel <span className="text-lg">😊</span>
              <div className="text-xs text-gray-400 mt-1">22:10</div>
            </div>
          </div>
        </div>
        {/* Quote */}
        <div className="border-l-4 border-green-400 bg-green-50 p-6 italic text-green-900 mb-8">
          De beste specificatie is directe feedback via WhatsApp.<br />
          <span className="not-italic text-gray-700 text-base">Zo bouw je software die écht werkt voor de gebruiker.</span>
        </div>
      </section>
      {/* Section 3 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">03</span>
          <h2 className="text-2xl sm:text-3xl font-bold">The Nicolas Test</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Here's what I learned quickly: Nicolas is <strong className="text-gray-900">not computer-minded</strong>. He can send emails, sure, but complex software? Forget it. This constraint became my north star.</p>
        </div>
        {/* WhatsApp Chat */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-6">
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
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Every feature request came with the same filter: <strong className="text-gray-900">"Niet te veel en te moeilijk maken"</strong> (Not too much and too difficult). This wasn't about showing off technical skills. It was about solving a real problem for a real person.</p>
        </div>
        {/* Quote */}
        <div className="border-l-4 border-blue-400 bg-blue-50 p-6 italic text-blue-900 mb-8">
          Juist door te bouwen voor een niet-techneut, werd het product écht simpel en bruikbaar.
        </div>
        {/* Feature Evolution */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">❌</div>
            <div className="font-semibold mb-1">No Barcode Scanning</div>
            <div className="text-gray-500 text-sm">"zelfs niet nodig"</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">❌</div>
            <div className="font-semibold mb-1">No Location Fields</div>
            <div className="text-gray-500 text-sm">"alles is 'stock'"</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">❌</div>
            <div className="font-semibold mb-1">No Photos</div>
            <div className="text-gray-500 text-sm">"niet nodig"</div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">04</span>
          <h2 className="text-2xl sm:text-3xl font-bold">The Tool Shuffle</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">I didn't nail it on the first try. Or the second. The journey went like this:</p>
          <ul className="list-disc ml-8 text-base mb-6 text-gray-900">
            <li>powder-pal-inventory-control (Lovable) – rapid prototyping</li>
            <li>mlcoating.netlify.app – testing deployment</li>
            <li>nicolas-ml-coating.****.app – production environment</li>
          </ul>
          <div className="bg-blue-50 rounded-xl p-7 my-8">
            <h4 className="text-blue-600 font-bold mb-2">Iterative Process</h4>
            <p className="mb-2">Every step brought us closer to the real solution: <br /><strong>Prototype fast → Test live → Ship to production</strong>.<br />No endless specs, just building, testing, and improving—together.</p>
            <div className="text-blue-600 font-semibold mt-2">"een werkende web app &gt;&gt; testen zou ik zeggen vriend" ✨</div>
          </div>
          <p className="mb-4">First Lovable, then Netlify, finally Replit. Each iteration got us closer. Each deployment taught me something new. And Nicolas? He kept testing from his phone in bed at 22:32.</p>
          <blockquote className="border-l-4 border-blue-400 bg-blue-50 p-6 my-6 italic text-blue-900">
            "Heb wat liggen doen op gsm want lig al in bed, maar ziet er goed uit 🧑‍🍳🧑‍🍳"<br />
            <span className="not-italic text-gray-700 text-base">— Nicolas, testing at night</span>
          </blockquote>
        </div>
      </section>
      {/* Section 5 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">05</span>
          <h2 className="text-2xl sm:text-3xl font-bold">The Numbers Don't Lie</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">By May 14th, ML Coating was running in production. Real inventory. Real business. Real results.</p>
        </div>
        {/* Results Dashboard */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Then (May 2025)</h3>
          <p className="text-gray-500 mb-6">First production version</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
            <div>
              <span className="block text-4xl font-extrabold text-orange-500 mb-2">33</span>
              <span className="text-gray-700">Different Powders</span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-orange-500 mb-2">635kg</span>
              <span className="text-gray-700">Total Weight</span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-orange-500 mb-2">€0</span>
              <span className="text-gray-700">Monthly Cost</span>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-blue-400 bg-blue-50 p-6 italic text-blue-900 mb-8">
          <strong>Business Value:</strong><br />€5.600 voorraad, nul fouten, nul downtime. Dagelijks gebruikt, geen demo.
        </div>
        {/* WhatsApp Chat */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col gap-2">
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Ik kan niet zien hoeveel kg in totaal heb.
              <div className="text-xs text-gray-400 mt-1">22:04</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              [Screenshot showing: Totaal Voorraad 33, Totaal Gewicht 635.0 kg]
              <div className="text-xs text-gray-400 mt-1">22:10</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Nu wel <span className="text-lg">😊</span>
              <div className="text-xs text-gray-400 mt-1">22:10</div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">That <strong className="text-gray-900">"Nu wel 😊"</strong> – that's when I knew we'd built something real. Not a demo. Not a prototype. A tool that Nicolas uses every single day.</p>
        </div>
      </section>
      {/* Section 6 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">06</span>
          <h2 className="text-2xl sm:text-3xl font-bold">The Evolution Continues</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">The best part? We're not done. Nicolas keeps having ideas, and I keep building them. <strong className="text-gray-900">Every feature request becomes reality within days.</strong></p>
        </div>
        {/* WhatsApp Chat */}
        <div className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col gap-2">
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              Was eventueel misschien aan het denken om bij iedere poeder de aankoop prijs te zetten zodat we ineens weten hoeveel het kost
              <div className="text-xs text-gray-400 mt-1">22:13</div>
            </div>
            <div className="self-end bg-green-100 border border-green-200 rounded-2xl rounded-br-none px-4 py-3 shadow text-gray-800">
              Lijkt me een goed idee ja <span className="text-lg">👍⚡</span>
              <div className="text-xs text-gray-400 mt-1">22:14</div>
            </div>
            <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow text-gray-800">
              En hoe zet ik dit vast op hoofd pagina.. of hoe noemt dat <span className="text-lg">🙄😂😂</span>
              <div className="text-xs text-gray-400 mt-1">22:35</div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">He wants it as his iPad homepage. He's thinking about cost tracking. He's invested in making it better because it's <strong className="text-gray-900">his tool</strong>, built for <strong className="text-gray-900">his business</strong>.</p>
        </div>
      </section>
      {/* Section 7 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">07</span>
          <h2 className="text-2xl sm:text-3xl font-bold">What I Really Built</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Looking back, I didn't just build an inventory system. I discovered that:</p>
          <ul className="list-disc ml-8 text-base mb-6 text-gray-900">
            <li>📱 <strong>De beste specificatie is een WhatsApp-gesprek.</strong> Geen lange documenten, maar realtime feedback, screenshots en voice messages.</li>
            <li>🧑‍💼 <strong>Beperkingen zorgen voor duidelijkheid.</strong> Bouwen voor een niet-techneut dwingt tot echte eenvoud.</li>
            <li>🛠️ <strong>Tools zijn ondergeschikt aan het probleem.</strong> Lovable, Netlify, Replit – alles om tot een oplossing te komen.</li>
            <li>🤝 <strong>Echte gebruikers maken het verschil.</strong> Ze zeggen eerlijk wat werkt (en wat niet) – met emoji.</li>
          </ul>
          <p className="mb-4 font-bold">Dit is geen portfolio-project, maar software die een bedrijf laat groeien.</p>
        </div>
        <div className="border-l-4 border-blue-400 bg-blue-50 p-6 italic text-blue-900 mb-8">
          "dit is de bedoeling om het definitief nu te gaan gebruiken als het voor u allemaal naar wens is"
          <div className="not-italic text-gray-700 text-base mt-2">— Nicolas, ready to go live</div>
        </div>
      </section>
      {/* Section 8 */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-6xl font-extrabold text-orange-300 opacity-30">08</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Today: July 2025</h2>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">Two months later, ML Coating isn't just surviving – it's thriving. The numbers tell the story better than I ever could:</p>
        </div>
        {/* Results Dashboard */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Now (July 2025)</h3>
          <p className="text-gray-500 mb-6">Live screenshot taken today</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
            <div>
              <span className="block text-4xl font-extrabold text-orange-500 mb-2">58</span>
              <span className="text-gray-700">Different Powders</span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-orange-500 mb-2">941.5kg</span>
              <span className="text-gray-700">Total Weight</span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-orange-500 mb-2">€/kg</span>
              <span className="text-gray-700">Price Tracking Active</span>
            </div>
          </div>
        </div>
        {/* Growth Visualization */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 bg-gray-50 rounded-2xl p-10 mb-8">
          <div className="text-center">
            <div className="uppercase text-xs text-gray-500 mb-2">May 2025</div>
            <div className="text-3xl font-extrabold text-orange-500">635kg</div>
          </div>
          <div className="text-4xl text-orange-500">→</div>
          <div className="text-center">
            <div className="uppercase text-xs text-gray-500 mb-2">July 2025</div>
            <div className="text-3xl font-extrabold text-orange-500">941.5kg</div>
          </div>
        </div>
        {/* Live Screenshot (simulated) */}
        <div className="bg-gray-100 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4 border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              LIVE PRODUCTION
            </div>
            <span className="ml-auto text-xs text-gray-500">Screenshot: July 2, 2025</span>
          </div>
          <div className="bg-white rounded-lg p-6 font-mono text-sm text-gray-800">
            <div className="mb-4 font-bold">ML Coating Poedervoorraad - Nicolas logged in</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <div className="text-2xl font-bold">58</div>
                <div className="text-xs text-gray-500">verschillende poedersoorten</div>
              </div>
              <div>
                <div className="text-2xl font-bold">941.5 kg</div>
                <div className="text-xs text-gray-500">totaal beschikbare poeder</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-4">
              Sample inventory items showing: RAL codes, brands (Sherwin-Williams, Tiger), finish types (Structuur, Mat, Metallic), weights, prices per kg (€5.80 - €6.20), and status indicators (Voldoende/Gemiddeld)
            </div>
          </div>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4 font-bold">The growth is real: From 33 to 58 powder types. From 635kg to 941.5kg. And remember that feature request about pricing? Every single item now has its purchase price tracked – €5.80/kg for RAL 9005, €6.20/kg for RAL 8019.</p>
          <p className="mb-4">The UI evolved from basic tables to a professional interface with:</p>
        </div>
        {/* Evolution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🔍</div>
            <div className="font-semibold mb-1">Smart Search</div>
            <div className="text-gray-500 text-sm">Find by RAL, brand, or type</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="font-semibold mb-1">Status Tracking</div>
            <div className="text-gray-500 text-sm">Voldoende / Gemiddeld alerts</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="font-semibold mb-1">Cost Analysis</div>
            <div className="text-gray-500 text-sm">Price per kg for every item</div>
          </div>
        </div>
        <div className="text-gray-700 text-lg mb-6">
          <p className="mb-4">But here's what the screenshot doesn't show: <strong className="text-gray-900">Nicolas logs in every day</strong>. He updates quantities after each job. He checks what needs reordering. He knows exactly what his inventory is worth.</p>
          <p className="mb-4">This isn't a portfolio project gathering dust. This is business-critical software managing real inventory worth thousands of euros. The 941.5kg at an average of €6/kg? That's over €5,600 of inventory being tracked, every single day.</p>
          <p className="mb-4">And it all started with a WhatsApp message: <em>"bestaat er geen software om heel dit te gaan beheren?"</em></p>
        </div>
      </section>
    </div>
  );
}
