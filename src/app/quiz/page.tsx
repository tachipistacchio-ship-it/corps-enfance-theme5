'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Selon Blanche Gay, quel est le rôle principal du père dans les années 1920-1940 ?",
    options: [
      "S'occuper quotidiennement des enfants",
      "Être le chef de famille avec une autorité morale",
      "Partager équitablement les tâches avec la mère",
      "Se concentrer uniquement sur le travail"
    ],
    correct: 1,
    explanation: "Blanche Gay présente le père comme le 'pater familias', chef de famille avec une autorité morale, mais relativement absent du quotidien éducatif."
  },
  {
    id: 2,
    question: "Que critique principalement Laurence Pernoud concernant les pères des années 1960 ?",
    options: [
      "Leur autorité excessive",
      "Leur désintérêt pour les jeunes enfants",
      "Leur manque d'autorité",
      "Leur surprotection"
    ],
    correct: 1,
    explanation: "Pernoud critique les pères qui se désintéressent de leurs enfants sous prétexte qu'ils sont trop petits, soulignant que les enfants ont besoin de leur père dès le plus jeune âge."
  },
  {
    id: 3,
    question: "Selon Edwige Antier, que caractérise le 'nouveau père' depuis les années 1980 ?",
    options: [
      "Il maintient son rôle traditionnel d'autorité",
      "Il se contente d'être le pourvoyeur de la famille",
      "Il participe à l'éducation dès la naissance",
      "Il délègue tout à la mère"
    ],
    correct: 2,
    explanation: "Antier décrit le père moderne comme quelqu'un qui 'veut participer à l'éducation de son enfant dès la naissance' et ne se contente plus d'être le simple pourvoyeur."
  },
  {
    id: 4,
    question: "Quelle période marque l'émergence de la problématique du père absent ?",
    options: [
      "Années 1920-1930",
      "Années 1940-1950", 
      "Années 1960-1970",
      "Années 1980-1990"
    ],
    correct: 2,
    explanation: "Les années 1960-1970 voient l'augmentation des divorces et l'émergence de la question du père absent, avec une reconnaissance progressive de son rôle irremplaçable."
  },
  {
    id: 5,
    question: "Quel moyen mnémotechnique résume les caractéristiques du père traditionnel ?",
    options: [
      "PATER (Pater familias, Autorité, Tradition, Éducation, Recours)",
      "MODERN (Motivé, Ouvert, Disponible, Engagé, Responsable, Nouveau)",
      "CRISE (Carrière, Rôle, Implication, Séparations, Exigences)",
      "GUIDE (Garant, Unique, Invisible, Distant, Éducateur)"
    ],
    correct: 0,
    explanation: "PATER résume les 5 caractéristiques du père traditionnel : Pater familias, Autorité morale, Tradition hiérarchique, Éducation intermittente, Rôle de recours exceptionnel."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement le sujet.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront d\'atteindre l\'excellence.';
    return 'Il serait bon de revoir le cours avant de passer aux cas pratiques.';
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-orange-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Résultats du Quiz</h1>
              <p className="text-gray-600">Votre performance sur l&apos;évolution de la paternité</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="text-center">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>
                  {score}/{questions.length}
                </div>
                <div className={`text-2xl font-semibold mb-4 ${getScoreColor(score)}`}>
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <p className="text-gray-700 text-lg">
                  {getScoreMessage(score)}
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <div key={question.id} className="border rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      {isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="space-y-2 mb-3">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded-lg text-sm ${
                                optionIndex === question.correct
                                  ? 'bg-green-100 text-green-800 border border-green-300'
                                  : optionIndex === userAnswer && !isCorrect
                                  ? 'bg-red-100 text-red-800 border border-red-300'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {option}
                              {optionIndex === question.correct && (
                                <span className="ml-2 font-semibold">✓ Bonne réponse</span>
                              )}
                              {optionIndex === userAnswer && !isCorrect && (
                                <span className="ml-2 font-semibold">✗ Votre réponse</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-blue-800 text-sm">
                            <strong>Explication :</strong> {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Refaire le quiz
              </button>
              <a
                href="/cas-pratiques"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Cas pratiques
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Quiz interactif</h1>
              <p className="text-gray-600 text-sm sm:text-base">Testez vos connaissances sur l&apos;évolution de la paternité</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Question</div>
              <div className="text-2xl font-bold text-orange-600">
                {currentQuestion + 1}/{questions.length}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 text-center">
              Progression : {Math.round(progress)}%
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {question.question}
            </h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-orange-500 bg-orange-50 text-orange-900'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 ${
                currentQuestion === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Précédent
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Réponses données</div>
              <div className="text-lg font-semibold text-gray-900">
                {selectedAnswers.filter(answer => answer !== undefined).length}/{questions.length}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 ${
                selectedAnswers[currentQuestion] === undefined
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-600 hover:bg-orange-700 text-white'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}