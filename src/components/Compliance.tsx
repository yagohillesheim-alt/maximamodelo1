import { ShieldCheck, Database, FileText, Award, Star } from 'lucide-react';

export default function Compliance() {
  const testimonials = [
    {
      initials: 'GP',
      role: 'Gerente de SSMA',
      company: 'Indústria Agroquímica',
      text: '"A Máxima Ambiental transformou a nossa operação fabril. Eliminamos o risco de autuações e o recebimento pontual do CDF nos deu tranquilidade total nas auditorias anuais da matriz."'
    },
    {
      initials: 'DO',
      role: 'Diretor Operacional',
      company: 'Rede de Postos & Serviços',
      text: '"A rapidez no agendamento e a equipe técnica altamente capacitada com caminhão certificado para Classe I nos atenderam prontamente em uma situação crítica de descarte de tanques."'
    },
    {
      initials: 'CE',
      role: 'Coordenador de Engenharia',
      company: 'Construtora & Incorporadora',
      text: '"Com a segregação na fonte orientada pela Máxima, reduzimos em quase 35% nossos gastos mensais com transporte de resíduos, além de valorizarmos mais de 10 toneladas de recicláveis por mês."'
    }
  ];

  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-[#F0F3FF]" id="compliance">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Governança Rigorosa</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Compliance Ambiental Certificado</h2>
          <p className="text-slate-600 mt-4">A Máxima Ambiental opera sob protocolos homologados por órgãos de regulação nacionais e estaduais.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: ShieldCheck, title: 'Licença SEMA-MT', desc: 'Operação Estadual' },
            { icon: Database, title: 'SINIR / IBAMA', desc: 'Manifesto MTR Nacional' },
            { icon: FileText, title: 'CADRI / Licença', desc: 'Autorização de Destinação' },
            { icon: Award, title: 'ISO / SSMA', desc: 'Padrões de Qualidade' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <item.icon size={36} className="text-[#006577] mb-3" />
              <span className="text-[15px] font-bold text-[#111C2D] leading-tight mb-1">{item.title}</span>
              <span className="text-[11px] text-slate-500 uppercase font-semibold">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between border-b-4 border-[#006577]/10 hover:border-[#006577] transition-all">
              <div>
                <div className="flex items-center gap-0.5 text-[#FFBB1E] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-[15px] text-[#111C2D] italic leading-relaxed">
                  {t.text}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E7EEFF] flex items-center justify-center font-bold text-[#006577]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#111C2D]">{t.role}</div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
