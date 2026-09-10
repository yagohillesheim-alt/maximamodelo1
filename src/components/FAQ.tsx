import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-[#F0F3FF]" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Esclarecimentos Técnicos</span>
          <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Perguntas Frequentes (FAQ)</h2>
          <p className="text-slate-600 mt-4">Respostas diretas sobre protocolos de coleta, emissão de documentos regulatórios, contratos e prazos operacionais.</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
              <button 
                className="w-full p-6 flex items-center justify-between text-left group"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              >
                <span className={`text-[15px] font-bold transition-colors ${openId === item.id ? 'text-[#006577]' : 'text-[#111C2D] group-hover:text-[#006577]'}`}>
                  {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-[#006577]' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[14px] text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
