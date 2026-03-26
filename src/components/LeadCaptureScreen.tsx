import { motion } from 'motion/react';
import { useState } from 'react';
import { Loader2, ShieldCheck, Smartphone, User, Lock, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Props {
  onSubmit: () => void;
}

export default function LeadCaptureScreen({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || phone.replace(/\D/g, '').length < 10) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ nome: name, telefone: phone }]);

      if (error) {
        console.error('Error saving lead to Supabase:', error);
        throw error;
      }
    } catch (err) {
      console.warn('Supabase failed or not configured. Falling back to webhook.', err);
      // Fallback to webhook
      try {
        await fetch('https://hook.us1.make.com/YOUR_WEBHOOK_URL', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome: name, telefone: phone, source: 'quiz_funnel' })
        });
      } catch (webhookErr) {
        console.error('Webhook fallback also failed:', webhookErr);
      }
    } finally {
      setIsLoading(false);
      onSubmit();
    }
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
      {/* Top Emotional Section */}
      <div 
        className="w-full h-[180px] relative flex flex-col items-center justify-center px-[20px] pt-[20px]"
        style={{ background: 'linear-gradient(180deg, #2d1b69 0%, #1a1a2e 100%)' }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom, rgba(124, 58, 237, 0.4) 0%, transparent 70%)' }} />
        
        <div className="relative flex items-center justify-center w-[56px] h-[56px] rounded-full mb-[16px] z-10">
          <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(168,85,247,0.2)' }} />
          <div className="absolute inset-1 rounded-full" style={{ border: '2px solid rgba(168,85,247,0.4)' }} />
          <Lock className="w-[24px] h-[24px]" style={{ color: '#a855f7' }} />
          
          <div className="absolute -top-1 -right-1 w-[20px] h-[20px] rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--success)', border: '2px solid #2d1b69' }}>
            <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />
          </div>
        </div>

        <h2 className="text-[18px] font-[800] text-white leading-tight mb-[4px] z-10 text-center">
          Seu diagnóstico está pronto!
        </h2>
        <p className="text-[13px] z-10 text-center" style={{ color: 'var(--text-muted)' }}>
          Desbloqueie seus resultados personalizados
        </p>
      </div>

      <div className="flex-1 px-[20px] pt-[24px] pb-[32px] flex flex-col">
        {/* Benefits Section */}
        <div className="mb-[24px]">
          <div 
            className="inline-block px-[10px] py-[4px] rounded-[6px] text-[10px] font-[700] tracking-[0.08em] uppercase mb-[12px]"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}
          >
            VOCÊ RECEBERÁ AGORA:
          </div>
          
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center p-[10px] px-[14px] rounded-[12px]" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--accent-border)' }}>
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center mr-[12px] flex-shrink-0" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                <Check className="w-[12px] h-[12px]" style={{ color: 'var(--success)' }} strokeWidth={3} />
              </div>
              <span className="text-[13px] font-[500] text-white">Causa provável das suas dores</span>
            </div>
            <div className="flex items-center p-[10px] px-[14px] rounded-[12px]" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--accent-border)' }}>
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center mr-[12px] flex-shrink-0" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                <Check className="w-[12px] h-[12px]" style={{ color: 'var(--success)' }} strokeWidth={3} />
              </div>
              <span className="text-[13px] font-[500] text-white">Nível de gravidade atual</span>
            </div>
            <div className="flex items-center p-[10px] px-[14px] rounded-[12px]" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--accent-border)' }}>
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center mr-[12px] flex-shrink-0" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                <Check className="w-[12px] h-[12px]" style={{ color: 'var(--success)' }} strokeWidth={3} />
              </div>
              <span className="text-[13px] font-[500] text-white">Plano de ação recomendado</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px] mb-[24px]">
          <div className="relative">
            <User className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px]" style={{ color: 'var(--accent-light)' }} />
            <input
              type="text"
              placeholder="Seu primeiro nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-[48px] pr-[16px] h-[52px] rounded-[14px] outline-none transition-all text-[15px] text-white"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid rgba(168,85,247,0.3)',
              }}
            />
          </div>
          <div className="relative">
            <Smartphone className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px]" style={{ color: 'var(--accent-light)' }} />
            <input
              type="tel"
              placeholder="WhatsApp com DDD"
              value={phone}
              onChange={handlePhoneChange}
              required
              className="w-full pl-[48px] pr-[16px] h-[52px] rounded-[14px] outline-none transition-all text-[15px] text-white"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid rgba(168,85,247,0.3)',
              }}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading || !name || phone.replace(/\D/g, '').length < 10}
            className="w-full flex flex-col items-center justify-center shimmer-btn mt-[8px] disabled:opacity-70"
            style={{ 
              backgroundColor: 'var(--accent)', 
              borderRadius: '16px', 
              minHeight: '56px',
              padding: '10px 16px'
            }}
          >
            {isLoading ? (
              <Loader2 className="w-[24px] h-[24px] animate-spin text-white" />
            ) : (
              <>
                <span className="text-[17px] font-[800] text-white leading-tight">Ver meu resultado agora</span>
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-auto flex items-center justify-center gap-[6px]">
          <ShieldCheck className="w-[12px] h-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }} />
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Seus dados estão 100% seguros. Sem spam.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
