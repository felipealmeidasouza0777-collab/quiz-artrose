import { motion } from 'motion/react';
import { Activity, ArrowRight, ShieldCheck } from 'lucide-react';

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
        <div className="h-48 bg-emerald-600 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay"></div>
          <Activity className="w-20 h-20 text-white relative z-10" />
        </div>
        
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
            Descubra Seu Nível de Artrose em 2 Minutos
          </h1>
          <p className="text-slate-600 mb-8 text-lg">
            Um mini diagnóstico profissional para entender o que seu corpo está tentando te dizer.
          </p>
          
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center text-slate-600">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span>100% Gratuito e Seguro</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Activity className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span>Resultado Imediato</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full bg-emerald-600 text-white text-lg font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-center group transition-colors hover:bg-emerald-700"
          >
            Começar Avaliação
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
