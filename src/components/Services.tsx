import { 
  LayoutGrid, 
  Truck, 
  ShieldCheck, 
  TriangleAlert, 
  Recycle, 
  DraftingCompass, 
  ArrowRight,
  ListFilter
} from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: any = {
  LayoutGrid: LayoutGrid,
  Truck: Truck,
  ShieldCheck: ShieldCheck,
  TriangleAlert: TriangleAlert,
  Recycle: Recycle,
  LayoutDashboard: DraftingCompass
};

export default function Services() {
  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-white" id="servicos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Soluções Ponta a Ponta</span>
            <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Serviços Ambientais Especializados</h2>
            <p className="text-slate-600 mt-4 max-w-2xl">Operações customizadas com frotas adaptadas, equipes homologadas e conformidade irrestrita com as normas da SEMA, IBAMA e ANTT.</p>
          </div>
          <a className="bg-[#FE752D] hover:bg-[#A23F00] text-white px-6 py-2.5 rounded font-bold text-[12px] transition-colors shrink-0 flex items-center gap-2" href="#orcamento">
            <span>Ver Tabela de Serviços</span>
            <ListFilter size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || LayoutGrid;
            const isClasseI = service.id === 'classe1';
            const isClasseII = service.id === 'classe2';

            return (
              <div 
                key={service.id} 
                className={`bg-white p-8 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow border-l-4 ${
                  isClasseI ? 'border-[#FE752D]' : isClasseII ? 'border-[#006577]' : 'border-transparent'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                    isClasseI ? 'bg-orange-50 text-orange-600' : 'bg-[#F0F3FF] text-[#006577]'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <span className={`text-[11px] uppercase font-bold ${isClasseI ? 'text-[#A23F00]' : 'text-[#006577]'}`}>
                    {service.category}
                  </span>
                  <h3 className="text-[22px] font-bold text-[#111C2D] mt-2 leading-tight">{service.title}</h3>
                  <p className="text-[13px] text-slate-500 mt-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2 text-[13px]">
                    <div className="text-[#111C2D]"><strong>Resolve:</strong> {service.resolve}</div>
                    <div className="text-slate-500"><strong>Indicado para:</strong> {service.indicatedFor}</div>
                  </div>
                </div>
                <a className={`mt-8 font-bold text-[12px] flex items-center gap-1.5 transition-colors ${
                  isClasseI ? 'text-orange-600 hover:text-orange-700' : 'text-[#006577] hover:text-[#008096]'
                }`} href="#orcamento">
                  <span>Solicitar Orçamento</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
