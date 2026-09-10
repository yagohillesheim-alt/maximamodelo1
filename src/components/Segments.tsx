import { 
  Factory, 
  Construction, 
  CarFront, 
  Building2, 
  Truck, 
  Gavel,
  ChevronRight
} from 'lucide-react';
import { SEGMENTS } from '../data';

const iconMap: any = {
  Factory: Factory,
  Construction: Construction,
  CarFront: CarFront,
  Building2: Building2,
  Truck: Truck,
  Gavel: Gavel
};

export default function Segments() {
  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-white" id="para-quem-atendemos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Mercados Atendidos</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Especialização por Segmento Produtivo</h2>
          <p className="text-slate-600 mt-4">Compreendemos as dores e exigências normativas específicas de cada setor industrial e comercial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEGMENTS.map((segment) => {
            const Icon = iconMap[segment.icon] || Factory;
            return (
              <div key={segment.id} className="bg-white p-8 rounded-xl shadow-md border border-slate-50 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#F0F3FF] rounded-lg text-[#006577]">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#111C2D] leading-tight">{segment.title}</h3>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    <strong className="text-[#A23F00]">Dores reais:</strong> {segment.painPoints}
                  </p>
                  <div className="mt-6 p-4 bg-[#F0F3FF] rounded text-[13px] text-[#006577] font-medium leading-relaxed">
                    <span className="font-bold">Solução:</span> {segment.solution}
                  </div>
                </div>
                <a className="mt-6 font-bold text-[12px] text-[#FE752D] flex items-center gap-1 group" href="#orcamento">
                  <span>Ver Solução Específica</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
