import { Link } from 'react-router-dom';

interface LogoProps {
  color?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ color = 'dark', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/logo.svg" 
        alt="Cynot Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </Link>
  );
};

export default Logo;