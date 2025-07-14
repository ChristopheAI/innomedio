import { ReactElement } from 'react';

export interface TimelineItem {
  period: string;
  role: string;
  impact: string;
  icon: ReactElement;
}

export interface ServiceItem {
  nr: string;
  title: string;
  pitch: string;
}

export interface BenefitItem {
  text: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  isButton?: boolean;
}