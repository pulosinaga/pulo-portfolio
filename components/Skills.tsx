
import React from 'react';
import { ShieldCheck, Code, Users, Gavel, Layout, Search, Settings, Landmark, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Manajemen Koperasi',
      description: 'Pengalaman 10 tahun memimpin operasional & keuangan koperasi kredit dengan fokus pada pertumbuhan aset dan anggota.',
      icon: <Landmark className="text-amber-600" size={32} />,
      items: ['Strategic Planning', 'Risk Management', 'Microfinance', 'Audit Internal']
    },
    {
      title: 'Pemberdayaan Desa',
      description: 'Fasilitasi partisipatif masyarakat desa melalui metode Musdes dan FGD untuk mencapai kesepakatan mufakat.',
      icon: <Users className="text-blue-600" size={32} />,
      items: ['Musdes & FGD', 'BUMDes Setup', 'Pendampingan Kelompok', 'Kapasitas Kader']
    },
    {
      title: 'Perencanaan & Anggaran',
      description: 'Penyusunan dokumen perencanaan strategis desa (RPJMDes, RKPDes) dan penganggaran APBDes yang akuntabel.',
      icon: <Layout className="text-indigo-600" size={32} />,
      items: ['RPJMDes/RKPDes', 'APBDes Planning', 'Pelaporan Dana Desa', 'Sistem Akuntabilitas']
    },
    {
      title: 'Inovasi Teknologi',
      description: 'Pengembangan aplikasi dan website sebagai alat bantu administrasi, pelaporan efisien, dan transparansi publik.',
      icon: <Code className="text-emerald-600" size={32} />,
      items: ['Web Development', 'System Analysis', 'Digital Literacy', 'Content Management']
    }
  ];

  return (
    <div id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Matriks Kompetensi Strategis</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto font-medium">
          Integrasi antara kepemimpinan manajerial koperasi, pemberdayaan masyarakat, dan penguasaan teknologi digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
            <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">{cat.title}</h3>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, iIdx) => (
                <span key={iIdx} className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[9px] font-black rounded-lg border border-blue-100/50 uppercase tracking-tight">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
               <TrendingUp className="text-blue-400" />
               Visi Digitalisasi Pedesaan
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              "Bukan sekadar mendampingi, tapi menciptakan sistem informasi desa yang mendukung pemasaran produk desa dan pelayanan publik yang lebih efisien dan transparan."
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-blue-600/20 px-6 py-4 rounded-2xl border border-blue-500/30 text-center">
                <Search size={24} className="mx-auto mb-2 text-blue-400" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Analisis Sistem</div>
             </div>
             <div className="bg-emerald-600/20 px-6 py-4 rounded-2xl border border-emerald-500/30 text-center">
                <Settings size={24} className="mx-auto mb-2 text-emerald-400" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Implementasi</div>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Skills;
