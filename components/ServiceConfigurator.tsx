import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const ServiceConfigurator: React.FC = () => {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({
    industry: '',
    size: '',
    challenge: ''
  });

  const steps = [
    {
      title: t('config.step1'),
      key: 'industry',
      options: [
        { id: 'mfg', label: t('config.industry.mfg'), icon: 'factory' },
        { id: 'oil', label: t('config.industry.oil'), icon: 'oil_barrel' },
        { id: 'log', label: t('config.industry.logistics'), icon: 'directions_boat' },
        { id: 'gov', label: t('config.industry.govt'), icon: 'account_balance' }
      ]
    },
    {
      title: t('config.step2'),
      key: 'size',
      options: [
        { id: 'small', label: t('config.size.small'), icon: 'groups' },
        { id: 'med', label: t('config.size.med'), icon: 'group_add' },
        { id: 'large', label: t('config.size.large'), icon: 'diversity_3' }
      ]
    },
    {
      title: t('config.step3'),
      key: 'challenge',
      options: [
        { id: 'sec', label: t('config.chal.security'), icon: 'videocam' },
        { id: 'net', label: t('config.chal.network'), icon: 'router' },
        { id: 'soft', label: t('config.chal.software'), icon: 'code' }
      ]
    }
  ];

  const handleSelect = (key: string, value: string) => {
    setSelections({ ...selections, [key]: value });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(99); // Final Result
    }
  };

  const getRecommendation = () => {
    if (selections.challenge === 'sec') return { title: t('nav.security'), path: '/solutions/security', desc: t('config.rec.sec.d') };
    if (selections.challenge === 'net') return { title: t('nav.infrastructure'), path: '/solutions/infrastructure', desc: t('config.rec.infra.d') };
    return { title: t('nav.software'), path: '/solutions/software', desc: t('config.rec.soft.d') };
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-12 glass-card rounded-[2.5rem] shadow-2xl border border-white/20 text-start overflow-hidden relative bg-white/80 backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full -ml-32 -mb-32 pointer-events-none blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-3 tracking-tight">{t('config.title')}</h2>
            <p className="text-gray-500 text-lg font-medium">{t('config.subtitle')}</p>
          </div>
          {step < 3 && (
            <div className="text-navy/30 font-black text-6xl select-none leading-none hidden md:block">
              0{step + 1}
            </div>
          )}
        </div>

        {step < 3 ? (
          <div className="animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h3 className="font-black text-navy uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                <span className="flex size-8 bg-navy text-white rounded-xl items-center justify-center text-xs shadow-lg shadow-navy/20">{step + 1}</span>
                {steps[step].title}
              </h3>
              <div className="flex gap-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${i <= step ? 'bg-primary shadow-[0_0_10px_#00D2E9]' : 'bg-gray-100'}`}></div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(steps[step].key, opt.id)}
                  className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 rounded-3xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="material-symbols-outlined text-4xl text-navy group-hover:text-primary group-hover:scale-110 transition-all duration-500 mb-4 relative z-10">{opt.icon}</span>
                  <span className="text-sm font-black text-navy text-center relative z-10 group-hover:translate-y-[-2px] transition-transform">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-4 animate-fade-in-up">
             <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="size-32 md:size-48 bg-primary/10 text-primary rounded-[2.5rem] flex items-center justify-center flex-shrink-0 relative group">
                   <div className="absolute inset-0 bg-primary rounded-[2.5rem] animate-ping opacity-10"></div>
                   <span className="material-symbols-outlined text-6xl md:text-8xl relative z-10">verified</span>
                </div>
                
                <div className="flex-1 text-center md:text-start">
                   <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">{t('config.rec.badge')}</span>
                   <h3 className="text-3xl md:text-4xl font-black text-navy mb-4">{getRecommendation().title}</h3>
                   <p className="text-gray-500 text-lg mb-8 leading-relaxed">{getRecommendation().desc}</p>
                   
                   <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact" className="bg-primary hover:bg-primary-light text-navy px-10 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1 text-center">
                        {t('hero.cta_main')}
                      </Link>
                      <Link to={getRecommendation().path} className="bg-navy hover:bg-navy-dark text-white px-10 py-4 rounded-2xl font-black transition-all transform hover:-translate-y-1 text-center">
                        {t('nav.learn_more')}
                      </Link>
                   </div>
                   
                   <button 
                    onClick={() => {setStep(0); setSelections({industry:'',size:'',challenge:''})}} 
                    className="mt-8 text-gray-400 font-bold hover:text-navy transition-colors flex items-center gap-2 mx-auto md:mx-0"
                   >
                     <span className="material-symbols-outlined text-sm">refresh</span>
                     {t('config.reset')}
                   </button>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceConfigurator;