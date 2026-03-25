import { motion } from 'motion/react';
import { useState } from 'react';
import {
  AlertCircle, CheckCircle, Activity, Star, ShieldCheck,
  BookOpen, PlayCircle, Utensils, ListTodo, Gift
} from 'lucide-react';

interface Props {
  score: number;
  onCheckout: () => void;
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
        'Suas articulações já mostram sinais de desgaste. O problema não é você, e não é falta de esforço. Com os estímulos certos, é possível melhorar muito.',
      urgencyText:
        'Pessoas que começaram a se cuidar nessa fase relatam alívio em poucas semanas.',
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
        'Suas articulações precisam de carinho e atenção agora. Mesmo que você já tenha tentado outras coisas, ainda existem caminhos para recuperar sua qualidade de vida.',
      urgencyText:
        'Cada pequeno passo hoje faz uma grande diferença na sua mobilidade de amanhã.',
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
      'Suas articulações estão no início do desgaste. Muita gente acha que essa dorzinha é "normal da idade", mas não deveria ser. Esta é a melhor hora para cuidar de você.',
    urgencyText:
      'Agir agora é o caminho mais simples para evitar que o desconforto aumente.',
  };
}

export default function ResultScreen({ score, onCheckout }: Props) {
  const cfg = getLevelConfig(score);

  const handleCheckout = () => {
    onCheckout();
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

        {/* ── Conexão Emocional e Educação ────────────────────────────── */}
        <div className="px-6 py-8">
          <p className="text-slate-600 leading-relaxed mb-4 text-base">
            Se você sente dor ao se levantar, caminhar ou até descansar… eu quero que saiba que <strong>você não está sozinho.</strong>
          </p>
          <p className="text-slate-600 leading-relaxed mb-4 text-base">
            Muita gente acha que isso é "normal da idade", mas a verdade é que conviver com dor constante não deveria ser normal. O problema não é você… e na maioria das vezes, também não é falta de esforço.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            Com o tempo, as articulações sofrem desgaste — mas com os estímulos certos, é possível melhorar muito a qualidade de vida. Mesmo que você já tenha tentado outras coisas, ainda existem caminhos mais simples e acessíveis.
          </p>

          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-4 text-center">
              Pensando nisso, foi criado um plano simples:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-700 font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Focado em trazer <strong>menos dor e mais mobilidade</strong> para o seu dia a dia.</span>
              </li>
              <li className="flex items-start text-slate-700 font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Feito no conforto da sua casa. <strong>Você não precisa de academia</strong> ou equipamentos caros.</span>
              </li>
              <li className="flex items-start text-slate-700 font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Acesse tudo diretamente pelo seu celular</strong>, no seu tempo e no seu ritmo.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Oferta ─────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white px-6 py-8 border-t border-slate-100">

          <h2 className="text-xl font-bold text-slate-800 mb-6 text-center leading-tight">
            Um caminho prático para cuidar de você
          </h2>

          {/* Card do produto */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-emerald-500 relative mb-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm whitespace-nowrap">
              ⭐ Plano Recomendado
            </div>
            <div className="p-5 pt-6">
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
                  { icon: <BookOpen className="w-4 h-4 text-emerald-600" />, title: 'Ebook Principal', desc: 'Passo a passo simples para desinflamar' },
                  { icon: <PlayCircle className="w-4 h-4 text-emerald-600" />, title: 'Rotina em Vídeo', desc: 'Movimentos leves de 10 min para fazer na sala' },
                  { icon: <Utensils className="w-4 h-4 text-emerald-600" />, title: 'Guia Alimentar', desc: 'Alimentos que protegem as articulações' },
                  { icon: <ListTodo className="w-4 h-4 text-emerald-600" />, title: 'Checklist Diário', desc: 'Acompanhe sua melhora de forma fácil' },
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
          <div className="border border-emerald-100 rounded-2xl p-4 mb-8 bg-emerald-50/50">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-emerald-600" />
              <span className="font-bold text-emerald-800 text-sm uppercase tracking-wide">Presentes Inclusos</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-emerald-500 font-bold flex-shrink-0">+</span>
                <span><strong>Bônus 1:</strong> Guia de automassagem (5 min/dia)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-emerald-500 font-bold flex-shrink-0">+</span>
                <span><strong>Bônus 2:</strong> Protocolo para noites mais tranquilas</span>
              </div>
            </div>
          </div>

          {/* Âncora de preço */}
          <div className="bg-slate-800 text-white rounded-3xl p-6 text-center mb-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />

            <p className="text-slate-300 text-sm mb-4 relative z-10 leading-relaxed">
              Se você fosse buscar isso de forma tradicional, com sessões semanais e deslocamentos, poderia gastar muito mais...
            </p>
            <p className="text-white font-medium mb-2 relative z-10 text-base">
              Mas você pode começar hoje por um valor acessível:
            </p>
            <div className="flex items-baseline justify-center gap-2 relative z-10 mb-1">
              <span className="text-5xl font-black text-emerald-400">R$ 19,90</span>
            </div>
            <p className="text-sm text-emerald-300 font-semibold relative z-10">
              Pagamento único • Acesso para sempre
            </p>
          </div>

          {/* Prova social */}
          <div className="mb-10">
            <h3 className="text-center font-bold text-slate-800 text-lg mb-6">
              Histórias de quem decidiu tentar
            </h3>
            <div className="space-y-4">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150',
                  name: 'Maria, 58 anos',
                  text: '"Eu achava que não tinha mais solução, mas comecei a sentir melhora aos poucos. Voltei a caminhar sem aquele medo da dor."',
                },
                {
                  img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150',
                  name: 'João, 63 anos',
                  text: '"Bem simples de acompanhar pelo celular. Faço na sala de casa e já sinto meu joelho mais firme."',
                },
                {
                  img: 'https://images.unsplash.com/photo-1489424731084-a5d8b2a2cf54?auto=format&fit=crop&q=80&w=150',
                  name: 'Ana, 55 anos',
                  text: '"Não é nada complicado. Fico feliz de ter encontrado algo que eu realmente consigo fazer todo dia."',
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
              className="w-full bg-[#25D366] text-white text-base font-bold py-5 px-6 rounded-2xl shadow-xl shadow-green-200 flex items-center justify-center mb-4 transition-colors hover:bg-[#20bd5a]"
            >
              👉 Quero começar a cuidar das minhas articulações
            </motion.button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium bg-slate-100 py-3 px-4 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-left">Você pode testar com segurança. Caso não se adapte, há garantia de 7 dias.</span>
            </div>
          </div>

          {/* Frase de encerramento */}
          <div className="text-center px-4 pt-6 border-t border-slate-200">
            <p className="text-lg font-bold text-slate-800 italic leading-snug">
              "Você não precisa continuar convivendo com isso. Começar pode ser mais simples do que parece."
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
          👉 Quero começar a cuidar das minhas articulações
        </motion.button>
      </div>
    </div>
  );
}
