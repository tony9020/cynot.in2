import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  children?: ReactNode;
  light?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  center = false,
  className = '',
  children,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className={`inline-block mb-2 text-sm font-semibold uppercase tracking-wider ${light ? 'text-primary-300' : 'text-primary-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl leading-tight mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {children && (
        <div className={`max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;