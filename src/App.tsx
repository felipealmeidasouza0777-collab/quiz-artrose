import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';

export type Step = 'welcome' | 'quiz' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => setStep('quiz');

  const handleAnswer = (points: number) => {
    setScore(score + points);
    setAnswers([...answers, points]);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('result');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      <AnimatePresence mode="wait">
        {step === 'welcome' && <WelcomeScreen key="welcome" onStart={handleStart} />}
        {step === 'quiz' && (
          <QuestionScreen 
            key={`question-${currentQuestionIndex}`}
            question={questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {step === 'result' && <ResultScreen key="result" score={score} />}
      </AnimatePresence>
    </div>
  );
}
