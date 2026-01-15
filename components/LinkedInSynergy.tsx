
import React from 'react';
import { Linkedin, MessageSquare, Share2, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const LinkedInSynergy: React.FC = () => {
  const highlights = [
    {
      title: "Update Real-time",
      desc: "Ikuti aktivitas lapangan dan opini terbaru saya mengenai regulasi Kemendesa setiap minggunya.",
      icon: <Share2 className="text-blue-500" />
    },
    {
      title: "Networking Aktif",
      desc: "Tempat saya berdiskusi langsung dengan sesama Tenaga Ahli, Pejabat Pemda, dan praktisi Koperasi.",
      icon: <Users className="text-indigo-500" />
    },
    {
      title: "Thought Leadership",
      desc: "Simak artikel mendalam (LinkedIn Articles) mengenai solusi manajemen pemberdayaan masyarakat.",
      icon: <MessageSquare className="text-emerald-500" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[4rem] p-10 md:p-20 border border-blue-100 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-200 rounded-lg mb-6 shadow-sm">
                <Linkedin className="text-[#0A66C2]" size={16} fill="#0A66C2" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">LinkedIn Integration</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase italic">
                Mari Terhubung Secara <span className="text-blue-600">Profesional.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
                Website ini adalah <span className="text-slate-900 font-bold italic underline decoration-blue-500">Arsip Formal</span> saya. Untuk diskusi harian, kolaborasi cepat, dan pemikiran terbaru, saya sangat aktif di LinkedIn.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tight">2.000+ Koneksi Strategis</span>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Top Voice Potential</span>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#0A66C2] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#084d91] transition-all shadow-xl shadow-blue-900/20 group"
              >
                Ikuti di LinkedIn <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="group p-8 bg-white/80 backdrop-blur-sm border border-white rounded-[2.5rem] hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight italic">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
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

export default LinkedInSynergy;
