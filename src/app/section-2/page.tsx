/* eslint-disable react/no-unescaped-entities */
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Clock, Briefcase, Heart, Users } from 'lucide-react';

export default function Section2Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Section II</h1>
              <p className="text-gray-600 text-sm sm:text-base">Une présence nécessaire mais compliquée (années 1950-1970)</p>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-semibold text-purple-900 mb-3">
                Évolution du contexte social
              </h2>
              <p className="text-purple-800">
                Les années 1950-1970 marquent une période de transition où le père reste nécessaire 
                mais sa place devient de plus en plus problématique face aux mutations sociales.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-blue-600" />
              A. L'apport de la psychologie : une révolution conceptuelle
            </h2>

            {/* Introduction à la psychologie */}
            <div className="bg-blue-50 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-900 mb-3">🧠 La révolution psychologique des années 1950-1960</h3>
              <p className="text-gray-700 mb-4">
                L'introduction de la <strong>psychologie</strong> dans les guides parentaux marque une rupture majeure.
                Les auteurs commencent à s'appuyer sur des <strong>théories scientifiques</strong> pour justifier
                leurs conseils, notamment les travaux sur l'attachement et le développement de l'enfant.
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-gray-800 mb-2">🔬 Nouvelles références scientifiques</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Théories de l'attachement (Bowlby, Spitz)</li>
                  <li>• Psychanalyse et développement infantile</li>
                  <li>• Études sur la carence paternelle</li>
                  <li>• Impact psychologique de l'absence du père</li>
                </ul>
              </div>
            </div>

            {/* Citation fondamentale de Pernoud */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-8 border">
              <h3 className="font-bold text-purple-900 mb-3">📖 Citation fondamentale de Laurence Pernoud</h3>
              <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                "Aujourd'hui, grâce aux travaux des psychologues et des psychanalystes, on sait que le père joue
                un rôle capital dans le développement de la personnalité de l'enfant, et ceci dès les premiers mois.
                Ce rôle n'est pas le même que celui de la mère, il est complémentaire, mais il est aussi important."
              </blockquote>
              <footer className="text-sm text-purple-800 font-medium">— Laurence Pernoud, J'élève mon enfant, 1965, p. 387</footer>
              
              <div className="mt-4 p-4 bg-white rounded border">
                <h4 className="font-semibold text-gray-800 mb-2">🔍 Analyse de cette révolution</h4>
                <p className="text-gray-700 text-sm">
                  Cette citation marque un <strong>tournant historique</strong> : le père n'est plus seulement
                  une figure d'autorité lointaine, mais devient un <strong>acteur psychologique essentiel</strong>
                  dès les premiers mois de vie de l'enfant.
                </p>
              </div>
            </div>

            {/* Évolution des conceptions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-3">❌ Avant (années 1920-1940)</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Père = autorité morale distante</li>
                  <li>• Action "naturellement restreinte"</li>
                  <li>• Intervention ponctuelle uniquement</li>
                  <li>• Justifications traditionnelles</li>
                  <li>• Rôle défini par la tradition</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-3">✅ Après (années 1950-1970)</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Père = acteur psychologique essentiel</li>
                  <li>• Rôle dès les premiers mois</li>
                  <li>• Complémentarité avec la mère</li>
                  <li>• Justifications scientifiques</li>
                  <li>• Rôle défini par la psychologie</li>
                </ul>
              </div>
            </div>

            {/* Impact sur l'identité de l'enfant */}
            <div className="bg-yellow-50 p-6 rounded-xl mb-8 border border-yellow-300">
              <h3 className="font-bold text-yellow-800 mb-3">👶 Impact sur l'identité de l'enfant</h3>
              <blockquote className="text-gray-700 italic mb-3">
                "Le père représente pour l'enfant le monde extérieur, l'autorité, mais aussi la sécurité.
                Sa présence rassure l'enfant sur sa propre identité sexuelle."
              </blockquote>
              <footer className="text-sm text-yellow-700 mb-4">— Laurence Pernoud, 1965</footer>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-blue-800 mb-2">🎯 Pour les garçons</h5>
                  <p className="text-sm text-gray-700">
                    Modèle d'identification masculine, apprentissage des rôles sociaux,
                    construction de l'identité de genre.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-pink-800 mb-2">🎯 Pour les filles</h5>
                  <p className="text-sm text-gray-700">
                    Premier rapport à l'altérité masculine, construction de la féminité
                    par différenciation, sécurité affective.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-600" />
              B. L'engagement professionnel du père
            </h2>

            {/* Problématique centrale */}
            <div className="bg-orange-50 p-6 rounded-xl mb-8 border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-900 mb-3">⚖️ Le dilemme travail-famille</h3>
              <p className="text-gray-700 mb-4">
                Les années 1950-1970 voient émerger une <strong>tension nouvelle</strong> : comment concilier
                l'engagement professionnel croissant des pères avec leur nouveau rôle psychologique auprès des enfants ?
              </p>
              
              <blockquote className="text-gray-700 italic text-base sm:text-lg mb-3">
                "Le père moderne se trouve pris entre deux exigences contradictoires : réussir professionnellement
                pour assurer la sécurité matérielle de sa famille, et être présent psychologiquement pour
                le développement harmonieux de ses enfants."
              </blockquote>
              <footer className="text-sm text-orange-800">— Analyse des guides des années 1960</footer>
            </div>

            {/* Solutions proposées */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-3">🕐 Qualité vs Quantité</h4>
                <p className="text-gray-700 text-sm">
                  Privilégier des <strong>moments de qualité</strong> même courts plutôt que
                  la simple présence physique.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">🎯 Rituels familiaux</h4>
                <p className="text-gray-700 text-sm">
                  Instaurer des <strong>rituels réguliers</strong> : lecture du soir,
                  sorties du week-end, vacances.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-purple-800 mb-3">🤝 Partage des tâches</h4>
                <p className="text-gray-700 text-sm">
                  Répartition plus équitable des <strong>responsabilités éducatives</strong>
                  avec la mère.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-green-600" />
              C. La critique des "pères copains"
            </h2>

            {/* Position de Laurence Pernoud */}
            <div className="bg-red-50 p-6 rounded-xl mb-8 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-3">⚠️ La mise en garde de Laurence Pernoud</h3>
              <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                "Certains pères, par réaction contre l'autoritarisme de leur propre père, tombent dans l'excès
                inverse et veulent être les 'copains' de leurs enfants. C'est une erreur : l'enfant a besoin
                d'un père, pas d'un copain. Il a besoin de quelqu'un qui représente l'autorité, la loi,
                les limites nécessaires à son développement."
              </blockquote>
              <footer className="text-sm text-red-800 font-medium">— Laurence Pernoud, J'élève mon enfant, 1973, p. 425</footer>
            </div>

            {/* Analyse détaillée */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-300">
                <h4 className="font-semibold text-yellow-800 mb-3">🚫 Dangers du "père copain"</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Confusion des rôles</strong> : l'enfant perd ses repères</li>
                  <li>• <strong>Absence de limites</strong> : insécurité psychologique</li>
                  <li>• <strong>Manque d'autorité</strong> : difficultés éducatives</li>
                  <li>• <strong>Régression</strong> : le père devient immature</li>
                  <li>• <strong>Surcharge maternelle</strong> : la mère assume seule l'autorité</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-300">
                <h4 className="font-semibold text-green-800 mb-3">✅ Le "bon père" selon Pernoud</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Autorité bienveillante</strong> : ferme mais juste</li>
                  <li>• <strong>Présence affective</strong> : disponible émotionnellement</li>
                  <li>• <strong>Modèle stable</strong> : cohérent dans ses valeurs</li>
                  <li>• <strong>Complémentarité</strong> : soutient la mère</li>
                  <li>• <strong>Limites claires</strong> : structure l'environnement</li>
                </ul>
              </div>
            </div>

            {/* Citation sur l'équilibre */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border mb-6">
              <h3 className="font-bold text-gray-900 mb-3">⚖️ L'équilibre nécessaire</h3>
              <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                "Le père idéal n'est ni le tyran d'autrefois ni le copain d'aujourd'hui. C'est un homme
                qui sait allier fermeté et tendresse, autorité et compréhension. Il est présent sans être
                envahissant, ferme sans être rigide, affectueux sans être faible."
              </blockquote>
              <footer className="text-sm text-gray-600 font-medium">— Synthèse des recommandations de Laurence Pernoud</footer>
              
              <div className="mt-4 p-4 bg-white rounded border">
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Enjeu central</h4>
                <p className="text-gray-700 text-sm">
                  Cette critique révèle la <strong>recherche d'un nouveau modèle paternel</strong> :
                  ni autoritaire ni permissif, mais <strong>autoritatif</strong> (ferme et bienveillant).
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-orange-900 mb-3">🎯 Moyen mnémotechnique</h3>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-orange-800 mb-2">
                  &quot;PSYCHO&quot; - Les 6 révolutions du père des années 1950-1970 :
                </p>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li><strong>P</strong>sychologie : nouvelle légitimité scientifique</li>
                  <li><strong>S</strong>cientifique : justifications par la recherche</li>
                  <li><strong>Y</strong>eux ouverts : reconnaissance du rôle précoce</li>
                  <li><strong>C</strong>omplémentarité : avec la mère, pas substitution</li>
                  <li><strong>H</strong>armonie : équilibre autorité/affection</li>
                  <li><strong>O</strong>pposition : critique des "pères copains"</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">📊 Synthèse comparative</h3>
              
              <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Aspect</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Années 1920-1950</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Années 1950-1970</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Statut</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Pater familias respecté</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Acteur psychologique essentiel</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Légitimité</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Tradition et morale</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Science et psychologie</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Rôle éducatif</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Moral et disciplinaire</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Psychologique et affectif</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Implication</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">À partir de l'âge de raison</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Dès les premiers mois</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Modèle</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Autorité traditionnelle</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm">Équilibre autorité/affection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <a 
            href="/section-1" 
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Section I
          </a>
          <a 
            href="/section-3" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Section III - Le nouveau père
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}