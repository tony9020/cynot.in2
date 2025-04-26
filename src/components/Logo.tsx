import { Link } from 'react-router-dom';

interface LogoProps {
  color?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ color = 'dark', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-4',
    md: 'h-6',
    lg: 'h-8',
  };

  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Cynot Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </Link>
  );
};

export default Logo;