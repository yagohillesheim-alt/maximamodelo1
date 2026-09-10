import { ArrowRight, ChevronRight } from 'lucide-react';
import { ARTICLES } from '../data';

export default function Blog() {
  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-white" id="conteudo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Conhecimento & Compliance</span>
            <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold mt-2">Artigos Técnicos & Diretrizes Normativas</h2>
            <p className="text-slate-600 mt-4 max-w-2xl">Acompanhe as atualizações da legislação ambiental, boas práticas de acondicionamento e estratégias para redução de despesas operacionais.</p>
          </div>
          <a className="text-[#006577] hover:text-[#008096] font-bold text-[12px] flex items-center gap-1.5 uppercase tracking-wider" href="#faq">
            <span>Acessar Central de Dúvidas</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow border border-slate-100">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover" src={article.image} alt={article.title} />
                  <span className="absolute top-3 left-3 bg-[#FE752D] text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Guia Regulatório • {article.readTime}</span>
                  <h3 className="text-[18px] font-bold text-[#111C2D] mt-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a className="text-[#006577] hover:text-[#008096] font-bold text-[12px] flex items-center gap-1 group" href="#orcamento">
                  <span>Ler artigo completo</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
