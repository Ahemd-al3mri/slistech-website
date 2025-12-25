import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { 
  SapLogo, 
  OdooLogo, 
  AzureLogo, 
  ReactLogo, 
  PythonLogo, 
  AwsLogo 
} from '../components/BrandLogos';

const Software: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="bg-white text-gray-900 font-body">
      {/* Hero */}
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
            {/* Gradient flipped based on direction to keep text side dark */}
            <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-navy via-navy/80 to-navy/30 z-10"></div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvf-xnLrGg-hZFvoTYAKnAcxpmNlYmz4VXXZtx8lbXwOm-RR4CA5TpH6T5VcupIPDvzaAVEoU03alwdUF2fU8bSegJzG7G0MxziJzcTtMFUHX5eIcq4_iDV42NCxnFa2dM4taOZvwSwHpCzYrKWlbLYDOC9O7basuKe4MPdKhk5SB2JnmhMq6Rk66L5DH9rqhKbl5aqCGO7X9IEEwNcc79cqW8QR89LLPm-nxQC2WTGUgOEmylJioBgVYCXlVQxxn8EPCKWz-tA9WK" alt="Software Code" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-5xl flex flex-col items-center">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    <span>{t('soft.hero.badge')}</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8 text-white font-heading">
                    {t('soft.hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                    {t('soft.hero.p')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/contact" className="bg-primary hover:bg-primary-light text-navy font-black text-lg py-4 px-10 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 font-heading hover:-translate-y-1">
                        {t('soft.hero.cta')}
                        <span className={`material-symbols-outlined text-lg ${lang === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
                    </Link>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
            <ScrollReveal>
                <div className="bg-white rounded-3xl p-10 md:p-16 border border-gray-200 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 end-0 w-48 h-48 bg-navy/5 rounded-full -me-24 -mt-24 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center text-start">
                        <div className="bg-navy p-5 rounded-2xl shrink-0 shadow-lg">
                            <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
                        </div>
                        <div>
                            <h3 className="text-navy text-2xl font-black mb-4 uppercase tracking-widest font-heading">{t('soft.divide.title')}</h3>
                            <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed">
                                {t('soft.divide.p')}
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <ScrollReveal>
                <div className="text-center mb-20">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm font-heading">{t('soft.suite.badge')}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-2 mb-6 font-heading">{t('soft.suite.title')}</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {[
                    { icon: 'settings_applications', title: t('soft.services.1.t'), desc: t('soft.services.1.d') },
                    { icon: 'devices', title: t('soft.services.2.t'), desc: t('soft.services.2.d') },
                    { icon: 'cloud_upload', title: t('soft.services.3.t'), desc: t('soft.services.3.d') },
                    { icon: 'query_stats', title: t('soft.services.4.t'), desc: t('soft.services.4.d') },
                    { icon: 'sync', title: t('soft.services.5.t'), desc: t('soft.services.5.d') },
                    { icon: 'lock_open', title: t('soft.services.6.t'), desc: t('soft.services.6.d') }
                ].map((s, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                        <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 h-full text-start">
                            <div className="bg-navy w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-300">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-navy">{s.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 font-heading">{s.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Split Banner */}
            <ScrollReveal>
                <div className="bg-navy rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl text-start">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-heading">{t('soft.modernize.title')}</h3>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                {t('soft.modernize.p')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[t('soft.modernize.feat1'), t('soft.modernize.feat2'), t('soft.modernize.feat3'), t('soft.modernize.feat4')].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                        <span className="text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-navy rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative bg-navy rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDofEWPnoh4eWhUtJ6tdOE3RGjqbwGWW9ArUiA_R9pZ-cNMTbIIy2DQn_RI6lJ0bETYZhIIGOPmm5xaRWEh-bc5pghD2saYyowt8hMaqn80ciKEZG2ySfWUg_RMA0n7HcqGqN1Psc2mZ6Msl5wSj8LxbDTwsNNTyVCsu-lp8sI9jslFaPjb-zIBA_5ekC74PqL6D84gOv0UO9iEpJE66SSVE4RCDLtzjSE73pIIXFs321Amke9AFKEvF8CNjOUGZWhoOf7Tfd35x-u1" alt="Software Development Team" className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack Strip - UX Enhanced */}
      <section className="py-32 px-6 bg-white border-t border-gray-100 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                <div className="text-left max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-12 bg-primary rounded-full"></div>
                        <span className="text-primary font-bold text-xs uppercase tracking-widest">{t('soft.eco.badge')}</span>
                    </div>
                    <h2 className="text-navy text-4xl font-black mb-6 leading-tight">{t('soft.eco.title')}</h2>
                    <p className="text-gray-500 text-lg">{t('soft.eco.p')}</p>
                </div>
                <div className="hidden lg:flex items-center gap-6 pb-2">
                    <div className="text-right">
                        <div className="text-2xl font-black text-navy">{t('soft.eco.stat1.v')}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('soft.eco.stat1.l')}</div>
                    </div>
                    <div className="h-12 w-px bg-gray-200"></div>
                    <div className="text-right">
                        <div className="text-2xl font-black text-navy">{t('soft.eco.stat2.v')}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('soft.eco.stat2.l')}</div>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: 'SAP', Component: SapLogo, desc: t('soft.tech.sap.d') },
                    { name: 'Odoo', Component: OdooLogo, desc: t('soft.tech.odoo.d') },
                    { name: 'Azure', Component: AzureLogo, desc: t('soft.tech.azure.d') },
                    { name: 'React', Component: ReactLogo, desc: t('soft.tech.react.d') },
                    { name: 'Python', Component: PythonLogo, desc: t('soft.tech.python.d') },
                    { name: 'AWS', Component: AwsLogo, desc: t('soft.tech.aws.d') }
                ].map((tech, i) => (
                    <div key={i} className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col items-start text-left">
                        <div className="h-16 mb-8 flex items-center justify-start">
                            <tech.Component className="h-10 md:h-12 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                        <h4 className="text-navy font-black text-xl mb-3">{tech.name}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{tech.desc}</p>
                        <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                            {t('soft.tech.learn')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Software;