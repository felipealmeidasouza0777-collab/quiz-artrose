import { motion } from 'motion/react';
import { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, Activity, Check, Star, ShieldCheck, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Props {
  score: number;
}

export default function ResultScreen({ score }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Determine level based on score
  let level = 1;
  let colorClass = "text-emerald-600";
  let bgClass = "bg-emerald-50";
  let borderClass = "border-emerald-200";
  let icon = <CheckCircle className="w-12 h-12 text-emerald-500" />;
  let title = "Nível 1 — Leve";
  let description = "Você apresenta sinais iniciais. Isso é o melhor momento para agir.";
  let bodyText = "Suas articulações estão começando a dar os primeiros sinais de desgaste. A boa notícia é que, agindo agora, você pode reverter muitos desses sintomas e proteger sua cartilagem para o futuro.";

  if (score >= 7 && score <= 14) {
    level = 2;
    colorClass = "text-orange-600";
    bgClass = "bg-orange-50";
    borderClass = "border-orange-200";
    icon = <Activity className="w-12 h-12 text-orange-500" />;
    title = "Nível 2 — Moderado";
    description = "Seu corpo já mostra desgaste. Ignorar isso pode acelerar o problema.";
    bodyText = "A inflamação e o atrito nas suas articulações já estão afetando sua rotina. Se não tratado, o desgaste da cartilagem tende a piorar, limitando ainda mais seus movimentos nos próximos anos.";
  } else if (score > 14) {
    level = 3;
    colorClass = "text-rose-600";
    bgClass = "bg-rose-50";
    borderClass = "border-rose-200";
    icon = <AlertCircle className="w-12 h-12 text-rose-500" />;
    title = "Nível 3 — Avançado";
    description = "Seu nível indica atenção imediata. Sua qualidade de vida pode estar em risco.";
    bodyText = "O desgaste articular está em um estágio avançado, causando dor frequente e limitação severa. É crucial intervir imediatamente com protocolos específicos para reduzir a inflamação e recuperar a mobilidade possível.";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    
    setIsLoading(true);
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          { nome: name, email, telefone: phone }
        ]);
        
      if (error) {
        console.error('Error saving lead:', error);
        // Continue anyway to not block the user
      }
      
      // Redirect to WhatsApp or Checkout
      const message = encodeURIComponent(`Olá! Gostaria de acessar o Plano Personalizado para Recuperar Minhas Articulações. Meu nome é ${name}.`);
      window.location.href = `https://wa.me/5511999999999?text=${message}`;
      
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setIsLoading(false);
    }
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
          
          <h1 className={`text-3xl font-bold text-center mb-3 ${colorClass}`}>
            {title}
          </h1>
          <p className="text-center text-slate-700 font-medium text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Explanation */}
        <div className="px-6 py-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">O que está acontecendo no seu corpo?</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            {bodyText}
          </p>
        </div>

        {/* Offer Section */}
        <div className="bg-gradient-to-b from-emerald-50 to-white px-6 py-10 border-t border-emerald-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
              Com base no seu resultado, este é o caminho mais eficaz para aliviar suas dores e recuperar sua mobilidade
            </h2>
            <p className="text-emerald-700 font-medium bg-emerald-100/50 inline-block px-4 py-1.5 rounded-full text-sm">
              Criado para pessoas no seu nível de desgaste articular
            </p>
          </div>

          {/* Product Cards */}
          <div className="space-y-6 mb-10">
            {/* Main Product */}
            <div className="bg-white rounded-2xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-emerald-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Recomendado
              </div>
              <div className="p-5">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" 
                    alt="Protocolo Anti-Dor" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">Protocolo Anti-Dor Articular</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4 font-medium">
                  Método prático para reduzir dores e melhorar mobilidade em casa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Redução rápida da dor
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Melhora da mobilidade diária
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Rotina simples de 15 minutos
                  </li>
                </ul>
              </div>
            </div>

            {/* Bonus Product */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100">
              <div className="flex items-start">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400" 
                    alt="Nutrição" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">Bônus Incluso</div>
                  <h4 className="font-bold text-slate-800 leading-tight mb-1">Guia de Nutrição Anti-inflamatória</h4>
                  <p className="text-xs text-slate-500">Alimentos que aceleram sua recuperação.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Anchoring */}
          <div className="bg-slate-800 text-white rounded-3xl p-6 text-center mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            
            <p className="text-slate-300 text-sm mb-4 relative z-10">
              Se você fosse tratar isso com consultas e fisioterapia, poderia gastar facilmente <span className="line-through text-slate-400">R$300 a R$800 por mês</span>.
            </p>
            <p className="text-white font-medium mb-2 relative z-10">
              Mas você pode começar hoje por apenas:
            </p>
            <div className="flex items-baseline justify-center space-x-2 relative z-10 mb-2">
              <span className="text-slate-400 line-through text-lg">R$ 97,00</span>
              <span className="text-4xl font-black text-emerald-400">R$ 19,90</span>
            </div>
            <p className="text-xs text-emerald-300 font-medium relative z-10">
              Pagamento único. Acesso imediato.
            </p>
          </div>

          {/* Lead Capture & CTA */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 mb-10">
            <div className="text-center mb-6">
              <h3 className="font-bold text-slate-800 text-lg">Receba seu plano + dicas exclusivas no seu WhatsApp</h3>
              <p className="text-sm text-slate-500 mt-1">Preencha abaixo para liberar seu acesso com desconto.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Seu nome completo" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Seu WhatsApp (com DDD)" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#25D366] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-200 flex items-center justify-center mt-2 disabled:opacity-70 transition-colors hover:bg-[#20bd5a]"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    👉 Quero começar a cuidar das minhas articulações agora
                  </>
                )}
              </motion.button>
              
              <div className="flex items-center justify-center text-xs text-slate-400 mt-4 space-x-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Seus dados estão 100% seguros</span>
              </div>
            </form>
          </div>

          {/* Social Proof */}
          <div className="mb-10">
            <h3 className="text-center font-bold text-slate-800 text-xl mb-6">Pessoas reais que já aplicaram</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Maria" className="w-12 h-12 rounded-full object-cover mr-3" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Maria, 58 anos</h4>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"Eu não conseguia subir escadas sem dor. Hoje já me sinto muito melhor e voltei a caminhar no parque."</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="João" className="w-12 h-12 rounded-full object-cover mr-3" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">João, 62 anos</h4>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"Achei que era coisa da idade, mas melhorou muito com as orientações. A rotina matinal mudou meu dia."</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=150" alt="Ana" className="w-12 h-12 rounded-full object-cover mr-3" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Ana, 55 anos</h4>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"Simples e prático. Em poucos dias senti diferença no inchaço dos meus joelhos."</p>
              </div>
            </div>
          </div>

          {/* Mental Triggers */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-4 rounded-xl text-center shadow-sm border border-slate-100">
              <Activity className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">Urgência</h4>
              <p className="text-xs text-slate-500">Quanto antes agir, maiores as chances de reversão.</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center shadow-sm border border-slate-100">
              <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">Autoridade</h4>
              <p className="text-xs text-slate-500">Método estruturado e validado por especialistas.</p>
            </div>
          </div>

          {/* Final Impact Phrase */}
          <div className="text-center px-4">
            <p className="text-xl font-bold text-slate-800 italic leading-tight">
              "Você pode ignorar isso… ou começar hoje a recuperar sua qualidade de vida."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
