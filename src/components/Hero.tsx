import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    to: string;
  };
  secondaryAction?: {
    text: string;
    to: string;
  };
  backgroundImage?: string;
  videoUrl?: string;
  overlayOpacity?: number;
  alignment?: 'left' | 'center' | 'right';
  fullHeight?: boolean;
  contentWidth?: 'narrow' | 'medium' | 'wide';
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  videoUrl = 'https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4',
  overlayOpacity = 0.7,
  alignment = 'left',
  fullHeight = true,
  contentWidth = 'medium',
}: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const contentWidthClasses = {
    narrow: 'max-w-xl',
    medium: 'max-w-3xl',
    wide: 'max-w-5xl',
  };

  const textAnimation = `transition-all duration-1000 transform ${
    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`;

  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden bg-neutral-900 ${
        fullHeight ? 'min-h-screen' : 'py-32 md:py-40'
      }`}
    >
      {/* Background Image or Video */}
      {!videoUrl && backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-neutral-900"
            style={{ opacity: overlayOpacity }}
          ></div>
        </div>
      )}
      
      {videoUrl && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div 
            className="absolute inset-0 bg-neutral-900"
            style={{ opacity: overlayOpacity }}
          ></div>
        </div>
      )}
      
      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex flex-col ${alignmentClasses[alignment]} ${contentWidthClasses[contentWidth]} mx-auto`}
        >
          {subtitle && (
            <span 
              className={`text-primary-400 font-medium uppercase tracking-wider text-sm md:text-base mb-3 ${textAnimation}`}
              style={{ transitionDelay: '100ms' }}
            >
              {subtitle}
            </span>
          )}
          
          <h1 
            className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${textAnimation}`}
            style={{ transitionDelay: '200ms' }}
          >
            {title}
          </h1>
          
          {description && (
            <p 
              className={`text-neutral-300 text-lg md:text-xl mb-8 ${textAnimation}`}
              style={{ transitionDelay: '300ms' }}
            >
              {description}
            </p>
          )}
          
          <div 
            className={`flex flex-wrap gap-4 ${alignment === 'center' ? 'justify-center' : ''} ${textAnimation}`}
            style={{ transitionDelay: '400ms' }}
          >
            {primaryAction && (
              <Button 
                to={primaryAction.to} 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                {primaryAction.text}
              </Button>
            )}
            
            {secondaryAction && (
              <Button 
                to={secondaryAction.to} 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;