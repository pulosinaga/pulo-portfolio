
import React from 'react';
import { Heart, ShieldCheck, Clock, UserCheck } from 'lucide-react';

const ServicePromise: React.FC = () => {
  const promises = [
    {
      title: "Responsif & Personal",
      desc: "Tidak ada bot atau admin perantara. Anda akan berkomunikasi langsung dengan saya dalam setiap tahapan proyek.",
      icon: <UserCheck className="text-blue-600" />
    },
    {
      title: "Dedikasi Waktu",
      desc: "Saya tidak mengejar kuantitas proyek. Jika saya menerima Anda, berarti Anda mendapatkan prioritas waktu saya.",
      icon: <Clock className="text-emerald-600" />
    },
    {
      title: "Integritas Tanpa Syarat",
      desc: "Kepuasan Anda adalah reputasi saya. Saya lebih memilih menolak proyek daripada memberikan hasil yang setengah-setengah.",
      icon: <ShieldCheck className="text-blue-700" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-50 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
            <Heart size={200} />
        </div>
        <div className="relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Janji Pelayanan Saya Kepada Anda</h2>
            <p className="text-slate-600 font-medium">
              Sebagai seorang profesional independen, reputasi saya dipertaruhkan dalam setiap kerjasama. Inilah standar yang saya pegang teguh:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promises.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-blue-100 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tighter">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePromise;
