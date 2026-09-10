import { Send, CheckCircle2, UploadCloud } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function BudgetForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulation
    setTimeout(() => {
      // Logic would go here
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-[#F0F3FF]" id="orcamento">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#FE752D] uppercase font-bold tracking-wider">Atendimento Corporativo</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Solicite um Orçamento Técnico Personalizado</h2>
          <p className="text-slate-600 mt-4">Preencha os dados da sua organização para receber uma proposta dimensionada às necessidades regulatórias da sua operação.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 lg:p-10 border border-slate-100">
          {!isSubmitted ? (
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              {/* Step 1: Corporate Data */}
              <div>
                <span className="text-lg font-bold text-[#006577] block pb-3 border-b border-slate-100">1. Dados da Empresa e Contato</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-nome">Nome Completo *</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-nome" placeholder="Seu nome" required type="text" />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-empresa">Empresa / Razão Social *</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-empresa" placeholder="Ex: Indústria XYZ Ltda" required type="text" />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-cargo">Cargo / Departamento *</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-cargo" placeholder="Ex: Gerente Ambiental" required type="text" />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-email">E-mail Corporativo *</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-email" placeholder="contato@suaempresa.com.br" required type="email" />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-whatsapp">WhatsApp *</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-whatsapp" placeholder="(65) 90000-0000" required type="tel" />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-cidade">Cidade / UF *</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-cidade" placeholder="Ex: Cuiabá - MT" required type="text" />
                  </div>
                </div>
              </div>

              {/* Step 2: Demand Info */}
              <div>
                <span className="text-lg font-bold text-[#006577] block pb-3 border-b border-slate-100">2. Caracterização Operacional</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-classe">Classificação *</label>
                    <select className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-classe" required>
                      <option value="">Selecione...</option>
                      <option value="Classe I">Classe I (Perigosos)</option>
                      <option value="Classe II">Classe II (Não Perigosos)</option>
                      <option value="Ambas">Ambas as Classes</option>
                      <option value="Diagnóstico">Não sei / Preciso de Diagnóstico</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-frequencia">Frequência *</label>
                    <select className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-frequencia" required>
                      <option value="">Selecione...</option>
                      <option value="Pontual">Coleta Pontual Única</option>
                      <option value="Mensal">Contrato Mensal</option>
                      <option value="Semanal">Semanal</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-volume">Volume Estimado</label>
                    <input className="w-full h-11 bg-slate-50 px-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-volume" placeholder="Ex: 12 m³, 4 ton" type="text" />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Anexar Documentos / Fotos (Opcional)</label>
                  <div 
                    className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <input className="hidden" id="file-upload" type="file" onChange={handleFileChange} />
                    <UploadCloud size={32} className="mx-auto text-[#006577] group-hover:scale-110 transition-transform" />
                    <p className="text-[13px] text-slate-600 mt-2">Arraste ou clique para anexar laudos, FDS ou fotos (PDF, JPG, PNG)</p>
                    {fileName && <span className="text-[11px] text-[#006577] font-bold mt-2 block">Selecionado: {fileName}</span>}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1" htmlFor="form-obs">Observações Específicas</label>
                  <textarea className="w-full bg-slate-50 p-4 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:border-[#006577] focus:outline-none transition-colors" id="form-obs" placeholder="Ex: Acesso restrito a caminhões, materiais inflamáveis, etc." rows={3}></textarea>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input className="mt-1 w-4 h-4 rounded text-[#006577] border-slate-300 focus:ring-[#006577]" id="form-lgpd" required type="checkbox" />
                <label className="text-[12px] text-slate-500 leading-relaxed" htmlFor="form-lgpd">
                  Declaro que os dados fornecidos destinam-se exclusivamente ao dimensionamento da proposta comercial da Máxima Ambiental, de acordo com a LGPD e a nossa política de confidencialidade técnica.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle2 size={18} className="text-[#006577]" />
                  <span>Retorno técnico em até 24 horas úteis</span>
                </div>
                <button className="w-full sm:w-auto bg-[#FE752D] hover:bg-[#A23F00] text-white px-8 py-3.5 rounded font-bold text-[14px] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95" type="submit">
                  <span>Enviar Solicitação de Orçamento</span>
                  <Send size={18} />
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center gap-4"
            >
              <div className="w-20 h-20 bg-[#ABEDFF] rounded-full flex items-center justify-center text-[#006577] mb-4">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#111C2D]">Solicitação Recebida com Sucesso!</h3>
              <p className="text-slate-600 max-w-md">
                Nossa equipe técnica já foi notificada. Um engenheiro ambiental entrará em contato em breve com o dimensionamento da proposta para sua empresa.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-[#006577] font-bold hover:underline"
              >
                Enviar nova solicitação
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
