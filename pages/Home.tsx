import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroNetworkBackground from '../components/HeroNetworkBackground';
import ScrollReveal from '../components/ScrollReveal';
import StatsCounter from '../components/StatsCounter';
import SolutionsOverview from '../components/SolutionsOverview';
import { useLanguage } from '../context/LanguageContext';
import { 
  CiscoLogo, 
  HoneywellLogo, 
  MicrosoftLogo, 
  OracleLogo, 
  SapLogo, 
  OdooLogo 
} from '../components/BrandLogos';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;
    
    setDisplayText(''); // Reset on text change

    timeout = setTimeout(() => {
      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeChar, 50 + Math.random() * 50);
        }
      };
      typeChar();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-primary ml-1">|</span>
    </span>
  );
};

const Home: React.FC = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    // Handle scrolling to solutions if hash is present
    if (window.location.hash.includes('#solutions')) {
      const element = document.getElementById('solutions');
      if (element) {
        // Delay slightly to ensure content is rendered and animations are ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <div className="w-full overflow-hidden font-body">
      {/* Hero Section - Interactive */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-navy">
        <HeroNetworkBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/50 to-navy z-10 pointer-events-none"></div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center gap-8 mt-10">
            <div className="animate-fade-in-up">
              <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-black tracking-widest uppercase mb-6 backdrop-blur-md">
                {t('hero.badge')}
              </span>
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
                  {t('hero.title')}
              </h1>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mt-2 min-h-[1.2em]">
                 <TypewriterText text={t('hero.typewriter')} delay={1000} />
              </div>
            </div>

            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light max-w-3xl leading-relaxed drop-shadow-md animate-fade-in-up opacity-0" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
                {t('hero.p')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-8 animate-fade-in-up opacity-0" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
                <Link to="/contact" className="group relative overflow-hidden bg-primary hover:bg-primary-light text-navy text-base sm:text-lg font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(0,210,233,0.3)] hover:shadow-[0_0_40px_rgba(0,210,233,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                    <span className="relative z-10">{t('hero.cta_main')}</span>
                </Link>
                <Link to="/portfolio" className="bg-white/5 border border-white/20 hover:bg-white hover:text-navy text-white backdrop-blur-sm text-base sm:text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                    {t('hero.cta_sec')}
                </Link>
            </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
            <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Trust Strip - UX Enhanced */}
      <div className="bg-white border-y border-gray-100 py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                <div className="text-left">
                    <h3 className="text-navy font-black text-2xl mb-2">{t('hero.partners')}</h3>
                    <p className="text-gray-500 text-sm max-w-md">Integrating industry-leading technologies to deliver world-class infrastructure and specialized technical solutions.</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold text-navy uppercase tracking-widest">Enterprise Standard Solutions</span>
                </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16">
                {[
                    {name: 'Cisco', Component: CiscoLogo, role: 'Network Infrastructure'},
                    {name: 'Honeywell', Component: HoneywellLogo, role: 'Security Systems'},
                    {name: 'Microsoft', Component: MicrosoftLogo, role: 'Cloud & Productivity'},
                    {name: 'Oracle', Component: OracleLogo, role: 'Database Solutions'},
                    {name: 'SAP', Component: SapLogo, role: 'ERP Systems'},
                    {name: 'Odoo', Component: OdooLogo, role: 'Business Software'},
                ].map((partner, i) => (
                    <div key={i} className="group relative flex flex-col items-center justify-center">
                        <div className="mb-4 transition-all duration-500 transform group-hover:-translate-y-2">
                            <partner.Component className="h-10 md:h-12 lg:h-14 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center">
                            <span className="text-[10px] font-black text-navy uppercase tracking-tighter mb-1">{partner.name}</span>
                            <span className="text-[9px] text-primary font-bold uppercase tracking-widest whitespace-nowrap">{partner.role}</span>
                        </div>
                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 -z-10 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <StatsCounter />

      <SolutionsOverview />

      {/* Advantage Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
                <div className="text-center mb-20">
                    <h2 className="text-navy text-3xl md:text-4xl font-black mb-4">{t('advantage.title')}</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: 'location_on', title: t('advantage.1.title'), text: t('advantage.1.desc') },
                    { icon: 'verified_user', title: t('advantage.2.title'), text: t('advantage.2.desc') },
                    { icon: 'home_repair_service', title: t('advantage.3.title'), text: t('advantage.3.desc') }
                ].map((item, idx) => (
                    <ScrollReveal key={idx} delay={idx * 200}>
                        <div className="flex flex-col items-center text-center p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100 h-full">
                            <div className={`w-20 h-20 bg-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-navy transition-all duration-500 transform ${lang === 'ar' ? 'group-hover:-rotate-6' : 'group-hover:rotate-6'}`}>
                                <span className="material-symbols-outlined text-4xl text-navy group-hover:text-navy transition-colors">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 font-heading">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {item.text}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* Strategic Location (Split Screen) */}
      <section className="bg-navy overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto min-h-[700px]">
            {/* Left: Map Visualization */}
            <div className="w-full lg:w-1/2 relative bg-white min-h-[500px] overflow-hidden group">
                 <img 
                   src="/images/coverage-map.jpg"
                   alt="IT Services Coverage Sohar"
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-navy/5 pointer-events-none"></div>
             </div>
            
            {/* Right: Content */}
            <div className="w-full lg:w-1/2 p-10 md:p-20 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-navy to-navy-dark text-start">
                <ScrollReveal>
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 inline-block">{t('sohar.badge')}</span>
                    <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">{t('sohar.title')}</h2>
                    <div className="space-y-10 text-gray-300 mb-12">
                        <p className="text-xl leading-relaxed font-light">
                            {t('sohar.p1')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">schedule</span>
                                </div>
                                <h4 className="text-white font-black text-lg group-hover:text-primary transition-colors">{t('sohar.feature1.t')}</h4>
                                <p className="text-sm leading-relaxed text-gray-400">{t('sohar.feature1.d')}</p>
                            </div>
                            <div className="flex flex-col gap-3 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">handshake</span>
                                </div>
                                <h4 className="text-white font-black text-lg group-hover:text-primary transition-colors">{t('sohar.feature2.t')}</h4>
                                <p className="text-sm leading-relaxed text-gray-400">{t('sohar.feature2.d')}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/about" className="bg-primary hover:bg-primary-light text-navy font-black px-10 py-5 rounded-xl shadow-2xl transition-all inline-flex items-center gap-3 transform hover:-translate-y-1">
                            {t('sohar.cta')}
                            <span className={`material-symbols-outlined text-xl ${lang === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
                <div className="text-center mb-20">
                    <h2 className="text-navy text-3xl md:text-5xl font-black mb-6">{t('clients.title')}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t('clients.subtitle')}</p>
                </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {[
                  {alt: "OQ", src: "/clients/oq.png"},
                  {alt: "PDO", src: "/clients/pdo.png"},
                  {alt: "Ministry of Education", src: "/clients/moe.png"},
                  {alt: "Sohar Aluminium", src: "/clients/1708013743.93994_sohar-aluminium_0_0.jpg"},
                  {alt: "Sohar Port", src: "/clients/sohar-port-and-freezone-seeklogo.png"},
                  {alt: "Ministry of Health", src: "/clients/moh.png"},
                  {alt: "Oman Air", src: "/clients/oman-air.png"},
                  {alt: "VOX Cinemas", src: "/clients/vox.png"},
                ].map((client, i) => (
                    <ScrollReveal key={i} delay={i * 50}>
                        <div className="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:shadow-2xl hover:bg-white transition-all duration-500 cursor-pointer group h-56 border border-transparent hover:border-primary/20">
                            <img 
                                  className={`w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 ${client.alt === "Sohar Port" ? 'max-h-10 px-4' : 'max-h-32'}`} 
                                  alt={client.alt} 
                                  src={client.src}
                              />
                        </div>
                    </ScrollReveal>
                ))}
            </div>
            
            {/* Testimonial Highlight */}
            <ScrollReveal>
                <div className="bg-navy rounded-3xl p-10 md:p-16 relative overflow-hidden group shadow-2xl text-start">
                    <div className="absolute top-0 end-0 p-12 opacity-5 pointer-events-none">
                         <span className="material-symbols-outlined text-[10rem] text-primary">format_quote</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="size-24 md:size-32 rounded-3xl p-1 bg-gradient-to-br from-primary to-navy flex-shrink-0 shadow-2xl">
                            <img className="w-full h-full object-cover rounded-[1.4rem]" alt="IT Director" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKv53U_7aQUOJ89xSBv6CDQfD5Kuq6uiyrUUPsyzZaNetJFWO4Gbdp-Uc-0YUOzvEks1tqm2Zogf4OPxrcj4aRjuQYeY1i_QjrgMkODWd3O7pZxpt-rtiJbCqGEbvVtdXhfA6qBqxhOLv09eqgy595lQA1lzm09gARtx0IunBFlTGNuuvI74yGcIqDLf7V8aOa6h9LsP6sD8gn5U1Wf3dwhbJX3zymrwi6_hZqtOf4bSzld3JS8l4v7gLNzqQfV0k2x7PknStHnJsc"/>
                        </div>
                        <div className="flex-1">
                            <div className="text-primary mb-4 flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i} className="material-symbols-outlined text-2xl filled-icon">star</span>
                                ))}
                            </div>
                            <p className="text-2xl md:text-3xl font-light text-white italic mb-8 leading-relaxed">"{t('clients.testimonial')}"</p>
                            <div>
                                <h4 className="font-black text-white text-xl">{t('clients.author.name')}</h4>
                                <p className="text-sm font-bold text-primary tracking-widest uppercase mt-1">{t('clients.author.role')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-primary py-24 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#002060_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -right-40 -bottom-40 w-[30rem] h-[30rem] bg-white/30 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[2000ms]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-navy text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">{t('cta.title')}</h2>
            <p className="text-navy/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {t('cta.p')}
            </p>
            <Link to="/contact" className="inline-flex bg-navy hover:bg-navy-dark text-white font-black text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(0,32,96,0.5)] transition-all duration-500 items-center gap-4 transform hover:-translate-y-2">
                {t('cta.button')}
                <span className={`material-symbols-outlined text-2xl animate-bounce-horizontal ${lang === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;