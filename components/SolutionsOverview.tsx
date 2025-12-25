import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const SolutionsOverview: React.FC = () => {
  const { t, lang } = useLanguage();

  const services = [
    {
      id: 'infra',
      title: t('solutions.infra.title'),
      quote: t('solutions.infra.quote'),
      icon: 'router',
      tags: [
        t('solutions.infra.tag1'),
        t('solutions.infra.tag2'),
        t('solutions.infra.tag3')
      ],
      link: '/solutions/infrastructure'
    },
    {
      id: 'sec',
      title: t('solutions.sec.title'),
      quote: t('solutions.sec.quote'),
      icon: 'security',
      tags: [
        t('solutions.sec.tag1'),
        t('solutions.sec.tag2'),
        t('solutions.sec.tag3')
      ],
      link: '/solutions/security'
    },
    {
      id: 'soft',
      title: t('solutions.soft.title'),
      quote: t('solutions.soft.quote'),
      icon: 'code',
      tags: [
        t('solutions.soft.tag1'),
        t('solutions.soft.tag2'),
        t('solutions.soft.tag3')
      ],
      link: '/solutions/software'
    },
    {
      id: 'sup',
      title: t('solutions.sup.title'),
      quote: t('solutions.sup.quote'),
      icon: 'headset_mic',
      tags: [
        t('solutions.sup.tag1'),
        t('solutions.sup.tag2'),
        t('solutions.sup.tag3')
      ],
      link: '/solutions/support'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-navy/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <ScrollReveal>
            <div className="text-start">
              <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-black tracking-[0.2em] uppercase mb-4">
                {t('nav.solutions')}
              </span>
              <h2 className="text-navy text-4xl md:text-6xl font-black mb-6 leading-tight font-heading">
                {t('solutions.title')}
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl font-medium opacity-80 leading-relaxed">
                {t('solutions.subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 150}>
              <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group flex flex-col h-full text-start relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none`}>
                  <span className={`material-symbols-outlined text-[12rem] ${lang === 'ar' ? '-rotate-12' : 'rotate-12'}`}>
                    {service.icon}
                  </span>
                </div>

                <div className={`w-20 h-20 bg-navy/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-700 group-hover:scale-110 ${lang === 'ar' ? 'group-hover:-rotate-3' : 'group-hover:rotate-3'}`}>
                  <span className="material-symbols-outlined text-navy text-4xl group-hover:text-navy transition-colors duration-500">
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-navy mb-4 font-heading group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 italic font-medium mb-10 text-lg border-s-4 border-primary/30 ps-4">
                  {service.quote}
                </p>
                
                <ul className="space-y-5 mb-12 flex-grow">
                  {service.tags.map((tag, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-600 font-bold text-lg">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-base font-black">
                          check
                        </span>
                      </div>
                      {tag}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-gray-50">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-3 text-navy font-black text-xl group/link hover:text-primary transition-all duration-300"
                  >
                    <span className="relative">
                      {t('nav.learn_more')}
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover/link:w-full transition-all duration-500"></span>
                    </span>
                    <span className={`material-symbols-outlined text-2xl transition-transform group-hover/link:translate-x-2 ${lang === 'ar' ? 'rotate-180' : ''}`}>
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
