
import React, { useState } from 'react';
import { 
  Award, ShieldCheck, FileText, CheckCircle2, 
  Utensils, Zap, Users, Search, GraduationCap 
} from 'lucide-react';

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'profesi' | 'pelatihan'>('all');

  const primaryCerts = [
    {
      title: "Sertifikat Kompetensi BNSP - TAPM",
      issuer: "LSP Pemberdayaan Dan Pembangunan Desa",
      no: "Sertifikasi Profesi TPP",
      date: "13 Oktober 2024",
      category: "profesi",
      field: "Tenaga Ahli Pemberdayaan Masyarakat",
      desc: "Lulus Uji Kompetensi Sertifikasi Profesi TPP Provinsi Sumatera Utara di Hotel Grand Antares - Medan.",
      icon: <ShieldCheck className="text-blue-600" size={36} />
    }
  ];

  const otherCerts = [
    {
      title: "Bimtek Pelatihan eHDW bagi Desa",
      issuer: "Dinas PMDP2AKB",
      date: "30-31 Okt 2025",
      category: "pelatihan",
      field: "Digital Health Tracking",
      icon: <Zap className="text-amber-500" size={20} />
    },
    {
      title: "Pelatihan KDMP bagi Pendamping Desa",
      issuer: "Kementerian Desa PDTT",
      date: "22-26 Okt 2025",
      category: "pelatihan",
      field: "Kapasitas Pendamping",
      icon: <Users className="text-indigo-500" size={20} />
    },
    {
      title: "Penguatan Hak Azasi Manusia bagi TPP",
      issuer: "Kemendesa PDTT",
      date: "08 Sept 2025",
      category: "pelatihan",
      field: "Human Rights Implementation",
      icon: <ShieldCheck className="text-emerald-500" size={20} />
    },
    {
      title: "Peningkatan Kapasitas TPP (Ketahanan Pangan)",
      issuer: "Kemendesa BPSDM",
      date: "21-24 Jun 2025",
      category: "pelatihan",
      field: "Climate Action & Food Security",
      icon: <FileText className="text-orange-500" size={20} />
    }
  ];

  const filteredCerts = filter === 'all' 
    ? otherCerts 
    : otherCerts.filter(c => c.category === filter);

  return (
    <div id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Ekspertise & Kredensial Resmi</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Kumpulan sertifikasi kompetensi dan riwayat pelatihan terbaru tahun 2025 yang mendukung profesionalisme lapangan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
        {primaryCerts.map((cert, idx) => (
          <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  {cert.icon}
                </div>
                <div className="flex-grow">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-4 shadow-lg shadow-blue-600/20">
                    Sertifikasi Profesi (LULUS)
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">{cert.title}</h3>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed italic border-l-2 border-blue-200 pl-4">
                    "{cert.desc}"
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Keterangan</span>
                      <span className="text-xs font-bold text-slate-700">Lulus Uji Kompetensi Profesi TPP</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Waktu</span>
                      <span className="text-xs font-bold text-blue-600">{cert.date}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tempat</span>
                      <span className="text-xs font-bold text-slate-800">Hotel Grand Antares - Medan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
            filter === 'all' ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20' : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200 hover:text-blue-600 shadow-sm'
          }`}
        >
          Seluruh Riwayat Pelatihan 2025
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredCerts.map((cert, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col group">
            <div className="flex items-start justify-between mb-8">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {cert.icon}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{cert.date}</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow group-hover:text-blue-600 transition-colors">
              {cert.title}
            </h4>
            <div className="space-y-1.5 mt-6 pt-6 border-t border-slate-50">
              <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.1em]">{cert.field}</p>
              <p className="text-[10px] text-slate-500 font-bold truncate">{cert.issuer}</p>
              <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mt-2">Status: Lulus</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
