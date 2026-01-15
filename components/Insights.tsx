
import React from 'react';
import { Lightbulb, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react';

const Insights: React.FC = () => {
  const topics = [
    {
      title: "Digitalisasi Desa",
      desc: "Bagaimana teknologi web dapat mempercepat transparansi Dana Desa dan pelayanan publik di tingkat akar rumput.",
      icon: <Lightbulb className="text-blue-400" />
    },
    {
      title: "Manajemen Koperasi Modern",
      desc: "Transformasi lembaga keuangan mikro tradisional menuju sistem yang akuntabel dan berdaya saing tinggi.",
      icon: <TrendingUp className="text-emerald-400" />
    },
    {
      title: "Pemberdayaan Partisipatif",
      desc: "Metodologi melibatkan masyarakat secara aktif dalam setiap tahapan pembangunan desa agar berkelanjutan.",
      icon: <Users className="text-amber-400" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className="lg:col-span-1">
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4 block">Thought Leadership</span>
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Berbagi Perspektif Strategis</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Sebagai praktisi, saya aktif membagikan pemikiran mengenai tata kelola dan inovasi sosial melalui LinkedIn dan berbagai forum profesional.
          </p>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors group"
          >
            Ikuti Diskusi Saya di LinkedIn <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {topic.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{topic.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
