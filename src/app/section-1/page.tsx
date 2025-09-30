import BackToPlanButton from '@/components/content/BackToPlanButton';
import { TrendingUp, Crown, Shield, AlertTriangle } from 'lucide-react';

export default function Section1Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Section I</h1>
              <p className="text-gray-600 text-sm sm:text-base">L&apos;apparition du père (années 1920-1950)</p>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-3">
                Contexte historique
              </h2>
              <p className="text-green-800">
                Dans les guides de Blanche Gay, le père émerge progressivement comme figure éducative, 
                mais reste marqué par l&apos;ambivalence entre autorité traditionnelle et invisibilité quotidienne.
              </p>
            </div>

        {/* Citation fondamentale */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-900 mb-3">📖 Citation fondamentale de Blanche Gay (1951)</h3>
          <blockquote className="text-gray-700 italic mb-4 text-base sm:text-lg leading-relaxed">
            "Il espère leur indiquer les moyens d'utiliser l'influence quasi toute-puissante
            qu'exerce la mère sur son tout jeune enfant pendant les sept premières années de sa vie,
            où elle est à ses yeux l'être le plus puissant, le meilleur et le plus tendrement aimé"
          </blockquote>
          <footer className="text-sm text-blue-800 font-medium">— Blanche Gay, Comment j'élève mon enfant, 1951, p. XI</footer>
          
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-semibold text-gray-800 mb-2">🔍 Analyse de cette citation</h4>
            <p className="text-gray-700">
              Cette citation révèle l'<strong>ambivalence fondamentale</strong> : le père est reconnu comme
              nécessaire mais reste en retrait. On observe ici la <strong>théorie des deux sphères</strong>
              et la différenciation des rôles parentaux selon le sexe.
            </p>
          </div>
        </div>

        {/* Section A enrichie */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">A. Une figure du pater familias (années 1920-1940)</h2>
          
          {/* Invisibilité quotidienne */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">👻 Un père invisible dans le quotidien</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 italic mb-3">
                "l'action du père, naturellement restreinte pendant la première année, et même pendant la seconde,
                peut maintenant s'exercer efficacement, et prêter à la vôtre un très utile appui"
              </blockquote>
              <footer className="text-sm text-gray-600">— Blanche Gay, 1951, p. 372</footer>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
                <p className="text-gray-700">
                  <strong>⚠️ Paradoxe :</strong> Le père est à la fois <em>pater familias</em> (chef de famille)
                  et invisible dans le quotidien de l'enfant. Cette ambivalence caractérise toute la période.
                </p>
              </div>
            </div>
          </div>

          {/* Autorité familiale */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">👑 Une figure d'autorité familiale</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-green-800 mb-2">🎯 Soutien en cas de problème</h4>
              <blockquote className="text-gray-700 italic mb-3">
                "qu'elle réserve aux grandes occasions le recours à l'intervention paternelle.
                C'est le meilleur moyen de sauvegarder l'autorité de l'un et de l'autre"
              </blockquote>
              <footer className="text-sm text-green-700">— Blanche Gay, 1951, p. 377</footer>
            </div>

            {/* Citation longue sur la hiérarchie */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
              <h4 className="font-bold text-purple-900 mb-3">👨‍👩‍👧‍👦 La hiérarchie familiale selon Blanche Gay</h4>
              <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                "le père est donc le chef de famille, mais la mère est reine au foyer ; le père donne aux enfants
                l'exemple des égards qui sont dus à cette reine. La mère ne craint pas à son tour de donner l'exemple
                de la docilité à l'autorité du père ; elle sait qu'en grandissant aux yeux des enfants, elle ne se
                rabaisse pas elle-même, bien au contraire. Cette autorité qu'elle consacre par son respect soutiendra
                la sienne propre ; les enfants sentiront que le père n'accepterait à aucun prix le plus léger
                manquement de leur part envers leur mère."
              </blockquote>
              <footer className="text-sm text-purple-800 font-medium">— Blanche Gay, 1951, p. 378</footer>
              
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-blue-800 mb-2">🔑 Concepts clés</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Chef de famille</strong> vs <strong>Reine au foyer</strong></li>
                    <li>• Subordination acceptée de la femme</li>
                    <li>• Autorité complémentaire</li>
                    <li>• Respect mutuel hiérarchisé</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-red-800 mb-2">⚖️ Enjeux</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Division genrée des rôles</li>
                    <li>• Autorité paternelle préservée</li>
                    <li>• Soutien mutuel des parents</li>
                    <li>• Modèle pour les enfants</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Éducation morale */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">⚖️ Responsabilité dans l'éducation morale</h3>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <blockquote className="text-gray-700 italic text-base sm:text-lg mb-3">
                "ce serait une lamentable erreur de croire et de dire que toute l'éducation morale des enfants
                revient à la mère : il manquera toujours quelque chose au bon équilibre moral, là où le rôle
                éducatif du père n'aura pas été bien tenu. La vie physique ne peut pas commencer sans lui ;
                <strong>la vie morale ne doit pas se développer sans lui</strong>"
              </blockquote>
              <footer className="text-sm text-red-800">— Blanche Gay, version 1927, p. 352</footer>
            </div>
          </div>

          {/* Méthode de dressage */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 La méthode du "dressage" précoce</h3>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Citation révélatrice (méthodes d'époque)</h4>
              <blockquote className="text-gray-700 italic text-sm leading-relaxed mb-3">
                "Je veux bien te concéder le mot et ne parler que de « dressage », mais je prétends : 1°) qu'il faut
                commencer dès le premier jour ; 2°) que ce dressage est le fondement indispensable d'une bonne éducation.
                (...) Si vous vous laissez apitoyer et si vous vous précipitez à chaque vagissement, vous êtes perdus !
                Vous deviendrez, fatalement, les esclaves de ce petit être ; il sentira qu'il vous manœuvre,
                qu'il vous domine, et vous risquez fort de ne plus trouver jamais d'assise solide pour votre autorité."
              </blockquote>
              <footer className="text-sm text-yellow-700">— Blanche Gay (méthodes des années 1920-1940)</footer>
              
              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-sm text-gray-600">
                  <strong>📝 Note historique :</strong> Ces méthodes reflètent les conceptions éducatives de l'époque,
                  très différentes des approches contemporaines centrées sur l'attachement et la bienveillance.
                </p>
              </div>
            </div>
          </div>
        </section>

            <div className="bg-yellow-50 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Une figure d&apos;autorité familiale
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-gray-900 mb-2">Hiérarchie familiale</h4>
                  <blockquote className="italic text-gray-700 mb-3">
                    &quot;le père est donc le chef de famille, mais la mère est reine au foyer ; 
                    le père donne aux enfants l&apos;exemple des égards qui sont dus à cette reine&quot;
                  </blockquote>
                  <p className="text-sm text-gray-600">
                    Division genrée des rôles avec subordination acceptée de la femme et des enfants au père.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-gray-900 mb-2">Éducation morale</h4>
                  <blockquote className="italic text-gray-700 mb-3">
                    &quot;ce serait une lamentable erreur de croire et de dire que toute l&apos;éducation morale 
                    des enfants revient à la mère : il manquera toujours quelque chose au bon équilibre moral, 
                    là où le rôle éducatif du père n&apos;aura pas été bien tenu&quot;
                  </blockquote>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              B. L&apos;implication ambivalente des pères (années 1940-1950)
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="font-bold text-green-900 mb-3">✅ L&apos;éloge des pères attentionnés</h3>
                <p className="text-green-800 text-sm mb-3">
                  Vision nataliste : les pères modernes sont plus conscients de leurs devoirs éducatifs.
                </p>
                <blockquote className="text-xs italic text-green-700 border-l-2 border-green-400 pl-3">
                  &quot;Les parents prennent davantage conscience de leurs devoirs. Ils sont de plus en plus 
                  pénétrés des principes modernes&quot;
                </blockquote>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="font-bold text-red-900 mb-3">⚠️ La critique ferme de certains pères</h3>
                <p className="text-red-800 text-sm mb-3">
                  Dénonciation de deux écueils : la faiblesse excessive et la sévérité despotique.
                </p>
                <blockquote className="text-xs italic text-red-700 border-l-2 border-red-400 pl-3">
                  &quot;Il devra éviter deux écueils : la faiblesse (...) la sévérité excessive&quot;
                </blockquote>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-orange-900 mb-3">🎯 Moyen mnémotechnique</h3>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-orange-800 mb-2">
                  &quot;PATER&quot; - Les 5 caractéristiques du père traditionnel :
                </p>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li><strong>P</strong>ater familias (chef de famille)</li>
                  <li><strong>A</strong>utorité morale</li>
                  <li><strong>T</strong>radition hiérarchique</li>
                  <li><strong>E</strong>ducation intermittente</li>
                  <li><strong>R</strong>ôle de recours exceptionnel</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">📊 Bilan de la période 1920-1950</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <p className="text-sm font-medium">Émergence du père éducateur</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <p className="text-sm font-medium">Maintien de la hiérarchie traditionnelle</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <p className="text-sm font-medium">Ambivalence autorité/invisibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <a 
            href="/introduction" 
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Introduction
          </a>
          <a 
            href="/section-2" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Section II - Présence nécessaire mais compliquée
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}