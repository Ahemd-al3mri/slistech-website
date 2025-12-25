import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SlistechLogo from './SlistechLogo';
import AIChatBot from './AIChatBot';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const isDark = location.pathname.includes('/security') || location.pathname.includes('/software');

  const scrollToSolutions = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('solutions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${isDark ? 'bg-navy/95 border-white/10 text-white' : 'bg-white/95 border-gray-100 text-navy'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center group">
              <SlistechLogo className="h-8 md:h-9 w-auto transition-transform duration-300 group-hover:scale-105" isDark={isDark} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-heading">
              <Link to="/" className={`font-medium text-sm transition-colors ${isDark ? 'text-gray-300 hover:text-primary' : 'text-navy hover:text-primary'}`}>{t('nav.home')}</Link>
              
              <div 
                className="relative group h-16 flex items-center"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1 font-medium text-sm transition-colors ${isDark ? 'text-gray-300 hover:text-primary' : 'text-navy hover:text-primary'}`}
                >
                  {t('nav.solutions')}
                  <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} w-64 pt-2 transition-all duration-300 ${isSolutionsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                  <div className={`rounded-xl shadow-2xl border overflow-hidden ${isDark ? 'bg-navy/95 border-white/10' : 'bg-white border-gray-100'}`}>
                    <div className="py-2">
                      <Link to="/solutions/infrastructure" className={`flex items-center gap-3 px-4 py-3 transition-colors ${isDark ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-gray-50 text-navy'}`}>
                        <span className="material-symbols-outlined text-primary">router</span>
                        <span className="text-sm font-medium">{t('nav.infrastructure')}</span>
                      </Link>
                      <Link to="/solutions/security" className={`flex items-center gap-3 px-4 py-3 transition-colors ${isDark ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-gray-50 text-navy'}`}>
                        <span className="material-symbols-outlined text-primary">security</span>
                        <span className="text-sm font-medium">{t('nav.security')}</span>
                      </Link>
                      <Link to="/solutions/software" className={`flex items-center gap-3 px-4 py-3 transition-colors ${isDark ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-gray-50 text-navy'}`}>
                        <span className="material-symbols-outlined text-primary">code</span>
                        <span className="text-sm font-medium">{t('nav.software')}</span>
                      </Link>
                      <Link to="/solutions/support" className={`flex items-center gap-3 px-4 py-3 transition-colors ${isDark ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-gray-50 text-navy'}`}>
                        <span className="material-symbols-outlined text-primary">support_agent</span>
                        <span className="text-sm font-medium">{t('nav.it_support')}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about" className={`font-medium text-sm transition-colors ${isDark ? 'text-gray-300 hover:text-primary' : 'text-navy hover:text-primary'}`}>{t('nav.about')}</Link>
              <Link to="/portfolio" className={`font-medium text-sm transition-colors ${isDark ? 'text-gray-300 hover:text-primary' : 'text-navy hover:text-primary'}`}>{t('nav.portfolio')}</Link>
              <Link to="/contact" className={`font-medium text-sm transition-colors ${isDark ? 'text-gray-300 hover:text-primary' : 'text-navy hover:text-primary'}`}>{t('nav.contact')}</Link>
            </nav>

            {/* CTA & Lang */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className={`text-sm font-bold px-3 py-1.5 rounded border transition-all ${isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-navy/10 text-navy hover:bg-navy/5'}`}
              >
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
              <Link to="/contact" className="bg-primary hover:bg-primary-light text-navy font-bold text-xs px-5 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-heading">
                {t('nav.support')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 -mr-2 rounded-md ${isDark ? 'text-white hover:bg-white/5' : 'text-navy hover:bg-navy/5'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t p-4 flex flex-col gap-4 ${isDark ? 'bg-navy border-white/10' : 'bg-white border-gray-100'} animate-fade-in-up`}>
            <div className="flex justify-between items-center mb-2">
                <a 
                    href="tel:+96826840000" 
                    className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-50 px-3 py-1.5 rounded-lg border border-red-100"
                >
                    <span className="material-symbols-outlined text-lg">emergency</span>
                    {t('nav.emergency')}
                </a>
                <button 
                    onClick={toggleLanguage}
                    className={`text-sm font-bold px-4 py-2 rounded border ${isDark ? 'border-white/20 text-white' : 'border-navy/10 text-navy'}`}
                >
                    {lang === 'en' ? 'العربية' : 'English'}
                </button>
            </div>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-navy'}`}>{t('nav.home')}</Link>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className={`flex items-center justify-between text-sm font-medium ${isDark ? 'text-gray-300' : 'text-navy'}`}
              >
                {t('nav.solutions')}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>
              
              <div className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ${isMobileSolutionsOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <Link to="/solutions/infrastructure" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('nav.infrastructure')}</Link>
                <Link to="/solutions/security" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('nav.security')}</Link>
                <Link to="/solutions/software" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('nav.software')}</Link>
                <Link to="/solutions/support" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('nav.it_support')}</Link>
              </div>
            </div>

            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-navy'}`}>{t('nav.about')}</Link>
            <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-navy'}`}>{t('nav.portfolio')}</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-navy'}`}>{t('nav.contact')}</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/5 py-12 px-4 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-start">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <SlistechLogo className="h-9 w-auto" isDark={true} />
                </div>
                <p className="text-sm text-gray-300">{t('footer.desc')}</p>
            </div>
            
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-white font-heading">{t('nav.solutions')}</h4>
                <Link to="/solutions/infrastructure" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.infrastructure')}</Link>
                <Link to="/solutions/security" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.security')}</Link>
                <Link to="/solutions/software" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.software')}</Link>
                <Link to="/solutions/support" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.it_support')}</Link>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-white font-heading">{t('nav.about')}</h4>
                <Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.about')}</Link>
                <Link 
                  to="/#solutions" 
                  onClick={scrollToSolutions}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t('nav.solutions')}
                </Link>
                <Link to="/portfolio" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.portfolio')}</Link>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">{t('nav.contact')}</Link>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-white font-heading">{t('nav.contact')}</h4>
                <div className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                    <span>{t('footer.hq')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="material-symbols-outlined text-primary text-sm">call</span>
                    <span>+968 96904373</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="material-symbols-outlined text-primary text-sm">mail</span>
                    <span>sales@slistech.com</span>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center md:text-left text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <p>{t('footer.rights')}</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">{t('nav.privacy')}</a>
                <a href="#" className="hover:text-primary transition-colors">{t('nav.terms')}</a>
            </div>
        </div>
      </footer>

      {/* Floating Widgets */}
      <AIChatBot />

      {/* WhatsApp Button */}
      <a href="https://wa.me/96896904373" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-40 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform cursor-pointer`}>
        <svg fill="currentColor" width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Layout;