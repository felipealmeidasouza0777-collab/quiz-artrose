import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, Activity, Moon, Calendar } from 'lucide-react';

interface Option {
  text: string;
  points: number;
  icon?: string;
}

interface Question {
  id: number;
  title: string;
  microcopy?: string;
  options: Option[];
}

interface Props {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (points: number, optionText: string) => void;
}

const getThemeIcon = (id: number) => {
  switch (id) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 7:
      return <Activity className="w-6 h-6" style={{ color: 'var(--accent-light)' }} />;
    case 6:
      return <Moon className="w-6 h-6" style={{ color: 'var(--accent-light)' }} />;
    case 8:
      return <Calendar className="w-6 h-6" style={{ color: 'var(--accent-light)' }} />;
    default:
      return <Activity className="w-6 h-6" style={{ color: 'var(--accent-light)' }} />;
  }
};

export default function QuestionScreen({ question, currentIndex, totalQuestions, onAnswer }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSelect = (index: number, points: number, optionText: string) => {
    setSelectedOption(index);
    setTimeout(() => {
      onAnswer(points, optionText);
      setSelectedOption(null); // Reset for next question
    }, 400); // Small delay to show selection feedback
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-[430px] mx-auto min-h-[100svh] flex flex-col relative"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Fixed Header */}
      <div 
        className="sticky top-0 z-50 w-full px-[20px] py-[16px]"
        style={{ backgroundColor: 'rgba(15,15,35,0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex justify-between items-center mb-[8px]">
          <span className="text-[11px] font-[700] tracking-[0.08em] uppercase" style={{ color: 'var(--text-secondary)' }}>
            PERGUNTA {currentIndex + 1} DE {totalQuestions}
          </span>
          <span className="text-[11px] font-[700] tracking-[0.08em]" style={{ color: 'var(--accent-light)' }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-[6px] w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--accent-muted)' }}>
          <motion.div 
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)' }}
            initial={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="flex-1 px-[20px] pt-[16px] pb-[32px]">
        {/* Question Card */}
        <div 
          className="mb-[24px] rounded-[20px] p-[18px]"
          style={{ backgroundColor: 'rgba(168,85,247,0.10)', border: '1px solid var(--accent-border)' }}
        >
          <div 
            className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center mb-[16px]"
            style={{ backgroundColor: 'var(--accent-muted)' }}
          >
            {getThemeIcon(question.id)}
          </div>
          
          <h2 className="text-[18px] font-[700] text-white leading-[1.4] mb-[8px]">
            {question.title}
          </h2>
          
          {question.microcopy && (
            <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
              {question.microcopy}
            </p>
          )}
        </div>

        {/* Answer Options */}
        <div className="flex flex-col gap-[10px]">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <motion.button
                key={`${question.id}-${index}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07, duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(index, option.points, option.text)}
                className="w-full flex items-center text-left p-[14px] px-[16px] rounded-[16px] transition-all duration-200 min-h-[56px]"
                style={{
                  backgroundColor: isSelected ? 'var(--accent-muted)' : 'var(--bg-card)',
                  border: `1px solid ${isSelected ? 'var(--accent-light)' : 'var(--accent-border)'}`,
                  boxShadow: isSelected ? '0 0 0 3px rgba(168,85,247,0.15)' : 'none'
                }}
              >
                <div 
                  className="w-[32px] h-[32px] rounded-[10px] flex items-center justify-center text-[16px] mr-[12px] flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  {option.icon}
                </div>
                
                <span className="text-[15px] font-[600] text-white flex-1">
                  {option.text}
                </span>

                {isSelected && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-[20px] h-[20px] rounded-full flex items-center justify-center ml-[12px] flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  >
                    <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
