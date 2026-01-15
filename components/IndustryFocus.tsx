import React from 'react';
import { Landmark, Users, Building2, Globe2, GraduationCap, Briefcase, ShieldCheck } from 'lucide-react';

const IndustryFocus: React.FC = () => {
  const industries = [
    {
      title: "Pemerintahan (Pemda & Pusat)",
      desc: "Pendampingan teknis untuk memastikan kebijakan pimpinan daerah/pusat terlaksana secara administrasi dengan standar akuntabilitas tinggi.",
      icon: <Landmark className="text-blue-600" size={32} />
    },
    {
      title: "NGO & Organisasi Sosial",
      desc: "Memperkuat sistem pelaporan dan manajemen agar tingkat kepercayaan donor/pemerintah terhadap organisasi sosial semakin meningkat.",
      icon: <Globe2 className="text-emerald-600" size={32} />
    },
    {
      title: "Sektor Korporasi & UKM",
      desc: "Memberikan rekomendasi strategis bagi pemilik bisnis dalam mengoptimalkan sistem keuangan dan efisiensi operasional harian.",
      icon: <Briefcase className="text-indigo-600" size={32} />
    },
    {
      title: "Lembaga Pendidikan & Kursus",
      desc: "Transfer pengetahuan praktis untuk membantu kurikulum kampus lebih relevan dengan tantangan manajemen di dunia kerja nyata.",
      icon: <GraduationCap className="text-amber-600" size={32} />
    },
    {
      title: "BUMDes & Ekonomi Desa",
      desc: "Membantu Direktur BUMDes dan Kepala Desa dalam membedah potensi unit usaha agar mandiri sesuai regulasi Kemendesa.",
      icon: <Building2 className="text-blue-500" size={32} />
    },
    {
      title: "Credit Union (CU) & Koperasi",
      desc: "Review sistem pengawasan internal dan penyehatan likuiditas untuk melindungi aset anggota sesuai standar kepatuhan dinas terkait.",
      icon: <ShieldCheck className="text-slate-700" size={32} />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block">Lingkup Layanan</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">Mendukung Visi Pimpinan</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          Membangun sinergi melalui <span className="text-slate-900 font-black">pendampingan teknis</span> yang patuh pada regulasi dan berorientasi pada kesuksesan target lembaga mitra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {industries.map((ind, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-blue-50 transition-colors"></div>
            <div className="mb-8 relative z-10 transition-transform group-hover:scale-110">
              {ind.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">{ind.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
              {ind.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryFocus;
