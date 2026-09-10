export default function Methodology() {
  const steps = [
    { id: '01', title: 'Contato Inicial', desc: 'Recepção do pedido pelo site ou WhatsApp institucional por equipe técnica.', tag: 'Atendimento Rápido' },
    { id: '02', title: 'Entendimento da Rotina', desc: 'Análise da dinâmica da empresa geradora, acessos, frequência e restrições de horários.', tag: 'Levantamento In Loco' },
    { id: '03', title: 'Avaliação de Tipologia', desc: 'Classificação conforme NBR 10.004 e identificação do acondicionamento ideal.', tag: 'Triagem Laboratorial', highlight: true },
    { id: '04', title: 'Estruturação Logística', desc: 'Dimensionamento do tipo de veículo, equipamento de carga e rota homologada.', tag: 'Plano de Carga' },
    { id: '05', title: 'Proposta Comercial', desc: 'Apresentação transparente de valores por tonelada/m³ ou modalidade de contrato mensal.', tag: 'Previsibilidade Total' },
    { id: '06', title: 'Programação & MTR', desc: 'Emissão prévia do MTR Eletrônico no sistema SINIR/órgão estadual e agendamento da coleta.', tag: 'Controle Digital', highlight: true },
    { id: '07', title: 'Operação de Campo', desc: 'Carregamento com equipe especializada, checagem de lacres e transporte rastreado.', tag: 'Execução Segura' },
    { id: '08', title: 'Certificação & CDF', desc: 'Envio do Certificado de Destinação Final (CDF) que comprova a eliminação legal do passivo.', tag: 'Fechamento do Ciclo' },
  ];

  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-[#F0F3FF]" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Fluxo Transparente</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Como Funciona a Operação com a Máxima</h2>
          <p className="text-slate-600 mt-4">Um protocolo estruturado em 8 etapas que garante agilidade operacional, conformidade fiscal e comprovação jurídica do descarte.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-4xl font-extrabold text-[#69D5EF]/30 group-hover:text-[#69D5EF]/50 transition-colors">
                  {step.id}
                </div>
                <h4 className="text-[18px] font-bold text-[#111C2D] mt-2">{step.title}</h4>
                <p className="text-[13px] text-slate-500 mt-4 leading-relaxed">{step.desc}</p>
              </div>
              <div className={`mt-4 pt-3 border-t border-slate-100 font-bold text-[11px] uppercase ${
                step.highlight ? 'text-[#FE752D]' : 'text-[#006577]'
              }`}>
                {step.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
