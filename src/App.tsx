import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';
import ResultScreen from './components/ResultScreen';
import CheckoutPage from './components/CheckoutPage';
import { questions } from './data/questions';

export type Step = 'welcome' | 'quiz' | 'lead' | 'result' | 'checkout';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (eventName === 'InitiateCheckout') {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('trackCustom', eventName, data);
    }
  }
};

export default function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [ageGroup, setAgeGroup] = useState<string>('');

  const handleStart = () => {
    trackEvent('QuizStarted');
    setStep('quiz');
  };

  const handleAnswer = (points: number, optionText: string) => {
    const isAgeQuestion = currentQuestionIndex === questions.length - 1;
    
    if (isAgeQuestion) {
      setAgeGroup(optionText);
    } else {
      setScore(prev => prev + points);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      trackEvent('QuizCompleted', { score: score + (isAgeQuestion ? 0 : points) });
      setStep('lead');
    }
  };

  const handleLeadSubmit = () => {
    trackEvent('LeadCaptured');
    setStep('result');
  };

  const handleGoToCheckout = () => {
    trackEvent('InitiateCheckout');
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
        {step === 'result' && <ResultScreen key="result" score={score} ageGroup={ageGroup} onCheckout={handleGoToCheckout} />}
        {step === 'checkout' && <CheckoutPage key="checkout" />}
      </AnimatePresence>
    </div>
  );
}
