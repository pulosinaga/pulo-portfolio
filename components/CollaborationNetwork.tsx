
import React from 'react';
// Added ArrowRight to imports
import { Users2, Handshake, ShieldCheck, SearchCheck, HeartHandshake, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const CollaborationNetwork: React.FC = () => {
  const partnerTypes = [
    {
      title: "Dukungan Teknis Ahli",
      role: "Supportive Specialist",
      desc: "Kumpulan tenaga ahli yang siap dimobilisasi untuk memperkuat implementasi program teknis di bawah arahan instansi pemerintah.",
      icon: <Briefcase className="text-blue-600" />
    },
    {
      title: "Kolaborasi Antar Pendamping",
      role: "Peer Support",
      desc: "Sinergi antar rekan sejawat untuk memastikan standar kualitas kerja di lapangan selaras dengan target pimpinan daerah/pusat.",
      icon: <Users2 className="text-indigo-600" />
    },
    {
      title: "Kemitraan Akademis",
      role: "Knowledge Support",
      desc: "Menghubungkan praktisi lapangan dengan riset akademis untuk memvalidasi keberhasilan program resmi pemerintah.",
      icon: <GraduationCap className="text-amber-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-blue-300 rounded-lg mb-6 border border-white/10">
              <HeartHandshake size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Supporting Framework</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
              Sinergi Pendukung <br/>
              <span className="text-blue-400">Kesuksesan Program Resmi.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Saya memposisikan diri sebagai <span className="text-white italic underline decoration-blue-500 underline-offset-4 font-bold">Partner Pendukung</span> pimpinan. Jejaring ini hadir bukan untuk menggantikan peran pemerintah, melainkan untuk memastikan setiap kebijakan pimpinan terimplementasi dengan akurasi teknis yang tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnerTypes.map((partner, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  {partner.icon}
                </div>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">{partner.role}</p>
                <h3 className="text-xl font-black text-white mb-4">{partner.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-start gap-6 max-w-2xl">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-blue-400" size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black text-white mb-2 uppercase italic tracking-tight">Kepatuhan Otoritas</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium italic">
                  "Seluruh sinergi ini berjalan di bawah koridor hukum dan tunduk pada hierarki pimpinan lembaga mitra. Tugas kami adalah melayani visi pemerintah dengan integritas teknis."
                </p>
              </div>
            </div>
            <a href="#contact" className="w-full lg:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3">
              Mari Berdiskusi Support <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationNetwork;
