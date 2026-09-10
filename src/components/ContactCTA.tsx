import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-[#1E293B] text-[#ECF1FF] relative overflow-hidden" id="contato">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <span className="text-[11px] text-[#69D5EF] uppercase font-bold tracking-wider">Pronto para Blindar sua Operação?</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Agende uma reunião técnica com nosso engenheiro responsável.</h2>
          <p className="text-[18px] text-slate-300 max-w-2xl leading-relaxed">
            Evite passivos ambientais, reduza custos com descarte desordenado e conte com relatórios auditáveis que comprovam a responsabilidade da sua marca.
          </p>
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-[#FFBB1E] font-bold text-[12px] uppercase tracking-wider">
              <PhoneCall size={18} />
              <span>Atendimento Comercial B2B</span>
            </div>
            <div className="flex items-center gap-2 text-[#69D5EF] font-bold text-[12px] uppercase tracking-wider">
              <MessageCircle size={18} />
              <span>comercial@maximaambiental.com.br</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a className="w-full bg-[#FE752D] hover:bg-[#A23F00] text-white py-4 px-6 rounded text-center font-bold text-[14px] shadow-lg transition-all flex items-center justify-center gap-2" href="#orcamento">
            <span>Solicitar Orçamento Agora</span>
            <ArrowRight size={20} />
          </a>
          <a className="w-full bg-white text-[#111C2D] hover:bg-slate-100 py-4 px-6 rounded text-center font-bold text-[14px] transition-all flex items-center justify-center gap-2" href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} className="text-[#006577]" />
            <span>Conversar via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
