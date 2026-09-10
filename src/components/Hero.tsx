import { ShieldCheck, ArrowRight, MessageCircle, Settings2, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="w-full bg-[#F0F3FF] relative overflow-hidden py-16 lg:py-24 px-4 lg:px-6 mt-20" id="inicio">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#008096]/10 via-[#F0F3FF] to-[#FE752D]/5 pointer-events-none" />
      <div className="absolute top-10 -right-24 w-96 h-96 bg-[#69D5EF]/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start gap-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#D8E3FB] px-3 py-1 rounded-full">
            <ShieldCheck size={18} className="text-[#006577]" />
            <span className="text-[11px] uppercase tracking-wider text-[#006577] font-bold">Engenharia e Operação Ambiental Especializada</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl text-[#111C2D] tracking-tight font-extrabold leading-tight">
            Gestão inteligente de resíduos com <span className="text-[#006577]">total segurança</span>, rastreabilidade e <span className="text-[#FE752D]">conformidade legal</span>.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl">
            Soluções completas em coleta, transporte, tratamento e destinação final ambientalmente adequada de resíduos Classe I (perigosos) e Classe II (não perigosos). Blindagem jurídica, emissão rigorosa de MTR/CDF e previsibilidade orçamentária para sua empresa.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 w-full pt-2">
            <a className="bg-[#FE752D] hover:bg-[#A23F00] text-white px-8 py-3.5 rounded font-bold text-[14px] shadow-md transition-all flex items-center gap-2" href="#orcamento">
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} />
            </a>
            <a className="bg-white text-[#006577] hover:bg-slate-50 px-6 py-3.5 rounded font-bold text-[14px] shadow-sm transition-all flex items-center gap-2" href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              <span>WhatsApp Especialista</span>
            </a>
            <a className="bg-[#006577] hover:bg-[#008096] text-white px-6 py-3.5 rounded font-bold text-[14px] transition-all flex items-center gap-2" href="#triagem">
              <Settings2 size={20} />
              <span>Diagnóstico Rápido</span>
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 w-full border-t border-slate-200">
            <div className="flex flex-col">
              <span className="text-[22px] text-[#006577] font-bold">&lt; 24h</span>
              <span className="text-[11px] text-slate-500 uppercase font-bold">Resposta Técnica</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] text-[#FE752D] font-bold">100%</span>
              <span className="text-[11px] text-slate-500 uppercase font-bold">Rastreabilidade</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] text-[#111C2D] font-bold">PNRS</span>
              <span className="text-[11px] text-slate-500 uppercase font-bold">Conformidade Legal</span>
            </div>
          </div>
        </motion.div>

        {/* Visual panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck size={24} className="text-[#006577]" />
                <span className="text-lg font-bold text-[#111C2D]">Status de Conformidade</span>
              </div>
              <span className="bg-[#ABEDFF] text-[#001F26] text-[11px] font-bold px-2 py-1 rounded">AUDITADO</span>
            </div>
            
            <div className="my-4 rounded-lg overflow-hidden relative shadow-sm h-48">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGI9AH0OjZDxNu7kpDeFaWltFLXZsrWmgQedRJCIumD9ekV8oCQU8ZapyISWz_yvkROHpT-LGb9PZqwY6Fdz1XQPG_VYORH3oFNnz2_TvgZWeSBvL-tWS74fsRtYKhqt8Ajx6X9Vib6iOAmvtjfZa4tZeoxerc7BedZkaDqsv8iLwgQZTiW30ZXKZsYFaVc_Kfd2-L6yIR37_jWHJ924lGhWoSK7-bL6ILsN-1PP3-LvBZN3U2flAIFQ" 
                alt="Operação Ambiental"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-[14px] font-semibold flex items-center gap-1.5">
                  <ShieldCheck size={18} className="text-[#FE752D]" /> Coleta & Rastreabilidade SINIR
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F0F3FF] p-3 rounded">
                <div className="text-[11px] text-slate-500 uppercase font-bold">Licenciamento</div>
                <div className="text-lg font-bold text-[#006577] mt-0.5">SEMA / IBAMA</div>
                <div className="text-[13px] text-slate-500">Em conformidade legal</div>
              </div>
              <div className="bg-[#F0F3FF] p-3 rounded">
                <div className="text-[11px] text-slate-500 uppercase font-bold">Equipe MOPP</div>
                <div className="text-lg font-bold text-[#FE752D] mt-0.5">Certificada</div>
                <div className="text-[13px] text-slate-500">Transporte de perigosos</div>
              </div>
            </div>
            
            <div className="mt-4 p-2 bg-slate-50 rounded flex items-center gap-2">
              <Lock size={16} className="text-[#006577]" />
              <span className="text-[11px] text-slate-500">Blindagem contra multas ambientais e passivos civis/criminais.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
