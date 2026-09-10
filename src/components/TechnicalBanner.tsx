import { ShieldCheck, MapPin } from 'lucide-react';

export default function TechnicalBanner() {
  return (
    <div className="w-full bg-[#1E293B] text-[#ECF1FF] py-2 px-4 lg:px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-3 text-[11px] uppercase font-bold tracking-widest">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#FE752D] animate-pulse"></span>
          <span className="text-[#69D5EF]">Atendimento Corporativo Especializado</span>
          <span className="text-slate-500 hidden md:inline">|</span>
          <span className="text-slate-300">Resíduos Classe I (Perigosos) e Classe II</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold text-[#FFDEA7] tracking-wider">
          <MapPin size={14} className="text-[#FFBB1E]" />
          <span>Base Operacional: Mato Grosso • Atendimento Regional</span>
        </div>
      </div>
    </div>
  );
}
