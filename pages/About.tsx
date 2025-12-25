import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full px-6 py-12 lg:py-20 max-w-[1280px] mx-auto">
         <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
             <div className="flex-1 flex flex-col gap-6 text-start lg:pe-10">
                 <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-navy">
                     {t('about.hero.title')}
                 </h1>
                 <h2 className="text-lg text-gray-600 leading-relaxed font-normal">
                     {t('about.hero.p')}
                 </h2>
                 <div className="pt-2">
                     <Link to="/" className="bg-primary hover:bg-primary-dark text-navy font-bold text-base px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                         {t('about.hero.cta')}
                         <span className={`material-symbols-outlined text-sm ${lang === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
                     </Link>
                 </div>
             </div>
             <div className="flex-1 w-full">
                 <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/images/148a19fa-f179-411e-b1ab-4d9ea3eb396a.png" alt="Team" className="w-full h-full object-cover" />
                </div>
             </div>
         </div>
      </section>

      {/* Story */}
      <section className="w-full bg-white py-16 px-6">
          <div className="max-w-[960px] mx-auto text-start">
              <div className="flex flex-col gap-4 mb-8">
                  <span className="text-primary font-bold text-sm tracking-wider uppercase">{t('about.story.badge')}</span>
                  <h2 className="text-3xl font-bold text-navy">{t('about.story.title')}</h2>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                  <p>{t('about.story.p1')}</p>
                  <p>{t('about.story.p2')}</p>
              </div>
          </div>
      </section>

      {/* Mission Vision */}
      <section className="w-full py-16 px-6 max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 text-start">
              {[
                  { icon: 'visibility', title: t('about.vision.title'), desc: t('about.vision.desc') },
                  { icon: 'rocket_launch', title: t('about.mission.title'), desc: t('about.mission.desc') }
              ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#cee6e9] p-8 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                          <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Certifications & Standards */}
      <section className="w-full py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
              <ScrollReveal>
                  <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-5xl font-black text-navy mb-6">{t('about.cert.title')}</h2>
                      <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t('about.cert.subtitle')}</p>
                  </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { icon: 'gavel', title: t('about.cert.1.t'), desc: t('about.cert.1.d') },
                      { icon: 'verified', title: t('about.cert.2.t'), desc: t('about.cert.2.d') },
                      { icon: 'handshake', title: t('about.cert.3.t'), desc: t('about.cert.3.d') },
                      { icon: 'health_and_safety', title: t('about.cert.4.t'), desc: t('about.cert.4.d') }
                  ].map((item, i) => (
                      <ScrollReveal key={i} delay={i * 100}>
                          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group h-full text-start">
                              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 text-navy group-hover:bg-primary group-hover:text-navy transition-all duration-500">
                                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                              </div>
                              <h3 className="text-xl font-black text-navy mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-background-light py-20 px-6">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 text-start">
              <div className="flex-1 flex flex-col justify-center gap-6">
                  <div>
                      <span className="text-primary font-bold text-sm tracking-wider uppercase">{t('about.sohar.badge')}</span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">{t('about.sohar.title')}</h2>
                      <p className="text-gray-600 text-lg leading-relaxed">{t('about.sohar.p')}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                           <div className="size-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm shrink-0">&lt;30</div>
                           <div><h4 className="font-bold text-navy">{t('about.sohar.loc1.t')}</h4><p className="text-sm text-gray-500">{t('about.sohar.loc1.d')}</p></div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                           <div className="size-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-sm shrink-0">&lt;60</div>
                           <div><h4 className="font-bold text-navy">{t('about.sohar.loc2.t')}</h4><p className="text-sm text-gray-500">{t('about.sohar.loc2.d')}</p></div>
                      </div>
                  </div>
              </div>
              <div className="flex-1">
                   <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                        <img 
                          src="/images/coverage-map.jpg"
                          alt="IT Services Coverage Sohar"
                          className="w-full h-full object-cover"
                        />
                   </div>
               </div>
          </div>
      </section>
    </div>
  );
};

export default About;