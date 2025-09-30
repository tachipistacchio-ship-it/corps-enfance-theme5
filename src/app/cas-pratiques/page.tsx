'use client';

import { useState } from 'react';
import Link from 'next/link';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { FileText, CheckCircle, Eye, EyeOff, Lightbulb, Target, BookOpen } from 'lucide-react';

interface CasPratique {
  id: number;
  title: string;
  context: string;
  question: string;
  elements: string[];
  correction: string;
  methodologie: string[];
}

const casPratiques: CasPratique[] = [
  {
    id: 1,
    title: "Analyse d'un guide parental des années 1930",
    context: "Vous analysez un extrait d'un guide de Blanche Gay (1935) : 'Le père doit maintenir son autorité sur la famille tout en laissant à la mère le soin quotidien des enfants. Il interviendra principalement pour les grandes décisions et la discipline morale.'",
    question: "Analysez cet extrait en identifiant les caractéristiques du modèle paternel traditionnel et ses implications sur l'organisation familiale.",
    elements: [
      "Identification du modèle de paternité",
      "Répartition des rôles genrés",
      "Type d'autorité exercée",
      "Fréquence d'intervention paternelle",
      "Domaines d'intervention privilégiés"
    ],
    correction: "Cet extrait illustre parfaitement le modèle du 'pater familias' des années 1920-1940. Le père incarne l'autorité familiale hiérarchique mais reste absent du quotidien éducatif. La répartition genrée est claire : mère = soins quotidiens, père = autorité morale et décisions importantes. Cette organisation reflète la société patriarcale de l'époque où l'homme travaille à l'extérieur et la femme gère l'intérieur. L'intervention paternelle est intermittente mais légitime, concentrée sur la discipline et les 'grandes décisions'. Ce modèle sera progressivement remis en question à partir des années 1960.",
    methodologie: [
      "Contextualiser l'époque et l'auteur",
      "Identifier les mots-clés révélateurs",
      "Analyser la répartition des rôles",
      "Évaluer le type d'autorité",
      "Mettre en perspective historique"
    ]
  },
  {
    id: 2,
    title: "Évolution du discours sur la paternité (1960-1980)",
    context: "Comparez ces deux extraits : \n1) Laurence Pernoud (1965) : 'Beaucoup de pères se désintéressent de leurs enfants sous prétexte qu'ils sont trop petits.'\n2) Edwige Antier (1998) : 'Le père d'aujourd'hui veut participer à l'éducation de son enfant dès la naissance.'",
    question: "Analysez l'évolution du discours sur la paternité entre ces deux périodes et identifiez les facteurs sociaux qui expliquent cette transformation.",
    elements: [
      "Critique du modèle traditionnel",
      "Émergence du 'nouveau père'",
      "Facteurs sociaux d'évolution",
      "Changement des attentes",
      "Impact sur l'organisation familiale"
    ],
    correction: "Ces extraits révèlent une transformation radicale du discours sur la paternité. Pernoud (1965) critique l'excuse de l'âge utilisée par les pères pour justifier leur désengagement, marquant le début de la remise en question du modèle traditionnel. Antier (1998) témoigne de l'émergence du 'nouveau père' qui s'implique dès la naissance. Cette évolution s'explique par plusieurs facteurs : mouvements féministes, augmentation des divorces, évolution du marché du travail, nouvelles connaissances en psychologie de l'enfant. Le père passe du statut de 'pourvoyeur' à celui de 'co-parent', participant activement aux soins et à l'éducation précoce.",
    methodologie: [
      "Comparer les deux discours",
      "Identifier les ruptures",
      "Contextualiser socialement",
      "Analyser les causes du changement",
      "Évaluer les conséquences"
    ]
  },
  {
    id: 3,
    title: "Les limites du discours égalitaire contemporain",
    context: "Malgré les discours sur l'égalité parentale, une étude de 2020 montre que 70% des tâches liées aux enfants sont encore assumées par les mères, même quand les deux parents travaillent à temps plein.",
    question: "Analysez cette contradiction entre discours égalitaire et pratiques réelles. Quels facteurs expliquent la persistance des inégalités parentales ?",
    elements: [
      "Écart entre discours et pratiques",
      "Persistance des stéréotypes",
      "Facteurs structurels",
      "Obstacles à l'égalité",
      "Évolutions nécessaires"
    ],
    correction: "Cette contradiction révèle la complexité de la transformation des modèles parentaux. Plusieurs facteurs expliquent cette persistance : 1) Socialisation genrée précoce qui conditionne les comportements, 2) Stéréotypes sur l'instinct maternel vs l'apprentissage paternel, 3) Inégalités salariales qui poussent les femmes à réduire leur activité, 4) Politiques publiques insuffisantes (congés paternité courts), 5) Résistances culturelles et familiales. Les guides parentaux, malgré leurs discours progressistes, véhiculent encore parfois des distinctions subtiles. L'égalité parentale nécessite des transformations structurelles : politiques publiques, évolution des mentalités, réorganisation du travail.",
    methodologie: [
      "Constater l'écart discours/pratiques",
      "Identifier les causes multiples",
      "Analyser les résistances",
      "Proposer des solutions",
      "Adopter une approche systémique"
    ]
  }
];

export default function CasPratiquesPage() {
  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});
  const [showMethodologie, setShowMethodologie] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (casId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [casId]: !prev[casId]
    }));
  };

  const toggleMethodologie = (casId: number) => {
    setShowMethodologie(prev => ({
      ...prev,
      [casId]: !prev[casId]
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Cas pratiques</h1>
              <p className="text-gray-600 text-sm sm:text-base">Exercices d&apos;application et d&apos;analyse</p>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-semibold text-purple-900 mb-3">
              Objectifs pédagogiques
            </h2>
            <ul className="text-purple-800 space-y-2">
              <li>• Analyser des extraits de guides parentaux dans leur contexte historique</li>
              <li>• Identifier les évolutions du discours sur la paternité</li>
              <li>• Développer un regard critique sur les modèles parentaux contemporains</li>
              <li>• Maîtriser la méthodologie d&apos;analyse de sources</li>
            </ul>
          </div>

          {/* Cas pratique 2 enrichi */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cas pratique 2 : Évolution comparative</h2>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-green-900 mb-4">📊 Situation d'étude</h3>
              <p className="text-gray-800 mb-4">
                Vous devez comparer l'évolution du discours sur la paternité entre <strong>1950 et 1990</strong> 
                à travers les trois auteurs principaux : Blanche Gay, Laurence Pernoud et Edwige Antier.
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Objectif de l'exercice</h4>
                <p className="text-gray-700 text-sm">
                  Identifier les <strong>ruptures</strong> et <strong>continuités</strong> dans la conception du rôle paternel 
                  sur 40 ans d'évolution sociale et familiale.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-800 mb-3">🔍 Éléments à analyser</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">📋 Aspects à comparer</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Conception de l'autorité paternelle</li>
                      <li>• Rôle dans les soins quotidiens</li>
                      <li>• Relation affective avec l'enfant</li>
                      <li>• Complémentarité avec la mère</li>
                      <li>• Responsabilités éducatives</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">⏰ Périodes clés</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• <strong>1950s :</strong> Blanche Gay - Modèle traditionnel</li>
                      <li>• <strong>1960-70s :</strong> Pernoud - Transition psychologique</li>
                      <li>• <strong>1980-90s :</strong> Antier - Nouveau père</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 mb-3">📈 Tableau comparatif détaillé</h4>
                
                <div className="overflow-x-auto">
                  <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded border min-w-[800px]">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Aspect</th>
                        <th className="p-2 sm:p-3 text-left font-semibold text-red-700 text-xs sm:text-sm">Blanche Gay (1950s)</th>
                        <th className="p-2 sm:p-3 text-left font-semibold text-orange-700 text-xs sm:text-sm">L. Pernoud (1960-70s)</th>
                        <th className="p-2 sm:p-3 text-left font-semibold text-green-700 text-xs sm:text-sm">E. Antier (1980-90s)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Autorité</td>
                        <td className="p-2 sm:p-3 text-red-700 text-xs sm:text-sm">"Chef incontesté" - Autorité absolue</td>
                        <td className="p-2 sm:p-3 text-orange-700 text-xs sm:text-sm">Autorité partagée mais père "structurant"</td>
                        <td className="p-2 sm:p-3 text-green-700 text-xs sm:text-sm">Coparentalité - Autorité négociée</td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Soins quotidiens</td>
                        <td className="p-2 sm:p-3 text-red-700 text-xs sm:text-sm">Exclus - "Rôle féminin"</td>
                        <td className="p-2 sm:p-3 text-orange-700 text-xs sm:text-sm">Participation occasionnelle acceptée</td>
                        <td className="p-2 sm:p-3 text-green-700 text-xs sm:text-sm">Implication dès la naissance encouragée</td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Affectivité</td>
                        <td className="p-2 sm:p-3 text-red-700 text-xs sm:text-sm">Retenue - Distance émotionnelle</td>
                        <td className="p-2 sm:p-3 text-orange-700 text-xs sm:text-sm">Tendresse autorisée mais mesurée</td>
                        <td className="p-2 sm:p-3 text-green-700 text-xs sm:text-sm">Expression libre des émotions</td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Éducation</td>
                        <td className="p-2 sm:p-3 text-red-700 text-xs sm:text-sm">Formation du caractère - Discipline</td>
                        <td className="p-2 sm:p-3 text-orange-700 text-xs sm:text-sm">Équilibre fermeté/compréhension</td>
                        <td className="p-2 sm:p-3 text-green-700 text-xs sm:text-sm">Accompagnement bienveillant</td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Relation mère-père</td>
                        <td className="p-2 sm:p-3 text-red-700 text-xs sm:text-sm">Hiérarchie - Père supérieur</td>
                        <td className="p-2 sm:p-3 text-orange-700 text-xs sm:text-sm">Complémentarité inégalitaire</td>
                        <td className="p-2 sm:p-3 text-green-700 text-xs sm:text-sm">Égalité parentale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-800 mb-3">🔄 Analyse des ruptures et continuités</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-red-800 mb-3">💥 Ruptures majeures</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium text-gray-800 text-sm mb-1">1960-1970 : Révolution psychologique</h6>
                        <ul className="text-gray-600 text-xs space-y-1">
                          <li>• Remise en cause de l'autorité absolue</li>
                          <li>• Introduction de la psychologie de l'enfant</li>
                          <li>• Critique des "pères copains"</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-gray-800 text-sm mb-1">1980-1990 : Nouveau père</h6>
                        <ul className="text-gray-600 text-xs space-y-1">
                          <li>• Implication précoce valorisée</li>
                          <li>• Expression affective encouragée</li>
                          <li>• Égalité parentale revendiquée</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-green-800 mb-3">🔗 Continuités persistantes</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium text-gray-800 text-sm mb-1">Rôle structurant maintenu</h6>
                        <ul className="text-gray-600 text-xs space-y-1">
                          <li>• Père = ouverture sur le monde</li>
                          <li>• Fonction de "tiers séparateur"</li>
                          <li>• Encouragement à l'autonomie</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-gray-800 text-sm mb-1">Complémentarité assumée</h6>
                        <ul className="text-gray-600 text-xs space-y-1">
                          <li>• Différences père/mère maintenues</li>
                          <li>• Spécificités paternelles valorisées</li>
                          <li>• Nécessité des deux parents</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-800 mb-3">🎯 Méthodologie de l'analyse comparative</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">1️⃣ Préparation</h5>
                    <ul className="text-gray-700 text-xs space-y-1">
                      <li>• Définir les critères de comparaison</li>
                      <li>• Contextualiser chaque période</li>
                      <li>• Identifier les sources pertinentes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">2️⃣ Analyse</h5>
                    <ul className="text-gray-700 text-xs space-y-1">
                      <li>• Comparer point par point</li>
                      <li>• Repérer évolutions/permanences</li>
                      <li>• Expliquer les changements</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-800 mb-2">3️⃣ Synthèse</h5>
                    <ul className="text-gray-700 text-xs space-y-1">
                      <li>• Dégager les tendances générales</li>
                      <li>• Évaluer l'ampleur des changements</li>
                      <li>• Proposer une périodisation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {casPratiques.map((cas) => (
              <div key={cas.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    Cas pratique {cas.id} : {cas.title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleMethodologie(cas.id)}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                    >
                      <Lightbulb className="h-4 w-4" />
                      Méthodo
                    </button>
                    <button
                      onClick={() => toggleCorrection(cas.id)}
                      className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                    >
                      {showCorrection[cas.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      Correction
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📋 Contexte</h4>
                  <p className="text-gray-700 text-sm whitespace-pre-line">{cas.context}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Question
                  </h4>
                  <p className="text-purple-800 text-sm font-medium">{cas.question}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-3">🎯 Éléments à analyser</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {cas.elements.map((element, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-800 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        {element}
                      </div>
                    ))}
                  </div>
                </div>

                {showMethodologie[cas.id] && (
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Méthodologie d&apos;analyse
                    </h4>
                    <ol className="text-yellow-800 text-sm space-y-2">
                      {cas.methodologie.map((etape, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="bg-yellow-200 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          {etape}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {showCorrection[cas.id] && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Correction détaillée
                    </h4>
                    <p className="text-green-800 text-sm leading-relaxed">{cas.correction}</p>
                  </div>
                )}

                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <p className="text-gray-600 text-xs">
                    💡 <strong>Conseil :</strong> Rédigez votre analyse avant de consulter la correction. 
                    Utilisez la méthodologie pour structurer votre réponse.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4 text-center">🎓 Bilan de formation</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-sm font-medium text-gray-700">Périodes historiques maîtrisées</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-sm font-medium text-gray-700">Concepts clés assimilés</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-sm font-medium text-gray-700">Cours terminé avec succès</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-700 mb-4">
                Félicitations ! Vous avez terminé le cours sur l&apos;évolution de la paternité dans les guides parentaux.
              </p>
              <Link
                href="/"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}