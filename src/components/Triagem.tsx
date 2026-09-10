import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Factory, 
  Construction, 
  Wrench, 
  Building2, 
  Truck, 
  Gavel, 
  TriangleAlert, 
  Recycle, 
  Hammer, 
  Droplets, 
  HelpCircle,
  Zap,
  RefreshCw,
  FileCheck,
  FileText,
  MessageCircle,
  ArrowRight,
  Info
} from 'lucide-react';

const steps = [
  { id: 1, name: 'Segmento' },
  { id: 2, name: 'Tipologia' },
  { id: 3, name: 'Necessidade' },
];

export default function Triagem() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    segmento: '',
    tipologia: '',
    necessidade: '',
  });

  const selectOption = (field: string, value: string) => {
    setSelections(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const enviarTriagemWhatsApp = () => {
    const { segmento, tipologia, necessidade } = selections;
    const text = `Olá! Fiz a triagem no site da Máxima Ambiental:\n• Segmento: ${segmento || 'Não informado'}\n• Tipo de Resíduo: ${tipologia || 'Não informado'}\n• Necessidade: ${necessidade || 'Não informado'}\nGostaria de receber o diagnóstico e orçamento técnico.`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-white" id="triagem">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Assistente Inteligente</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Qual solução ambiental sua empresa precisa?</h2>
          <p className="text-slate-600 mt-4">Selecione suas necessidades em 3 etapas para receber um pré-diagnóstico direcionado e contato direto com nosso engenheiro responsável.</p>
        </div>

        <div className="bg-[#F9F9FF] border border-[#E7EEFF] rounded-xl shadow-lg p-6 lg:p-10">
          {/* Stepper Header */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#D8E3FB] -z-0" />
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                  currentStep >= step.id 
                    ? 'bg-[#006577] text-white shadow-md' 
                    : 'bg-[#DEE8FF] text-slate-500'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  currentStep >= step.id ? 'bg-white text-[#006577]' : 'bg-slate-300 text-white'
                }`}>
                  {step.id}
                </span>
                <span>{step.name}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-bold text-[#111C2D]">Passo 1: Qual o segmento principal da sua organização?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Indústria & Manufatura', icon: Factory },
                    { label: 'Construção Civil', icon: Construction },
                    { label: 'Oficinas & Concessionárias', icon: Wrench },
                    { label: 'Condomínios Empresariais', icon: Building2 },
                    { label: 'Logística & Frotas', icon: Truck },
                    { label: 'Órgãos Públicos', icon: Gavel },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => selectOption('segmento', opt.label)}
                      className={`p-6 rounded-lg transition-all flex flex-col items-center text-center gap-3 border-2 ${
                        selections.segmento === opt.label 
                          ? 'border-[#006577] bg-white shadow-md' 
                          : 'border-transparent bg-[#F0F3FF] hover:bg-[#DEE8FF]'
                      }`}
                    >
                      <opt.icon size={32} className={selections.segmento === opt.label ? 'text-[#006577]' : 'text-[#008096]'} />
                      <span className="text-[12px] font-bold text-[#111C2D]">{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={nextStep}
                    disabled={!selections.segmento}
                    className="bg-[#006577] hover:bg-[#008096] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded font-bold text-[12px] flex items-center gap-2"
                  >
                    <span>Avançar</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-bold text-[#111C2D]">Passo 2: Qual a tipologia predominante do resíduo gerado?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: 'Classe I (Perigoso)', desc: 'Óleos, solventes, borras, EPIs contaminados, embalagens químicas, filtros usados.', icon: TriangleAlert, color: 'text-orange-600' },
                    { label: 'Classe II (Não Perigoso)', desc: 'Materiais recicláveis, restos orgânicos, madeira, plásticos industriais, papelão.', icon: Recycle, color: 'text-[#006577]' },
                    { label: 'Entulhos & RCC', desc: 'Concreto, alvenaria, gesso, ferragens, sobras de obras e reformas.', icon: Hammer, color: 'text-slate-700' },
                    { label: 'Resíduos Líquidos / Efluentes', desc: 'Caixas separadoras de água e óleo (SAO), lavatórios de frotas e lamas.', icon: Droplets, color: 'text-[#006577]' },
                    { label: 'Não sei classificar', desc: 'Preciso que um engenheiro ambiental faça a avaliação in loco e amostragem.', icon: HelpCircle, color: 'text-amber-600' },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => selectOption('tipologia', opt.label)}
                      className={`p-6 rounded-lg transition-all flex flex-col gap-3 border-2 text-left ${
                        selections.tipologia === opt.label 
                          ? 'border-[#006577] bg-white shadow-md' 
                          : 'border-transparent bg-[#F0F3FF] hover:bg-[#DEE8FF]'
                      }`}
                    >
                      <div className={`flex items-center gap-2 ${opt.color}`}>
                        <opt.icon size={24} />
                        <span className="text-[15px] font-bold">{opt.label}</span>
                      </div>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{opt.desc}</p>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button onClick={prevStep} className="text-slate-600 font-bold text-[12px] hover:text-[#006577]">Voltar</button>
                  <button
                    onClick={nextStep}
                    disabled={!selections.tipologia}
                    className="bg-[#006577] hover:bg-[#008096] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded font-bold text-[12px] flex items-center gap-2"
                  >
                    <span>Avançar</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-bold text-[#111C2D]">Passo 3: Qual é a urgência ou formato operacional desejado?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Coleta Emergencial / Pontual', desc: 'Descarte imediato para liberação de espaço ou vistoria fiscal.', icon: Zap, color: 'text-orange-600' },
                    { label: 'Contrato Recorrente (Gestão Contínua)', desc: 'Rotina programada de retiradas, assessoria técnica e laudos mensais.', icon: RefreshCw, color: 'text-[#006577]' },
                    { label: 'Apenas Destinação & Certificação', desc: 'Recepção de resíduos para coprocessamento, incineração ou aterro.', icon: FileCheck, color: 'text-[#006577]' },
                    { label: 'Adequação Regulatória & PGRS', desc: 'Elaboração de PGRS, estruturação de baias e adequação às normas.', icon: FileText, color: 'text-slate-700' },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => selectOption('necessidade', opt.label)}
                      className={`p-6 rounded-lg transition-all flex items-start gap-4 border-2 text-left ${
                        selections.necessidade === opt.label 
                          ? 'border-[#006577] bg-white shadow-md' 
                          : 'border-transparent bg-[#F0F3FF] hover:bg-[#DEE8FF]'
                      }`}
                    >
                      <opt.icon size={28} className={`shrink-0 ${opt.color}`} />
                      <div>
                        <span className="text-[15px] font-bold text-[#111C2D] block">{opt.label}</span>
                        <span className="text-[13px] text-slate-500 leading-relaxed">{opt.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-[#DEE8FF] p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="text-[11px] text-[#006577] uppercase font-bold">Diagnóstico Selecionado</span>
                    <p className="text-[15px] font-semibold text-[#111C2D] mt-1">
                      {selections.segmento || '...'} | {selections.tipologia || '...'} | {selections.necessidade || '...'}
                    </p>
                  </div>
                  <button
                    onClick={enviarTriagemWhatsApp}
                    className="bg-[#FE752D] hover:bg-[#A23F00] text-white px-8 py-3 rounded font-bold text-[12px] flex items-center gap-2 shrink-0 shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle size={20} />
                    <span>Gerar Diagnóstico & WhatsApp</span>
                  </button>
                </div>

                <div className="flex justify-start">
                  <button onClick={prevStep} className="text-slate-600 font-bold text-[12px] hover:text-[#006577]">Voltar</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 p-4 bg-[#F0F3FF] rounded border-l-4 border-[#006577] text-slate-600 flex items-start gap-3">
            <Info size={20} className="text-[#006577] shrink-0" />
            <span className="text-[13px] leading-relaxed">
              <strong>Aviso Legal & Regulatório:</strong> Esta ferramenta constitui uma triagem preliminar de direcionamento comercial e operacional, não substituindo laudo técnico ou classificação laboratorial em conformidade com as normas vigentes.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
