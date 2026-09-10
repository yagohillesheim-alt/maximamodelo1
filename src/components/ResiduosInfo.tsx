import { TriangleAlert, ArrowRight, CheckCircle2, Gavel, ShieldCheck, Recycle } from 'lucide-react';

export default function ResiduosInfo() {
  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-[#F0F3FF]" id="residuos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Norma ABNT NBR 10.004</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Classificação de Resíduos Sólidos</h2>
          <p className="text-slate-600 mt-4">Conhecer a tipologia exata do resíduo gerado na sua empresa é o primeiro passo para garantir a legalidade ambiental e evitar penalidades severas da fiscalização.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Classe I */}
          <div className="bg-white rounded-xl shadow-md p-8 lg:p-10 flex flex-col justify-between border-t-8 border-[#FE752D]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#FFDBCD] text-[#360F00] text-[11px] px-3 py-1 rounded font-bold uppercase">Alto Risco Ambiental</span>
                <TriangleAlert size={32} className="text-[#A23F00]" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#111C2D]">Classe I — Resíduos Perigosos</h3>
                <p className="text-[15px] text-slate-600 mt-2">
                  Apresentam periculosidade intrínseca, oferecendo riscos sérios à saúde pública, integridade dos colaboradores e meio ambiente através de contaminação do solo e lençóis freáticos.
                </p>
              </div>

              <div className="bg-[#F0F3FF] p-4 rounded-lg">
                <span className="text-[11px] text-[#A23F00] uppercase font-bold">Critérios Técnicos:</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Inflamabilidade', 'Corrosividade', 'Reatividade', 'Toxicidade', 'Patogenicidade'].map(tag => (
                    <span key={tag} className="bg-white px-2 py-1 rounded text-[11px] font-semibold text-[#111C2D] border border-slate-100">{tag}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[14px] font-bold text-[#111C2D]">Exemplos Comuns em Empresas:</span>
                <ul className="mt-3 space-y-2 text-[13px] text-slate-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-[#FE752D] shrink-0 mt-0.5" />
                    <span>Filtros de óleo, estopas, trapos e EPIs contaminados com solventes e hidrocarbonetos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-[#FE752D] shrink-0 mt-0.5" />
                    <span>Borras de tinta, embalagens plásticas ou metálicas de defensivos e químicos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-[#FE752D] shrink-0 mt-0.5" />
                    <span>Soluções ácidas, baterias industriais usadas, lodos químicos e lâmpadas de mercúrio.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-[#FFDBCD]/40 rounded">
                <span className="text-[11px] text-[#360F00] uppercase font-bold flex items-center gap-1.5">
                  <Gavel size={14} /> Exigências Obrigatórias
                </span>
                <p className="text-[13px] text-slate-700 mt-2">
                  Exige Manifesto de Transporte de Resíduos (MTR Eletrônico / SINIR), transporte com licença especial e condutor com curso MOPP, além de destinação via Coprocessamento, Incineração ou Aterro Classe I Homologado.
                </p>
              </div>
            </div>
            <a className="mt-8 bg-[#FE752D] hover:bg-[#A23F00] text-white text-center py-3 rounded font-bold text-[12px] transition-colors block" href="#orcamento">
              Solicitar Coleta de Classe I
            </a>
          </div>

          {/* Classe II */}
          <div className="bg-white rounded-xl shadow-md p-8 lg:p-10 flex flex-col justify-between border-t-8 border-[#006577]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#ABEDFF] text-[#001F26] text-[11px] px-3 py-1 rounded font-bold uppercase">Impacto Operacional & Reciclagem</span>
                <Recycle size={32} className="text-[#006577]" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#111C2D]">Classe II — Resíduos Não Perigosos</h3>
                <p className="text-[15px] text-slate-600 mt-2">
                  Materiais que não possuem as propriedades de perigo da Classe I, mas que demandam descarte ordenado, rastreabilidade fiscal e priorização de valorização na cadeia circular.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F0F3FF] p-4 rounded-lg">
                  <span className="text-[11px] text-[#006577] uppercase font-bold">Classe II A (Não Inertes)</span>
                  <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">Possuem propriedades como biodegradabilidade, combustibilidade ou solubilidade em água.</p>
                  <div className="text-[11px] text-[#111C2D] mt-2 font-bold uppercase">Ex.: Papelão, madeiras, orgânicos.</div>
                </div>
                <div className="bg-[#F0F3FF] p-4 rounded-lg">
                  <span className="text-[11px] text-[#006577] uppercase font-bold">Classe II B (Inertes)</span>
                  <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">Não sofrem transformações físicas, químicas ou biológicas relevantes quando submetidos à água.</p>
                  <div className="text-[11px] text-[#111C2D] mt-2 font-bold uppercase">Ex.: Entulhos limpos, rochas, sucatas.</div>
                </div>
              </div>

              <div>
                <span className="text-[14px] font-bold text-[#111C2D]">Oportunidades de Redução de Custo:</span>
                <ul className="mt-3 space-y-2 text-[13px] text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#006577] shrink-0 mt-0.5" />
                    <span>Segregação correta de plásticos, metais e papelão para receita através de reciclagem industrial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#006577] shrink-0 mt-0.5" />
                    <span>Destinação de paletes e madeiras para reaproveitamento energético e biomassa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#006577] shrink-0 mt-0.5" />
                    <span>Encaminhamento para aterros sanitários e industriais licenciados com emissão de CDF.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-[#ABEDFF]/40 rounded">
                <span className="text-[11px] text-[#001F26] uppercase font-bold flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Auditoria & Logística Reversa
                </span>
                <p className="text-[13px] text-slate-700 mt-2">
                  Garante o cumprimento das metas da Política Nacional de Resíduos Sólidos (PNRS) e assegura relatórios auditáveis para órgãos municipais e estaduais.
                </p>
              </div>
            </div>
            <a className="mt-8 bg-[#006577] hover:bg-[#008096] text-white text-center py-3 rounded font-bold text-[12px] transition-colors block" href="#orcamento">
              Solicitar Gestão de Classe II
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
