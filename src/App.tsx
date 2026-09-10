/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Triagem from './components/Triagem';
import ResiduosInfo from './components/ResiduosInfo';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Segments from './components/Segments';
import Compliance from './components/Compliance';
import Regional from './components/Regional';
import BudgetForm from './components/BudgetForm';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TechnicalBanner from './components/TechnicalBanner';
import ContactCTA from './components/ContactCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9FF] font-['Plus_Jakarta_Sans',_sans-serif] antialiased text-[#111C2D]">
      <Header />
      <main className="pt-20">
        <TechnicalBanner />
        <Hero />
        <Triagem />
        <ResiduosInfo />
        <Services />
        <Methodology />
        <Segments />
        <Compliance />
        <Regional />
        <BudgetForm />
        <Blog />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

