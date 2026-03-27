import { motion, useAnimation, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import {
  AlertCircle, CheckCircle, Activity, Star, ShieldCheck,
  BookOpen, Moon, Utensils, ArrowRight, Gift, Clock,
  Heart, Lock, Smartphone, MessageCircle, ChevronRight
} from 'lucide-react';
import { copy } from '../data/copy';

interface Props {
  score: number;
  ageGroup: string;
  onCheckout: () => void;
}

// Animated Counter Component
const AnimatedCounter = ({ from, to, duration = 1.5, className = "" }: { from: number, to: number, duration?: number, className?: string }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef} className={className}>{count}</span>;
};

function getResultContent(score: number) {
  if (score >= 7 && score <= 14) {
    return {
      title: "Nível Moderado",
      subtitle: "Suas articulações estão dando sinais claros de desgaste. A rigidez matinal e os estalos não são 'normais da idade' — são avisos de que a inflamação está avançando. Se ignorado, o quadro pode se agravar rapidamente.",
      color: 'text-[#fbbf24]',
      bg: 'bg-[#fbbf24]/10',
      border: 'border-[#fbbf24]/30',
      icon: <Activity className="w-8 h-8 text-[#fbbf24]" />,
      riskLevel: 50
    };
  }
  if (score > 14) {
    return {
      title: "Nível Avançado",
      subtitle: "Alerta vermelho. O desgaste articular já está impactando severamente sua qualidade de vida. A dor constante e a limitação de movimentos indicam um processo inflamatório crônico que exige atenção imediata antes que se torne irreversível.",
      color: 'text-[#ef4444]',
      bg: 'bg-[#ef4444]/10',
      border: 'border-[#ef4444]/30',
      icon: <AlertCircle className="w-8 h-8 text-[#ef4444]" />,
      riskLevel: 90
    };
  }
  return {
    title: "Nível Leve",
    subtitle: "Você está no estágio inicial. Aqueles incômodos esporádicos e fisgadas são o começo de um processo inflamatório. A boa notícia é que, agindo agora, é extremamente fácil reverter esse quadro e blindar suas articulações.",
    color: 'text-[#22c55e]',
    bg: 'bg-[#22c55e]/10',
    border: 'border-[#22c55e]/30',
    icon: <CheckCircle className="w-8 h-8 text-[#22c55e]" />,
    riskLevel: 15
  };
}

export default function ResultScreen({ score, ageGroup }: Props) {
  const result = getResultContent(score);
  
  const handleCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/psynepw_810418';
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = sessionStorage.getItem('quiz_countdown');
    return savedTime ? parseInt(savedTime, 10) : 15 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        sessionStorage.setItem('quiz_countdown', newTime.toString());
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isExpired = timeLeft <= 0;

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white font-sans pb-24 selection:bg-[#7c3aed] selection:text-white">
      <div className="max-w-md mx-auto bg-[#0f0f23] min-h-screen relative overflow-hidden">
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7c3aed]/20 via-[#0f0f23]/0 to-[#0f0f23]/0 pointer-events-none" />

        {/* 1. CHOQUE DA DOR (HERO) */}
        <div className="px-6 pt-12 pb-10 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1833] border border-[#7c3aed]/30">
              <Activity className="w-4 h-4 text-[#a855f7]" />
              <span className="text-xs font-bold tracking-wider text-[#a855f7] uppercase">Resultado do seu diagnóstico</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              {result.icon}
              <h1 className={`text-3xl font-black ${result.color}`}>
                {result.title}
              </h1>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-6">
              <span className="text-5xl font-black text-white">
                <AnimatedCounter from={0} to={score} duration={1.5} />
              </span>
              <span className="text-white/50 font-medium">/ 30 pontos</span>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              {result.subtitle}
            </p>
          </div>

          {/* Risk Bar */}
          <div className="bg-[#1e1b3a] rounded-2xl p-5 border border-white/5 shadow-lg">
            <div className="flex justify-between text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">
              <span>Leve</span>
              <span>Moderado</span>
              <span>Grave</span>
            </div>
            <div className="h-3 w-full bg-[#0f0f23] rounded-full overflow-hidden flex relative">
              <div className="h-full bg-[#22c55e] w-1/3" />
              <div className="h-full bg-[#fbbf24] w-1/3" />
              <div className="h-full bg-[#ef4444] w-1/3" />
              
              {/* Animated Marker */}
              <motion.div 
                initial={{ left: "0%" }}
                animate={{ left: `${result.riskLevel}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] border-4 border-[#0f0f23] -ml-2.5"
              />
            </div>
          </div>
        </div>

        {/* 2. AGRAVAMENTO (LINHA DO TEMPO) */}
        <div className="px-6 py-12 bg-[#1a1833] relative">
          <h2 className="text-2xl font-bold text-white mb-8 text-center leading-tight">
            O que acontece quando a <span className="text-[#a855f7]">artrose é ignorada</span>
          </h2>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#7c3aed]/50 before:to-transparent">
            {[
              { time: "Hoje", title: "Dor e Rigidez", desc: "Dificuldade ao levantar, estalos e dor que piora no frio ou após esforço.", icon: "🔔", color: "border-[#fbbf24]/50" },
              { time: "Em 6 Meses", title: "Limitação de Movimento", desc: "A inflamação aumenta. Tarefas simples como subir escadas ou agachar tornam-se um sacrifício.", icon: "⚠️", color: "border-orange-500/50" },
              { time: "Em 1 Ano", title: "Perda de Cartilagem", desc: "O atrito osso com osso começa. A dor torna-se constante, mesmo em repouso, afetando o sono.", icon: "🔥", color: "border-rose-500/50" },
              { time: "2 a 3 Anos", title: "Risco de Cirurgia", desc: "Deformidade articular visível. Medicamentos não fazem mais efeito, restando apenas procedimentos invasivos.", icon: "❗", color: "border-red-600/80" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#1a1833] bg-[#1e1b3a] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {item.icon}
                </div>
                <div className={`w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-[#1e1b3a] p-4 rounded-xl border ${item.color} shadow-lg`}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                    <span className="text-xs font-black text-white/40 uppercase tracking-wider">{item.time}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. EMPATIA + VIRADA */}
        <div className="px-6 py-12 bg-[rgba(168,85,247,0.05)] border-y border-[#7c3aed]/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#7c3aed]/20 rounded-full blur-3xl" />
          
          <div className="w-16 h-16 bg-[#1e1b3a] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#7c3aed]/30 shadow-[0_0_20px_rgba(124,58,237,0.2)] relative z-10">
            <Heart className="w-8 h-8 text-[#a855f7]" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 leading-tight relative z-10">
            A culpa não é sua. <br/><span className="text-[#a855f7]">Mas a solução é.</span>
          </h2>
          
          <p className="text-white/70 text-base leading-relaxed mb-4 relative z-10">
            A indústria farmacêutica lucra bilhões vendendo analgésicos que apenas mascaram a dor por algumas horas, enquanto seu estômago e fígado são destruídos.
          </p>
          <p className="text-white/80 font-medium text-base leading-relaxed relative z-10">
            A verdadeira raiz da artrose é a <strong>inflamação silenciosa</strong>. E existe um caminho natural, simples e comprovado para desinflamar seu corpo de dentro para fora.
          </p>
        </div>

        {/* 4. SOLUÇÃO (PRODUTO) */}
        <div className="px-6 py-12 bg-[#0f0f23]">
          <h2 className="text-2xl font-bold text-white mb-10 text-center leading-tight">
            A solução que <span className="text-[#a855f7]">52.000 pessoas</span> já usaram para sair da dor
          </h2>

          {/* CSS 3D Mockup */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-[280px] mx-auto mb-16 h-[320px] perspective-1000"
          >
            {/* Livro Principal */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-48 h-64 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] rounded-r-xl rounded-l-sm shadow-2xl z-30 transform rotate-y-[-15deg] rotate-z-[2deg] border-l-4 border-[#3b0764] flex flex-col items-center justify-center p-4 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-black text-xl leading-tight mb-1">Protocolo Sem Dor</h3>
              <p className="text-white/80 text-xs font-medium uppercase tracking-widest">Em 7 Dias</p>
              <div className="mt-auto w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
            
            {/* Bônus 1: Receitas */}
            <div className="absolute left-4 top-12 w-40 h-56 bg-gradient-to-br from-amber-500 to-orange-600 rounded-r-lg rounded-l-sm shadow-xl z-20 transform rotate-y-[-20deg] rotate-z-[-8deg] border-l-4 border-orange-800 flex flex-col items-center justify-center p-3 text-center opacity-90">
              <Utensils className="w-6 h-6 text-white/80 mb-2" />
              <h4 className="text-white font-bold text-sm leading-tight">20 Receitas</h4>
              <p className="text-orange-100 text-[10px] uppercase">Anti-inflamatórias</p>
            </div>

            {/* Bônus 2: Sono */}
            <div className="absolute right-4 top-16 w-40 h-56 bg-gradient-to-br from-indigo-600 to-blue-800 rounded-r-lg rounded-l-sm shadow-xl z-10 transform rotate-y-[-10deg] rotate-z-[12deg] border-l-4 border-indigo-900 flex flex-col items-center justify-center p-3 text-center opacity-90">
              <Moon className="w-6 h-6 text-white/80 mb-2" />
              <h4 className="text-white font-bold text-sm leading-tight">Noite Bem Dormida</h4>
              <p className="text-indigo-100 text-[10px] uppercase">Guia Prático</p>
            </div>
          </motion.div>

          {/* Módulos */}
          <div className="space-y-4 mb-10">
            {[
              { num: "01", title: "O Protocolo Principal", desc: "Passo a passo de 7 dias para desinflamar as articulações e recuperar a mobilidade.", icon: <BookOpen className="w-6 h-6 text-[#a855f7]" /> },
              { num: "02", title: "20 Receitas Anti-inflamatórias", desc: "Refeições deliciosas com ingredientes que agem como lubrificantes naturais para os ossos.", icon: <Utensils className="w-6 h-6 text-[#a855f7]" />, bonus: true },
              { num: "03", title: "Guia Noite Bem Dormida", desc: "Técnicas para relaxar o corpo, aliviar a tensão e ter um sono profundo e reparador.", icon: <Moon className="w-6 h-6 text-[#a855f7]" />, bonus: true },
              { num: "04", title: "Guia de Automassagem", desc: "Alívio imediato em 5 minutos usando apenas as mãos nos pontos certos de tensão.", icon: <Gift className="w-6 h-6 text-[#a855f7]" />, bonus: true }
            ].map((mod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1e1b3a] border border-white/5 p-4 rounded-2xl flex gap-4 relative overflow-hidden"
              >
                {mod.bonus && (
                  <div className="absolute top-0 right-0 bg-[#a855f7] text-white text-[10px] font-bold uppercase px-2 py-1 rounded-bl-lg">
                    Bônus Gratuito
                  </div>
                )}
                <div className="w-12 h-12 bg-[#1a1833] rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                  {mod.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 mt-1">
                    <span className="text-xs font-black text-[#a855f7]">{mod.num}</span>
                    <h4 className="font-bold text-white text-base leading-tight">{mod.title}</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefícios */}
          <div className="bg-[#1a1833] rounded-2xl p-6 border border-white/5">
            <h4 className="font-bold text-white text-lg mb-5 text-center">Sua nova realidade:</h4>
            <div className="space-y-3">
              {[
                'Acordar sem rigidez e sem dor',
                'Subir e descer escadas com facilidade',
                'Brincar com netos sem limitações',
                'Dormir a noite toda sem fisgadas',
                'Voltar a fazer caminhadas e exercícios'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. PROVA SOCIAL */}
        <div className="px-6 py-12 bg-[#1a1833] border-t border-white/5">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              Junte-se a <span className="text-[#a855f7]"><AnimatedCounter from={52000} to={52847} duration={2} /> pessoas</span>
            </h2>
            <p className="text-white/60">que já transformaram suas vidas</p>
          </div>

          <div className="space-y-5">
            {[
              { name: "Maria S.", age: 62, loc: "São Paulo, SP", text: "Eu não conseguia dormir direito por causa da dor no joelho. Depois que comecei, senti diferença já na primeira semana. É muito fácil de seguir.", initial: "M" },
              { name: "João P.", age: 58, loc: "Belo Horizonte, MG", text: "Achei que era normal da idade, mas com as receitas e o passo a passo, hoje levanto da cama sem aquela rigidez que me travava todo.", initial: "J" },
              { name: "Ana L.", age: 65, loc: "Curitiba, PR", text: "Já tinha gastado horrores com pomadas e remédios. Esse protocolo foi a única coisa que me devolveu a vontade de sair de casa para caminhar.", initial: "A" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#1e1b3a] p-6 rounded-2xl border border-white/5 relative">
                <div className="absolute top-6 right-6 flex text-[#fbbf24]">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 text-[#a855f7] flex items-center justify-center font-bold text-lg border border-[#7c3aed]/30">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}, {testimonial.age} anos</h4>
                    <p className="text-white/40 text-xs">{testimonial.loc}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-2 py-1 bg-[#22c55e]/10 rounded text-[#22c55e] text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle className="w-3 h-3" /> Resultado Comprovado
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. OFERTA IRRESISTÍVEL */}
        <div className="px-6 py-12 bg-[rgba(124,58,237,0.08)] border-t border-[#7c3aed]/20 relative">
          
          {/* Countdown */}
          <div className="bg-[#0f0f23] border border-[#ef4444]/30 rounded-xl p-4 mb-8 flex items-center justify-between shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ef4444]/10 flex items-center justify-center">
                <Clock className={`w-5 h-5 ${isExpired ? 'text-[#ef4444]' : 'text-[#ef4444] animate-pulse'}`} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Oferta expira em:</p>
                <p className="text-white/60 text-xs">Garanta seu desconto agora</p>
              </div>
            </div>
            <div className="text-2xl font-black text-[#ef4444] font-mono tracking-wider">
              {isExpired ? "00:00" : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">Tudo isso por menos que um café.</h2>
            <p className="text-white/70">O valor normal de todo o material é R$ 49,90.</p>
          </div>

          <div className="bg-[#1e1b3a] rounded-3xl p-8 border border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.15)] text-center relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c3aed] to-[#a855f7]" />
            
            <p className="text-white/50 font-medium line-through text-lg mb-2">De R$ 49,90</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-white/70 font-medium">Por apenas</span>
              <span className="text-6xl font-black text-[#22c55e]">R$ 19,90</span>
            </div>
            <div className="inline-block bg-[#22c55e]/10 text-[#22c55e] font-bold px-4 py-1.5 rounded-full text-sm border border-[#22c55e]/20">
              Pagamento Único • Acesso Vitalício
            </div>
          </div>

          {/* 7. CONVERSÃO (CTA) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCheckout}
            className="w-full bg-[#16a34a] text-white rounded-2xl shadow-[0_0_25px_rgba(22,163,74,0.4)] flex flex-col items-center justify-center p-4 mb-6 transition-colors hover:bg-[#15803d] shimmer-btn relative border border-[#22c55e]/50"
          >
            <span className="text-xl font-black tracking-wide mb-1 uppercase">Quero acabar com minha dor</span>
            <span className="text-sm font-medium text-white/90 flex items-center gap-1">
              Acessar protocolo agora <ChevronRight className="w-4 h-4" />
            </span>
          </motion.button>

          {/* Trust Seals */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { icon: <Lock className="w-5 h-5" />, text: "Pagamento Seguro" },
              { icon: <Smartphone className="w-5 h-5" />, text: "Acesso Imediato" },
              { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantia 7 Dias" },
              { icon: <MessageCircle className="w-5 h-5" />, text: "Suporte WhatsApp" }
            ].map((seal, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-[#1a1833] py-2.5 rounded-lg border border-white/5">
                <div className="text-white/40">{seal.icon}</div>
                <span className="text-xs font-medium text-white/60">{seal.text}</span>
              </div>
            ))}
          </div>

          {/* Garantia */}
          <div className="bg-[#1e1b3a] border border-[#7c3aed]/30 rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-12 h-12 bg-[#7c3aed]/20 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#a855f7]" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Risco Absolutamente Zero</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Você tem 7 dias completos para testar o protocolo. Se não sentir alívio nas dores ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 8. STICKY BAR (MOBILE) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1833]/95 backdrop-blur-md border-t border-[#7c3aed]/30 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/50 line-through uppercase tracking-wider">De R$ 49,90</span>
            <span className="text-xl font-black text-[#22c55e] leading-none">R$ 19,90</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleCheckout}
            className="flex-1 bg-[#16a34a] text-white text-sm font-black uppercase tracking-wide py-3.5 rounded-xl shadow-[0_0_15px_rgba(22,163,74,0.3)] hover:bg-[#15803d] transition-colors shimmer-btn"
          >
            Quero Alívio Agora
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

