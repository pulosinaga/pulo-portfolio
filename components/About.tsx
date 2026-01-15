
import React from 'react';
import { ShieldCheck, GraduationCap, CheckCircle, UserCheck, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          
          <div className="relative bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-blue-900/5">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
               <UserCheck className="text-blue-600" size={20} />
               <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Profil Profesional Matang</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight uppercase italic tracking-tighter">"Strategi Manajemen adalah Fondasi Kepercayaan."</h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
              Latar belakang sebagai lulusan <strong className="text-slate-900 font-black">Fakultas Ekonomi jurusan Manajemen</strong> memberikan saya perspektif yang mendalam dalam mengelola efisiensi dan tata kelola organisasi secara fundamental.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">Academic Foundation</h4>
                  <p className="text-xs text-slate-500">Keahlian Manajemen Ekonomi Terapan.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50/50 rounded-2xl border border-amber-100">
                <Award className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">Golden Age Wisdom</h4>
                  <p className="text-xs text-slate-500">Usia 56 tahun: Puncak ketenangan emosional & pengalaman.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Nilai Jual Strategis</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Kombinasi Teori & <br/>Praktik Lapangan.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
              <p>
                Sebagai seorang <span className="text-slate-900 font-black underline decoration-blue-500 italic">Sarjana Ekonomi (S.E.)</span>, saya memahami bahwa setiap kebijakan manajemen harus didukung oleh data dan akuntabilitas keuangan yang kuat.
              </p>
              <p>
                Di usia <span className="text-slate-900 font-black underline decoration-blue-500">56 tahun</span>, saya menawarkan <span className="text-slate-900 font-black">ketenangan pikiran (peace of mind)</span> bagi pimpinan. Saya bukan hanya memberikan instruksi, tapi memandu transisi manajemen dengan kebijaksanaan yang teruji waktu.
              </p>
            </div>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-4">
             <div className="px-5 py-3 bg-slate-900 text-white rounded-2xl border border-slate-800 flex items-center gap-3 shadow-lg shadow-slate-900/20">
                <BookOpen size={20} className="text-blue-400" />
                <span className="text-xs font-black uppercase tracking-widest">EKONOMI MANAJEMEN</span>
             </div>
             <div className="px-5 py-3 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm">
                <GraduationCap className="text-blue-600" size={20} />
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">UNIKA MEDAN ALUMNI</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
