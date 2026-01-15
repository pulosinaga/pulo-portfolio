
import React from 'react';
import { Briefcase, BarChart, ShieldAlert, GraduationCap, ArrowUpRight, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Konsultasi Tata Kelola Desa",
      desc: "Audit internal dan pendampingan penyusunan regulasi desa agar sesuai standar Kemendesa & BPK.",
      icon: <ShieldAlert className="text-blue-600" size={32} />,
      price: "Strategic Partnership"
    },
    {
      title: "Manajemen Penyehatan BUMDes",
      desc: "Transformasi unit usaha desa yang stagnan menjadi entitas bisnis yang profitable dan akuntabel.",
      icon: <BarChart className="text-emerald-600" size={32} />,
      price: "Performance Based"
    },
    {
      title: "Digital Branding & Ecosystem",
      desc: "Pembangunan website dan sistem informasi lembaga untuk meningkatkan transparansi dan akses pasar.",
      icon: <Globe className="text-indigo-600" size={32} />,
      price: "Digital Solution"
    },
    {
      title: "Workshop & Kapasitas SDM",
      desc: "Pelatihan intensif bagi aparatur desa dan pengurus koperasi mengenai manajemen keuangan modern.",
      icon: <GraduationCap className="text-blue-800" size={32} />,
      price: "Per Session / Project"
    }
  ];

  const handleProposalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Memaksa hash berubah untuk memicu transisi di App.tsx
    window.location.hash = '#proposal';
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Solusi Profesional</span>
          <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Layanan Ahli & <br/>Kemitraan Strategis</h2>
          <p className="text-slate-600 text-lg font-medium">
            Mengonversi pengalaman 27 tahun menjadi solusi nyata untuk tantangan manajemen organisasi Anda di era digital.
          </p>
        </div>
        <a 
          href="#proposal" 
          onClick={handleProposalClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
        >
          Ajukan Proposal Kerjasama <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              {service.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-8 flex-grow font-medium">
              {service.desc}
            </p>
            <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest italic">{service.price}</span>
              <Briefcase size={16} className="text-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
