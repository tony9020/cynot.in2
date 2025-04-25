import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, value: 200, suffix: '+', label: 'Projects Delivered' },
  { id: 2, value: 5, suffix: '+', label: 'Years of Experience' },
  { id: 3, value: 10, suffix: '+', label: 'Team Members' },
  { id: 4, value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const StatsBanner = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  return (
    <section 
      ref={ref} 
      className="bg-primary-600 py-12 md:py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem 
              key={stat.id} 
              stat={stat} 
              inView={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  stat: Stat;
  inView: boolean;
}

const StatItem = ({ stat, inView }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (inView) {
      // Start counter animation when in view
      const duration = 2000; // ms
      const interval = 20; // ms
      const step = stat.value / (duration / interval);
      
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current > stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setDisplayValue(Math.floor(current));
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);
  
  return (
    <div className="text-center">
      <div className="text-white font-bold text-5xl">
        {inView ? displayValue : 0}{stat.suffix}
      </div>
      <div className="mt-2 text-primary-100 text-lg font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsBanner;