import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';
import ResultScreen from './components/ResultScreen';
import CheckoutPage from './components/CheckoutPage';
import { questions } from './data/questions';

export type Step = 'welcome' | 'quiz' | 'lead' | 'result' | 'checkout';

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
      setStep('lead');
    }
  };

  const handleLeadSubmit = () => {
    setStep('result');
  };

  const handleGoToCheckout = () => {
    setStep('checkout');
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
        {step === 'lead' && <LeadCaptureScreen key="lead" onSubmit={handleLeadSubmit} />}
        {step === 'result' && <ResultScreen key="result" score={score} onCheckout={handleGoToCheckout} />}
        {step === 'checkout' && <CheckoutPage key="checkout" />}
      </AnimatePresence>
    </div>
  );
}
