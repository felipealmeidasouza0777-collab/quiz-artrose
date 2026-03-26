import { motion } from 'motion/react';
import {
  AlertCircle, CheckCircle, Activity, Star, ShieldCheck,
  BookOpen, Moon, Utensils, ArrowRight, Gift
} from 'lucide-react';

interface Props {
  score: number;
  onCheckout: () => void;
}

function getResultContent(score: number) {
  if (score >= 7 && score <= 14) {
    return {
      title: 'Seu nível de desconforto nas articulações está moderado — e isso pode piorar se não for tratado.',
      subtitle: 'Você já sente o impacto no seu dia a dia, mas ainda há tempo de reverter esse quadro antes que limite totalmente seus movimentos.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      icon: <Activity className="w-10 h-10 text-orange-500" />
    };
  }
  if (score > 14) {
    return {
      title: 'Seu nível de desconforto nas articulações está avançado — mas ainda é possível recuperar sua qualidade de vida.',
      subtitle: 'A dor já faz parte da sua rotina e limita muito o que você gosta de fazer. Suas articulações precisam de cuidado imediato.',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      icon: <AlertCircle className="w-10 h-10 text-rose-500" />
    };
  }
  return {
    title: 'Seu nível de desconforto nas articulações está leve — mas este é o momento exato para evitar que piore.',
    subtitle: 'Aquelas "fisgadas" e rigidez matinal são avisos do seu corpo. Cuidar agora é a forma mais inteligente de evitar dores intensas no futuro.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    icon: <CheckCircle className="w-10 h-10 text-emerald-500" />
  };
}

export default function ResultScreen({ score }: Props) {
  const result = getResultContent(score);

  const handleBuy = () => {
    window.location.href = 'https://pay.cakto.com.br/psynepw_810418';
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-24 font-sans text-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white shadow-sm min-h-screen"
      >
        {/* 1. TOPO (IMPACTO + RESULTADO) */}
        <div className={`${result.bg} px-6 py-10 text-center border-b border-slate-100`}>
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              {result.icon}
            </div>
          </div>
          <h1 className={`text-2xl font-bold mb-4 leading-tight ${result.color}`}>
            {result.title}
          </h1>
          <p className="text-slate-700 text-base leading-relaxed">
            {result.subtitle}
          </p>
        </div>

        {/* 2. IDENTIFICAÇÃO (DOR REAL) */}
        <div className="px-6 py-10 bg-white">
          <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
            Nós entendemos exatamente o que você está passando...
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1.5 bg-rose-100 p-1.5 rounded-full flex-shrink-0">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              </div>
              <p className="text-slate-600 leading-relaxed">Aquela <strong>dificuldade e lentidão ao levantar</strong> da cama ou de uma cadeira.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 bg-rose-100 p-1.5 rounded-full flex-shrink-0">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              </div>
              <p className="text-slate-600 leading-relaxed">A <strong>rigidez nas articulações</strong> logo nas primeiras horas da manhã.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 bg-rose-100 p-1.5 rounded-full flex-shrink-0">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              </div>
              <p className="text-slate-600 leading-relaxed">A <strong>dor chata que atrapalha o sono</strong> ou impede você de fazer movimentos simples do dia a dia.</p>
            </div>
          </div>
        </div>

        {/* 3. TRANSIÇÃO (ESPERANÇA) */}
        <div className="px-6 py-8 bg-sky-50 text-center">
          <p className="text-lg text-sky-900 font-medium leading-relaxed">
            Mas a boa notícia é que existem formas simples de aliviar isso <strong>sem sair de casa</strong>.
          </p>
        </div>

        {/* 4. APRESENTAÇÃO DO PRODUTO (SOLUÇÃO) */}
        <div className="px-6 py-10 bg-white text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
            Um protocolo simples, pensado para ser feito em casa
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Mesmo por quem nunca tentou nada antes ou acha que já passou da idade.
          </p>

          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm mb-10">
            <h3 className="font-black text-emerald-800 text-xl leading-tight mb-3">
              Protocolo Sem Dor em 7 Dias
            </h3>
            <p className="text-emerald-700 font-medium mb-1">+ 20 Receitas para Melhorar Artrose</p>
            <p className="text-emerald-700 font-medium">+ Noite Bem Dormida</p>
          </div>

          {/* 5. O QUE A PESSOA RECEBE */}
          <div className="text-left space-y-4 mb-10">
            <h4 className="font-bold text-slate-800 text-lg mb-4 text-center">O que você vai receber:</h4>
            
            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
              <BookOpen className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-slate-800 mb-1">Protocolo de 7 Dias</h5>
                <p className="text-sm text-slate-600 leading-relaxed">Um passo a passo simples e prático para começar a desinflamar e soltar as articulações.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
              <Moon className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-slate-800 mb-1">Guia Noite Bem Dormida</h5>
                <p className="text-sm text-slate-600 leading-relaxed">Técnicas fáceis para relaxar o corpo e conseguir ter um sono profundo e reparador.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 relative">
              <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full">
                Bônus Gratuito
              </div>
              <Utensils className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-slate-800 mb-1">20 Receitas Anti-inflamatórias</h5>
                <p className="text-sm text-slate-600 leading-relaxed">Refeições deliciosas com ingredientes que ajudam a proteger as articulações de dentro para fora.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 relative">
              <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full">
                Bônus Gratuito
              </div>
              <Gift className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-slate-800 mb-1">Guia de Automassagem</h5>
                <p className="text-sm text-slate-600 leading-relaxed">Técnicas simples de 5 minutos para aliviar a tensão muscular e destravar as articulações usando apenas as suas mãos.</p>
              </div>
            </div>
          </div>

          {/* 6. BENEFÍCIOS */}
          <div className="mb-4">
            <h4 className="font-bold text-slate-800 text-lg mb-6 text-center">Como sua vida vai mudar:</h4>
            <div className="grid grid-cols-1 gap-3 text-left">
              {[
                'Reduzir dores nas articulações',
                'Melhorar a mobilidade diária',
                'Dormir melhor a noite toda',
                'Voltar a ter uma rotina mais leve'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-3.5 rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. PROVA SOCIAL */}
        <div className="px-6 py-10 bg-slate-50 border-y border-slate-100">
          <h3 className="text-center font-bold text-slate-800 text-xl mb-8">
            Quem já tentou, recomenda:
          </h3>
          
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-4">
                "Eu não conseguia dormir direito por causa da dor no joelho. Depois que comecei, senti diferença já na primeira semana. É muito fácil de seguir."
              </p>
              <p className="font-bold text-slate-800 text-sm">— Maria, 62 anos</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-4">
                "Achei que era normal da idade, mas com as receitas e o passo a passo, hoje levanto da cama sem aquela rigidez que me travava todo."
              </p>
              <p className="font-bold text-slate-800 text-sm">— João, 58 anos</p>
            </div>
          </div>
        </div>

        {/* 8. OFERTA & 9. CTA */}
        <div className="px-6 py-10 bg-white text-center">
          <div className="mb-8">
            <p className="text-slate-400 line-through text-lg mb-1">De R$ 49,90</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-slate-600">Por apenas</span>
              <span className="text-5xl font-black text-emerald-600">R$ 19,90</span>
            </div>
            <p className="text-emerald-700 text-sm mt-3 font-medium bg-emerald-50 inline-block px-4 py-1.5 rounded-full">
              Pagamento único • Acesso imediato
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBuy}
            className="w-full bg-[#25D366] text-white text-lg font-bold py-5 px-6 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center mb-6 transition-colors hover:bg-[#20bd5a]"
          >
            Quero começar meu protocolo agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>

          {/* 10. GARANTIA EMOCIONAL */}
          <div className="flex items-start justify-center gap-3 text-sm text-slate-600 bg-slate-50 py-4 px-5 rounded-xl border border-slate-100">
            <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <span className="text-left leading-relaxed">
              Você pode começar hoje, no conforto da sua casa, <strong>usando apenas o seu celular</strong>. Risco zero com 7 dias de garantia.
            </span>
          </div>
        </div>

      </motion.div>

      {/* CTA sticky para mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-md mx-auto">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleBuy}
            className="w-full bg-[#25D366] text-white text-base font-bold py-3.5 rounded-xl shadow-md hover:bg-[#20bd5a] transition-colors"
          >
            Quero começar meu protocolo agora
          </motion.button>
        </div>
      </div>
    </div>
  );
}
