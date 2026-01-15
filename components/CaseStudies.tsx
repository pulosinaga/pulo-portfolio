
import React from 'react';
import { Target, Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Penyehatan Tata Kelola BUMDes",
      context: "Pendampingan di Kabupaten Pakpak Bharat",
      problem: "Unit usaha desa berjalan tanpa badan hukum yang jelas dan pelaporan keuangan yang manual serta tidak akuntabel.",
      solution: "Fasilitasi pendaftaran badan hukum di portal Kemendesa dan implementasi dashboard pelaporan digital sederhana.",
      result: "90% desa dampingan kini memiliki badan hukum resmi dan siap menjalin kemitraan dengan pihak ketiga.",
      icon: <Target className="text-blue-600" />
    },
    {
      title: "Restrukturisasi Keuangan Koperasi",
      context: "Manajerial Koperasi Kredit (10 Tahun)",
      problem: "Tingkat kredit bermasalah (NPL) yang tinggi dan stagnasi pertumbuhan anggota akibat sistem kepercayaan yang menurun.",
      solution: "Pengetatan manajemen risiko kredit, transparansi audit internal harian, dan digitalisasi data asuransi anggota.",
      result: "Pertumbuhan aset signifikan dalam satu dekade dan kepercayaan anggota kembali pulih dengan sistem perlindungan dana yang kuat.",
      icon: <TrendingUp className="text-emerald-600" />
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Update hash tanpa memicu event hashchange yang berat
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block">Proven Track Record</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase">Rekam Jejak & Hasil Nyata</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
          Bukan sekadar bekerja, tapi memberikan solusi yang terukur. Inilah transformasi yang berhasil diwujudkan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cases.map((c, i) => (
          <div key={i} className="bg-white rounded-[3.5rem] border border-slate-100 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                {c.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase italic">{c.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.context}</p>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 text-red-500 font-black italic">!</div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tantangan Utama</h4>
                <p className="text-sm text-slate-600 leading-relaxed italic">{c.problem}</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 text-blue-600 font-black italic">★</div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Intervensi Strategis</h4>
                <p className="text-sm text-slate-600 leading-relaxed italic">{c.solution}</p>
              </div>

              <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100 mt-8 group-hover:bg-emerald-600 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} className="text-emerald-600 group-hover:text-white" />
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest group-hover:text-white">Hasil yang Dicapai</span>
                </div>
                <p className="text-lg font-black text-emerald-900 italic leading-tight group-hover:text-white">
                  "{c.result}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a 
          href="#contact" 
          onClick={handleScrollToContact}
          className="inline-flex items-center gap-3 px-10 py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/10 group"
        >
          Butuh Solusi Serupa? Hubungi Saya <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
