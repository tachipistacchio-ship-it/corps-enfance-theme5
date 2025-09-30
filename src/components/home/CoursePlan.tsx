'use client';
/* eslint-disable react/no-unescaped-entities */

import { Target, Rocket, TrendingUp, Users, Brain, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

export default function CoursePlan() {
  const sections = [
    {
      title: 'Introduction',
      description: 'Découvrez les sources et le contexte historique de l\'étude des pères dans l\'éducation',
      href: '/introduction',
      icon: Rocket,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Section I - L\'apparition du père (1920-1950)',
      description: 'Analyse de la figure du pater familias et de son évolution dans les guides parentaux',
      href: '/section-1',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Section II - Une présence nécessaire mais compliquée (1950-1970)',
      description: 'L\'apport de la psychologie et la défense d\'une paternité virile',
      href: '/section-2',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Section III - Des pères intégrés dans la parentalité (1980+)',
      description: 'L\'éloge des nouveaux pères et leur intégration pleine dans l\'éducation',
      href: '/section-3',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      title: 'Quiz',
      description: 'Testez vos connaissances sur l\'évolution des rôles paternels',
      href: '/quiz',
      icon: HelpCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Cas pratiques',
      description: 'Exercices d\'application et analyse de situations concrètes',
      href: '/cas-pratiques',
      icon: Award,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Suivez ce parcours structuré pour maîtriser l'évolution des représentations paternelles
          dans les guides d'éducation de 1920 à nos jours.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={index}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            color={section.color}
            bgColor={section.bgColor}
          />
        ))}
      </div>
    </div>
  );
}