import { motion } from 'motion/react';
import { useState } from 'react';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';

interface Props {
  onSubmit: () => void;
}

export default function LeadCaptureScreen({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSubmit();
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto min-h-screen flex flex-col justify-center p-6"
    >
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-emerald-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Sua análise está pronta!
        </h2>
        <p className="text-slate-600 mb-8">
          Para onde devemos enviar o seu resultado detalhado e recomendações personalizadas?
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Seu primeiro nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:ring-0 outline-none transition-colors text-lg"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:ring-0 outline-none transition-colors text-lg"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg shadow-emerald-200 flex items-center justify-center mt-4 disabled:opacity-70 transition-colors hover:bg-emerald-700"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                Ver Meu Resultado
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>
        
        <p className="text-xs text-slate-400 mt-6">
          Seus dados estão 100% seguros. Não enviamos spam.
        </p>
      </div>
    </motion.div>
  );
}
