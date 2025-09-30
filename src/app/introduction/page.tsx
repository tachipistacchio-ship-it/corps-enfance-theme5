import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Users, Calendar } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Introduction</h1>
              <p className="text-gray-600 text-sm sm:text-base">Contexte et sources de l&apos;étude</p>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Problématique centrale
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Comment les pères sont-ils représentés dans les guides pour les parents en France ? 
                Quelle évolution de leur rôle peut-on observer à travers ces sources ?
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Sources analysées</h2>
            <p className="text-gray-700 mb-6">
              Cette étude s&apos;appuie sur l&apos;analyse de guides parentaux, sources proches de l&apos;intime,
              qui révèlent l&apos;évolution des mentalités sur la paternité.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Blanche Gay */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold text-gray-900 mb-2">👩‍💼 Blanche Gay (1890-1980)</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Profil :</strong> Bourgeoise parisienne, épouse de Francisque Gay</p>
                  <p><strong>Œuvre :</strong> <em>Comment j&apos;élève mon enfant</em> (1927-1962)</p>
                  <p><strong>Succès :</strong> Plus de 200 000 exemplaires, 21 éditions</p>
                  <p><strong>Approche :</strong> Intègre les principes chrétiens d&apos;éducation</p>
                  <p><strong>Évolution :</strong> Dernières éditions insistent plus sur le rôle du père</p>
                  <p><strong>Public :</strong> Jeunes filles et jeunes mères</p>
                </div>
              </div>

              {/* Laurence Pernoud */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold text-gray-900 mb-2">📰 Laurence Pernoud (1918-2009)</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Profil :</strong> Journaliste, épouse de Georges Pernoud</p>
                  <p><strong>Œuvre :</strong> <em>J&apos;élève mon enfant</em> (1965)</p>
                  <p><strong>Succès :</strong> 200 000 tirages, 70 pays, 40 traductions</p>
                  <p><strong>Approche :</strong> S&apos;appuie sur des travaux scientifiques</p>
                  <p><strong>Engagement :</strong> Milite pour la reconnaissance des droits des mères</p>
                  <p><strong>Collaboration :</strong> Travaille avec Simone Veil</p>
                </div>
              </div>

              {/* Edwige Antier */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold text-gray-900 mb-2">👩‍⚕️ Edwige Antier (1942-)</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Profil :</strong> Pédiatre, psychopathologie, influence de Dolto</p>
                  <p><strong>Enfance :</strong> Vietnam, Nouvelle-Calédonie (contingence des normes)</p>
                  <p><strong>Médias :</strong> Chroniqueuse Radio France (1987-2006)</p>
                  <p><strong>Position :</strong> "Néo-féministe" vs E. Badinter</p>
                  <p><strong>Politique :</strong> Députée UMP/UDI (2009-2012)</p>
                  <p><strong>Combat :</strong> Lois contre les châtiments corporels (VEO 2019)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Période d&apos;étude : 1920-1990
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Point de départ (1920)</h4>
                  <p className="text-gray-700 text-sm">
                    Première édition de Blanche GAY, émergence des premiers guides parentaux modernes
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Point d&apos;arrivée (1990)</h4>
                  <p className="text-gray-700 text-sm">
                    Avant le développement d&apos;internet, période où les ouvrages étaient essentiels 
                    pour la diffusion d&apos;informations sur la parentalité
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-yellow-900 mb-3">💡 Point clé à retenir</h3>
              <p className="text-yellow-800">
                Ces guides reflètent les évolutions sociales et les transformations des représentations 
                de la masculinité, de la virilité et de la paternité sur près de 70 ans d&apos;histoire française.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div></div>
          <a 
            href="/section-1" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Section I - L&apos;apparition du père
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}