import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  AlertCircle, CheckCircle, Activity, Star, ShieldCheck,
  BookOpen, PlayCircle, Utensils, ListTodo, Gift, Clock, Flame
} from 'lucide-react';

interface Props {
  score: number;
}

// ─── Countdown hook (15 minutos de urgência) ────────────────────────────────
function useCountdown(initialMinutes: number) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─── Configuração por nível ──────────────────────────────────────────────────
function getLevelConfig(score: number) {
  if (score >= 7 && score <= 14) {
    return {
      level: 2,
      title: 'Seu nível de artrose: MODERADO',
      emoji: '⚠️',
      colorClass: 'text-orange-600',
      bgClass: 'bg-orange-50',
      borderClass: 'border-orange-200',
      badgeBg: 'bg-orange-500',
      icon: <Activity className="w-12 h-12 text-orange-500" />,
      message:
        'Suas articulações já mostram sinais claros de desgaste. Sem ação, a tendência é piorar progressivamente.',
      urgencyText:
        'Pessoas no nível moderado que agiram logo relataram melhora em 2 a 3 semanas.',
    };
  }
  if (score > 14) {
    return {
      level: 3,
      title: 'Seu nível de artrose: AVANÇADO',
      emoji: '🚨',
      colorClass: 'text-rose-600',
      bgClass: 'bg-rose-50',
      borderClass: 'border-rose-200',
      badgeBg: 'bg-rose-500',
      icon: <AlertCircle className="w-12 h-12 text-rose-500" />,
      message:
        'Suas articulações precisam de atenção urgente. O desgaste já impacta significativamente sua qualidade de vida.',
      urgencyText:
        'Em casos avançados, cada semana sem ação pode aumentar o risco de limitações permanentes.',
    };
  }
  return {
    level: 1,
    title: 'Seu nível de artrose: LEVE',
    emoji: '✅',
    colorClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    badgeBg: 'bg-emerald-500',
    icon: <CheckCircle className="w-12 h-12 text-emerald-500" />,
    message:
      'Suas articulações ainda estão no início do processo. Esta é a MELHOR hora para agir — antes que o desgaste se agrave.',
    urgencyText:
      'Iniciar agora é 3× mais eficaz do que esperar os sintomas piorarem.',
  };
}

export default function ResultScreen({ score }: Props) {
  const cfg = getLevelConfig(score);
  const countdown = useCountdown(15);

  const handleCheckout = () => {
    window.location.href = 'https://pay.kactus.com.br/checkout/exemplo';
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32 font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto bg-white shadow-xl overflow-hidden"
      >
        {/* ── Cabeçalho de resultado ─────────────────────────────────── */}
        <div className={`${cfg.bgClass} px-6 pt-12 pb-8 rounded-b-[40px] border-b ${cfg.borderClass}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md"
          >
            {cfg.icon}
          </motion.div>

          <div className={`${cfg.badgeBg} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mx-auto mb-3`}>
            {cfg.emoji} Diagnóstico Completo
          </div>

          <h1 className={`text-2xl font-bold text-center mb-3 ${cfg.colorClass}`}>
            {cfg.title}
          </h1>
          <p className="text-center text-slate-700 font-medium text-base leading-relaxed mb-3">
            {cfg.message}
          </p>
          <p className={`text-center text-sm font-semibold ${cfg.colorClass} bg-white/70 rounded-xl px-4 py-2`}>
            💡 {cfg.urgencyText}
          </p>
        </div>

        {/* ── O que é possível ────────────────────────────────────────── */}
        <div className="px-6 py-7">
          <p className="text-slate-600 leading-relaxed mb-5 text-base">
            A boa notícia é que, com os estímulos certos, é possível aliviar dores e recuperar sua mobilidade —{' '}
            <strong>sem sair de casa e sem gastar fortunas.</strong>
          </p>

          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
            <ul className="space-y-3">
              {[
                'Todo o conteúdo pode ser feito em casa',
                'Acesse tudo pelo celular, no seu ritmo',
                'Sem academia, sem equipamentos caros',
              ].map((item) => (
                <li key={item} className="flex items-center text-slate-800 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Oferta ─────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white px-6 py-8 border-t border-slate-100">

          {/* Contador de compras recentes */}
          <div className="flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-6">
            <Flame className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-800">
              🔥 <strong>1.247 pessoas</strong> compraram esta semana
            </span>
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-1 text-center leading-tight">
            Plano personalizado para o seu nível
          </h2>
          <p className="text-slate-500 text-sm text-center mb-6">
            Montamos um método simples e prático baseado no seu diagnóstico
          </p>

          {/* Card do produto — imagem CORRIGIDA: exercício em casa, não mulher de negócios */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-emerald-500 relative mb-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm whitespace-nowrap">
              ⭐ Plano Recomendado para Você
            </div>
            <div className="p-5 pt-6">
              {/* Imagem corrigida: idosa fazendo exercício leve em casa */}
              <div className="aspect-video rounded-xl overflow-hidden mb-5 relative shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
                  alt="Plano Completo de Recuperação Articular"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    Protocolo Anti-Dor em 7 Dias
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { icon: <BookOpen className="w-4 h-4 text-emerald-600" />, title: 'Ebook Principal', desc: 'Método passo a passo para desinflamar e recuperar mobilidade' },
                  { icon: <PlayCircle className="w-4 h-4 text-emerald-600" />, title: 'Rotina de Exercícios em Vídeo', desc: 'Movimentos leves de 10 min para fazer na sala de casa' },
                  { icon: <Utensils className="w-4 h-4 text-emerald-600" />, title: 'Guia Alimentar Antiinflamatório', desc: 'Alimentos que aliviam dores e protegem as articulações' },
                  { icon: <ListTodo className="w-4 h-4 text-emerald-600" />, title: 'Checklist Diário de Progresso', desc: 'Acompanhe sua melhora dia a dia' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="mt-0.5 mr-3 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seção de bônus */}
          <div className="border-2 border-dashed border-amber-300 rounded-2xl p-4 mb-6 bg-amber-50">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-800 text-sm uppercase tracking-wide">Bônus Incluídos</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-amber-500 font-bold flex-shrink-0">+</span>
                <span><strong>Bônus 1:</strong> Guia de automassagem articular (5 min/dia)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-amber-500 font-bold flex-shrink-0">+</span>
                <span><strong>Bônus 2:</strong> Protocolo especial para noites sem dor</span>
              </div>
            </div>
          </div>

          {/* Âncora de preço */}
          <div className="bg-slate-800 text-white rounded-3xl p-6 text-center mb-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />

            <p className="text-slate-300 text-sm mb-3 relative z-10">
              Tratamentos convencionais custam{' '}
              <span className="line-through text-slate-500">R$ 200–500/mês</span>
            </p>
            <p className="text-white font-medium mb-2 relative z-10 text-base">
              Você tem acesso a tudo por apenas:
            </p>
            <div className="flex items-baseline justify-center gap-2 relative z-10 mb-1">
              <span className="text-slate-500 line-through text-base">R$ 97,00</span>
              <span className="text-5xl font-black text-emerald-400">R$ 19,90</span>
            </div>
            <p className="text-sm text-emerald-300 font-semibold relative z-10">
              Pagamento único • Acesso imediato • Para sempre
            </p>
          </div>

          {/* Timer de urgência */}
          <div className="flex items-center justify-center gap-2 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 mb-6">
            <Clock className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-semibold text-rose-700">
              ⏳ Oferta especial expira em{' '}
              <span className="font-black text-rose-600">{countdown}</span>
            </span>
          </div>

          <div className="text-center mb-8">
            <p className="text-slate-500 font-medium bg-slate-100 inline-block px-5 py-2 rounded-full text-sm">
              📱 Comece hoje, no seu ritmo, diretamente pelo celular
            </p>
          </div>

          {/* Prova social — fotos de pessoas mais velhas, coerentes com 55-63 anos */}
          <div className="mb-8">
            <h3 className="text-center font-bold text-slate-800 text-lg mb-5">
              Quem já decidiu agir — e não se arrependeu
            </h3>
            <div className="space-y-4">
              {[
                {
                  // Mulher idosa sorrindo — coerente com "Maria, 58 anos"
                  img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150',
                  name: 'Maria, 58 anos',
                  text: '"Eu achava que era normal sentir dor todo dia. Hoje consigo me movimentar muito melhor e até voltei a caminhar com as amigas."',
                },
                {
                  // Homem idoso — coerente com "João, 63 anos"
                  img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150',
                  name: 'João, 63 anos',
                  text: '"Simples de seguir e realmente funciona. Faço os exercícios na sala de casa todo dia de manhã. A dor no joelho caiu bastante."',
                },
                {
                  // Mulher madura — coerente com "Ana, 55 anos"
                  img: 'https://images.unsplash.com/photo-1489424731084-a5d8b2a2cf54?auto=format&fit=crop&q=80&w=150',
                  name: 'Ana, 55 anos',
                  text: '"Comecei devagar e já senti diferença nas primeiras semanas. Me arrependo de não ter feito isso antes. Recomendo de olhos fechados."',
                },
              ].map((t) => (
                <div key={t.name} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white text-base font-bold py-5 px-6 rounded-2xl shadow-xl shadow-green-200 flex items-center justify-center mb-3 transition-colors hover:bg-[#20bd5a]"
              style={{ animation: 'pulse-cta 2s infinite' }}
            >
              👉 Quero começar a cuidar das minhas articulações agora
            </motion.button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Garantia de 7 dias — se não gostar, devolvemos 100% do valor
            </div>
          </div>

          {/* Frase de encerramento */}
          <div className="text-center px-4 pt-6 border-t border-slate-200">
            <p className="text-lg font-bold text-slate-800 italic leading-snug">
              "Seu corpo está te dando sinais. Você pode ignorar… ou começar hoje a cuidar dele."
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── CTA sticky para mobile ──────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 shadow-2xl">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleCheckout}
          className="w-full max-w-md mx-auto block bg-[#25D366] text-white text-sm font-bold py-3.5 rounded-xl shadow-lg"
        >
          🛒 Garantir meu plano por R$ 19,90 →
        </motion.button>
      </div>
    </div>
  );
}
