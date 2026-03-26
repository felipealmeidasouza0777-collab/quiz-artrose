import { motion } from 'motion/react';
import {
  CheckCircle,
  Utensils,
  Moon,
  ShieldCheck,
  Gift,
  Star,
  Clock,
  Heart,
  Activity,
  Smartphone,
  Lock,
  MessageCircle
} from 'lucide-react';

export default function CheckoutPage() {
  const handleCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/psynepw_810418';
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32 font-sans">
      {/* ── Header de Urgência Leve ────────────────────────────────── */}
      <div className="bg-emerald-600 text-white text-center py-2 px-4 text-sm font-medium flex items-center justify-center gap-2">
        <Clock className="w-4 h-4" />
        <span>Condição especial de lançamento disponível por tempo limitado</span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto bg-white shadow-xl overflow-hidden"
      >
        {/* ── Headline e Promessa ────────────────────────────────────── */}
        <div className="px-6 pt-10 pb-8 text-center border-b border-slate-100">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight mb-4">
            O Fim das Dores Constantes e Noites Mal Dormidas
          </h1>
          <p className="text-slate-600 text-base font-medium leading-relaxed">
            Um método natural e comprovado para <strong className="text-emerald-600">aliviar o desconforto nas articulações</strong>, recuperar sua <strong className="text-emerald-600">mobilidade</strong> e voltar a ter <strong className="text-emerald-600">noites de sono profundo</strong> em poucos dias.
          </p>
        </div>

        {/* ── Apresentação do Produto (Mockup CSS) ────────────────────────────────── */}
        <div className="px-6 py-8 bg-slate-50">
          
          {/* CSS Mockup do Kit Digital */}
          <div className="relative w-full max-w-[280px] mx-auto mb-10 h-[320px] perspective-1000">
            {/* Livro Principal */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-48 h-64 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-r-xl rounded-l-sm shadow-2xl z-30 transform rotate-y-[-15deg] rotate-z-[2deg] border-l-4 border-emerald-950 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-black text-xl leading-tight mb-1">Protocolo Sem Dor</h3>
              <p className="text-emerald-100 text-xs font-medium uppercase tracking-widest">Em 7 Dias</p>
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
          </div>

          <p className="text-slate-700 leading-relaxed mb-6 text-center">
            Você está prestes a acessar um plano prático, <strong>100% natural e acolhedor</strong>, feito especialmente para quem não aguenta mais conviver com a dor diária. Tudo o que você precisa fazer no conforto da sua casa, dedicando poucos minutos do seu dia.
          </p>

          <div className="space-y-3 mb-8">
            {[
              { icon: <Heart className="w-5 h-5 text-emerald-500" />, text: 'Menos dor e rigidez ao levantar da cama' },
              { icon: <Activity className="w-5 h-5 text-emerald-500" />, text: 'Mais liberdade de movimento para o seu dia a dia' },
              { icon: <Moon className="w-5 h-5 text-emerald-500" />, text: 'Dormir a noite inteira sem acordar com fisgadas' },
              { icon: <CheckCircle className="w-5 h-5 text-emerald-500" />, text: 'Recuperar a sua alegria e qualidade de vida' },
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="mr-3 flex-shrink-0">{item.icon}</div>
                <span className="text-slate-700 font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* ── Bônus Especiais ──────────────────────────────────────── */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5 relative mt-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
              <Gift className="w-4 h-4" /> Presentes Inclusos
            </div>
            
            <h3 className="font-bold text-emerald-900 text-center mt-2 mb-4">
              Garantindo seu acesso hoje, você recebe gratuitamente:
            </h3>

            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
                <Utensils className="w-8 h-8 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">20 Receitas para Melhorar a Artrose</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Refeições deliciosas e fáceis com ingredientes anti-inflamatórias que ajudam a nutrir e proteger suas articulações de dentro para fora.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
                <Moon className="w-8 h-8 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Guia Noite Bem Dormida</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Técnicas simples e relaxantes para aliviar a tensão do corpo antes de deitar, garantindo um sono verdadeiramente reparador.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
                <Activity className="w-8 h-8 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Guia de Automassagem</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Técnicas simples de 5 minutos para aliviar a tensão muscular e destravar as articulações usando apenas as suas mãos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Prova Emocional ────────────────────────────────────────── */}
        <div className="px-6 py-10 bg-white">
          <h3 className="text-center font-bold text-slate-800 text-xl mb-8">
            Para quem sabe o que é acordar com dor...
          </h3>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
            <div className="absolute -top-4 -left-2 text-6xl text-emerald-200 font-serif">"</div>
            <p className="text-slate-700 italic leading-relaxed relative z-10 mb-4">
              Eu já não sabia mais o que era dormir uma noite inteira. O joelho latejava e de manhã parecia que estava enferrujado. Quando vi esse método, achei que era bom demais pra ser verdade, mas como era baratinho e em casa, resolvi tentar. Na primeira semana eu já consegui levantar da cama sem ter que ficar me apoiando nas paredes. Devolveu minha dignidade.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3">
                M
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Maria S., 62 anos</p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <div className="px-6 py-8 bg-slate-50 border-t border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-6 text-center">Dúvidas Frequentes</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-2">Como vou receber o material?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar todo o material (Protocolo + Bônus) diretamente no seu celular, tablet ou computador.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-2">Serve para qualquer tipo de dor na articulação?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Sim! O método foi desenvolvido com foco em aliviar a inflamação e a rigidez, sendo muito eficaz para dores nos joelhos, ombros, mãos, quadril e coluna.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-2">Em quanto tempo vejo resultados?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Muitas pessoas relatam alívio significativo da rigidez matinal já nos primeiros 3 a 7 dias seguindo o passo a passo.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-2">E se eu não gostar?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Você tem 7 dias de garantia incondicional. Se não sentir melhora ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>
        </div>

        {/* ── Trust Seals ────────────────────────────────────────────── */}
        <div className="px-6 py-6 bg-white border-t border-slate-100">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-lg">
              <Lock className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-xs font-medium text-slate-600">Pagamento 100%<br/>Seguro</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-lg">
              <Smartphone className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-xs font-medium text-slate-600">Acesso Imediato<br/>no Celular</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-xs font-medium text-slate-600">Garantia de<br/>7 Dias</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-lg">
              <MessageCircle className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-xs font-medium text-slate-600">Suporte via<br/>WhatsApp</span>
            </div>
          </div>
        </div>

        {/* ── Oferta e CTA ───────────────────────────────────────────── */}
        <div className="px-6 py-10 bg-slate-900 text-white text-center rounded-t-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Sua saúde não pode esperar</h2>
            <p className="text-slate-400 text-sm mb-6">Tenha acesso imediato a todo o material</p>

            <div className="mb-6">
              <p className="text-slate-400 line-through text-lg mb-1">De R$ 49,90</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-slate-300">por apenas</span>
                <span className="text-5xl font-black text-emerald-400">R$ 19,90</span>
              </div>
              <p className="text-emerald-300 text-sm mt-2 font-medium">Pagamento único • Acesso vitalício</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-[#16a34a] text-white text-lg font-bold py-5 px-6 rounded-2xl shadow-[0_0_30px_rgba(22,163,74,0.3)] flex items-center justify-center mb-6 transition-colors hover:bg-[#15803d]"
            >
              👉 QUERO ALÍVIO PARA MINHAS DORES AGORA
            </motion.button>

            <div className="flex items-center justify-center gap-3 text-sm text-slate-300 bg-slate-800/50 py-3 px-4 rounded-xl border border-slate-700">
              <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <span className="text-left leading-tight">
                <strong>Risco Zero:</strong> Você tem 7 dias de garantia incondicional para testar o protocolo.
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── CTA sticky para mobile ──────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 line-through">R$ 49,90</span>
            <span className="text-lg font-black text-emerald-600 leading-none">R$ 19,90</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleCheckout}
            className="flex-1 bg-[#16a34a] text-white text-sm font-bold py-3.5 rounded-xl shadow-lg hover:bg-[#15803d] transition-colors"
          >
            QUERO ALÍVIO AGORA
          </motion.button>
        </div>
      </div>
    </div>
  );
}
