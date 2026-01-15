
import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Apakah Bapak menerima konsultasi jarak jauh (Online)?",
      a: "Ya, saya melayani konsultasi strategis via Zoom/Google Meet untuk efisiensi waktu, namun kunjungan lapangan tetap dimungkinkan untuk proyek skala tertentu."
    },
    {
      q: "Bagaimana sistem pembayaran jasa profesional Bapak?",
      a: "Untuk workshop, sistemnya adalah per-sesi. Untuk pendampingan tata kelola, biasanya berbasis kontrak proyek atau partnership jangka menengah."
    },
    {
      q: "Dapatkah Bapak membantu pendaftaran sertifikasi BUMDes?",
      a: "Tentu. Saya memberikan pendampingan teknis mulai dari penyusunan dokumen hukum hingga proses submit di portal kementerian."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Informasi Umum</span>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight italic">Pertanyaan yang Sering Diajukan</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:border-blue-200 transition-all">
            <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
              <h3 className="font-bold text-slate-900 pr-4">{faq.q}</h3>
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-open:rotate-180 transition-transform">
                <ChevronDown size={20} className="text-blue-600" />
              </div>
            </summary>
            <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed">
              <div className="pt-4 border-t border-slate-50">
                {faq.a}
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
