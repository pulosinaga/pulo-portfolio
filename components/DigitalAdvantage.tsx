
import React from 'react';
import { ShieldCheck, Zap, Cpu, BarChart3, TrendingUp } from 'lucide-react';

const DigitalAdvantage: React.FC = () => {
  const benefits = [
    {
      title: "Infrastruktur Kepercayaan",
      desc: "Website adalah bukti transparansi. Lembaga yang berani online menunjukkan akuntabilitas tinggi di mata publik & investor.",
      icon: <ShieldCheck className="text-blue-400" />
    },
    {
      title: "Cermin Performa",
      desc: "Digitalisasi memaksa kita melihat 'apa adanya' kondisi organisasi, sehingga setiap kekurangan menjadi titik awal perbaikan cepat.",
      icon: <BarChart3 className="text-blue-400" />
    },
    {
      title: "Efisiensi Tanpa Batas",
      desc: "Digitalisasi administrasi memangkas birokrasi manual, mempercepat layanan, dan menyediakan data real-time untuk keputusan manajemen.",
      icon: <Zap className="text-blue-400" />
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Visi Masa Depan</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-white">
              Website Bukan Pajangan, <br/>Tapi <span className="text-blue-400 italic">Mesin Pertumbuhan.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium mb-8">
              Saya percaya bahwa sebuah website kecil yang dikelola dengan benar oleh lembaga atau desa akan meningkatkan performa secara <strong className="text-white font-black italic">eksponensial</strong> di masa depan.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-[2rem]">
               <Cpu className="text-blue-400 flex-shrink-0" size={32} />
               <p className="text-sm text-slate-300 italic">"Digitalisasi bukan sekadar teknologi, tapi <strong className="text-white font-black">keberanian untuk transparan</strong> dan siap naik kelas."</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{benefit.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-900/50 border border-blue-500/20">
          <div className="max-w-xl text-center md:text-left">
             <h3 className="text-2xl font-black mb-4 text-white">Siap Menjadi Inspirasi Digital Selanjutnya?</h3>
             <p className="text-blue-100 text-sm font-medium">Saya akan mendampingi transisi digital organisasi Anda agar tepat guna dan berorientasi hasil.</p>
          </div>
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl shadow-black/10 flex items-center gap-3"
          >
             <TrendingUp size={18} /> Mulai Transformasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default DigitalAdvantage;
