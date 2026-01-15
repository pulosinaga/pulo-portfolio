
import React from 'react';
import { HelpCircle, MessageSquare, ShieldCheck, HeartHandshake, ArrowRight, Zap } from 'lucide-react';

const CreditUnionSpecialty: React.FC = () => {
  const cuSolutions = [
    {
      q: "Ingin Pemahaman Mendalam?",
      a: "Saya menyediakan sesi literasi khusus bagi pengurus dan anggota untuk memahami esensi tata kelola CU yang sehat.",
      icon: <HelpCircle className="text-amber-500" />
    },
    {
      q: "Masalah Kepercayaan Anggota?",
      a: "Fasilitasi mediasi dan transparansi sistem keuangan untuk mengembalikan integritas lembaga di mata anggota.",
      icon: <HeartHandshake className="text-blue-600" />
    },
    {
      q: "Audit & Risiko Kredit?",
      a: "Bedah tuntas portofolio kredit dan pengawasan internal harian agar terhindar dari krisis likuiditas.",
      icon: <ShieldCheck className="text-emerald-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-white/5">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-500 rounded-lg mb-6 border border-amber-500/20">
                <Zap size={14} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Spesialisasi Credit Union</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
                Solusi Tuntas <br/><span className="text-blue-400">Tantangan Koperasi & CU.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">
                Memiliki pertanyaan atau keluhan spesifik mengenai <span className="text-white font-black italic">Credit Union (CU)</span>? Saya hadir untuk memberikan pemahaman teknis dan strategi penyehatan yang konkret.
              </p>
              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] mb-8 group hover:bg-white/10 transition-all">
                <p className="text-slate-300 italic text-sm leading-relaxed">
                  "Seringkali masalah CU bukan pada uangnya, tapi pada <span className="text-white font-black">sistem kepercayaan</span> dan <span className="text-white font-black">kepatuhan manajerial</span> pimpinannya. Mari kita bedah bersama."
                </p>
              </div>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
              >
                Konsultasi CU Sekarang <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-4">
              {cuSolutions.map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-blue-500/50 transition-all">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight italic">{item.q}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditUnionSpecialty;
