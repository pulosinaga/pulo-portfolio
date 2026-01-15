
import React from 'react';
import { Users, Briefcase, Crown, ArrowRight, Sparkles } from 'lucide-react';

const VisitorFunnel: React.FC = () => {
  const funnels = [
    {
      id: "inspiration",
      type: "Kolega & Pencari Kerja",
      action: "Belajar & Inspirasi",
      desc: "Akses artikel, pemikiran, dan jejak digital saya secara gratis untuk pengembangan diri.",
      icon: <Users className="text-slate-400 group-hover:text-blue-500" />,
      link: "#inspiration",
      color: "border-slate-100 hover:border-blue-200 bg-white"
    },
    {
      id: "contact",
      type: "Mitra Strategis",
      action: "Ajak Kerjasama",
      desc: "Ingin kolaborasi proyek atau menawarkan sinergi bisnis? Mari bicarakan visi Anda.",
      icon: <Briefcase className="text-blue-500 group-hover:scale-110" />,
      link: "#contact",
      color: "border-blue-100 hover:border-blue-300 bg-blue-50/30"
    },
    {
      id: "proposal",
      type: "Klien VIP / Pimpinan",
      action: "Akses Proposal",
      desc: "Khusus pimpinan yang memegang PIN akses untuk paparan solusi manajemen eksklusif.",
      icon: <Crown className="text-amber-500 group-hover:rotate-12" />,
      link: "#proposal",
      color: "border-amber-100 hover:border-amber-300 bg-amber-50/30",
      isSpecial: true
    }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Jika tujuannya adalah proposal, langsung ubah hash untuk memicu App.tsx
    if (id === 'proposal') {
      window.location.hash = '#proposal';
      return;
    }
    
    // Untuk navigasi scroll biasa di halaman yang sama
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (err) {
        // Fallback jika history API terbatas
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-6">
          <Sparkles size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Digital Navigation Hub</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">Bagaimana Saya Dapat Membantu?</h2>
        <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">
          Pilih jalur navigasi yang paling relevan dengan kebutuhan Anda saat ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {funnels.map((f, i) => (
          <a 
            key={i} 
            href={f.link}
            onClick={(e) => handleClick(e, f.id)}
            className={`p-10 rounded-[3.5rem] border-2 transition-all duration-500 group flex flex-col h-full shadow-sm hover:shadow-2xl hover:-translate-y-2 ${f.color}`}
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-inner flex items-center justify-center mb-8 group-hover:shadow-blue-200 transition-all border border-slate-50">
              {f.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">{f.type}</p>
            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{f.action}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-10 flex-grow">
              {f.desc}
            </p>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-blue-600 transition-all">
              <span>Buka Sekarang</span>
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:translate-x-2 transition-all">
                <ArrowRight size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VisitorFunnel;
