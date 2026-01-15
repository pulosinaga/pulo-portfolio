
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, FileText, CheckCircle2, ShieldCheck, 
  Cpu, Users, Landmark, TrendingUp, Send, Lock, KeyRound, AlertCircle,
  ClipboardCheck, Sparkles, X, Info, ShieldAlert, Timer
} from 'lucide-react';

interface ProposalProps {
  onBack: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ onBack }) => {
  const [pin, setPin] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  
  const [activeTab, setActiveTab] = useState<'govt' | 'ngo' | 'corp' | 'edu'>('govt');
  const [showBriefForm, setShowBriefForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // PIN disamarkan (Base64 dari 2727 adalah MjcyNw==)
  const encodedPin = "MjcyNw=="; 

  useEffect(() => {
    let interval: any;
    if (isLocked && lockTimer > 0) {
      interval = setInterval(() => {
        setLockTimer((prev) => prev - 1);
      }, 1000);
    } else if (lockTimer === 0) {
      setIsLocked(false);
      setAttempts(0);
    }
    return () => clearInterval(interval);
  }, [isLocked, lockTimer]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    if (btoa(pin) === encodedPin) {
      setIsAuthorized(true);
      setError(false);
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError(true);
      setPin('');

      if (newAttempts >= 3) {
        setIsLocked(true);
        setLockTimer(60); // Kunci 60 detik
      }

      // Animasi getar saat salah
      const form = e.currentTarget as HTMLElement;
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
    }
  };

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
        setShowBriefForm(false);
        setFormSubmitted(false);
    }, 3000);
  };

  const sectoralContent = {
    govt: {
      title: "Public Sector Strategy",
      desc: "Fokus: Audit Kesiapan Administrasi & Sinkronisasi Kebijakan Daerah.",
      points: [
        "Asesmen awal kesiapan sistem administrasi lembaga.",
        "Pendampingan penyusunan draf regulasi internal desa/dinas.",
        "Workshop peningkatan kapasitas aparatur pelaksana.",
        "Fasilitasi integrasi sistem pelaporan digital mandiri."
      ]
    },
    ngo: {
      title: "Impact & Accountability",
      desc: "Fokus: Akuntabilitas Pelaporan Sosial & Stakeholder Trust.",
      points: [
        "Review instrumen monitoring dan evaluasi program.",
        "Pendampingan penyusunan laporan dampak sosial.",
        "Fasilitasi komunikasi partisipatif dengan penerima manfaat.",
        "Digitalisasi dokumentasi progres kerja lapangan."
      ]
    },
    corp: {
      title: "Management Optimization",
      desc: "Fokus: Efisiensi Operasional & Strategic Business Expansion.",
      points: [
        "Evaluasi manajemen keuangan dan operasional internal.",
        "Asesmen risiko manajemen dan penyehatan arus kas.",
        "Penyusunan standar operasional (SOP) berbasis efisiensi.",
        "Infrastruktur sistem informasi pendukung ekspansi."
      ]
    },
    edu: {
      title: "Academic-Practitioner Synergy",
      desc: "Fokus: Case Method Learning & Link-and-Match Industri.",
      points: [
        "Penyampaian kuliah tamu berbasis Case Method (Studi Kasus).",
        "Mentoring tata kelola bagi startup mahasiswa/inkubator.",
        "Review kurikulum manajemen agar sesuai kebutuhan lapangan.",
        "Pendampingan pengabdian masyarakat (KKN) berbasis hasil."
      ]
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6 py-20">
        <div className="max-w-md w-full">
          <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
            {/* Security Indicator */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <ShieldCheck size={12} className="text-emerald-400" />
              <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">End-to-End Encrypted</span>
            </div>

            <div className="text-center mb-10 mt-6 relative z-10">
              <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl transition-all duration-500 ${isLocked ? 'bg-red-600 animate-pulse' : 'bg-blue-600 shadow-blue-600/30'}`}>
                {isLocked ? <ShieldAlert size={40} className="text-white" /> : <ShieldCheck size={40} className="text-white" />}
              </div>
              <h2 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter italic">Secured Access</h2>
              <p className="text-sm text-slate-400 font-medium">
                {isLocked 
                  ? "Sistem terkunci sementara karena terlalu banyak percobaan." 
                  : "Sesi khusus pimpinan & mitra strategis. Silakan masukkan PIN."}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 relative z-10">
              <div className="relative">
                <KeyRound className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input 
                  disabled={isLocked}
                  type="password"
                  inputMode="numeric"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                  placeholder={isLocked ? "LOCKED" : "••••"}
                  className={`w-full pl-16 pr-6 py-6 rounded-2xl outline-none font-black text-3xl tracking-[1em] text-center transition-all ${
                    isLocked 
                    ? 'bg-red-500/10 border-red-500/30 text-red-500' 
                    : 'bg-white/5 border border-white/10 text-white focus:ring-4 focus:ring-blue-600/50'
                  }`}
                  maxLength={4}
                />
              </div>
              
              {error && !isLocked && (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">PIN tidak valid ({attempts}/3)</span>
                  </div>
                </div>
              )}

              {isLocked && (
                <div className="flex items-center gap-2 text-amber-400 justify-center bg-amber-400/10 py-3 rounded-xl border border-amber-400/20">
                  <Timer size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Coba lagi dalam {lockTimer} detik</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isLocked || pin.length < 4}
                className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                  isLocked || pin.length < 4
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'
                }`}
              >
                {isLocked ? 'SYSTEM LOCKED' : 'UNLOCK PROPOSAL'} <ArrowLeft className="rotate-180" size={16} />
              </button>
            </form>
          </div>
          
          <div className="mt-8 flex flex-col items-center gap-4">
            <button 
              onClick={onBack}
              className="text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
            >
              ← Kembali ke Publik
            </button>
            <div className="flex items-center gap-2 opacity-30">
               <ShieldCheck size={12} />
               <span className="text-[8px] font-bold uppercase">Safe & Secure Environment</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 fade-in-standard">
      <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        {/* Header Section */}
        <div className="bg-slate-900 p-12 md:p-20 text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 rounded-lg mb-4">
                        <ShieldCheck size={14} className="text-white" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Authorized Access Secured</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase italic tracking-tighter">Paparan Lintas Sektor</h1>
                </div>
                <button 
                  onClick={onBack}
                  className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white text-white hover:text-slate-900 transition-all"
                >
                  Keluar Sesi
                </button>
            </div>

            <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { id: 'govt', label: 'Pemerintahan', color: 'bg-blue-600' },
                { id: 'ngo', label: 'NGO / Sosial', color: 'bg-emerald-600' },
                { id: 'corp', label: 'Korporasi / UKM', color: 'bg-indigo-600' },
                { id: 'edu', label: 'Dunia Akademis', color: 'bg-amber-600' }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm ${activeTab === tab.id ? `${tab.color} text-white scale-105 shadow-xl` : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight uppercase italic">{sectoralContent[activeTab].title}</h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 p-6 bg-slate-50 rounded-[2rem] border-l-8 border-blue-600 italic">
                  "{sectoralContent[activeTab].desc}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sectoralContent[activeTab].points.map((p, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed italic">{p}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
                   <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                      <TrendingUp size={150} />
                   </div>
                   <div className="flex items-center gap-2 mb-8">
                      <Lock size={14} className="text-blue-400" />
                      <h3 className="text-2xl font-black uppercase tracking-widest text-blue-400 italic">Core Value Props</h3>
                   </div>
                   <div className="space-y-10 relative z-10">
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">01. Review Kesiapan</p>
                        <p className="text-sm font-medium leading-relaxed italic text-slate-300">
                          Lembaga Anda akan memiliki sistem yang tangguh sebelum menghadapi audit otoritas resmi negara.
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">02. Digital Trust</p>
                        <p className="text-sm font-medium leading-relaxed italic text-slate-300">
                          Memastikan setiap aktivitas terdokumentasi secara digital untuk akuntabilitas 100%.
                        </p>
                      </div>
                   </div>
                   <div className="mt-16 pt-12 border-t border-white/10 space-y-5">
                      <button 
                        onClick={() => setShowBriefForm(true)}
                        className="w-full py-6 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl"
                      >
                        <ClipboardCheck size={20} /> ISI BRIEFING KERJA
                      </button>
                      <a 
                        href="https://wa.me/6281362969838" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-700 transition-all"
                      >
                        <Send size={20} /> DISKUSI WHATSAPP
                      </a>
                   </div>
                </div>

                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start gap-5">
                    <Info className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                        Layanan ini bersifat konsultansi strategis dan pendampingan manajemen. Seluruh data briefing terenkripsi dan dijaga kerahasiaannya.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briefing Modal */}
      {showBriefForm && (
        <div className="fixed inset-0 z-[2100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-6 fade-in-standard">
            <div className="max-w-2xl w-full bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl relative max-h-[90vh] overflow-y-auto slide-up-standard">
                {formSubmitted ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 size={48} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Briefing Diterima!</h3>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">
                            Terima kasih atas kepercayaan Anda. Data telah terenkripsi dan dikirim langsung ke sistem saya secara aman.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleBriefSubmit} className="space-y-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Digital Briefing Form</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                                  <ShieldCheck size={12} className="text-emerald-500" /> Protected Secure Submission
                                </p>
                            </div>
                            <button type="button" onClick={() => setShowBriefForm(false)} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-red-50 hover:text-red-600 transition-all">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-2">Prioritas Utama</label>
                                <select required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-xs font-black uppercase tracking-widest focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 appearance-none cursor-pointer">
                                    <option>Audit Internal & Tata Kelola</option>
                                    <option>Penyehatan BUMDes/Koperasi</option>
                                    <option>Digitalisasi Sistem Lembaga</option>
                                    <option>Workshop/Pelatihan SDM</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-2">Estimasi Durasi</label>
                                <select required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-xs font-black uppercase tracking-widest focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 appearance-none cursor-pointer">
                                    <option>Sesi Singkat (1-3 Hari)</option>
                                    <option>Proyek Menengah (1-3 Bulan)</option>
                                    <option>Pendampingan Jangka Panjang</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-2">Deskripsi Kebutuhan</label>
                            <textarea 
                                required
                                className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm font-medium focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                                rows={5}
                                placeholder="Jelaskan kebutuhan Bapak/Ibu secara ringkas..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-slate-900/30 hover:bg-blue-600 transition-all flex items-center justify-center gap-4 active:scale-95"
                        >
                            <ShieldCheck size={18} className="text-emerald-400" /> KIRIM DATA SECARA AMAN
                        </button>
                    </form>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default Proposal;
