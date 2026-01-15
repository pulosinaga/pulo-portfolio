
import React from 'react';
import { Briefcase, MapPin, Calendar, Star, CheckCircle2, History, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Tenaga Ahli Pemberdayaan Masyarakat (TA PM)',
      company: 'Kemendesa PDTT - Kab. Pakpak Bharat',
      period: 'Jan 2023 - Des 2025',
      location: 'Pakpak Bharat, Sumut',
      description: 'Mengoordinasikan sosialisasi, monitoring, dan advokasi untuk meningkatkan kapasitas tenaga pendamping profesional.',
      details: [
        'Mentoring teknis penyelenggaraan pemerintahan desa.',
        'Supervisi pelaksanaan pembangunan dan pemberdayaan masyarakat desa.'
      ],
      skills: ['Coordination', 'Governance'],
      icon: <Star className="text-white" size={24} />,
      isKey: true
    },
    {
      title: 'Tenaga Ahli Pemberdayaan Masyarakat (TA-PMD)',
      company: 'P3MD Prov. Sumut (Samosir, Dairi, Taput)',
      period: 'Nov 2017 - Des 2022',
      location: 'Lintas Kabupaten, Sumut',
      description: 'Fasilitasi partisipatif dalam perencanaan program desa dan supervisi tenaga pendamping.',
      details: [],
      skills: ['Empowerment', 'Planning'],
      icon: <Briefcase className="text-white" size={24} />
    },
    {
      title: 'Kabag Daperna / Asuransi',
      company: 'Koperasi Kredit / Simpan Pinjam',
      period: 'Apr 2013 - Mar 2017',
      location: 'Siborongborong, Taput',
      description: 'Mengelola sistem asuransi internal dan dana pensiun bagi anggota koperasi.',
      details: [
        'Pengelolaan klaim asuransi dan perlindungan dana anggota.',
        'Rekonsiliasi data keuangan asuransi secara periodik.'
      ],
      skills: ['Finance', 'Insurance'],
      icon: <CheckCircle2 className="text-white" size={24} />
    },
    {
      title: 'Manajer Operasional & Keuangan',
      company: 'Koperasi Kredit Siborongborong',
      period: 'Jan 2003 - Mar 2013',
      location: 'Siborongborong, Taput',
      description: 'MEMEGANG JABATAN MANAJERIAL SELAMA 10 TAHUN. Bertanggung jawab penuh atas operasional, pertumbuhan aset, dan kesehatan keuangan lembaga.',
      details: [
        'Memimpin ekspansi bisnis dan peningkatan keanggotaan secara signifikan.',
        'Mengawasi manajemen risiko kredit dan kepatuhan terhadap regulasi.',
        'Membangun sistem manajemen yang akuntabel dan transparan.'
      ],
      skills: ['Strategic Management', 'Leadership', 'Financial Audit'],
      icon: <Award className="text-white" size={24} />,
      isKey: true,
      highlight: "Masa Bakti Manajerial 10 Tahun"
    },
    {
      title: 'Staf Administrasi & Keuangan',
      company: 'Koperasi Kredit Siborongborong',
      period: 'Jan 1998 - Des 2002',
      location: 'Siborongborong, Taput',
      description: 'Memulai karir profesional sebagai tenaga administrasi keuangan mikro segera setelah lulus kuliah.',
      details: [
        'Input transaksi harian dan pelayanan administrasi anggota.',
        'Membantu penyusunan laporan keuangan bulanan.'
      ],
      skills: ['Accounting', 'Administration'],
      icon: <History className="text-white" size={24} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Sejarah Karir</span>
        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight italic">27 Tahun Pengabdian Profesional</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Dari operasional keuangan mikro hingga pemberdayaan masyarakat tingkat kabupaten, konsistensi dalam integritas dan hasil kerja.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-100 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className={`absolute -left-[42px] md:-left-[76px] top-0 w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white transition-all duration-500 group ${exp.isKey ? 'bg-blue-600 scale-125 z-10' : 'bg-slate-400'}`}>
              {exp.icon}
            </div>
            
            <div className={`bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border transition-all duration-300 ${exp.isKey ? 'border-blue-100 ring-1 ring-blue-50 bg-gradient-to-br from-white to-blue-50/20' : 'border-slate-50'} hover:shadow-2xl hover:border-blue-200`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  {exp.highlight && (
                    <span className="inline-flex items-center px-3 py-1 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-4">
                      <Star size={10} className="mr-1 fill-white" /> {exp.highlight}
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1">{exp.title}</h3>
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                    {exp.company}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-500 text-[10px] font-black uppercase rounded-xl border border-slate-200/50">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase mb-6 tracking-[0.2em]">
                <MapPin size={12} className="mr-2" />
                {exp.location}
              </div>

              <p className="text-slate-600 mb-8 text-base leading-relaxed font-medium">
                {exp.description}
              </p>

              {exp.details && exp.details.length > 0 && (
                <ul className="mb-8 space-y-4">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm shadow-blue-500/50"></div>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-slate-50 text-slate-400 text-[9px] font-black rounded-lg uppercase tracking-tight border border-slate-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
