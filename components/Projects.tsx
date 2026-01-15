
import React from 'react';
import { ExternalLink, Globe, Layout, Layers, Terminal, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Pruidea.com',
      url: 'https://www.pruidea.com',
      description: 'Main Digital Hub & Parent Brand. Ekosistem utama yang menaungi seluruh inisiatif digital dan portofolio profesional saya.',
      tag: 'Parent Digital Hub',
      color: 'bg-blue-600',
      tech: ['Ecosystem', 'Brand Home']
    },
    {
      title: 'Lensainfo.com',
      url: 'https://lensainfo.com',
      description: 'Media informasi independen yang fokus pada berita lapangan dan pemberdayaan masyarakat pedesaan.',
      tag: 'News & Media',
      color: 'bg-indigo-600',
      tech: ['CMS', 'SEO Engine', 'Analytic']
    },
    {
      title: 'Sahabatdoa.com',
      url: 'https://sahabatdoa.com',
      description: 'Inisiatif sosial digital untuk membangun komunitas yang saling mendukung melalui kekuatan doa.',
      tag: 'Social Platform',
      color: 'bg-emerald-600',
      tech: ['UI Design', 'Interactivity']
    },
    {
      title: 'PPTSB Siborongborong',
      url: 'https://pptsbsiborongborong.pruidea.com',
      description: 'Layanan informasi digital khusus untuk wilayah Siborongborong guna mempererat komunikasi komunitas.',
      tag: 'Organization',
      color: 'bg-red-600',
      tech: ['Branding', 'Community Tool']
    },
    {
      title: 'Catatan TPP Desa',
      url: 'https://catatantppdesa.lensainfo.com',
      description: 'Sistem pencatatan terpadu untuk monitoring harian kegiatan Tenaga Pendamping Profesional di lapangan.',
      tag: 'Work Tool',
      color: 'bg-amber-600',
      tech: ['Database', 'Web Application']
    }
  ];

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-blue-600" size={20} />
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Digital Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Inisiatif & Karya Digital</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mt-4"></div>
        </div>
        <p className="text-slate-600 max-w-md text-base leading-relaxed">
          Seluruh platform ini dibangun untuk mendukung efektivitas kerja dan kontribusi sosial di bawah naungan <strong>Pruidea Hub</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col p-2"
          >
            <div className={`h-2 w-1/2 mx-auto rounded-full mt-4 opacity-50 ${project.color}`}></div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <Globe size={24} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3 italic">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, ti) => (
                    <span key={ti} className="text-[9px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md uppercase tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-blue-600 font-black text-xs uppercase tracking-[0.1em] border-t border-slate-50 pt-6">
                  <span>Lihat Project</span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
