
import React from 'react';
import { ShieldAlert, Scale, CheckSquare, Info, Gavel } from 'lucide-react';

const ServiceScope: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 p-8 opacity-5">
          <Scale size={150} />
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-lg mb-6">
                <ShieldAlert size={14} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Batasan Profesional</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Integritas & Lingkup Layanan</h2>
              <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                "Profesionalisme sejati adalah memberikan solusi yang tepat di dalam koridor kompetensi dan regulasi yang berlaku."
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 flex items-center gap-2">
                  <CheckSquare size={16} className="text-blue-600" /> Fokus Pendampingan
                </h3>
                <ul className="space-y-3">
                  {['Analisis sistem manajemen operasional', 'Workshop peningkatan kapasitas SDM', 'Asesmen kesiapan tata kelola internal', 'Transfer pengetahuan berbasis praktik baik'].map((item, i) => (
                    <li key={i} className="text-xs text-slate-600 font-medium flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Gavel size={16} className="text-red-600" /> Kepatuhan Regulasi
                </h3>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    1. Layanan bersifat <strong>Konsultansi & Pendampingan Strategis</strong>.
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    2. Seluruh saran didasarkan pada regulasi resmi pemerintah (Kemendesa, Kemenkeu, dll).
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic border-l-2 border-red-200 pl-3">
                    Saya tidak memberikan layanan yang bertentangan dengan hukum atau kode etik tenaga ahli profesional. Keputusan operasional akhir tetap menjadi otoritas lembaga mitra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-3 justify-center md:justify-start">
             <Info className="text-blue-600" size={16} />
             <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Menjunjung Tinggi Pakta Integritas Profesional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceScope;
