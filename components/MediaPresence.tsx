
import React from 'react';
import { Globe, Share2, Youtube, Newspaper, Linkedin } from 'lucide-react';

const MediaPresence: React.FC = () => {
  const platforms = [
    { name: "Lensainfo", icon: <Newspaper size={20} />, role: "Editorial Contributor" },
    { name: "Pruidea Hub", icon: <Globe size={20} />, role: "Lead Strategist" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, role: "Top Management Voice" },
    { name: "Sahabat Doa", icon: <Share2 size={20} />, role: "Social Founder" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-700">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Jejak Digital & Publikasi</span>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {platforms.map((p, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default">
              <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                {p.icon}
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 leading-none mb-1">{p.name}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPresence;
