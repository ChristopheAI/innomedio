import React from 'react';
import { Users, Zap, Code, MessageSquare, Clock } from 'lucide-react';
import { TimelineItem, ServiceItem, BenefitItem, NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "#timeline", label: "Timeline" },
  { href: "#wat-ik-doe", label: "Skills" },
  { href: "#klantverhaal", label: "ML Coating" },
  { href: "#waarom-ik", label: "Why me?" },
  { href: "#contact", label: "Contact", isButton: true }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  { 
    period: "2008 – 2014", 
    role: "IT Support / Troubleshooter", 
    impact: "Jaar in jaar uit eindgebruikers uit de IT-brand geholpen — technische problemen oplossen werd tweede natuur.", 
    icon: React.createElement(Users) 
  },
  { 
    period: "2015 – 2019", 
    role: "Oprichter Fixzit", 
    impact: "Complete IT-infrastructuur voor 50+ KMO's — werkplekken, netwerk, software ecosysteem. Leerde hun business foundation kennen die Innomedio's digitale oplossingen mogelijk maakt.", 
    icon: React.createElement(Zap) 
  },
  { 
    period: "2020 – 2024", 
    role: "System Engineer", 
    impact: "Enterprise-infrastructuur stabiel & veilig gehouden — van KMO naar enterprise niveau, scaling mindset ontwikkeld.", 
    icon: React.createElement(Code) 
  },
  { 
    period: "2024 – 2025", 
    role: "Business Developer (CaptureTech · Elk Factory · Relaxy)", 
    impact: "1000+ KMO prospectiecalls — leerde hun digitale pijn kennen. Elke feature moet ROI hebben, geen tech for tech's sake.", 
    icon: React.createElement(MessageSquare) 
  },
  { 
    period: "2025 – nu", 
    role: "Developer (aankomend)", 
    impact: "Van IT-foundation naar digitale oplossingen — Innomedio bouwt voort op de basis die ik bij KMO's legde. Perfect match.", 
    icon: React.createElement(Clock) 
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  { 
    nr: "01", 
    title: "KMO Business Foundation", 
    pitch: "• 16+ jaar IT foundation\n• 1000+ calls = ik spreek jullie klanten hun taal\n• Van infrastructuur tot digitale behoeften" 
  },
  { 
    nr: "02", 
    title: "End-to-End Project Mindset", 
    pitch: "• Analyse → Development → Oplevering\n• Eén contactpersoon, volledige verantwoordelijkheid\n• Precies jullie aanpak" 
  },
  { 
    nr: "03", 
    title: "Custom Solutions DNA", 
    pitch: "• Waarom enterprise software faalt? Te groot, te duur\n• Waarom ML Coating werkt? Op maat, iteratief\n• Perfect voor jullie KMO-focus" 
  },
  { 
    nr: "04", 
    title: "Symfony + LAST Stack", 
    pitch: "• Klaar voor jullie methodiek\n• Flexibel, leergierig, teamgericht\n• Ready to roll" 
  }
];

export const BENEFIT_ITEMS: BenefitItem[] = [
  { text: "End-to-end mindset — van analyse tot oplevering, net als jullie 13 jaar ervaring" },
  { text: "KMO business inzicht — 1000+ calls, ik ken jullie doelgroep van binnenuit" },
  { text: "In-house development ready — geen freelancer, maar teamspeler voor de lange termijn" },
  { text: "Flexible tech stack — Symfony + LAST stack, klaar voor jullie methodiek" },
  { text: "Proven custom solutions — ML Coating bewijst mijn 'op maat' aanpak" }
];