import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title?: string;
  content?: string;
  image?: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  hasArrow?: boolean;
}

const Card = ({
  title,
  content,
  image,
  to,
  href,
  icon,
  children,
  className = '',
  hoverEffect = true,
  hasArrow = false,
}: CardProps) => {
  const cardContent = (
    <div className={`card ${hoverEffect ? 'card-hover' : ''} ${className}`}>
      {image && (
        <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-4 text-primary-600">{icon}</div>}
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {content && <p className="text-neutral-600">{content}</p>}
        {children}
        {hasArrow && (
          <div className="mt-4">
            <svg 
              className="w-5 h-5 text-primary-600 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="group block">
        {cardContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default Card;