import { motion } from 'motion/react';
import { Activity, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-md mx-auto min-h-screen flex flex-col justify-center p-6"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Hero image — idosa com dor articular, imagem coerente com o tema */}
        <div className="h-52 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800"
            alt="Dor nas articulações"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Diagnóstico 100% gratuito
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Social proof badge */}
          <div className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2 mb-5">
            <Users className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-sm font-semibold text-emerald-800">
              Mais de <strong>52.000 pessoas</strong> já descobriram seu nível
            </span>
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mb-3 leading-tight text-center">
            Descubra Seu Nível de Artrose em 2 Minutos
          </h1>
          <p className="text-slate-500 mb-6 text-base text-center leading-relaxed">
            Responda 8 perguntas rápidas e receba um diagnóstico personalizado com o que você precisa fazer agora.
          </p>

          <div className="space-y-3 mb-7">
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">100% gratuito, sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
              <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">Apenas 8 perguntas — leva menos de 2 min</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
              <Activity className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">Resultado + plano personalizado imediato</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full bg-emerald-600 text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-center group transition-colors hover:bg-emerald-700"
          >
            Começar Minha Avaliação Gratuita
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-center text-xs text-slate-400 mt-4">
            Sem compromisso. Resultado na hora. 🔒 Dados protegidos.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
