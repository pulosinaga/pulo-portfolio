
import React from 'react';
import { Heart, ShieldCheck, Handshake, Star } from 'lucide-react';

const Methodology: React.FC = () => {
  const approaches = [
    {
      title: "Kemitraan, Bukan Rekrutmen",
      desc: "Saya hadir sebagai partner setara bagi pimpinan organisasi. Fokus saya adalah aliansi strategis untuk mencapai target bersama.",
      icon: <Handshake className="text-blue-600" />
    },
    {
      title: "Kepemimpinan Berbasis Pelayanan",
      desc: "Mengelola tim bukan soal instruksi, tapi soal memampukan setiap individu untuk mencapai potensi terbaiknya.",
      icon: <Heart className="text-red-500" />
    },
    {
      title: "Integritas & Tata Kelola",
      desc: "Menjunjung tinggi transparansi dalam pengelolaan keuangan mikro dan administrasi pembangunan desa.",
      icon: <ShieldCheck className="text-emerald-500" />
    },
    {
      title: "Wisdom of 27 Years",
      desc: "Setiap saran saya didasarkan pada akumulasi solusi selama hampir tiga dekade menghadapi berbagai krisis.",
      icon: <Star className="text-amber-500" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-blue-900/5 border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-lg border border-amber-100 mb-6">
                <Star size={14} className="text-amber-600 fill-amber-600" />
                <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Premium Standards</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Filosofi Kemitraan Strategis</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Saya tidak sekadar bekerja untuk Anda; saya bekerja <strong className="text-slate-900 font-black italic">bersama</strong> Anda untuk memastikan sistem manajemen organisasi Anda sehat, akuntabel, dan berkelanjutan.
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md border border-slate-50">
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
