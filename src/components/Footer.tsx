import { ShieldCheck, ArrowRight, Gavel, Mail, MapPin, Clock, Send, ChevronRight, ShieldAlert } from 'lucide-react';

const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VhHMhwTE6C95GDajpeSsQKWgnRcsz4zd1iXk3GGu5IMifP2BwIAnk4S4eA1CoAUIKtzYzhwx1LXuuDFvquhzT-_onmXbffmsXV2wFox7ZtcllwhFgEZ24ywZlrT2wuPdIXXiqeQYrrX3i9yBEb3_05Esa-lBfOJIZBkbrQakH-VBhdFNJ8Zslpas9AXNk40SPnDAZr9xMQ6oqM4P0rO4hESMrqFHcovUs1Ivr61-NnS1CgLTU67OJA_EKg';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F3FF] text-[#111C2D] pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img alt="Logo Máxima Ambiental" className="h-10 w-auto object-contain" src={LOGO_URL} />
              <span className="text-[22px] text-[#006577] font-bold">Máxima Ambiental</span>
            </div>
            <p className="text-[14px] text-slate-600 max-w-sm leading-relaxed">
              Referência em engenharia ambiental integrada, conformidade legal severa, rastreabilidade ponta a ponta e destinação sustentável de resíduos industriais Classe I (Perigosos) e Classe II (Não Perigosos).
            </p>
            <div className="flex items-center gap-2">
              <Gavel size={20} className="text-[#006577]" />
              <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Conformidade PNRS & Rastreamento SINIR</span>
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <span className="text-[15px] font-bold text-[#111C2D]">Serviços Especializados</span>
            <ul className="flex flex-col gap-3 text-[13px] text-slate-600">
              {[
                'Gerenciamento Integrado de Resíduos',
                'Coleta e Transporte Especializado',
                'Coprocessamento e Incineração',
                'Aterros Industriais Homologados',
                'Emissão de MTR Eletrônico e CDF',
              ].map(link => (
                <li key={link} className="hover:text-[#006577] transition-colors flex items-center gap-1.5 cursor-pointer group">
                  <ChevronRight size={14} className="text-[#006577] group-hover:translate-x-1 transition-transform" /> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <span className="text-[15px] font-bold text-[#111C2D]">Conformidade</span>
            <ul className="flex flex-col gap-3 text-[13px] text-slate-600">
              {[
                'Legislação Vigente & PNRS',
                'Política de Privacidade',
                'Canal Ético Confidencial',
                'Segurança do Trabalho',
                'Auditorias Ambientais',
              ].map(link => (
                <li key={link} className="hover:text-[#006577] transition-colors flex items-center gap-1.5 cursor-pointer group">
                  <ShieldCheck size={14} className="text-[#006577] group-hover:translate-x-1 transition-transform" /> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <span className="text-[15px] font-bold text-[#111C2D]">Central de Atendimento</span>
            <div className="flex flex-col gap-3 text-[13px] text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin size={18} className="text-[#006577] shrink-0 mt-0.5" />
                <span>Unidade Operacional: Baixada Cuiabana - MT</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-[#006577] shrink-0" />
                <span>comercial@maximaambiental.com.br</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={18} className="text-[#006577] shrink-0" />
                <span>Horário: Seg a Sex, 08h às 18h</span>
              </p>
            </div>
            <a 
              className="mt-2 bg-[#006577] hover:bg-[#008096] text-white px-4 py-2.5 rounded font-bold text-[12px] text-center transition-colors flex items-center justify-center gap-2" 
              href="#orcamento"
            >
              <span>Atendimento Comercial</span>
              <Send size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          <p>© 2025 Máxima Ambiental Gestão de Resíduos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#006577] transition-colors" href="#">Termos</a>
            <span>•</span>
            <a className="hover:text-[#006577] transition-colors" href="#">Privacidade</a>
            <span>•</span>
            <span className="text-slate-400">NBR 10004</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
