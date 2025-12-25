import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Security: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="bg-white text-gray-900 font-body">
      {/* Hero */}
      <div className="relative flex min-h-[700px] w-full flex-col justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-navy via-navy/90 to-navy/30 z-10"></div>
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1fJjPFN0QMYPpurJa1aXvcmP0Kk4lQQFf39mlqAD7rx6szUq0L_tVxMUvOXF1yv3Hh3VyMjOg_9ZjGEOALlUejdlgW3W5l5kgqQVM-8rwAtPe1YpLdLsV5_Ql00IzDjMt8LLOuuGhQIAFMV4H9wf5HjOcbJhtEgK2gncA0qbF1Ecvn8VCDJNadL9aw9V0MZluJjDqauCkpzoGGhK7NIjr2fGTlJrbCChAU6p_iQncsDYfdb1mR1b3gnyiKxHYZpew-rl0gkewTRJO" alt="Security Camera" className="h-full w-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-6 lg:px-8 flex flex-col items-start gap-8">
            <ScrollReveal>
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-[10px] font-black text-primary backdrop-blur-xl uppercase tracking-[0.2em]">
                    <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    {t('sec.hero.badge')}
                </div>
                <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tighter text-white sm:text-6xl lg:text-8xl font-heading mt-6 text-start">
                    {t('sec.hero.title')}
                </h1>
                <p className="max-w-2xl text-xl text-gray-300 sm:text-2xl font-light leading-relaxed mt-8 text-start opacity-90">
                    {t('sec.hero.p')}
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    <Link to="/contact" className="flex h-16 items-center justify-center rounded-2xl bg-primary px-12 text-lg font-black text-navy shadow-2xl shadow-primary/30 transition-all hover:bg-primary-light hover:-translate-y-2 font-heading">
                        {t('sec.hero.cta')}
                    </Link>
                    <div className="flex items-center gap-4 p-4 border border-white/20 rounded-2xl backdrop-blur-md">
                        <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                        <div className="text-start">
                            <div className="text-white text-xs font-black uppercase tracking-widest">{t('sec.badge.rop')}</div>
                            <div className="text-gray-400 text-[10px]">{t('sec.badge.license')}</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>

      {/* Threat Awareness Section */}
      <div className="bg-gray-50 py-24 px-6 border-b border-gray-100">
        <div className="mx-auto max-w-5xl">
            <ScrollReveal>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-error/20 bg-white p-10 md:p-20 shadow-2xl group">
                    <div className="absolute -end-20 -top-20 h-64 w-64 rounded-full bg-error/5 blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center relative z-10 text-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-3xl bg-error/10 text-error shadow-inner transform group-hover:-rotate-6 transition-transform">
                            <span className="material-symbols-outlined text-6xl font-black">gpp_maybe</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-navy mb-6 font-heading uppercase tracking-widest">{t('sec.threat.title')}</h2>
                            <p className="text-gray-600 text-xl font-medium leading-relaxed opacity-90">
                                {t('sec.threat.p')}
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>

      {/* Security Portfolio Matrix */}
      <section className="relative bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
            <div className="grid gap-24 lg:grid-cols-2">
                {/* Core Pillars */}
                <div className="flex flex-col gap-12 text-start">
                    <ScrollReveal>
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs font-heading">{t('sec.services.badge')}</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-navy mt-4 mb-6 font-heading">{t('sec.services.title')}</h2>
                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                        </div>
                    </ScrollReveal>
                    
                    <div className="space-y-8">
                        {[
                            { icon: 'videocam', title: t('sec.services.1.t'), desc: t('sec.services.1.d') },
                            { icon: 'fingerprint', title: t('sec.services.2.t'), desc: t('sec.services.2.d') },
                            { icon: 'admin_panel_settings', title: t('sec.services.3.t'), desc: t('sec.services.3.d') },
                            { icon: 'sensors', title: t('sec.services.4.t'), desc: t('sec.services.4.d') },
                            { icon: 'verified', title: t('sec.services.5.t'), desc: t('sec.services.5.d') }
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div className="group flex gap-8 rounded-3xl border border-gray-100 bg-gray-50 p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-primary/20">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-primary group-hover:bg-primary group-hover:text-navy transition-all duration-500 transform group-hover:scale-110 shadow-lg">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-navy text-2xl font-heading mb-2">{item.title}</h3>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Vertical Competitive Edge */}
                <div className="flex flex-col gap-8 text-start">
                    <div className="lg:sticky lg:top-32">
                        <ScrollReveal delay={300}>
                            <div className="rounded-[3rem] bg-navy p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute -bottom-20 -end-20 size-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                                
                                <h2 className="text-4xl font-black text-white mb-12 font-heading tracking-tight">{t('sec.edge.title')}</h2>
                                <ul className="space-y-10">
                                    {[
                                        { t: t('sec.edge.1.t'), d: t('sec.edge.1.d') },
                                        { t: t('sec.edge.2.t'), d: t('sec.edge.2.d') },
                                        { t: t('sec.edge.3.t'), d: t('sec.edge.3.d') },
                                        { t: t('sec.edge.4.t'), d: t('sec.edge.4.d') }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-6 group/li">
                                            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-primary text-navy mt-1 font-black shadow-[0_0_15px_rgba(0,210,233,0.4)] group-hover/li:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-sm font-black">check</span>
                                            </span>
                                            <div>
                                                <h4 className="text-white font-black text-xl font-heading leading-none group-hover/li:text-primary transition-colors">{item.t}</h4>
                                                <p className="text-gray-400 text-sm mt-3 font-medium leading-relaxed">{item.d}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-16 pt-12 border-t border-white/10">
                                    <Link to="/contact" className="flex items-center justify-center w-full h-16 rounded-2xl bg-primary text-navy font-black text-xl hover:bg-primary-light transition-all shadow-2xl shadow-primary/20 font-heading transform hover:-translate-y-2">
                                        {t('sec.hero.cta')}
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Philosophical Trust Barrier */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <ScrollReveal>
                <div className="size-20 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-10">
                    <span className="material-symbols-outlined text-5xl text-navy opacity-20">format_quote</span>
                </div>
                <p className="text-3xl md:text-5xl font-light text-navy italic leading-tight mb-12 tracking-tight">
                    {t('sec.quote')}
                </p>
                <div className="h-2 w-16 bg-primary mx-auto rounded-full"></div>
            </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Security;