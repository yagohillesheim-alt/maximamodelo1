import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center group">
      <a 
        className="relative flex items-center justify-center w-14 h-14 bg-[#006577] text-white rounded-full shadow-lg hover:bg-[#008096] transition-all group-hover:scale-105" 
        href="https://wa.me/5500000000000" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#69D5EF] opacity-75 animate-ping -z-10"></span>
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE752D] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FE752D]"></span>
        </span>
      </a>
      <div className="hidden md:flex flex-col absolute right-16 bg-white text-[#111C2D] px-4 py-2 rounded shadow-md border-l-4 border-[#FE752D] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Suporte Operacional</span>
        <span className="text-[13px] font-bold">Fale com o Engenheiro Ambiental</span>
      </div>
    </aside>
  );
}
