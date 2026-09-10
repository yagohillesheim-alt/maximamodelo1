import { Phone, Clock, ShieldCheck, User, Headset, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VhHMhwTE6C95GDajpeSsQKWgnRcsz4zd1iXk3GGu5IMifP2BwIAnk4S4eA1CoAUIKtzYzhwx1LXuuDFvquhzT-_onmXbffmsXV2wFox7ZtcllwhFgEZ24ywZlrT2wuPdIXXiqeQYrrX3i9yBEb3_05Esa-lBfOJIZBkbrQakH-VBhdFNJ8Zslpas9AXNk40SPnDAZr9xMQ6oqM4P0rO4hESMrqFHcovUs1Ivr61-NnS1CgLTU67OJA_EKg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Tipos de Resíduos', href: '#residuos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Segmentos', href: '#para-quem-atendemos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#1E293B] text-[#ECF1FF] px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto h-9 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#69D5EF]">
              <ShieldCheck size={14} /> Plantão Técnico & Destinação Certificada
            </span>
            <span className="text-slate-500">|</span>
            <span>MTR Eletrônico & CDF com Rastreabilidade Total</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#69D5EF] transition-colors flex items-center gap-1.5 normal-case font-semibold" href="tel:08000000000">
              <Phone size={14} /> Central de Atendimento: (00) 0000-0000
            </a>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 normal-case text-[#FFBB1E]">
              <Clock size={14} /> Seg - Sex: 08h às 18h
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 shrink-0">
          <img alt="Logo Máxima Ambiental" className="h-10 w-auto object-contain" src={LOGO_URL} />
          <div className="hidden xl:flex flex-col">
            <span className="text-[22px] text-[#006577] tracking-tight font-bold">Máxima Ambiental</span>
            <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Gestão de Resíduos Classe I e II</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-semibold text-slate-600 hover:text-[#006577] transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded font-bold text-[12px] text-[#006577] hover:bg-slate-100 transition-all" href="#contato">
            <Headset size={18} />
            <span className="hidden md:inline">Atendimento</span>
          </a>
          <a className="bg-[#FE752D] hover:bg-[#A23F00] text-white px-4 lg:px-6 py-2.5 rounded font-bold text-[12px] transition-all flex items-center gap-2 shadow-sm active:scale-95" href="#orcamento">
            <span>Orçamento</span>
            <ArrowRight size={16} />
          </a>
          <div className="w-8 h-8 rounded-full bg-[#006577] flex items-center justify-center shrink-0">
            <User size={18} className="text-white" />
          </div>
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
