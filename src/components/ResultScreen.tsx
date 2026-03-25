import { motion } from 'motion/react';
import { AlertCircle, CheckCircle, Activity, Check, Star, ShieldCheck, BookOpen, PlayCircle, Utensils, ListTodo } from 'lucide-react';

interface Props {
  score: number;
}

export default function ResultScreen({ score }: Props) {
  // Determine level based on score
  let level = 1;
  let colorClass = "text-emerald-600";
  let bgClass = "bg-emerald-50";
  let borderClass = "border-emerald-200";
  let icon = <CheckCircle className="w-12 h-12 text-emerald-500" />;
  let title = "Seu nível de artrose: LEVE";

  if (score >= 7 && score <= 14) {
    level = 2;
    colorClass = "text-orange-600";
    bgClass = "bg-orange-50";
    borderClass = "border-orange-200";
    icon = <Activity className="w-12 h-12 text-orange-500" />;
    title = "Seu nível de artrose: MODERADO";
  } else if (score > 14) {
    level = 3;
    colorClass = "text-rose-600";
    bgClass = "bg-rose-50";
    borderClass = "border-rose-200";
    icon = <AlertCircle className="w-12 h-12 text-rose-500" />;
    title = "Seu nível de artrose: AVANÇADO";
  }

  const handleCheckout = () => {
    // Redirect to Kactus checkout
    window.location.href = 'https://pay.kactus.com.br/checkout/exemplo';
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto bg-white shadow-xl overflow-hidden"
      >
        {/* Header Result */}
        <div className={`${bgClass} px-6 pt-12 pb-8 rounded-b-[40px] border-b ${borderClass}`}>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md"
          >
            {icon}
          </motion.div>
          
          <h1 className={`text-2xl font-bold text-center mb-3 ${colorClass}`}>
            {title}
          </h1>
          <p className="text-center text-slate-700 font-medium text-lg leading-relaxed">
            Com base nas suas respostas, seu corpo já apresenta sinais de desgaste articular. Isso é mais comum do que parece, mas precisa de atenção.
          </p>
        </div>

        {/* Explanation & Accessibility */}
        <div className="px-6 py-8">
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            A boa notícia é que, com os estímulos certos, é possível aliviar dores e melhorar sua mobilidade — <strong>sem sair de casa.</strong>
          </p>

          <div className="bg-emerald-50 rounded-2xl p-5 mb-8 border border-emerald-100">
            <ul className="space-y-4">
              <li className="flex items-center text-slate-800 font-medium">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                Todo o conteúdo pode ser feito em casa
              </li>
              <li className="flex items-center text-slate-800 font-medium">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                Você pode acessar tudo pelo celular
              </li>
              <li className="flex items-center text-slate-800 font-medium">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                Não precisa de academia ou equipamentos caros
              </li>
            </ul>
          </div>
        </div>

        {/* Offer Section */}
        <div className="bg-gradient-to-b from-slate-50 to-white px-6 py-10 border-t border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
              Com base no seu resultado, montamos um plano simples e prático para te ajudar a melhorar suas articulações
            </h2>
          </div>

          {/* Product Cards */}
          <div className="space-y-6 mb-10">
            {/* Main Product */}
            <div className="bg-white rounded-2xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-emerald-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                Plano Recomendado
              </div>
              <div className="p-5 pt-6">
                <div className="aspect-video rounded-xl overflow-hidden mb-5 relative shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                    alt="Plano Completo de Recuperação Articular" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-xl leading-tight">Plano Completo de Recuperação Articular</h3>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <BookOpen className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Ebook Principal</h4>
                      <p className="text-xs text-slate-500">O método passo a passo para desinflamar.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <PlayCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Rotina de Exercícios</h4>
                      <p className="text-xs text-slate-500">Movimentos leves de 10 min para fazer na sala.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Utensils className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Guia Alimentar</h4>
                      <p className="text-xs text-slate-500">Alimentos que aliviam as dores nas juntas.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <ListTodo className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Checklist Diário</h4>
                      <p className="text-xs text-slate-500">Acompanhe sua evolução dia após dia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Anchoring */}
          <div className="bg-slate-800 text-white rounded-3xl p-6 text-center mb-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            
            <p className="text-slate-300 text-sm mb-4 relative z-10">
              Tratamentos convencionais podem custar <span className="line-through text-slate-400">centenas de reais por mês...</span>
            </p>
            <p className="text-white font-medium mb-3 relative z-10 text-lg">
              Mas você pode começar hoje de forma simples e acessível:
            </p>
            <div className="flex items-baseline justify-center space-x-2 relative z-10 mb-2">
              <span className="text-slate-400 line-through text-lg">R$ 97,00</span>
              <span className="text-5xl font-black text-emerald-400">R$ 19,90</span>
            </div>
            <p className="text-sm text-emerald-300 font-medium relative z-10">
              Pagamento único. Acesso imediato.
            </p>
          </div>

          {/* Simplicity Reinforcement */}
          <div className="text-center mb-10">
            <p className="text-slate-600 font-medium bg-slate-100 inline-block px-5 py-2 rounded-full">
              📱 Você pode começar hoje, no seu ritmo, diretamente do seu celular
            </p>
          </div>

          {/* Social Proof */}
          <div className="mb-10">
            <h3 className="text-center font-bold text-slate-800 text-xl mb-6">Pessoas reais que decidiram agir</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=150" alt="Maria" className="w-12 h-12 rounded-full object-cover mr-3" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Maria, 58 anos</h4>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"Eu achava que era normal sentir dor todo dia. Hoje consigo me movimentar muito melhor."</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="João" className="w-12 h-12 rounded-full object-cover mr-3" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">João, 63 anos</h4>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"Simples de seguir e realmente ajudou nas minhas dores. Faço os exercícios na sala de casa."</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Ana" className="w-12 h-12 rounded-full object-cover mr-3" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Ana, 55 anos</h4>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"Comecei devagar e já senti diferença nas primeiras semanas. Recomendo para todos."</p>
              </div>
            </div>
          </div>

          {/* CTA & Guarantee */}
          <div className="text-center mb-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white text-lg font-bold py-5 px-6 rounded-2xl shadow-xl shadow-green-200 flex items-center justify-center mb-4 transition-colors hover:bg-[#20bd5a]"
            >
              👉 Quero começar a cuidar das minhas articulações agora
            </motion.button>
            
            <div className="flex items-center justify-center text-sm text-slate-600 font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" />
              Você tem 7 dias de garantia para testar sem risco
            </div>
          </div>

          {/* Final Impact Phrase */}
          <div className="text-center px-4 pt-6 border-t border-slate-200">
            <p className="text-xl font-bold text-slate-800 italic leading-tight">
              "Seu corpo está te dando sinais. Você pode ignorar… ou começar hoje a cuidar dele."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}