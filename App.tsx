
import React, { useState, useEffect, useRef } from 'react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Methodology from './components/Methodology';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import Services from './components/Services';
import FAQ from './components/FAQ';
import MediaPresence from './components/MediaPresence';
import Process from './components/Process';
import ServicePromise from './components/ServicePromise';
import IndustryFocus from './components/IndustryFocus';
import PersonalNote from './components/PersonalNote';
import DigitalAdvantage from './components/DigitalAdvantage';
import InspirationHub from './components/InspirationHub';
import Proposal from './components/Proposal';
import VisitorFunnel from './components/VisitorFunnel';
import ServiceScope from './components/ServiceScope';
import AcademicBridge from './components/AcademicBridge';
import EngagementModels from './components/EngagementModels';
import CollaborationNetwork from './components/CollaborationNetwork';
import MarketPositioning from './components/MarketPositioning';
import LinkedInSynergy from './components/LinkedInSynergy';
import BrandBlueprint from './components/BrandBlueprint';
import CaseStudies from './components/CaseStudies';
import CreditUnionSpecialty from './components/CreditUnionSpecialty';

const App: React.FC = () => {
  const [showProposal, setShowProposal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const isProposal = hash === '#proposal';
      
      if (isProposal) {
        if (!showProposal) {
          lastScrollPos.current = window.scrollY;
          setShowProposal(true);
        }
        window.scrollTo(0, 0);
      } else {
        if (showProposal) {
          setShowProposal(false);
          // Gunakan timeout kecil untuk memastikan DOM halaman utama sudah siap sebelum scroll balik
          setTimeout(() => {
            window.scrollTo({ top: lastScrollPos.current, behavior: 'auto' });
            const sectionId = hash.replace('#', '');
            if (sectionId) {
              document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        } else if (hash) {
          const sectionId = hash.replace('#', '');
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [showProposal]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / (totalScroll || 1)) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [showProposal]);

  const closeProposal = () => { 
    window.location.hash = ''; 
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <div className="fixed top-0 left-0 h-1 bg-blue-600 z-[3000] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

      <Navbar isProposalMode={showProposal} onExitProposal={closeProposal} />
      
      <main className="flex-grow">
        {showProposal ? (
          <div key="proposal-view" className="fade-in-standard min-h-screen bg-white">
            <Proposal onBack={closeProposal} />
          </div>
        ) : (
          <div key="home-view" className="fade-in-standard">
            <section id="hero"><Hero /></section>
            
            <section id="blueprint" className="py-24 bg-white reveal">
              <BrandBlueprint />
            </section>

            <section id="gateway" className="py-24 bg-slate-50 border-y border-slate-100">
              <VisitorFunnel />
            </section>
            
            <section id="about" className="py-24 bg-white reveal">
              <About />
            </section>

            <section id="cases" className="py-24 bg-slate-50 reveal">
              <CaseStudies />
            </section>

            <section id="cu-specialty" className="py-24 bg-white reveal">
              <CreditUnionSpecialty />
            </section>

            <section id="industries" className="py-24 bg-slate-50 reveal">
              <IndustryFocus />
            </section>

            <section id="linkedin-synergy" className="py-24 bg-white reveal">
              <LinkedInSynergy />
            </section>

            <section id="services" className="py-24 bg-slate-50 reveal">
              <Services />
            </section>

            <section id="digital-value" className="py-32 bg-slate-900 text-white reveal">
              <DigitalAdvantage />
            </section>

            <section id="inspiration" className="py-24 bg-slate-50 reveal">
              <InspirationHub />
            </section>

            <section id="experience" className="py-24 bg-white reveal">
              <Experience />
            </section>

            <section id="methodology" className="py-24 bg-slate-50 reveal">
              <Methodology />
            </section>

            <section id="insights" className="py-32 bg-slate-900 text-white reveal">
              <Insights />
            </section>

            <section id="certifications" className="py-24 bg-slate-50 reveal">
              <Certifications />
            </section>

            <section id="testimonials" className="py-24 bg-white reveal">
              <Testimonials />
            </section>

            <section id="projects" className="py-24 bg-slate-50 reveal">
              <Projects />
            </section>

            <section id="contact" className="py-32 bg-white reveal">
              <Contact />
            </section>
            
            <Footer />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
