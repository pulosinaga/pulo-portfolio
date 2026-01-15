
import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Linkedin, ChevronDown, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-50/50 rounded-bl-[10rem] -z-10 animate-in fade-in duration-1000 print:hidden"></div>
      
      {/* Floating WA Button */}
      <a 
        href="https://wa.me/6281362969838" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[2500] bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group border-4 border-white animate-bounce-slow print:hidden"
      >
        <MessageCircle size={24} className="md:w-7 md:h-7" />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left animate-in slide-in-from-left duration-700">
            <div className="flex flex-col gap-3 mb-8">
              <div className="inline-flex items-center w-fit px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100 shadow-sm print:hidden">
                <ShieldCheck size={14} className="mr-2" />
                Institutional Support Expert
              </div>
              <div className="inline-flex items-center w-fit px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-100 print:hidden">
                <GraduationCap size={14} className="mr-2" />
                S.E. (Manajemen)
              </div>
            </div>
            
            <h1 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9] italic">
              PULO SINAGA<span className="text-blue-600 font-normal block not-italic">.SE</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl font-medium border-l-4 border-blue-600 pl-6">
              Membantu pimpinan membangun sistem manajemen yang <strong className="text-slate-900 font-black">akuntabel</strong> dan <strong className="text-slate-900 font-black">patuh regulasi</strong> melalui latar belakang Manajemen Ekonomi & pengalaman 27 tahun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 print:hidden">
              <a 
                href="#gateway" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gateway')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                Mulai Kolaborasi <ArrowRight size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pulo-sinaga-se-39031a2a4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group"
              >
                <Linkedin size={18} className="text-[#0A66C2] group-hover:scale-110 transition-transform" /> 
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-12 pt-10 border-t border-slate-100">
              <div>
                <p className="text-3xl font-black text-slate-900">27+</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 italic">BNSP</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Certified Expert</p>
              </div>
            </div>
          </div>

          <div className="relative animate-in zoom-in duration-1000">
            <div className="relative z-10 bg-slate-900 p-3 rounded-[4rem] shadow-3xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="bg-slate-800 rounded-[3.5rem] overflow-hidden aspect-[4/5] relative">
                <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519085185753-b8e1fc3bd09a?auto=format&fit=crop&q=80&w=800" 
                  alt="Pulo Sinaga, S.E." 
                  className="w-full h-full object-cover grayscale brightness-90 relative z-10"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-10 left-10 z-30">
                   <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Integrity First</p>
                   <p className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none">Management Strategist</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-50 print:hidden"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply blur-2xl opacity-50 print:hidden"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 print:hidden">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
