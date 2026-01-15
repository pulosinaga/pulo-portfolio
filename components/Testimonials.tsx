
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rekan Kerja Profesional",
      role: "Pendamping Desa",
      text: "Pak Pulo adalah mentor yang sangat teliti. Kemampuannya dalam menyederhanakan regulasi yang rumit menjadi langkah kerja praktis sangat membantu kami di lapangan.",
      avatar: "R"
    },
    {
      name: "Pengurus Lembaga",
      role: "Koperasi Kredit",
      text: "Selama 10 tahun di bawah manajemen beliau, sistem keuangan kami menjadi jauh lebih transparan dan aset tumbuh secara signifikan berkat ketegasan prinsipnya.",
      avatar: "P"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Kesaksian Profesional</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Apa Kata Kolega Saya?</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <Quote className="absolute top-8 right-8 text-blue-200 group-hover:text-blue-500 transition-colors" size={48} />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-600 italic text-lg leading-relaxed mb-8 relative z-10">
              "{rev.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black">
                {rev.avatar}
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-tighter text-sm">{rev.name}</h4>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-slate-400 text-xs font-medium italic">
          *Nama-nama dapat dikonfirmasi melalui referensi profesional langsung jika diperlukan.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
