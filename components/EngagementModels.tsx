
import React from 'react';
import { Lightbulb, Calendar, Briefcase, Users, ArrowRight } from 'lucide-react';

const EngagementModels: React.FC = () => {
  const models = [
    {
      title: "Short-Term Advisory",
      type: "Per Sesi / Per Hari",
      desc: "Diskusi mendalam (Deep Dive) untuk membedah masalah spesifik atau review dokumen administratif secara cepat.",
      icon: <Lightbulb className="text-amber-500" />
    },
    {
      title: "Project-Based Partnership",
      type: "Berbasis Output",
      desc: "Pendampingan penuh untuk satu target tertentu, misalnya: Penyehatan BUMDes atau Digitalisasi Sistem Koperasi.",
      icon: <Briefcase className="text-blue-600" />
    },
    {
      title: "Strategic Mentorship",
      type: "Retainer / Bulanan",
      desc: "Menjadi dewan penasehat atau mentor senior bagi pimpinan lembaga untuk jangka panjang (6-12 bulan).",
      icon: <Users className="text-emerald-600" />
    },
    {
      title: "Academic & Training",
      type: "Sesuai Undangan",
      desc: "Menjadi pembicara tamu, dosen praktisi, atau fasilitator workshop bagi universitas dan lembaga pelatihan.",
      icon: <Calendar className="text-indigo-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block">Model Kemitraan</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">Format Kerjasama Bisnis</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          Fleksibilitas dalam berkolaborasi untuk memastikan solusi yang diberikan sesuai dengan skala dan kebutuhan organisasi Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
            
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {model.icon}
            </div>
            
            <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2">{model.type}</p>
            <h3 className="text-lg font-black text-white mb-4">{model.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium mb-8">
              {model.desc}
            </p>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">
              Pilih Model Ini <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementModels;
