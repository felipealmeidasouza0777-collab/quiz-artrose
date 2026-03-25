import { motion } from 'motion/react';
import { useState } from 'react';
import { Loader2, ShieldCheck, Smartphone } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Props {
  onSubmit: () => void;
}

export default function LeadCaptureScreen({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ nome: name, email, telefone: phone }]);

      if (error) {
        console.error('Error saving lead:', error);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setIsLoading(false);
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto min-h-screen flex flex-col justify-center p-6"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Teaser de resultado bloqueado */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 pt-8 pb-6 text-center">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔒</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-1">
            Seu diagnóstico está pronto!
          </h2>
          <p className="text-emerald-100 text-sm">
            Preencha abaixo para desbloquear seu resultado + plano personalizado gratuito
          </p>
        </div>

        {/* O que você vai receber */}
        <div className="px-6 pt-5 pb-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Você receberá gratuitamente:
          </p>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Seu nível de artrose e o que ele significa</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Recomendações personalizadas para o seu caso</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Plano de ação para começar hoje em casa</span>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Seu primeiro nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:ring-0 outline-none transition-colors text-base text-slate-800 placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:ring-0 outline-none transition-colors text-base text-slate-800 placeholder:text-slate-400"
            />
            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                placeholder="WhatsApp com DDD (ex: 11 99999-9999)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:ring-0 outline-none transition-colors text-base text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 text-white text-base font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-200 flex items-center justify-center mt-2 disabled:opacity-70 transition-colors hover:bg-emerald-700"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>🎯 Revelar meu resultado agora</>
              )}
            </motion.button>
          </form>

          <div className="flex items-start gap-2 mt-4">
            <ShieldCheck className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Seus dados estão 100% seguros. Usaremos apenas para enviar seu resultado e orientações personalizadas. Sem spam.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
