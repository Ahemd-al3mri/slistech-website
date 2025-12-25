import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const ITSupport: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="bg-white text-gray-900 font-body">
        {/* Hero */}
        <div className="relative w-full">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
                 <div className="relative flex min-h-[600px] w-full flex-col gap-10 bg-cover bg-center bg-no-repeat rounded-[3rem] items-start justify-center px-10 pb-12 md:px-20 md:pb-20 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,32,96,0.5)]"
                      style={{backgroundImage: 'linear-gradient(rgba(0, 32, 96, 0.85) 0%, rgba(0, 21, 64, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyODGqKarFZnClUo-fssKPYW7Ce6HoHPwEH8FftEl6H08yKf_4z6tN0Ep4ThKbvW-Wfj2olnmc9nJeWbHTX6t59glzoDgra1l5aF3KO8lsfyhfHe64nccmShD8ZJFPD2itKLiKiVHpoiu6wFlyEX4UDXMWn_laO9jND0ghGR4f80TY2_Jq8Jk1opk0vBD_SrVzeOjatDYkhaOFsy4vp5Gfk-w-QgC2aHS9EH3TKdk9jmM1bq3cyjm70shEXn-5vt-p8ALupj0b_5cY")'}}>
                     <ScrollReveal>
                        <div className="relative flex flex-col gap-8 text-start max-w-4xl">
                            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 w-fit">
                                <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">{t('sup.hero.badge')}</span>
                            </div>
                            <h1 className="text-white text-5xl font-black leading-tight md:text-7xl font-heading tracking-tighter">
                                {t('sup.hero.title')}
                            </h1>
                            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl opacity-90">
                                {t('sup.hero.p')}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-6">
                                <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl h-16 px-12 bg-primary hover:bg-primary-light text-navy text-xl font-black transition-all shadow-2xl shadow-primary/30 font-heading hover:-translate-y-2">
                                    {t('sup.hero.cta')}
                                </Link>
                                <div className="flex items-center gap-4 text-white font-bold px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined text-primary text-3xl">headset_mic</span>
                                    <span>{t('sup.badge.priority')}</span>
                                </div>
                            </div>
                        </div>
                     </ScrollReveal>
                 </div>
            </div>
        </div>

        {/* Risk Assessment Box */}
        <div className="bg-gray-50 py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal>
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-12 md:p-20 shadow-2xl group">
                        <div className="absolute top-0 start-0 w-3 h-full bg-error rounded-full opacity-80"></div>
                        <div className="flex flex-col md:flex-row gap-12 items-center text-start">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-error/5 text-error shadow-inner">
                                <span className="material-symbols-outlined text-5xl font-black">emergency_home</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-navy mb-4 font-heading uppercase tracking-widest">{t('sup.risk.title')}</h3>
                                <p className="text-gray-600 text-xl font-medium leading-relaxed opacity-90">
                                    {t('sup.risk.p')}
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>

        {/* AMC Plan Comparison */}
        <section className="py-24 px-6 bg-white overflow-hidden">
             <div className="max-w-7xl mx-auto">
                 <ScrollReveal>
                    <div className="text-center mb-20">
                        <h2 className="text-navy text-4xl md:text-6xl font-black mb-6 font-heading tracking-tight">{t('sup.plans.title')}</h2>
                        <div className="h-2 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>
                 </ScrollReveal>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {[
                         { 
                           name: t('sup.plans.bronze.name'), 
                           price: t('sup.plans.bronze.price'), 
                           features: [t('sup.plans.bronze.f1'), t('sup.plans.bronze.f2'), t('sup.plans.bronze.f3'), t('sup.plans.bronze.f4')],
                           color: 'bg-orange-100 text-orange-800'
                         },
                         { 
                           name: t('sup.plans.silver.name'), 
                           price: t('sup.plans.silver.price'), 
                           features: [t('sup.plans.silver.f1'), t('sup.plans.silver.f2'), t('sup.plans.silver.f3'), t('sup.plans.silver.f4')],
                           color: 'bg-gray-100 text-gray-800',
                           popular: true
                         },
                         { 
                           name: t('sup.plans.gold.name'), 
                           price: t('sup.plans.gold.price'), 
                           features: [t('sup.plans.gold.f1'), t('sup.plans.gold.f2'), t('sup.plans.gold.f3'), t('sup.plans.gold.f4')],
                           color: 'bg-yellow-100 text-yellow-800'
                         }
                     ].map((plan, i) => (
                         <ScrollReveal key={i} delay={i * 100}>
                            <div className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 h-full group ${plan.popular ? 'border-primary bg-navy shadow-2xl scale-105 z-10' : 'border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl'}`}>
                                {plan.popular && (
                                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-navy text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">{t('sup.plans.popular')}</div>
                                )}
                                <div className="mb-10 text-start">
                                    <div className={`inline-block px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest mb-4 ${plan.popular ? 'bg-primary/20 text-primary' : plan.color}`}>
                                        {plan.name}
                                    </div>
                                    <h3 className={`text-4xl font-black mb-2 font-heading ${plan.popular ? 'text-white' : 'text-navy'}`}>{plan.price}</h3>
                                    <p className={`text-sm font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{t('sup.plans.note')}</p>
                                </div>
                                <ul className="space-y-6 mb-12 flex-1 text-start">
                                    {plan.features.map((f, fi) => (
                                      <li key={fi} className="flex items-center gap-4">
                                        <span className={`material-symbols-outlined text-xl ${plan.popular ? 'text-primary' : 'text-navy'}`}>check_circle</span>
                                        <span className={`text-sm font-bold ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>{f}</span>
                                      </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className={`w-full py-5 rounded-2xl font-black text-lg transition-all text-center ${plan.popular ? 'bg-primary text-navy hover:bg-primary-light' : 'bg-navy text-white hover:bg-navy-dark shadow-xl'}`}>
                                    {t('sup.plans.quote')}
                                </Link>
                            </div>
                         </ScrollReveal>
                     ))}
                 </div>
             </div>
        </section>

        {/* Guaranteed Response Matrix */}
        <section className="bg-gray-100 py-32 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20 text-start">
                <div className="flex-1">
                    <ScrollReveal>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs font-heading mb-6 inline-block">{t('sup.guarantee.badge')}</span>
                        <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 font-heading leading-tight tracking-tighter">{t('sup.guarantee.title')}</h2>
                        <p className="text-gray-600 text-xl font-light mb-10 leading-relaxed opacity-90">
                            {t('sup.guarantee.p')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { t: t('sup.loc.sohar'), d: t('sup.loc.time.30') },
                                { t: t('sup.loc.shinas'), d: t('sup.loc.time.60') },
                                { t: t('sup.loc.saham'), d: t('sup.loc.time.45') }
                            ].map((loc, i) => (
                                <div key={i} className="flex flex-col gap-1 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                        <span className="font-black text-navy text-lg">{loc.t}</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ps-7">{loc.d}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
                <div className="flex-1 w-full">
                    <ScrollReveal delay={200}>
                        <div className="bg-navy p-12 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,32,96,0.5)] border border-white/5 flex flex-col items-center text-center relative group">
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
                            <div className="size-32 rounded-3xl bg-white/5 flex items-center justify-center text-primary mb-10 group-hover:rotate-12 transition-transform">
                                <span className="material-symbols-outlined text-7xl">timer</span>
                            </div>
                            <div className="text-9xl font-black text-white mb-4 font-heading tracking-tighter drop-shadow-2xl">120</div>
                            <div className="text-primary font-black uppercase tracking-[0.4em] mb-10 font-heading text-lg">{t('sup.guarantee.unit')}</div>
                            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">{t('sup.guarantee.note')}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ITSupport;