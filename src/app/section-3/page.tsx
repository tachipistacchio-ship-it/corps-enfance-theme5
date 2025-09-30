/* eslint-disable react/no-unescaped-entities */
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Users, Scale, Lightbulb } from 'lucide-react';

export default function Section3Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Section III</h1>
              <p className="text-gray-600 text-sm sm:text-base">Des pères intégrés pleinement dans la parentalité (depuis les années 1980)</p>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                Révolution de la paternité moderne
              </h2>
              <p className="text-blue-800">
                Depuis les années 1980, les guides parentaux témoignent d&apos;une transformation radicale : 
                le père devient un acteur à part entière de l&apos;éducation, dès la naissance.
              </p>
            </div>

            {/* Section A enrichie */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-6">A. La révolution de la paternité moderne</h2>
              
              {/* Citation fondamentale d'Edwige Antier */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8 border">
                <h3 className="font-bold text-green-900 mb-3">📖 Citation fondamentale d'Edwige Antier (1989)</h3>
                <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                  "Le père d'aujourd'hui veut participer à l'éducation de son enfant dès la naissance. 
                  Il ne se contente plus d'être le pourvoyeur de la famille ou l'autorité suprême. 
                  Il veut être un père proche, affectueux, présent au quotidien. Cette évolution est 
                  fondamentale pour l'équilibre de l'enfant et de la famille moderne."
                </blockquote>
                <footer className="text-sm text-green-800 font-medium">— Edwige Antier, Élever son enfant, 1989, p. 156</footer>
                
                <div className="mt-4 p-4 bg-white rounded border">
                  <h4 className="font-semibold text-gray-800 mb-2">🔍 Analyse de cette révolution</h4>
                  <p className="text-gray-700 text-sm">
                    Cette citation marque l'<strong>avènement du "nouveau père"</strong> : actif, impliqué, 
                    affectueux et présent dès la naissance. C'est une rupture complète avec le modèle traditionnel.
                  </p>
                </div>
              </div>

              {/* Les caractéristiques du nouveau père */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👶 Les caractéristiques du "nouveau père"</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-3">🍼 Implication précoce</h4>
                    <blockquote className="text-gray-700 italic mb-3 text-sm">
                      "Le père moderne n'attend plus que l'enfant sache parler pour s'en occuper. 
                      Il participe aux soins dès les premiers jours : biberons, changes, bains..."
                    </blockquote>
                    <footer className="text-xs text-blue-700">— Évolution des pratiques années 1980</footer>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-3">💝 Expressivité affective</h4>
                    <blockquote className="text-gray-700 italic mb-3 text-sm">
                      "Les pères d'aujourd'hui n'hésitent plus à exprimer leur tendresse, 
                      à câliner leurs enfants, à leur dire qu'ils les aiment."
                    </blockquote>
                    <footer className="text-xs text-purple-700">— Libération émotionnelle masculine</footer>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
                  <h4 className="font-semibold text-yellow-800 mb-3">🎯 Les "nouveaux gestes paternels"</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">🍼 Soins quotidiens</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Biberons et repas</li>
                        <li>• Changes et toilette</li>
                        <li>• Coucher et réveil</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">🎮 Jeux et éveil</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Jeux d'éveil</li>
                        <li>• Lectures d'histoires</li>
                        <li>• Activités créatives</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">💕 Affection</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Câlins et bisous</li>
                        <li>• Mots tendres</li>
                        <li>• Écoute active</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* L'importance selon Edwige Antier */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🧠 L'importance du père selon Edwige Antier</h3>
                
                <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-3">⚠️ Citation sur la carence paternelle</h4>
                  <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-3">
                    "L'absence du père, physique ou psychologique, peut avoir des conséquences graves 
                    sur le développement de l'enfant. Elle peut entraîner des troubles du comportement, 
                    des difficultés scolaires, des problèmes d'identité sexuelle."
                  </blockquote>
                  <footer className="text-sm text-red-700">— Edwige Antier, 1989, p. 158</footer>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">✅ Bénéfices de la présence paternelle</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• <strong>Sécurité affective</strong> : double ancrage parental</li>
                      <li>• <strong>Équilibre psychique</strong> : complémentarité des rôles</li>
                      <li>• <strong>Socialisation</strong> : ouverture au monde extérieur</li>
                      <li>• <strong>Autonomie</strong> : encouragement à l'indépendance</li>
                      <li>• <strong>Confiance en soi</strong> : valorisation de l'enfant</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">⚠️ Risques de l'absence paternelle</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• <strong>Troubles comportementaux</strong> : agressivité, repli</li>
                      <li>• <strong>Difficultés scolaires</strong> : manque de concentration</li>
                      <li>• <strong>Problèmes identitaires</strong> : confusion des rôles</li>
                      <li>• <strong>Insécurité affective</strong> : manque de repères</li>
                      <li>• <strong>Surprotection maternelle</strong> : déséquilibre familial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section B : Complémentarité parentale */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">B. La complémentarité parentale</h2>
              
              {/* Théorie de la complémentarité */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-3">🤝 La théorie de la complémentarité selon Antier</h3>
                <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                  "Père et mère ne sont pas interchangeables. Chacun apporte quelque chose d'unique à l'enfant. 
                  La mère apporte généralement la sécurité, la tendresse, l'intuition. Le père apporte 
                  l'ouverture sur le monde, l'encouragement à l'autonomie, la structuration."
                </blockquote>
                <footer className="text-sm text-blue-800 font-medium">— Edwige Antier, 1989, p. 162</footer>
              </div>

              {/* Tableau comparatif détaillé */}
              <div className="bg-white rounded-lg border overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-4">
                  <h4 className="font-bold text-gray-900 text-center">👨‍👩‍👧‍👦 Complémentarité des rôles parentaux</h4>
                </div>
                <div className="overflow-x-auto">
                  <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Domaine</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-pink-800 text-xs sm:text-sm">Apport maternel</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-blue-800 text-xs sm:text-sm">Apport paternel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Sécurité</td>
                      <td className="p-2 sm:p-3 text-pink-700 text-xs sm:text-sm">Sécurité de base, cocon protecteur</td>
                      <td className="p-2 sm:p-3 text-blue-700 text-xs sm:text-sm">Sécurité d'exploration, confiance en soi</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Relation au monde</td>
                      <td className="p-2 sm:p-3 text-pink-700 text-xs sm:text-sm">Intériorité, intimité familiale</td>
                      <td className="p-2 sm:p-3 text-blue-700 text-xs sm:text-sm">Extériorité, ouverture sociale</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Apprentissages</td>
                      <td className="p-2 sm:p-3 text-pink-700 text-xs sm:text-sm">Patience, répétition, douceur</td>
                      <td className="p-2 sm:p-3 text-blue-700 text-xs sm:text-sm">Défi, encouragement, dépassement</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Jeux</td>
                      <td className="p-2 sm:p-3 text-pink-700 text-xs sm:text-sm">Jeux calmes, créatifs, d'imitation</td>
                      <td className="p-2 sm:p-3 text-blue-700 text-xs sm:text-sm">Jeux physiques, d'aventure, de règles</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm">Autorité</td>
                      <td className="p-2 sm:p-3 text-pink-700 text-xs sm:text-sm">Négociation, explication, souplesse</td>
                      <td className="p-2 sm:p-3 text-blue-700 text-xs sm:text-sm">Fermeté, règles claires, constance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
                </div>
              </div>

              {/* Citation sur l'équilibre */}
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg border">
                <h4 className="font-bold text-gray-900 mb-3">⚖️ L'équilibre nécessaire</h4>
                <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                  "L'enfant a besoin de ces deux pôles pour se construire harmonieusement. 
                  Trop de maternage l'étouffe, trop de paternage l'insécurise. C'est dans 
                  l'alternance et la complémentarité qu'il trouve son équilibre."
                </blockquote>
                <footer className="text-sm text-gray-600 font-medium">— Edwige Antier, synthèse des recommandations</footer>
              </div>
            </section>

            {/* Section C : Le divorce et la garde */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-6">C. Le divorce et la question de la garde</h2>
              
              {/* Contexte statistique */}
              <div className="bg-red-50 p-6 rounded-lg mb-8 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-3">📊 L'explosion des divorces (années 1980-1990)</h3>
                <p className="text-gray-700 mb-4">
                  Les années 1980-1990 voient une <strong>explosion des divorces</strong> qui pose de nouvelles 
                  questions sur le rôle du père. La garde des enfants, traditionnellement accordée à la mère, 
                  commence à être questionnée.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">📈 Évolution des mentalités</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Reconnaissance du rôle paternel</li>
                      <li>• Critique de la garde automatique à la mère</li>
                      <li>• Émergence de la garde alternée</li>
                      <li>• Droits du père revendiqués</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">⚖️ Nouveaux enjeux juridiques</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Intérêt supérieur de l'enfant</li>
                      <li>• Égalité parentale revendiquée</li>
                      <li>• Médiation familiale</li>
                      <li>• Coparentalité post-divorce</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Position d'Edwige Antier sur le divorce */}
              <div className="bg-yellow-50 p-6 rounded-lg mb-8 border border-yellow-300">
                <h3 className="font-bold text-yellow-800 mb-3">👨‍⚖️ La position d'Edwige Antier sur la garde</h3>
                <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                  "En cas de divorce, il faut absolument préserver la relation de l'enfant avec ses deux parents. 
                  La garde exclusive à la mère n'est plus justifiée quand le père s'est montré impliqué. 
                  L'enfant a besoin de ses deux parents, même séparés."
                </blockquote>
                <footer className="text-sm text-yellow-700 font-medium">— Edwige Antier, années 1980-1990</footer>
                
                <div className="mt-4 p-4 bg-white rounded border">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Recommandations pratiques</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>Maintenir le lien</strong> : visites régulières et fréquentes</li>
                    <li>• <strong>Éviter les conflits</strong> : ne pas impliquer l'enfant</li>
                    <li>• <strong>Coopération parentale</strong> : décisions communes importantes</li>
                    <li>• <strong>Stabilité</strong> : routines et repères maintenus</li>
                  </ul>
                </div>
              </div>

              {/* Impact sur l'enfant */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-3">✅ Divorce bien géré</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Maintien des liens</strong> avec les deux parents</li>
                    <li>• <strong>Coopération</strong> dans l'éducation</li>
                    <li>• <strong>Respect mutuel</strong> des ex-conjoints</li>
                    <li>• <strong>Stabilité émotionnelle</strong> de l'enfant</li>
                    <li>• <strong>Adaptation progressive</strong> à la nouvelle situation</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-3">❌ Divorce mal géré</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Rupture du lien paternel</strong> ou maternel</li>
                    <li>• <strong>Conflits permanents</strong> entre parents</li>
                    <li>• <strong>Instrumentalisation</strong> de l'enfant</li>
                    <li>• <strong>Troubles psychologiques</strong> chez l'enfant</li>
                    <li>• <strong>Loyauté conflictuelle</strong> et culpabilité</li>
                  </ul>
                </div>
              </div>
            </section>

             {/* Section D : Les invisibles des guides */}
             <section className="mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-6">D. Les "invisibles" des guides de puériculture</h2>
               
               {/* Introduction aux invisibles */}
               <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-gray-500">
                 <h3 className="font-bold text-gray-900 mb-3">👻 Qui sont les "invisibles" ?</h3>
                 <p className="text-gray-700 mb-4">
                   Malgré l'évolution des mentalités, certaines catégories de pères restent <strong>totalement absentes</strong> 
                   des guides de puériculture des années 1980-1990. Cette invisibilité révèle les limites de la "révolution paternelle" 
                   et les normes sociales encore très présentes.
                 </p>
                 
                 <div className="bg-white p-4 rounded border">
                   <h4 className="font-semibold text-gray-800 mb-2">🔍 Analyse sociologique</h4>
                   <p className="text-gray-700 text-sm">
                     Cette absence n'est pas anodine : elle reflète une conception encore <strong>normative de la paternité</strong>, 
                     limitée au modèle hétérosexuel, marié, d'âge "approprié" et socialement intégré.
                   </p>
                 </div>
               </div>

               {/* Les pères homosexuels */}
               <div className="mb-8">
                 <h3 className="text-xl font-bold text-purple-900 mb-4">🏳️‍🌈 Les pères homosexuels : une absence totale</h3>
                 
                 <div className="bg-purple-50 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
                   <h4 className="font-semibold text-purple-800 mb-3">📊 Constat d'invisibilité</h4>
                   <p className="text-gray-700 mb-4">
                     <strong>Aucun guide de puériculture</strong> des années 1980-1990 ne mentionne la possibilité d'une paternité homosexuelle. 
                     Cette absence est d'autant plus frappante que l'époque voit naître les premiers débats sur l'homoparentalité.
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="bg-white p-4 rounded border">
                       <h5 className="font-medium text-gray-800 mb-2">🚫 Tabous de l'époque</h5>
                       <ul className="text-gray-700 space-y-1 text-sm">
                         <li>• Homosexualité encore stigmatisée</li>
                         <li>• Adoption fermée aux couples homosexuels</li>
                         <li>• Procréation médicalement assistée interdite</li>
                         <li>• Modèle familial hétéronormatif dominant</li>
                       </ul>
                     </div>
                     <div className="bg-white p-4 rounded border">
                       <h5 className="font-medium text-gray-800 mb-2">💭 Questions non posées</h5>
                       <ul className="text-gray-700 space-y-1 text-sm">
                         <li>• Peut-on être père et homosexuel ?</li>
                         <li>• Comment élever un enfant en couple gay ?</li>
                         <li>• Quels modèles d'identification proposer ?</li>
                         <li>• Comment gérer le regard social ?</li>
                       </ul>
                     </div>
                   </div>
                 </div>

                 <div className="bg-red-50 p-6 rounded-lg border border-red-300">
                   <h4 className="font-semibold text-red-800 mb-3">⚠️ Conséquences de cette invisibilité</h4>
                   <p className="text-gray-700 text-sm">
                     Cette absence prive les pères homosexuels de <strong>ressources éducatives</strong> et de <strong>légitimation sociale</strong>. 
                     Elle contribue à maintenir l'idée que la paternité homosexuelle serait "contre-nature" ou problématique pour l'enfant.
                   </p>
                 </div>
               </div>

               {/* Les jeunes pères */}
               <div className="mb-8">
                 <h3 className="text-xl font-bold text-orange-900 mb-4">👶 Les jeunes pères : une paternité "déviante"</h3>
                 
                 <div className="bg-orange-50 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
                   <h4 className="font-semibold text-orange-800 mb-3">📈 Un phénomène social croissant</h4>
                   <p className="text-gray-700 mb-4">
                     Les années 1980-1990 voient une augmentation des <strong>grossesses adolescentes</strong>, mais les guides 
                     de puériculture ignorent totalement la spécificité de la paternité précoce.
                   </p>
                   
                   <div className="bg-white p-4 rounded border mb-4">
                     <h5 className="font-medium text-gray-800 mb-2">🎯 Problématiques spécifiques ignorées</h5>
                     <div className="grid md:grid-cols-2 gap-4">
                       <div>
                         <h6 className="font-medium text-orange-700 mb-1">Défis psychologiques</h6>
                         <ul className="text-gray-600 space-y-1 text-xs">
                           <li>• Immaturité émotionnelle</li>
                           <li>• Identité en construction</li>
                           <li>• Pression sociale et familiale</li>
                           <li>• Culpabilité et responsabilité</li>
                         </ul>
                       </div>
                       <div>
                         <h6 className="font-medium text-orange-700 mb-1">Défis pratiques</h6>
                         <ul className="text-gray-600 space-y-1 text-xs">
                           <li>• Précarité économique</li>
                           <li>• Interruption des études</li>
                           <li>• Manque d'expérience</li>
                           <li>• Isolement social</li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
                   <h4 className="font-semibold text-yellow-800 mb-3">🤔 Une approche moralisatrice</h4>
                   <p className="text-gray-700 text-sm mb-3">
                     Quand la paternité précoce est évoquée, c'est généralement sous l'angle de la <strong>"prévention"</strong> 
                     ou du <strong>"problème social"</strong>, jamais comme une réalité à accompagner positivement.
                   </p>
                   <blockquote className="text-gray-600 italic text-sm border-l-2 border-yellow-400 pl-3">
                     "Les guides préfèrent ignorer ces situations plutôt que de proposer des conseils adaptés, 
                     perpétuant ainsi la stigmatisation de ces jeunes pères."
                   </blockquote>
                 </div>
               </div>

               {/* Les pères en situation de précarité */}
               <div className="mb-8">
                 <h3 className="text-xl font-bold text-red-900 mb-4">💸 Les pères en situation de précarité</h3>
                 
                 <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                   <h4 className="font-semibold text-red-800 mb-3">🏠 Une paternité de classe</h4>
                   <p className="text-gray-700 mb-4">
                     Les guides s'adressent implicitement à une <strong>classe moyenne éduquée</strong>, ignorant les réalités 
                     des pères en situation de précarité économique ou sociale.
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="bg-white p-4 rounded border">
                       <h5 className="font-medium text-gray-800 mb-2">🎯 Réalités ignorées</h5>
                       <ul className="text-gray-700 space-y-1 text-sm">
                         <li>• Chômage et instabilité professionnelle</li>
                         <li>• Logements précaires ou surpeuplés</li>
                         <li>• Manque d'accès aux soins</li>
                         <li>• Stress financier constant</li>
                       </ul>
                     </div>
                     <div className="bg-white p-4 rounded border">
                       <h5 className="font-medium text-gray-800 mb-2">💡 Besoins spécifiques</h5>
                       <ul className="text-gray-700 space-y-1 text-sm">
                         <li>• Conseils économiques pratiques</li>
                         <li>• Ressources d'aide sociale</li>
                         <li>• Soutien psychologique adapté</li>
                         <li>• Valorisation malgré les difficultés</li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Conclusion sur les invisibles */}
               <div className="bg-gradient-to-r from-gray-100 to-blue-100 p-6 rounded-lg border">
                 <h3 className="font-bold text-gray-900 mb-3">🔍 Bilan : Une révolution paternelle incomplète</h3>
                 <p className="text-gray-700 mb-4">
                   L'analyse des "invisibles" révèle que la <strong>"révolution paternelle"</strong> des années 1980-1990 
                   reste limitée à un modèle normatif : père hétérosexuel, marié, d'âge "approprié", socialement intégré.
                 </p>
                 
                 <div className="bg-white p-4 rounded border">
                   <h4 className="font-semibold text-gray-800 mb-2">📚 Enseignements méthodologiques</h4>
                   <p className="text-gray-700 text-sm">
                     Cette invisibilité nous enseigne l'importance d'analyser <strong>ce qui n'est pas dit</strong> dans les sources. 
                     Les silences sont aussi révélateurs que les discours explicites pour comprendre les normes sociales d'une époque.
                   </p>
                 </div>
               </div>
             </section>

             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-6 w-6 text-purple-600" />
              B. Les invisibles des guides : persistance de certains modèles
            </h2>

            <div className="bg-purple-50 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-purple-900 mb-4">Limites du discours égalitaire</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-gray-900 mb-2">⚠️ Persistance des stéréotypes</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Malgré les discours progressistes, certains guides maintiennent des distinctions genrées subtiles.
                  </p>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Mère = instinct naturel / Père = apprentissage</li>
                    <li>• Répartition implicite des tâches</li>
                    <li>• Valorisation différenciée des compétences</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-gray-900 mb-2">🔍 Les &quot;invisibles&quot;</h4>
                  <p className="text-gray-700 text-sm">
                    Certaines catégories de pères restent peu représentées dans les guides : 
                    pères séparés, pères adoptifs, familles recomposées, diversité sociale et culturelle.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              C. Vers une parentalité partagée : enjeux contemporains
            </h2>

            <div className="bg-yellow-50 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-yellow-900 mb-4">Les défis du père moderne</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">💼 Conciliation vie pro/perso</h4>
                  <p className="text-yellow-700 text-sm">
                    Tension entre exigences professionnelles et nouvelles attentes paternelles.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎭 Construction identitaire</h4>
                  <p className="text-yellow-700 text-sm">
                    Redéfinition de la masculinité à travers la paternité engagée.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-gray-900 mb-2">🚀 Évolutions récentes</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Congé paternité étendu (2021 : 25 jours en France)</li>
                  <li>• Reconnaissance légale de la coparentalité</li>
                  <li>• Émergence des &quot;papas poules&quot;</li>
                  <li>• Groupes de parole et soutien entre pères</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-orange-900 mb-3">🎯 Moyen mnémotechnique</h3>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-orange-800 mb-2">
                  &quot;MODERN&quot; - Les 6 caractéristiques du père contemporain :
                </p>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li><strong>M</strong>otivé dès la naissance</li>
                  <li><strong>O</strong>uvert aux soins quotidiens</li>
                  <li><strong>D</strong>isponible émotionnellement</li>
                  <li><strong>E</strong>ngagé dans les décisions</li>
                  <li><strong>R</strong>esponsable partagé</li>
                  <li><strong>N</strong>ouveau modèle de masculinité</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">📈 Évolution chronologique de la paternité</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">1920</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Pater familias</h4>
                    <p className="text-gray-600 text-sm">Autorité morale, présence intermittente</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">1950</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Père absent-présent</h4>
                    <p className="text-gray-600 text-sm">Accaparé par le travail, rôle questionné</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">1980</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Nouveau père</h4>
                    <p className="text-gray-600 text-sm">Implication précoce, parentalité partagée</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">2020</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Père moderne</h4>
                    <p className="text-gray-600 text-sm">Égalité parentale, diversité des modèles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <a 
            href="/section-2" 
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Section II
          </a>
          <a 
            href="/quiz" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Quiz - Évaluation des connaissances
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}