
import React from 'react';
import { GraduationCap, BookOpen, Users, Lightbulb, ArrowRight, Library } from 'lucide-react';

const AcademicBridge: React.FC = () => {
  const academicServices = [
    {
      title: "Praktisi Mengajar (Guest Lecturer)",
      desc: "Berbagi studi kasus riil mengenai manajemen koperasi, pemberdayaan desa, dan tantangan integritas di lapangan kepada mahasiswa.",
      icon: <BookOpen className="text-blue-600" />
    },
    {
      title: "Review Kurikulum Berbasis Industri",
      desc: "Membantu sinkronisasi materi perkuliahan dengan kebutuhan nyata di dunia kerja dan manajemen organisasi modern.",
      icon: <Library className="text-indigo-600" />
    },
    {
      title: "Mentoring Inkubator Bisnis",
      desc: "Pendampingan bagi startup mahasiswa atau unit usaha kampus dalam membangun pondasi manajemen dan tata kelola yang sehat.",
      icon: <Lightbulb className="text-amber-500" />
    },
    {
      title: "Fasilitator KKN Strategis",
      desc: "Mengarahkan program KKN mahasiswa agar lebih tepat sasaran dalam membantu administrasi dan BUMDes di lokasi pengabdian.",
      icon: <Users className="text-emerald-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -mr-48 -mt-48 opacity-60"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-lg mb-6">
                <GraduationCap size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Sinergi Akademis</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight uppercase italic tracking-tighter">Link & Match <br/><span className="text-blue-600">Praktisi - Kampus</span></h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Menjembatani kesenjangan antara teori akademik dan realitas operasional di lapangan melalui transfer pengetahuan berbasis pengalaman 27 tahun.
              </p>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                Terbuka untuk kolaborasi dengan: <br/>Universitas, Politeknik, SMK, & Lembaga Kursus.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicServices.map((service, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Library className="text-blue-400" />
              </div>
              <p className="text-sm font-medium italic opacity-80 max-w-md">
                "Mendidik generasi manajer masa depan dengan perspektif integritas dan realitas lapangan."
              </p>
            </div>
            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-2">
              Undang Paparan Praktisi <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicBridge;
