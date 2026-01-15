
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, ChevronRight, Info, FileText, Share2, Loader2, Printer, ExternalLink } from 'lucide-react';

interface NavbarProps {
  isProposalMode?: boolean;
  onExitProposal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isProposalMode, onExitProposal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showHelper, setShowHelper] = useState(false);
  const printTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Sinkronisasi dengan sistem cetak browser
    const handleAfterPrint = () => {
      setIsProcessing(false);
      setShowHelper(false);
      clearTimeout(printTimeoutRef.current);
    };

    window.addEventListener('afterprint', handleAfterPrint);
    // Jika window fokus kembali, asumsikan proses cetak selesai/batal
    window.addEventListener('focus', handleAfterPrint);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('afterprint', handleAfterPrint);
      window.removeEventListener('focus', handleAfterPrint);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (isProposalMode && onExitProposal) onExitProposal();

    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const offset = id === 'hero' ? 0 : 80;
        const top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        try { window.history.pushState(null, '', `#${id}`); } catch (err) { }
      }
    }, 150);
  };

  /**
   * FUNGSI CETAK UTAMA
   * 'isRetry' menentukan apakah dipanggil langsung (sync) atau dengan transisi (async)
   */
  const executePrint = (isRetry: boolean = false) => {
    setIsProcessing(true);
    
    if (isRetry) {
      // PENTING: Untuk retry, panggil LANGSUNG tanpa setTimeout 
      // agar tidak diblokir browser mobile sebagai "untrusted action"
      try {
        window.print();
        // Jika kode sampai sini di mobile, biasanya dialog sedang terbuka (JS pause)
        // Jika tidak terbuka, helper akan muncul via timeout di bawah
      } catch (err) {
        setShowHelper(true);
      }
    } else {
      // Panggilan pertama dari menu, beri waktu menu menutup
      setTimeout(() => {
        try {
          window.print();
        } catch (err) {
          setShowHelper(true);
        }
      }, 300);
    }

    // Timer Failsafe
    clearTimeout(printTimeoutRef.current);
    printTimeoutRef.current = setTimeout(() => {
      // Jika setelah 3 detik isProcessing masih true, berarti dialog cetak gagal muncul
      setShowHelper(true);
      setIsProcessing(false);
    }, 3000);
  };

  const handlePrintClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    executePrint(false);
  };

  const handleRetryPrint = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHelper(false);
    // Eksekusi seketika saat diklik (Synchronous)
    executePrint(true);
  };

  const navLinks = [
    { name: 'Blue Print', id: 'blueprint' },
    { name: 'Hasil Kerja', id: 'cases' },
    { name: 'Layanan', id: 'services' },
    { name: 'Ekspertis', id: 'experience' },
    { name: 'Kontak', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[3000] transition-all duration-500 print:hidden ${
        scrolled || isProposalMode ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-4">
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-3 group">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg font-black italic select-none">PS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-slate-900 leading-none uppercase italic">PULO SINAGA<span className="text-blue-600">.SE</span></span>
                  <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-400 mt-1">Management Strategist</span>
                </div>
              </a>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-all">{link.name}</a>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-4"></div>
              <button 
                onClick={handlePrintClick}
                disabled={isProcessing}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg ${isProcessing ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-slate-900 text-white hover:bg-blue-600 active:scale-95'}`}
              >
                {isProcessing ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                {isProcessing ? 'MEMPROSES...' : 'PROFIL PDF'}
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-3 rounded-xl text-slate-900 bg-slate-100 active:bg-blue-100 transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MODAL BANTUAN - DIPERBAIKI TOTAL */}
      {showHelper && (
        <div className="fixed inset-0 z-[5000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300 print:hidden">
          <div className="max-w-md w-full bg-white rounded-[3.5rem] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-blue-600 -mr-8 -mt-8"><FileText size={180} /></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner"><Share2 size={32} /></div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter leading-none">Cetak PDF Terhalang</h3>
              
              <div className="mb-8 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <p className="text-[10px] text-amber-700 font-bold leading-relaxed">
                  Catatan: Jika Anda berada di dalam <span className="underline">Preview</span>, fitur cetak sistem dibatasi. Buka website ini di <strong>Browser Chrome</strong> secara langsung.
                </p>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed mb-8 font-medium">
                Sistem browser Anda membatasi dialog otomatis. Silakan gunakan tombol di bawah ini atau metode manual:
              </p>
              
              <div className="bg-slate-50 rounded-[2.5rem] p-8 text-left space-y-4 border border-slate-100 mb-8">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0">1</div>
                  <p className="text-[11px] font-bold text-slate-700 leading-tight">Klik tombol <span className="text-blue-600">Biru</span> di bawah ini sekali lagi.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-slate-400 text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0">2</div>
                  <p className="text-[11px] font-bold text-slate-500 leading-tight italic">Manual: Klik <span className="font-black text-slate-700">Titik Tiga [⋮] > Bagikan > Cetak</span>.</p>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleRetryPrint}
                  className="w-full py-6 bg-blue-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 active:scale-95"
                >
                  <Printer size={18} /> PICU DIALOG SEKARANG
                </button>
                <button 
                  onClick={() => setShowHelper(false)}
                  className="w-full py-4 text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-slate-600"
                >
                  TUTUP PANDUAN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[4000] bg-white lg:hidden transition-all duration-300 print:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-20 pb-10 px-6">
          <div className="flex justify-between items-center mb-8 px-2">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Menu Navigasi</span>
             <button onClick={() => setIsOpen(false)} className="text-slate-400 p-2"><X size={24} /></button>
          </div>
          <div className="space-y-2 flex-grow overflow-y-auto">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 active:bg-blue-600 active:text-white group">
                <span className="text-2xl font-black uppercase italic tracking-tighter">{link.name}</span>
                <ChevronRight size={24} className="text-blue-600 group-active:text-white" />
              </a>
            ))}
          </div>
          <div className="mt-8 border-t border-slate-100 pt-8 space-y-4">
            <button 
              onClick={handlePrintClick}
              disabled={isProcessing}
              className={`w-full py-6 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl ${isProcessing ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-blue-600 text-white shadow-blue-600/30'}`}
            >
              {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
              {isProcessing ? 'MEMPROSES PDF...' : 'SIMPAN SEBAGAI PDF'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
