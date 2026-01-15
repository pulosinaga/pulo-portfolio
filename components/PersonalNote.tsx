
import React from 'react';
import { Quote } from 'lucide-react';

const PersonalNote: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-10 right-10 opacity-10">
           <Quote size={120} />
        </div>
        
        <div className="relative z-10">
          <span className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-10 block">Pesan dari Meja Kerja Saya</span>
          
          <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed italic text-slate-200">
            <p>
              "Masalah manajemen bukan hanya soal angka dan kertas, tapi soal orang-orang di baliknya dan sistem yang melindungi mereka."
            </p>
            <p>
              "Selama 27 tahun, saya belajar bahwa keberhasilan sebuah organisasi—baik itu koperasi besar maupun pemerintahan desa terkecil—terletak pada kombinasi antara <strong className="text-white font-black italic underline decoration-blue-500">integritas yang tak goyah</strong> dan <strong className="text-white font-black italic underline decoration-blue-500">adaptasi terhadap teknologi.</strong>"
            </p>
            <p>
              "Hari ini, saya hadir bukan sekadar memberikan instruksi, tapi untuk duduk bersama Anda, membedah tantangan, dan memastikan Anda memiliki sistem yang kuat untuk masa depan."
            </p>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-black tracking-tighter italic uppercase text-blue-400">Pulo Sinaga, S.E.</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Senior Management Consultant</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-slate-300 italic">
                  Since 1998
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNote;
