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
  MessageCircle,
  ChevronRight
} from 'lucide-react';

export default function CheckoutPage() {
  const handleCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/psynepw_810418';
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white pb-32 font-sans selection:bg-[#7c3aed] selection:text-white">
      {/* ── Header de Urgência Leve ────────────────────────────────── */}
      <div className="bg-[#16a34a] text-white text-center py-2 px-4 text-sm font-bold flex items-center justify-center gap-2 tracking-wide">
        <Clock className="w-4 h-4" />
        <span>Condição especial de lançamento por tempo limitado</span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto bg-[#0f0f23] shadow-xl overflow-hidden relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7c3aed]/10 via-[#0f0f23]/0 to-[#0f0f23]/0 pointer-events-none" />

        {/* ── Headline e Promessa ────────────────────────────────────── */}
        <div className="px-6 pt-10 pb-8 text-center border-b border-white/5 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
            O Fim das Dores Constantes e Noites Mal Dormidas
          </h1>
          <p className="text-white/70 text-base font-medium leading-relaxed">
            Um método natural e comprovado para <strong className="text-[#a855f7]">aliviar o desconforto nas articulações</strong>, recuperar sua <strong className="text-[#a855f7]">mobilidade</strong> e voltar a ter <strong className="text-[#a855f7]">noites de sono profundo</strong> em poucos dias.
          </p>
        </div>

        {/* ── Apresentação do Produto (Mockup CSS) ────────────────────────────────── */}
        <div className="px-6 py-10 bg-[#1a1833]">
          
          {/* CSS Mockup do Kit Digital */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-[280px] mx-auto mb-12 h-[320px] perspective-1000"
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

          <p className="text-white/80 leading-relaxed mb-8 text-center">
            Você está prestes a acessar um plano prático, <strong>100% natural e acolhedor</strong>, feito especialmente para quem não aguenta mais conviver com a dor diária. Tudo o que você precisa fazer no conforto da sua casa, dedicando poucos minutos do seu dia.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { icon: <Heart className="w-5 h-5 text-[#22c55e]" />, text: 'Menos dor e rigidez ao levantar da cama' },
              { icon: <Activity className="w-5 h-5 text-[#22c55e]" />, text: 'Mais liberdade de movimento para o seu dia a dia' },
              { icon: <Moon className="w-5 h-5 text-[#22c55e]" />, text: 'Dormir a noite inteira sem acordar com fisgadas' },
              { icon: <CheckCircle className="w-5 h-5 text-[#22c55e]" />, text: 'Recuperar a sua alegria e qualidade de vida' },
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-[#1e1b3a] p-4 rounded-xl border border-white/5 shadow-sm">
                <div className="mr-3 flex-shrink-0">{item.icon}</div>
                <span className="text-white/80 font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* ── Bônus Especiais ──────────────────────────────────────── */}
          <div className="bg-[#1e1b3a] border border-[#7c3aed]/30 rounded-2xl p-6 relative mt-12">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7c3aed] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(124,58,237,0.4)] whitespace-nowrap">
              <Gift className="w-4 h-4" /> Presentes Inclusos
            </div>
            
            <h3 className="font-bold text-white text-center mt-3 mb-6">
              Garantindo seu acesso hoje, você recebe gratuitamente:
            </h3>

            <div className="space-y-4">
              <div className="flex items-start bg-[#1a1833] p-4 rounded-xl shadow-sm border border-white/5">
                <Utensils className="w-8 h-8 text-[#a855f7] mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">20 Receitas para Melhorar a Artrose</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Refeições deliciosas e fáceis com ingredientes anti-inflamatórias que ajudam a nutrir e proteger suas articulações de dentro para fora.</p>
                </div>
              </div>
              <div className="flex items-start bg-[#1a1833] p-4 rounded-xl shadow-sm border border-white/5">
                <Moon className="w-8 h-8 text-[#a855f7] mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Guia Noite Bem Dormida</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Técnicas simples e relaxantes para aliviar a tensão do corpo antes de deitar, garantindo um sono verdadeiramente reparador.</p>
                </div>
              </div>
              <div className="flex items-start bg-[#1a1833] p-4 rounded-xl shadow-sm border border-white/5">
                <Activity className="w-8 h-8 text-[#a855f7] mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Guia de Automassagem</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Técnicas simples de 5 minutos para aliviar a tensão muscular e destravar as articulações usando apenas as suas mãos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Prova Emocional ────────────────────────────────────────── */}
        <div className="px-6 py-12 bg-[#0f0f23]">
          <h3 className="text-center font-bold text-white text-xl mb-10">
            Para quem sabe o que é acordar com dor...
          </h3>
          
          <div className="bg-[#1e1b3a] p-6 rounded-2xl border border-white/5 relative">
            <div className="absolute -top-6 -left-2 text-6xl text-[#7c3aed]/30 font-serif">"</div>
            <p className="text-white/80 italic leading-relaxed relative z-10 mb-6">
              Eu já não sabia mais o que era dormir uma noite inteira. O joelho latejava e de manhã parecia que estava enferrujado. Quando vi esse método, achei que era bom demais pra ser verdade, mas como era baratinho e em casa, resolvi tentar. Na primeira semana eu já consegui levantar da cama sem ter que ficar me apoiando nas paredes. Devolveu minha dignidade.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#7c3aed]/20 rounded-full flex items-center justify-center text-[#a855f7] font-bold mr-3 border border-[#7c3aed]/30">
                M
              </div>
              <div>
                <p className="font-bold text-white text-sm">Maria S., 62 anos</p>
                <div className="flex text-[#fbbf24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <div className="px-6 py-10 bg-[#1a1833] border-t border-white/5">
          <h3 className="font-bold text-white text-lg mb-6 text-center">Dúvidas Frequentes</h3>
          <div className="space-y-4">
            <div className="bg-[#1e1b3a] p-5 rounded-xl border border-white/5">
              <h4 className="font-bold text-white text-sm mb-2">Como vou receber o material?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar todo o material (Protocolo + Bônus) diretamente no seu celular, tablet ou computador.</p>
            </div>
            <div className="bg-[#1e1b3a] p-5 rounded-xl border border-white/5">
              <h4 className="font-bold text-white text-sm mb-2">Serve para qualquer tipo de dor na articulação?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Sim! O método foi desenvolvido com foco em aliviar a inflamação e a rigidez, sendo muito eficaz para dores nos joelhos, ombros, mãos, quadril e coluna.</p>
            </div>
            <div className="bg-[#1e1b3a] p-5 rounded-xl border border-white/5">
              <h4 className="font-bold text-white text-sm mb-2">Em quanto tempo vejo resultados?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Muitas pessoas relatam alívio significativo da rigidez matinal já nos primeiros 3 a 7 dias seguindo o passo a passo.</p>
            </div>
            <div className="bg-[#1e1b3a] p-5 rounded-xl border border-white/5">
              <h4 className="font-bold text-white text-sm mb-2">E se eu não gostar?</h4>
              <p className="text-white/60 text-sm leading-relaxed">Você tem 7 dias de garantia incondicional. Se não sentir melhora ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>
        </div>

        {/* ── Trust Seals ────────────────────────────────────────────── */}
        <div className="px-6 py-8 bg-[#0f0f23] border-t border-white/5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center p-4 bg-[#1a1833] rounded-xl border border-white/5">
              <Lock className="w-6 h-6 text-white/40 mb-2" />
              <span className="text-xs font-medium text-white/60">Pagamento 100%<br/>Seguro</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#1a1833] rounded-xl border border-white/5">
              <Smartphone className="w-6 h-6 text-white/40 mb-2" />
              <span className="text-xs font-medium text-white/60">Acesso Imediato<br/>no Celular</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#1a1833] rounded-xl border border-white/5">
              <ShieldCheck className="w-6 h-6 text-white/40 mb-2" />
              <span className="text-xs font-medium text-white/60">Garantia de<br/>7 Dias</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#1a1833] rounded-xl border border-white/5">
              <MessageCircle className="w-6 h-6 text-white/40 mb-2" />
              <span className="text-xs font-medium text-white/60">Suporte via<br/>WhatsApp</span>
            </div>
          </div>
        </div>

        {/* ── Oferta e CTA ───────────────────────────────────────────── */}
        <div className="px-6 py-12 bg-[rgba(124,58,237,0.08)] text-white text-center border-t border-[#7c3aed]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Sua saúde não pode esperar</h2>
            <p className="text-white/60 text-sm mb-8">Tenha acesso imediato a todo o material</p>

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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-[#16a34a] text-white rounded-2xl shadow-[0_0_25px_rgba(22,163,74,0.4)] flex flex-col items-center justify-center p-4 mb-6 transition-colors hover:bg-[#15803d] shimmer-btn relative border border-[#22c55e]/50"
            >
              <span className="text-xl font-black tracking-wide mb-1 uppercase">Quero alívio agora</span>
              <span className="text-sm font-medium text-white/90 flex items-center gap-1">
                Acessar protocolo <ChevronRight className="w-4 h-4" />
              </span>
            </motion.button>

            <div className="flex items-start justify-center gap-3 text-sm text-white/70 bg-[#1a1833] py-4 px-5 rounded-xl border border-white/5">
              <ShieldCheck className="w-6 h-6 text-[#a855f7] flex-shrink-0" />
              <span className="text-left leading-relaxed">
                <strong>Risco Zero:</strong> Você tem 7 dias de garantia incondicional para testar o protocolo.
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── CTA sticky para mobile ──────────────────────────────────── */}
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
