
import React from 'react';
import { Shield, Users, Zap, ArrowRight, Layers, Target, Heart } from 'lucide-react';

const BrandBlueprint: React.FC = () => {
  const pillars = [
    {
      title: "Governance & Integrity",
      subtitle: "Fondasi Kepatuhan",
      desc: "Memastikan setiap sen dana publik atau anggota dikelola sesuai regulasi tanpa celah deviasi.",
      icon: <Shield size={32} className="text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Social Empowerment",
      subtitle: "Dampak Akar Rumput",
      desc: "Mengonversi kebijakan menjadi kesejahteraan nyata bagi masyarakat desa dan anggota koperasi.",
      icon: <Users size={32} className="text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Digital Acceleration",
      subtitle: "Visi Masa Depan",
      desc: "Menggunakan infrastruktur Pruidea untuk mempercepat transparansi dan akses pasar digital.",
      icon: <Zap size={32} className="text-amber-600" />,
      color: "bg-amber-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-4 block">Executive Blue Print</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter italic uppercase">
              Cetak Biru <br/><span className="text-blue-400">Kepemimpinan Strategis.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Inilah peta jalan bagaimana saya mengintegrasikan <span className="text-white font-bold italic">Etika</span>, <span className="text-white font-bold italic">Manusia</span>, dan <span className="text-white font-bold italic">Teknologi</span> untuk membangun institusi yang sehat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500">
                <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2">{pillar.subtitle}</p>
                <h3 className="text-2xl font-black text-white mb-4 italic">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Target Utama</p>
                <p className="text-sm font-black text-white italic">Zero Audit Findings & Sustainable Growth</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Layers className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Skalabilitas</p>
                <p className="text-sm font-black text-white italic">Nasional → Daerah → Desa</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Filosofi Kerja</p>
                <p className="text-sm font-black text-white italic">Meninggalkan Warisan Kebaikan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBlueprint;
