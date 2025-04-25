import { useEffect } from 'react';
import { Home } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Cynot";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          to="/" 
          variant="primary"
          icon={<Home size={20} />}
          size="lg"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;