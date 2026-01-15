
import React from 'react';
import { Shield, Zap, Globe, Users, CheckCircle2, XCircle } from 'lucide-react';

const MarketPositioning: React.FC = () => {
  const comparison = [
    {
      feature: "Pendekatan Kerja",
      traditional: "Teoritis & Administratif kaku",
      puloWay: "Praktis, Berbasis 27 Thn Lapangan",
      icon: <Shield className="text-blue-500" size={20} />
    },
    {
      feature: "Adaptasi Teknologi",
      traditional: "Manual & Lambat (Paper-based)",
      puloWay: "Digital-First (Hub & Real-time)",
      icon: <Zap className="text-amber-500" size={20} />
    },
    {
      feature: "Fokus Solusi",
      traditional: "Generalis (Semua dikerjakan)",
      puloWay: "Spesialis Manajemen Desa & Koperasi",
      icon: <Users className="text-emerald-500" size={20} />
    },
    {
      feature: "Akses Komunikasi",
      traditional: "Melalui Admin/Birokrasi rumit",
      puloWay: "Langsung ke Senior Expert (Direct)",
      icon: <Globe className="text-indigo-500" size={20} />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl relative overflow-hidden">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block">Diferensiasi Strategis</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">Mengapa Bermitra Dengan Kami?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Membandingkan standar konsultansi umum dengan nilai tambah yang saya tawarkan untuk efektivitas organisasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs italic">Vs</span> 
              Komparasi Nilai Tambah
            </h3>
            
            <div className="space-y-4">
              {comparison.map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 md:items-center">
                  <div className="flex items-center gap-4 md:w-1/3">
                    {item.icon}
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{item.feature}</span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2 opacity-50">
                      <XCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[10px] font-medium leading-tight">{item.traditional}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[10px] font-black text-blue-700 leading-tight uppercase italic">{item.puloWay}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all"></div>
            <h3 className="text-2xl font-black mb-8 leading-tight italic uppercase tracking-tighter">Kesimpulan <br/><span className="text-blue-400">Posisi Pasar</span></h3>
            
            <div className="space-y-6">
              <p className="text-sm text-slate-400 leading-relaxed font-medium italic">
                "Saya tidak bersaing dalam hal 'harga murah' atau 'kecepatan instan'. Saya bersaing dalam hal **Kedalaman Analisis** dan **Integritas Sistem**."
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Target Mitra</p>
                <p className="text-xs font-medium text-slate-200">
                  Lembaga yang sudah lelah dengan solusi permukaan dan menginginkan perubahan fundamental yang berkelanjutan.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="h-0.5 flex-1 bg-white/10"></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Blue Ocean Strategy</span>
              <div className="h-0.5 flex-1 bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPositioning;
