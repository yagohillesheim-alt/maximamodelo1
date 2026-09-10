import { Search, MapPin, CheckCircle2, Info } from 'lucide-react';
import { useState } from 'react';

export default function Regional() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState<{ type: 'success' | 'info' | null, message: string }>({ type: null, message: '' });

  const checkCity = () => {
    const val = city.trim().toLowerCase();
    if (!val) {
      setResult({ type: 'info', message: 'Por favor, digite o nome de uma cidade.' });
      return;
    }

    const mainCities = ['cuiaba', 'cuiabá', 'varzea grande', 'várzea grande', 'rondonopolis', 'rondonópolis', 'sinop', 'sorriso', 'primavera do leste', 'tangara da serra', 'tangará da serra', 'nova mutum', 'lucas do rio verde'];
    const found = mainCities.some(c => c.includes(val) || val.includes(c));

    if (found) {
      setResult({ type: 'success', message: `Atendimento com rota regular confirmada para ${city}. Agende sua coleta!` });
    } else {
      setResult({ type: 'info', message: `Operação sob demanda especial para ${city}. Consulte nosso plantão logístico.` });
    }
  };

  return (
    <section className="w-full py-16 px-4 lg:px-6 bg-white" id="cobertura">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[11px] text-[#006577] uppercase font-bold tracking-wider">Logística Estratégica</span>
            <h2 className="text-3xl lg:text-4xl text-[#111C2D] font-bold leading-tight">Atendimento em Cuiabá, Várzea Grande e Polos Regionais</h2>
            <p className="text-slate-600 leading-relaxed">
              Nossa base operacional em Mato Grosso conta com rotas logísticas diárias para atendimento das demandas industriais da Baixada Cuiabana e polos do agronegócio e manufatura no interior.
            </p>

            <div className="bg-[#F0F3FF] p-6 rounded-xl border border-[#E7EEFF]">
              <label className="text-[12px] font-bold text-[#111C2D] block mb-2" htmlFor="busca-cidade">
                Consulte a disponibilidade de coleta na sua cidade:
              </label>
              <div className="flex gap-2">
                <input 
                  className="w-full bg-white px-4 py-2.5 rounded text-[15px] text-[#111C2D] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006577]" 
                  id="busca-cidade" 
                  placeholder="Ex: Cuiabá, Várzea Grande, Rondonópolis..." 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && checkCity()}
                  type="text"
                />
                <button 
                  className="bg-[#006577] hover:bg-[#008096] text-white px-6 py-2.5 rounded font-bold text-[12px] shrink-0 flex items-center gap-2 transition-all" 
                  onClick={checkCity}
                  type="button"
                >
                  <Search size={18} />
                  <span>Verificar</span>
                </button>
              </div>
              
              {result.type && (
                <div className={`mt-4 p-3 rounded text-[13px] font-semibold flex items-center gap-2 ${
                  result.type === 'success' ? 'bg-[#ABEDFF] text-[#004E5C]' : 'bg-[#DEE8FF] text-[#3D494C]'
                }`}>
                  {result.type === 'success' ? <CheckCircle2 size={18} /> : <Info size={18} />}
                  <span>{result.message}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 text-[13px] text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#006577]" /> Licenciamento válido para trânsito intermunicipal de resíduos</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#006577]" /> Roteirização otimizada com baixo tempo de deslocamento</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white p-2 rounded-xl shadow-lg relative border border-slate-100">
              <div 
                className="w-full h-80 bg-cover bg-center rounded-lg relative overflow-hidden" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3noHxvgZ2CIQHFpTDdk4Gu3yjuxV50r4K3hicO4jFZjqgB5p4_Xnre5gpOV7OuP69Gu1p_ndF08fpU5Wklmgm-54ZzT4Vr_5xVfFpUac1wr8znMjnvOiQ3g5gw9OhlbEArT5gM9AQLpfbDXCh0Zf50mWvXiMSdrd2k4Xk77dEarvtywfiy-2y3Nz7E22atoRcy2x_DeYKgd0yLqVDkeFIaAOuVilpvxFNlyKDbnAxJQPvVxa-NVnA2w')" }}
              >
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded shadow text-[#111C2D] text-[11px]">
                  <span className="font-bold text-[#006577]">HUB PRINCIPAL:</span> Cuiabá & Várzea Grande - MT
                </div>
                <div className="absolute bottom-4 right-4 bg-[#1E293B]/90 text-[#ECF1FF] px-3 py-1.5 rounded text-[11px] font-bold">
                  Raio de Operação Estratégica
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-slate-500 text-[11px] font-medium uppercase tracking-wider">
                <span>*Rotas especiais sob demanda para todo o MT</span>
                <a className="text-[#006577] font-bold hover:underline" href="#contato">Consultar Rota</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
