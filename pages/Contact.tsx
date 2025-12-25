import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // WEB3FORMS IMPLEMENTATION (FREE - 250 Submissions/Month)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // GET YOUR KEY AT: https://web3forms.com/
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: `New Inquiry: ${formData.topic || 'General'}`,
          message: formData.message,
          from_name: "SLISTECH Website",
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          topic: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light text-start">
       {/* Header Hero */}
       <section className="bg-navy relative py-20 overflow-hidden text-center">
           <div className="relative z-20 max-w-7xl mx-auto px-4">
               <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                   {t('contact.hero.title')}
               </h1>
               <p className="text-gray-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
                   {t('contact.hero.p')}
               </p>
           </div>
       </section>

       {/* Main Form Section */}
       <section className="py-16 md:py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                   {/* Form */}
                   <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 relative">
                       {status === 'success' ? (
                           <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                               <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                   <span className="material-symbols-outlined text-4xl">check_circle</span>
                               </div>
                               <h2 className="text-3xl font-black text-navy mb-4">{t('contact.form.success.title')}</h2>
                               <p className="text-gray-600 mb-8 max-w-md">{t('contact.form.success.msg')}</p>
                               <button 
                                 onClick={() => setStatus('idle')}
                                 className="text-primary font-bold hover:underline"
                               >
                                 {t('contact.form.success.btn')}
                               </button>
                           </div>
                       ) : (
                           <>
                               <h2 className="text-2xl font-bold text-navy mb-8">{t('contact.form.title')}</h2>
                               <form className="space-y-6" onSubmit={handleSubmit}>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                       <div>
                                           <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.name')} <span className="text-red-500">*</span></label>
                                           <input 
                                             name="name"
                                             value={formData.name}
                                             onChange={handleChange}
                                             type="text" 
                                             placeholder={t('contact.form.placeholder.name')} 
                                             className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-gray-50 text-navy" 
                                             required 
                                           />
                                       </div>
                                       <div>
                                           <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.company')} <span className="text-red-500">*</span></label>
                                           <input 
                                             name="company"
                                             value={formData.company}
                                             onChange={handleChange}
                                             type="text" 
                                             placeholder={t('contact.form.placeholder.company')} 
                                             className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-gray-50 text-navy" 
                                             required 
                                           />
                                       </div>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                       <div>
                                           <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.phone')} <span className="text-red-500">*</span></label>
                                           <input 
                                             name="phone"
                                             value={formData.phone}
                                             onChange={handleChange}
                                             type="tel" 
                                             placeholder="+968" 
                                             className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-gray-50 text-navy" 
                                             required 
                                           />
                                       </div>
                                       <div>
                                           <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.email')} <span className="text-red-500">*</span></label>
                                           <input 
                                             name="email"
                                             value={formData.email}
                                             onChange={handleChange}
                                             type="email" 
                                             placeholder="john@example.com" 
                                             className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-gray-50 text-navy" 
                                             required 
                                           />
                                       </div>
                                   </div>
                                   <div>
                                       <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.topic')}</label>
                                       <select 
                                         name="topic"
                                         value={formData.topic}
                                         onChange={handleChange}
                                         className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-gray-50 text-navy"
                                       >
                                           <option value="">{t('nav.learn_more')}...</option>
                                           <option value="survey" className="font-bold text-primary">{t('contact.form.survey')}</option>
                                           <option value="security">{t('nav.security')}</option>
                                           <option value="networking">{t('nav.infrastructure')}</option>
                                           <option value="software">{t('nav.software')}</option>
                                           <option value="support">{t('nav.it_support')}</option>
                                       </select>
                                   </div>
                                   <div>
                                       <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.message')} <span className="text-red-500">*</span></label>
                                       <textarea 
                                         name="message"
                                         value={formData.message}
                                         onChange={handleChange}
                                         className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-primary focus:ring-primary bg-gray-50 text-navy min-h-[150px]" 
                                         placeholder={t('contact.form.placeholder.msg')} 
                                         required
                                       ></textarea>
                                   </div>
                                   <div className="pt-4">
                                       <button 
                                         type="submit" 
                                         disabled={status === 'submitting'}
                                         className={`w-full md:w-auto bg-primary text-navy font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                       >
                                           {status === 'submitting' ? (
                                               <>
                                                   <span className="size-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></span>
                                                   {t('contact.form.submitting')}
                                               </>
                                           ) : (
                                               t('contact.form.submit')
                                           )}
                                       </button>
                                       {status === 'error' && (
                                           <p className="text-red-500 text-sm mt-4 font-medium">
                                               {t('contact.form.error.msg')}
                                           </p>
                                       )}
                                       <p className="text-xs text-gray-500 mt-4 flex items-center gap-1">
                                           <span className="material-symbols-outlined text-sm">schedule</span>
                                           {t('contact.form.note')}
                                       </p>
                                   </div>
                               </form>
                           </>
                       )}
                   </div>

                   {/* Info Side */}
                   <div className="lg:col-span-5 space-y-8">
                       <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                           <h3 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-6">{t('contact.info.title')}</h3>
                           <div className="space-y-8">
                               <div>
                                   <h4 className="text-navy font-bold text-lg mb-2">{t('contact.info.call')}</h4>
                                   <a href="tel:+96896904373" className="flex items-center gap-3 text-3xl font-black text-navy hover:text-primary transition-colors">
                                       <span className="material-symbols-outlined text-3xl text-primary">call</span>
                                       +968 96904373
                                   </a>
                                   <p className="text-green-600 font-medium text-sm mt-2 flex items-center gap-1">
                                       <span className="material-symbols-outlined text-sm">check_circle</span>
                                       {t('contact.info.availability')}
                                   </p>
                               </div>
                               <div>
                                   <h4 className="text-navy font-bold text-lg mb-2">{t('contact.info.visit')}</h4>
                                   <div className="flex items-start gap-3 text-gray-600 mb-3">
                                       <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                       <p>{t('footer.hq')}</p>
                                   </div>
                               </div>
                               <div>
                                   <h4 className="text-navy font-bold text-lg mb-2">{t('contact.info.email')}</h4>
                                   <a href="mailto:sales@slistech.com" className="flex items-center gap-3 text-gray-600 hover:text-primary mb-2">
                                       <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                       sales@slistech.com
                                   </a>
                               </div>
                           </div>
                       </div>

                       {/* Emergency Box */}
                       {/* LOGICAL FIX: Changed border-l-4 to border-s-4, rounded-r-xl to rounded-e-xl */}
                       <div className="bg-red-50 border-s-4 border-red-500 p-6 rounded-e-xl text-start">
                           <div className="flex items-start gap-4">
                               <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0">
                                   <span className="material-symbols-outlined">warning</span>
                               </div>
                               <div>
                                   <h4 className="font-bold text-red-800 text-sm uppercase tracking-wide mb-1">{t('contact.emergency.title')}</h4>
                                   <p className="text-red-700 text-sm mb-3">{t('contact.emergency.p')}</p>
                                   <div className="text-navy font-black text-xl mb-1">
                                       {t('contact.emergency.label')} +968 96904373 <span className="text-sm font-normal text-gray-500">(24/7)</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       {/* FAQ Section */}
       <section className="py-24 bg-gray-50 border-t border-gray-100">
           <div className="max-w-4xl mx-auto px-4">
               <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">{t('contact.faq.title')}</h2>
                   <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
               </div>
               <div className="space-y-6">
                   {[1, 2, 3, 4].map((i) => (
                       <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-start group hover:shadow-xl transition-all duration-300">
                           <h3 className="text-lg font-black text-navy mb-3 flex items-center gap-3">
                               <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                   <span className="material-symbols-outlined text-sm">help</span>
                               </span>
                               {t(`contact.faq.${i}.q`)}
                           </h3>
                           <p className="text-gray-600 leading-relaxed ps-11">
                               {t(`contact.faq.${i}.a`)}
                           </p>
                       </div>
                   ))}
               </div>
           </div>
       </section>

       {/* Strategic Map Visualization */}
       <section className="w-full h-[600px] relative bg-white overflow-hidden group border-y border-gray-100">
            <img 
              src="/images/coverage-map.jpg"
              alt="IT Services Coverage Sohar"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-navy/5 pointer-events-none"></div>
        </section>
    </div>
  );
};

export default Contact;
