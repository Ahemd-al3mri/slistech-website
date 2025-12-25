import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Infrastructure: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="w-full bg-white font-body">
      {/* Hero */}
      <div className="relative w-full">
        <div className="flex min-h-[650px] flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-center px-6 py-10 lg:px-40" 
             style={{backgroundImage: 'linear-gradient(rgba(0, 32, 96, 0.8) 0%, rgba(0, 21, 64, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqUNjf5MmbPeT-98BpRT-lUJSrAediyVurOXplC-G6oiato-yqDF8fE0rSjrD3wqjXGYGXD_avDVir842SXXPXPhBsL3uXF6_23ll9AD9Dh9YXp9J5iIEfFllLHQEXH676vY5oMnY9cBVnD5FgbKYYiPoJMcdutKCP0vpnwZZ4mTiGeu0SfSoGF_GM7GkXu_iAdHHENHxZhxNLVH7cddaPQ-Z9UHgEs1Y92F2Ttumq8BZ4WbV5aJVCNJiQ0BwsLtWAImLSf7d3uU1c")'}}>
            <div className="flex flex-col gap-6 text-start max-w-[900px]">
                <ScrollReveal>
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 border border-primary/40 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-4 backdrop-blur-xl">
                        {t('infra.hero.badge')}
                    </span>
                    <h1 className="text-white text-4xl lg:text-7xl font-black leading-tight tracking-tight font-heading">
                        {t('infra.hero.title')}
                    </h1>
                    <h2 className="text-gray-200 text-xl lg:text-2xl font-light leading-relaxed max-w-[700px] mt-4 opacity-90">
                        {t('infra.hero.p')}
                    </h2>
                    <div className="mt-10 flex flex-wrap gap-6">
                        <Link to="/contact" className="flex cursor-pointer items-center justify-center rounded-xl h-16 px-10 bg-primary hover:bg-primary-light transition-all text-navy text-lg font-black font-heading shadow-2xl shadow-primary/20 hover:-translate-y-1">
                            {t('infra.hero.cta')}
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </div>

      {/* The Challenge Block */}
      <div className="relative w-full -mt-16 mb-20 px-4 lg:px-40 z-10">
        <ScrollReveal>
            <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-2xl border-s-8 border-error p-10 flex flex-col md:flex-row items-center justify-between gap-10 border-y border-e border-gray-100">
                <div className="flex flex-col gap-4 text-start">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 bg-error/10 rounded-lg">
                            <span className="material-symbols-outlined text-error font-black">warning</span>
                        </div>
                        <p className="text-navy text-xl font-black leading-tight font-heading uppercase tracking-widest">{t('infra.challenge.title')}</p>
                    </div>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-2xl">
                        {t('infra.challenge.p')}
                    </p>
                </div>
                <Link to="/contact" className="shrink-0 flex cursor-pointer items-center justify-center rounded-xl h-14 px-10 border-4 border-navy text-navy hover:bg-navy hover:text-white transition-all text-base font-black font-heading whitespace-nowrap">
                    {t('infra.challenge.cta')}
                </Link>
            </div>
        </ScrollReveal>
      </div>

      {/* Detailed Services Grid */}
      <div className="px-6 lg:px-40 py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
            <ScrollReveal>
                <div className="flex flex-col gap-4 text-center md:text-start">
                    <h2 className="text-navy text-4xl md:text-6xl font-black leading-tight font-heading">{t('infra.services.title')}</h2>
                    <p className="text-gray-500 max-w-2xl text-lg font-medium">{t('infra.services.p')}</p>
                    <div className="h-1.5 w-24 bg-primary rounded-full mt-4"></div>
                </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    { icon: 'cable', title: t('infra.services.1.t'), desc: t('infra.services.1.d') },
                    { icon: 'wifi', title: t('infra.services.2.t'), desc: t('infra.services.2.d') },
                    { icon: 'dns', title: t('infra.services.3.t'), desc: t('infra.services.3.d') },
                    { icon: 'shield_with_heart', title: t('infra.services.4.t'), desc: t('infra.services.4.d') },
                    { icon: 'battery_charging_full', title: t('infra.services.5.t'), desc: t('infra.services.5.d') }
                ].map((s, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                        <div className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-10 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-start relative overflow-hidden h-full">
                            <div className="size-16 rounded-2xl bg-navy/5 flex items-center justify-center group-hover:bg-primary group-hover:text-navy transition-all duration-500 text-navy shadow-inner">
                                <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-navy text-2xl font-black font-heading group-hover:text-primary transition-colors">{s.title}</h3>
                                <p className="text-gray-600 text-sm font-medium leading-relaxed opacity-80">{s.desc}</p>
                            </div>
                            <div className="absolute -bottom-10 -end-10 size-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        </div>
                    </ScrollReveal>
                ))}

                <ScrollReveal delay={500}>
                    <div className="flex flex-col gap-6 rounded-3xl bg-navy p-10 text-white relative overflow-hidden h-full shadow-2xl text-start group">
                        <div className="absolute top-0 end-0 p-6 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                            <span className="material-symbols-outlined text-[10rem]">verified</span>
                        </div>
                        <h3 className="text-primary text-3xl font-black font-heading mb-6 tracking-tight">{t('infra.edge.title')}</h3>
                        <ul className="flex flex-col gap-6 relative z-10">
                            {[t('infra.edge.1'), t('infra.edge.2'), t('infra.edge.3'), t('infra.edge.4')].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-2xl font-black">check_circle</span>
                                    <span className="text-base font-bold text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </div>

      {/* Technical Performance Specs */}
      <section className="py-24 bg-white px-6 lg:px-40 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
              <ScrollReveal>
                  <h3 className="text-navy text-3xl md:text-5xl font-black mb-16 font-heading">{t('infra.stats.title')}</h3>
              </ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  {[
                      { val: t('infra.stats.1.v'), label: t('infra.stats.1.l'), icon: 'speed' },
                      { val: t('infra.stats.2.v'), label: t('infra.stats.2.l'), icon: 'verified' },
                      { val: t('infra.stats.3.v'), label: t('infra.stats.3.l'), icon: 'gavel' },
                      { val: t('infra.stats.4.v'), label: t('infra.stats.4.l'), icon: 'rss_feed' }
                  ].map((stat, i) => (
                      <div key={i} className="flex flex-col items-center group">
                          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                          </div>
                          <div className="text-3xl font-black text-navy mb-1">{stat.val}</div>
                          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Final Conversion CTA */}
      <div className="px-6 lg:px-40 py-24 bg-gray-50">
         <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
                <div className="bg-navy rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,210,233,0.15)_0%,_transparent_60%)] pointer-events-none"></div>
                    <div className="absolute -bottom-20 -start-20 size-80 bg-primary/5 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-white text-4xl lg:text-7xl font-black font-heading leading-tight tracking-tighter">{t('infra.cta.title')}</h2>
                        <p className="text-gray-300 text-xl max-w-3xl font-light leading-relaxed">
                            {t('infra.cta.p')}
                        </p>
                        <Link to="/contact" className="mt-6 flex min-w-[280px] cursor-pointer items-center justify-center rounded-2xl h-16 px-12 bg-primary hover:bg-primary-light transition-all text-navy text-xl font-black font-heading shadow-2xl shadow-primary/30 transform hover:-translate-y-2">
                            {t('infra.hero.cta')}
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
         </div>
      </div>
    </div>
  );
};

export default Infrastructure;