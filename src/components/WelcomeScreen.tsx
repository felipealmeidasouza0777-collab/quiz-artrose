import { motion } from 'motion/react';
import { Heart, ShieldCheck, Clock, Activity } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-[430px] mx-auto min-h-[100svh] flex flex-col items-center justify-between px-[20px] pt-[48px] pb-[24px] relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Top Background Gradient & Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none" style={{ background: 'radial-gradient(circle at center top, rgba(124, 58, 237, 0.2) 0%, transparent 70%)' }} />
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center w-full z-10 mt-4">
        <div 
          className="mb-[16px] px-4 py-1.5 rounded-[20px] text-[11px] font-[700] tracking-[0.08em] uppercase"
          style={{ backgroundColor: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', color: '#c4b5fd' }}
        >
          DIAGNÓSTICO GRATUITO
        </div>

        <div className="relative flex items-center justify-center w-[88px] h-[88px] rounded-full mb-[16px]">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ border: '2px solid rgba(168,85,247,0.2)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 0.1 }}
            className="absolute inset-2 rounded-full"
            style={{ border: '2px solid rgba(168,85,247,0.4)' }}
          />
          <Heart className="w-8 h-8 relative z-10" style={{ color: '#a855f7' }} fill="currentColor" />
        </div>

        <h1 className="text-[22px] font-[800] leading-[1.3] text-white mb-[16px]">
          Suas dores articulares têm uma causa — descubra qual
        </h1>
        
        <p className="text-[15px] font-[400] leading-[1.6] mb-[24px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
          8 perguntas · resultado imediato · 100% gratuito
        </p>

        {/* Social Proof Card */}
        <div 
          className="w-full flex items-center p-3 rounded-[16px] mb-[32px]"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <div className="flex mr-3">
            <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2 border-[#1a1833] relative z-30" style={{ backgroundColor: '#7c3aed' }}>M</div>
            <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2 border-[#1a1833] relative z-20 -ml-[6px]" style={{ backgroundColor: '#9333ea' }}>J</div>
            <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2 border-[#1a1833] relative z-10 -ml-[6px]" style={{ backgroundColor: '#a855f7' }}>A</div>
          </div>
          <p className="text-[13px] text-left leading-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong className="text-white">52.000+ pessoas</strong> já descobriram o que causava suas dores
          </p>
        </div>

        {/* Info Lines */}
        <div className="w-full space-y-[16px] text-left px-2">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-[16px] h-[16px] flex-shrink-0" style={{ color: 'var(--success)' }} />
            <span className="text-[15px] font-[600] text-white">100% gratuito — sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-[16px] h-[16px] flex-shrink-0" style={{ color: 'var(--accent-light)' }} />
            <span className="text-[15px] font-[600] text-white">Apenas 2 minutos para completar</span>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="w-[16px] h-[16px] flex-shrink-0" style={{ color: 'var(--accent-light)' }} />
            <span className="text-[15px] font-[600] text-white">Resultado personalizado na hora</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full mt-8 z-10">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full flex flex-col items-center justify-center shimmer-btn"
          style={{ 
            backgroundColor: 'var(--accent)', 
            borderRadius: '18px', 
            minHeight: '58px',
            padding: '10px 16px'
          }}
        >
          <span className="text-[17px] font-[800] text-white leading-tight">Descobrir o que me causa dor</span>
          <span className="text-[12px] font-[500] mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>Resultado em menos de 2 minutos</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
