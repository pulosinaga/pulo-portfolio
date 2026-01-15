
import React from 'react';
import { Sparkles, Eye, Share2, Lightbulb } from 'lucide-react';

const InspirationHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-slate-100 shadow-inner">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
          <Share2 size={300} />
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-8">
                <Sparkles size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Kekuatan Inspirasi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Ide Kecil di Desa, <br/>
                <span className="text-blue-600 italic">Inspirasi Besar Bagi Dunia.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  "Saat sebuah lembaga atau desa berani tampil online, mereka sedang membangun panggung untuk seluruh dunia melihat."
                </p>
                <p className="p-6 bg-white rounded-3xl border-l-4 border-blue-600 shadow-sm italic">
                  <strong className="text-slate-900 font-black">Transparansi</strong> bukan untuk mencari kesalahan, melainkan cermin untuk perbaikan. Sekecil apapun ide yang berhasil dijalankan di sebuah lembaga, ia berpotensi menjadi solusi bagi ribuan lembaga lain di belahan bumi berbeda.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-blue-600" />
                </div>
                <h3 className="text-lg font-black mb-3 text-slate-900">Efek Cermin</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Dilihat dunia berarti dipaksa untuk terus memperbaiki tata kelola dan integritas setiap harinya.</p>
              </div>
              
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                  <Share2 className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-black mb-3 text-slate-900">Multiplier Effect</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Satu keberhasilan kecil di BUMDes Bapak bisa direplikasi oleh ribuan desa lain melalui jejak digital.</p>
              </div>
              
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 sm:col-span-2">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Lightbulb className="text-amber-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-1 text-slate-900">Jadilah Mercusuar</h3>
                    <p className="text-sm text-slate-500 font-medium italic">"Tugas saya adalah membantu lembaga Anda menjadi <strong className="text-slate-900 font-black">cahaya inspirasi</strong> tersebut melalui manajemen yang sehat dan digitalisasi yang tepat."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationHub;
