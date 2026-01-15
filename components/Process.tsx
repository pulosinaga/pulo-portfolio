
import React from 'react';
import { Search, FileText, Settings, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Discovery & Kualifikasi",
      desc: "Setelah Anda mengirim formulir, saya akan melakukan review singkat terhadap kebutuhan organisasi Anda.",
      icon: <Search className="text-blue-600" />
    },
    {
      title: "Diagnosa & Strategi",
      desc: "Kita akan melakukan sesi diskusi awal untuk menentukan titik masalah dan solusi yang paling tepat guna.",
      icon: <FileText className="text-indigo-600" />
    },
    {
      title: "Penyusunan Proposal",
      desc: "Saya akan mengirimkan kerangka kerja resmi (Term of Reference) beserta rencana anggaran investasi.",
      icon: <Settings className="text-emerald-600" />
    },
    {
      title: "Eksekusi & Pendampingan",
      desc: "Implementasi solusi di lapangan dengan monitoring ketat hingga mencapai target yang disepakati.",
      icon: <Rocket className="text-blue-500" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Workflow Profesional</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Bagaimana Kita Memulai Kerjasama?</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Connector Line (Hidden on Mobile) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-xl shadow-slate-200/50 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-500 relative bg-white z-10">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white text-xs font-black rounded-full flex items-center justify-center border-4 border-white">
                {i + 1}
              </div>
              <div className="scale-125">
                {step.icon}
              </div>
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-8 bg-blue-600 rounded-[2.5rem] text-center text-white shadow-2xl shadow-blue-600/20">
        <p className="text-sm font-bold opacity-90 italic">
          "Setiap langkah dirancang untuk memastikan transparansi dan akuntabilitas hasil bagi organisasi Anda."
        </p>
      </div>
    </div>
  );
};

export default Process;
