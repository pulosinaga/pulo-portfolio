
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, Clock, CalendarCheck, UserCircle, Handshake, ShieldCheck, Lock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    purpose: '',
    message: ''
  });

  // Fungsi untuk membersihkan input dari karakter berbahaya (Sanitization)
  const sanitizeInput = (val: string) => {
    return val.replace(/[<>]/g, "").trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logika pengiriman data akan divalidasi lebih lanjut di backend jika ada
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', type: '', purpose: '', message: '' });
    }, 5000);
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-16 bg-gradient-to-br from-blue-700 to-indigo-800 text-white relative z-10">
            <h2 className="text-4xl font-black mb-6 tracking-tight italic uppercase">Mulai Diskusi.</h2>
            <p className="text-blue-100 mb-12 text-lg leading-relaxed font-medium">
              Data Anda dilindungi dengan enkripsi SSL standar perbankan. Kerahasiaan adalah prioritas saya.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-700 transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-blue-200 uppercase font-black tracking-[0.2em] mb-1">Email Strategis</p>
                  <p className="text-lg font-bold">pulosinaga21@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-blue-200 uppercase font-black tracking-[0.2em] mb-1">WhatsApp Business</p>
                  <p className="text-lg font-bold">+62 813-6296-9838</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 bg-black/20 border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-emerald-400" />
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Secure Transmission Verified</p>
              </div>
              <div className="flex items-center gap-4">
                <Lock className="text-blue-300" size={16} />
                <p className="text-[9px] font-medium opacity-70 italic">
                  Data Anda tidak akan dibagikan kepada pihak ketiga manapun.
                </p>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-16 bg-white relative z-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Pesan Terkirim Aman!</h3>
                <p className="text-slate-500 font-medium">Saya telah menerima permintaan Bapak/Ibu secara privat. Respon akan dikirim maksimal dalam 2x24 jam.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Tipe Hubungan</label>
                    <select 
                      required 
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent outline-none font-black text-[10px] uppercase tracking-widest appearance-none cursor-pointer"
                    >
                      <option value="">Pilih Kategori</option>
                      <option value="partner">Calon Mitra / Associate Expert</option>
                      <option value="govt">Pemerintah (Pemda/Pusat)</option>
                      <option value="ngo">NGO / Yayasan / Internasional</option>
                      <option value="village">BUMDes / Pemerintahan Desa</option>
                      <option value="corp">Korporasi / Perusahaan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Tujuan Utama</label>
                    <select 
                      value={formData.purpose}
                      onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent outline-none font-black text-[10px] uppercase tracking-widest appearance-none cursor-pointer"
                    >
                      <option>Pengajuan Kerjasama</option>
                      <option>Konsultasi Strategis</option>
                      <option>Undangan Workshop</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Nama & Organisasi</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: sanitizeInput(e.target.value)})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent outline-none font-medium text-sm"
                    placeholder="Contoh: Drs. Ahmad - Ketua Yayasan"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Pesan / Penawaran</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: sanitizeInput(e.target.value)})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent outline-none resize-none font-medium text-sm"
                    placeholder="Jelaskan potensi sinergi secara singkat..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-slate-900/10 active:scale-95"
                >
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Kirim Pesan Terenkripsi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
