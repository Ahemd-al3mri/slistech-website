import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from '../context/LanguageContext';

const AIChatBot: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: t('chat.welcome') }]);
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { role: 'user', text: textToSend } as const];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: textToSend,
        config: {
          systemInstruction: `You are the Lead IT Consultant for SLISTECH (Sohar Leaders in Information Systems & Technology).
          
          CORE IDENTITY:
          - Based in: Gadfan, Sohar, Oman (Flat G4, Al Esa Complex).
          - Primary Service Area: North Al Batinah (Sohar, Liwa, Shinas, Saham, Al Khaburah).
          - Contact: +968 96904373 | sales@slistech.com | slistech.com
          
          SERVICES & EXPERTISE:
          1. INFRASTRUCTURE: Structured cabling (Cat6/Cat6a), Fiber Optic Splicing (certified), Data Center design, UPS systems.
          2. SECURITY: ROP-compliant CCTV, Biometric Access Control, Fire Alarms, Cyber Security audits.
          3. SOFTWARE: Custom ERP (Odoo, SAP), Web/Mobile Apps, Cloud Migration (Azure/AWS), API Integrations.
          4. IT SUPPORT: 24/7 Annual Maintenance Contracts (AMC), Hardware Supply (Dell/HP/Cisco), Consultancy.
          
          KEY ACHIEVEMENTS/CLIENTS:
          - Fiber optic projects for OQ.
          - ERP & Software for Suhar Beach Hotel.
          - Digital Signage for VOX Cinemas.
          - Active Directory Auditing for Social Protection Fund (SPF).
          - IT Support for PDO and Bank Saderat Iran.
          - Cybersecurity for Riyada.
          
          TONE & STYLE:
          - Professional, local, and authoritative yet approachable.
          - Multilingual: Respond in the SAME language as the user (English or Arabic).
          - Priority: If a user has an emergency, tell them we have a 2-hour on-site response guarantee in Sohar for AMC partners.
          - Call to Action: Always encourage booking a free site assessment or calling +968 96904373.
          
          If asked about pricing, explain that we provide custom quotes based on site assessments.`,
          temperature: 0.7,
        },
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please contact our support at +968 96904373.";
      setMessages([...newMessages, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'bot', text: "Service temporarily unavailable. Please try again later or call +968 96904373." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed bottom-6 ${lang === 'ar' ? 'right-6' : 'left-6'} z-50 flex flex-col items-end`}>
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-navy/10 animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-navy font-bold">S</div>
              <div>
                <h4 className="font-bold text-sm leading-none">{t('chat.badge')}</h4>
                <div className="flex items-center gap-1 mt-1">
                  <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-300">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-white/50 text-start">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-navy rounded-br-none' 
                    : 'bg-navy/5 text-navy border border-navy/10 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-navy/5 p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-navy rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-navy rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-navy rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-4 flex flex-wrap gap-2">
              {[t('chat.suggestion1'), t('chat.suggestion2'), t('chat.suggestion3')].map((s, i) => (
                <button key={i} onClick={() => handleSend(s)} className="text-[10px] bg-white border border-navy/10 text-navy px-2 py-1 rounded-full hover:bg-navy hover:text-white transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chat.placeholder')}
                className="w-full pl-4 pr-12 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-primary text-navy"
              />
              <button 
                onClick={() => handleSend()}
                className={`absolute right-1 top-1 size-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-primary hover:text-navy transition-colors ${lang === 'ar' ? 'left-1 right-auto' : ''}`}
              >
                <span className={`material-symbols-outlined text-sm ${lang === 'ar' ? 'rotate-180' : ''}`}>send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="size-14 rounded-full bg-navy text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
      >
        {!isOpen && <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        </span>}
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>
    </div>
  );
};

export default AIChatBot;