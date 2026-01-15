
import React from 'react';
import { Mail, MessageCircle, ArrowUpCircle, Shield, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (err) {
        // Silently fail if history API not available
      }
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const sections = [
    {
      title: 'Menu Navigasi',
      links: [
        { name: 'Tentang Saya', id: 'about' },
        { name: 'Pengalaman Karir', id: 'experience' },
        { name: 'Sertifikasi', id: 'certifications' },
        { name: 'Keahlian Utama', id: 'skills' },
      ]
    },
    {
      title: 'Karya Digital',
      links: [
        { name: 'Pruidea.com', href: 'https://www.pruidea.com' },
        { name: 'Lensainfo.com', href: 'https://lensainfo.com' },
        { name: 'Sahabatdoa.com', href: 'https://sahabatdoa.com' },
      ]
    }
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-24 pb-12 border-t border-slate-800 print:hidden overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <h3 className="text-white text-2xl font-black tracking-tighter">
                PULO SINAGA<span className="text-blue-500">.SE</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Ekspertis Manajemen dengan dedikasi 27 tahun. Fokus pada tata kelola keuangan mikro dan pemberdayaan masyarakat.
            </p>
            <div className="flex gap-4">
              <a href="mailto:pulosinaga21@gmail.com" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/6281362969838" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.id ? (
                      <a 
                        href={`#${link.id}`} 
                        onClick={(e) => handleNavClick(e, link.id)}
                        className="text-sm hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight size={14} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors" />
                        {link.name}
                      </a>
                    ) : (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight size={14} className="mr-2 text-slate-700 group-hover:text-blue-500 transition-colors" />
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">
              Kontak & Lokasi
            </h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                <p>Pakpak Bharat & Taput,<br/><span className="text-slate-500 italic">Sumatera Utara, Indonesia</span></p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <p>+62 813-6296-9838</p>
              </div>
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, 'hero')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/5"
              >
                KEMBALI KE ATAS <ArrowUpCircle size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
            © {currentYear} Pulo Sinaga, S.E. Portofolio Profesional.
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-slate-700">
            <span>UNIKA St. Thomas Medan '94</span>
            <span className="hidden sm:inline">|</span>
            <span>BNSP Certified 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
