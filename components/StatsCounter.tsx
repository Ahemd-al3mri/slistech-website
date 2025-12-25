import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      setCount(Math.floor(easeOutQuart(percentage) * value));
      if (progress < duration) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      <div className="text-4xl md:text-5xl font-black text-primary mb-2 drop-shadow-[0_0_10px_rgba(0,210,233,0.3)]">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-medium uppercase tracking-wider text-sm font-heading">
        {label}
      </div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-navy border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatItem value={7} label={t('stats.years')} suffix="+" />
                <StatItem value={50} label={t('stats.clients')} suffix="+" />
                <StatItem value={120} label={t('stats.projects')} suffix="+" />
                <StatItem value={2} label={t('stats.response')} suffix="hr" />
            </div>
        </div>
    </div>
  );
};

export default StatsCounter;