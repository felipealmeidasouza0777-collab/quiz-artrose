import { motion } from 'motion/react';
import { useState } from 'react';

interface Option {
  text: string;
  points: number;
}

interface Question {
  id: number;
  title: string;
  image: string;
  options: Option[];
}

interface Props {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (points: number) => void;
}

export default function QuestionScreen({ question, currentIndex, totalQuestions, onAnswer }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSelect = (index: number, points: number) => {
    setSelectedOption(index);
    setTimeout(() => {
      onAnswer(points);
      setSelectedOption(null); // Reset for next question
    }, 400); // Small delay to show selection feedback
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-md mx-auto min-h-screen flex flex-col bg-white"
    >
      {/* Progress Bar */}
      <div className="pt-8 pb-4 px-6 sticky top-0 bg-white z-10">
        <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
          <span>Pergunta {currentIndex + 1} de {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-8">
        <div className="mb-6 rounded-2xl overflow-hidden shadow-sm aspect-video relative">
          <img 
            src={question.image} 
            alt="Ilustração da pergunta" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-6 leading-tight">
          {question.title}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(index, option.points)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                selectedOption === index 
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-md' 
                  : 'border-slate-100 bg-white text-slate-700 hover:border-emerald-200 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg font-medium">{option.text}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
