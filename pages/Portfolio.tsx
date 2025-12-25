import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    { 
      title: t('port.p1.title'), 
      client: t('port.p1.client'), 
      sector: t('port.cat.oil'), 
      image: '/projects-imgs/5116c6d7-ca23-4285-94e0-9513e3c2fa79.png', 
      challenge: t('port.p1.chal'), 
      solution: t('port.p1.sol'), 
      impact: t('port.p1.imp'),
      tags: ['IT Support', 'Infrastructure']
    },
    { 
      title: t('port.p2.title'), 
      client: t('port.p2.client'), 
      sector: t('port.cat.hosp'), 
      image: '/projects-imgs/27742f7b-44de-43c5-ad87-6ffcbad5f776.png', 
      challenge: t('port.p2.chal'), 
      solution: t('port.p2.sol'), 
      impact: t('port.p2.imp'),
      tags: ['ERP Implementation', 'Software']
    },
    { 
      title: t('port.p3.title'), 
      client: t('port.p3.client'), 
      sector: t('port.cat.ent'), 
      image: '/projects-imgs/962681ff-e7ce-40c0-8623-27633f875533.png', 
      challenge: t('port.p3.chal'), 
      solution: t('port.p3.sol'), 
      impact: t('port.p3.imp'),
      tags: ['Digital Signage', 'Hardware']
    },
    { 
      title: t('port.p4.title'), 
      client: t('port.p4.client'), 
      sector: t('port.cat.gov'), 
      image: '/projects-imgs/94540179-384e-4f8c-8fc7-b8a08a2c9959.png', 
      challenge: t('port.p4.chal'), 
      solution: t('port.p4.sol'), 
      impact: t('port.p4.imp'),
      tags: ['ManageEngine', 'Security', 'AD Audit']
    },
    { 
      title: t('port.p5.title'), 
      client: t('port.p5.client'), 
      sector: t('port.cat.mfg'), 
      image: '/projects-imgs/b3d1b5c1-e5a6-40dc-b09a-d7fd49552c0f.png', 
      challenge: t('port.p5.chal'), 
      solution: t('port.p5.sol'), 
      impact: t('port.p5.imp'),
      tags: ['Service Desk', 'IT Support', 'ManageEngine']
    },
    { 
      title: t('port.p6.title'), 
      client: t('port.p6.client'), 
      sector: t('port.cat.oil'), 
      image: '/projects-imgs/06815b04-bb49-4ba6-94d3-d940a5d10232.png', 
      challenge: t('port.p6.chal'), 
      solution: t('port.p6.sol'), 
      impact: t('port.p6.imp'),
      tags: ['SharePoint', 'Power Apps', 'Consulting']
    },
    { 
      title: t('port.p7.title'), 
      client: t('port.p7.client'), 
      sector: t('port.cat.gov'), 
      image: '/projects-imgs/024beef8-c10c-452d-a54d-d5989a63a123.png', 
      challenge: t('port.p7.chal'), 
      solution: t('port.p7.sol'), 
      impact: t('port.p7.imp'),
      tags: ['Financial Systems', 'API Integration', 'Software']
    },
    { 
      title: t('port.p8.title'), 
      client: t('port.p8.client'), 
      sector: t('port.cat.oil'), 
      image: '/projects-imgs/7cf96216-5037-4c09-a18c-e986393b92d9.png', 
      challenge: t('port.p8.chal'), 
      solution: t('port.p8.sol'), 
      impact: t('port.p8.imp'),
      tags: ['Fiber Splicing', 'Infrastructure', 'Networking']
    },
    { 
      title: t('port.p9.title'), 
      client: t('port.p9.client'), 
      sector: t('port.cat.mfg'), 
      image: '/projects-imgs/db34639a-16a5-487e-baf7-a7629f170727.png', 
      challenge: t('port.p9.chal'), 
      solution: t('port.p9.sol'), 
      impact: t('port.p9.imp'),
      tags: ['Vendor Management', 'IT Support']
    },
    { 
      title: t('port.p10.title'), 
      client: t('port.p10.client'), 
      sector: t('port.cat.mfg'), 
      image: '/projects-imgs/71a2ef2c-805a-4f68-bd3f-0b606fb56440.png', 
      challenge: t('port.p10.chal'), 
      solution: t('port.p10.sol'), 
      impact: t('port.p10.imp'),
      tags: ['Hardware', 'IT Supply', 'Laptops']
    },
    { 
      title: t('port.p11.title'), 
      client: t('port.p11.client'), 
      sector: t('port.cat.mfg'), 
      image: '/projects-imgs/e3b6b63e-0bac-4839-aac4-098a526a2634.png', 
      challenge: t('port.p11.chal'), 
      solution: t('port.p11.sol'), 
      impact: t('port.p11.imp'),
      tags: ['ManageEngine', 'AD Manager', 'Security']
    },
    { 
      title: t('port.p12.title'), 
      client: t('port.p12.client'), 
      sector: t('port.cat.oil'), 
      image: '/projects-imgs/0adbbff4-3ade-4a02-a99c-b3b6242f940e.png', 
      challenge: t('port.p12.chal'), 
      solution: t('port.p12.sol'), 
      impact: t('port.p12.imp'),
      tags: ['SharePoint', 'Consulting', 'Automation']
    },
    { 
      title: t('port.p13.title'), 
      client: t('port.p13.client'), 
      sector: t('port.cat.mfg'), 
      image: '/projects-imgs/29584afb-de35-486e-a20d-47cf89ea731a.png', 
      challenge: t('port.p13.chal'), 
      solution: t('port.p13.sol'), 
      impact: t('port.p13.imp'),
      tags: ['Software Development', 'HR Tech', 'Cloud']
    },
    { 
      title: t('port.p14.title'), 
      client: t('port.p14.client'), 
      sector: t('port.cat.gov'), 
      image: '/projects-imgs/d194d610-c1fa-463b-a253-0231669dfc97.png', 
      challenge: t('port.p14.chal'), 
      solution: t('port.p14.sol'), 
      impact: t('port.p14.imp'),
      tags: ['Cybersecurity', 'Firewall', 'Managed Security']
    },
    { 
      title: t('port.p15.title'), 
      client: t('port.p15.client'), 
      sector: t('port.cat.mfg'), 
      image: '/projects-imgs/2445b48c-1d09-4a32-be3d-5c527caefa13.png', 
      challenge: t('port.p15.chal'), 
      solution: t('port.p15.sol'), 
      impact: t('port.p15.imp'),
      tags: ['Software Licensing', 'Microsoft', 'Compliance']
    },
    { 
      title: t('port.p16.title'), 
      client: t('port.p16.client'), 
      sector: t('port.cat.oil'), 
      image: '/projects-imgs/8d95825e-9c43-4afc-9c1f-91cf191aec7b.png', 
      challenge: t('port.p16.chal'), 
      solution: t('port.p16.sol'), 
      impact: t('port.p16.imp'),
      tags: ['Fiber Splicing', 'Infrastructure', 'Networking']
    },
  ];

  const categories = [
    { id: 'All', label: t('port.cat.all') },
    { id: t('port.cat.oil'), label: t('port.cat.oil') },
    { id: t('port.cat.hosp'), label: t('port.cat.hosp') },
    { id: t('port.cat.ent'), label: t('port.cat.ent') },
    { id: t('port.cat.mfg'), label: t('port.cat.mfg') },
    { id: t('port.cat.gov'), label: t('port.cat.gov') },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.sector === activeCategory);

  return (
    <div className="bg-background-light">
       {/* Hero */}
       <section className="relative pt-32 pb-24 bg-navy text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00D2E9_1px,transparent_1px)] [background-size:32px_32px]"></div>
            <div className="relative z-10 px-4 max-w-5xl mx-auto flex flex-col items-center gap-6">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-2 backdrop-blur-sm">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     {t('port.hero.badge')}
                 </div>
                 <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
                     {t('port.hero.title')}
                 </h1>
                 <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">{t('port.hero.p')}</p>
            </div>
       </section>

       {/* Category Filter */}
       <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
           <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
               <div className="flex items-center justify-center min-w-max py-4 gap-2">
                   {categories.map((cat) => (
                       <button
                           key={cat.id}
                           onClick={() => setActiveCategory(cat.id)}
                           className={`px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 whitespace-nowrap ${
                               activeCategory === cat.id 
                               ? 'bg-primary text-navy shadow-lg shadow-primary/20 scale-105' 
                               : 'text-gray-400 hover:text-navy hover:bg-gray-50'
                           }`}
                       >
                           {cat.label}
                       </button>
                   ))}
               </div>
           </div>
       </div>

       {/* Featured Success Stories */}
       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-32">
               {filteredProjects.length > 0 ? (
                   filteredProjects.map((p, idx) => (
                       <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center animate-fade-in`}>
                           {/* Image Side */}
                           <div className="w-full lg:w-1/2 relative group">
                               <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                               <div className="relative h-[400px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-gray-50">
                                   {p.image === '/projects-imgs/pending.png' ? (
                                       <div className="flex flex-col items-center justify-center text-navy/20 p-12 text-center">
                                           <svg className="w-20 h-20 mb-6 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                           </svg>
                                           <p className="text-sm font-black uppercase tracking-[0.3em] leading-relaxed">
                                               {lang === 'ar' ? 'جاري تحديث الصور الميدانية' : 'Authentic Project Photo Pending'}
                                           </p>
                                       </div>
                                   ) : (
                                       <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                                   )}
                                   <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60"></div>
                                   <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                                       {p.tags.map((tag, i) => (
                                           <span key={i} className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
                                               {tag}
                                           </span>
                                       ))}
                                   </div>
                               </div>
                           </div>

                           {/* Content Side */}
                           <div className="w-full lg:w-1/2 flex flex-col text-start">
                               <div className="mb-8">
                                   <div className="flex items-center gap-4 mb-4">
                                       <span className="h-px w-12 bg-primary"></span>
                                       <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">{p.client}</span>
                                   </div>
                                   <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight mb-6">{p.title}</h3>
                               </div>

                               <div className="space-y-8 mb-10">
                                   <div className="group">
                                       <div className="flex items-center gap-3 mb-3">
                                           <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                               <span className="material-symbols-outlined text-lg">warning</span>
                                           </div>
                                           <h4 className="font-black text-navy uppercase text-sm tracking-wider">{t('port.challenge')}</h4>
                                       </div>
                                       <p className="text-gray-600 text-lg leading-relaxed ps-11">{p.challenge}</p>
                                   </div>

                                   <div className="group">
                                       <div className="flex items-center gap-3 mb-3">
                                           <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                               <span className="material-symbols-outlined text-lg">check_circle</span>
                                           </div>
                                           <h4 className="font-black text-navy uppercase text-sm tracking-wider">{t('port.solution')}</h4>
                                       </div>
                                       <p className="text-gray-600 text-lg leading-relaxed ps-11">{p.solution}</p>
                                   </div>
                               </div>

                               <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group/impact">
                                   <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/impact:opacity-10 transition-opacity duration-500">
                                       <span className="material-symbols-outlined text-8xl text-primary">trending_up</span>
                                   </div>
                                   <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{t('port.impact')}</h4>
                                   <p className="text-2xl font-black text-navy leading-snug">{p.impact}</p>
                               </div>
                           </div>
                       </div>
                   ))
               ) : (
                   <div className="text-center py-20">
                       <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">search_off</span>
                       <p className="text-gray-500 text-xl font-medium">No projects found in this category yet.</p>
                   </div>
               )}
           </div>

           {/* Additional Projects Note */}
           <div className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-br from-navy to-navy-dark text-white text-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00D2E9_1px,transparent_1px)] [background-size:24px_24px]"></div>
               <div className="relative z-10 max-w-3xl mx-auto">
                   <span className="material-symbols-outlined text-5xl text-primary/40 mb-6 block">auto_awesome</span>
                   <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                       {t('port.more_projects_note')}
                   </p>
               </div>
           </div>
       </section>

       {/* Other Organizations Section */}
       <section className="py-24 bg-gray-50 border-t border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">{t('port.other_clients')}</h2>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-16">{t('port.other_clients_p')}</p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                   {[
                       {name: 'PDO', logo: '/clients/pdo.png'},
                       {name: 'OQ', logo: '/clients/oq.png'},
                       {name: 'Ministry of Education', logo: '/clients/moe.png'},
                       {name: 'Ministry of Health', logo: '/clients/moh.png'},
                       {name: 'Ministry of Labour', logo: '/clients/mol.png'},
                       {name: 'Oman Air', logo: '/clients/oman-air.png'},
                       {name: 'Social Protection Fund', logo: '/clients/spf.png'},
                       {name: 'ONEIC', logo: '/clients/oneic.png'},
                       {name: 'Bank Saderat Iran', logo: '/clients/bsi.png'},
                       {name: 'VOX Cinemas', logo: '/clients/vox.png'},
                       {name: 'Sohar Aluminium', logo: '/clients/1708013743.93994_sohar-aluminium_0_0.jpg'},
                       {name: 'Sohar Port', logo: '/clients/sohar-port-and-freezone-seeklogo.png'},
                       {name: 'Al Jazeera Steel', logo: '/clients/aljazeera-steel.png'},
                       {name: 'Suhar Beach Hotel', logo: '/clients/sohar-beach.png'},
                       {name: 'Mustafa Sultan Office Technology', logo: '/clients/mustafa-sultan.png'},
                       {name: 'Smartface Tech', logo: '/clients/smartface.png'},
                   ].map((client, i) => (
                       <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 group flex items-center justify-center h-48">
                           <img 
                               src={client.logo} 
                               alt={client.name} 
                               className={`w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 ${client.name === 'Sohar Port' ? 'max-h-10 px-4' : 'max-h-24'}`}
                           />
                       </div>
                   ))}
               </div>

               <div className="mt-20">
                   <Link to="/contact" className="inline-flex bg-navy hover:bg-navy-dark text-white font-black px-12 py-5 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 items-center gap-3">
                       {t('hero.cta_main')}
                       <span className={`material-symbols-outlined text-xl ${lang === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
                   </Link>
               </div>
           </div>
       </section>
    </div>
  );
};

export default Portfolio;
