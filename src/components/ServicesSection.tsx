import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Monitor, Home, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('technologies');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const tabInfo = {
    technologies: {
      icon: <Monitor size={32} />,
      title: 'Cynot Technologies',
      description: 'Innovative IT solutions and custom development services to help businesses transform and grow in the digital landscape.',
      features: [
        'Custom Software Development',
        'Cloud Solutions & Migrations',
        'Enterprise System Integration',
        'Mobile App Development',
        'Digital Transformation Consulting',
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/technologies',
    },
    homes: {
      icon: <Home size={32} />,
      title: 'Cynot Homes',
      description: 'Premium living spaces designed with elegance, comfort, and sustainability at the forefront of every project.',
      features: [
        'Luxury Residential Properties',
        'Smart Home Integration',
        'Sustainable Building Practices',
        'Interior Design Services',
        'Property Management',
      ],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/homes',
    },
    tours: {
      icon: <MapPin size={32} />,
      title: 'Cynot Tours',
      description: 'Curated travel experiences that combine adventure, culture, and relaxation for unforgettable journeys around the world.',
      features: [
        'Customized Travel Packages',
        'Adventure Expeditions',
        'Cultural Immersion Trips',
        'Luxury Retreats',
        'Corporate Travel Management',
      ],
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/tours',
    },
  };
  
  const handleTabChange = (tab: 'technologies' | 'homes' | 'tours') => {
    setActiveTab(tab);
  };
  
  const activeInfo = tabInfo[activeTab as keyof typeof tabInfo];

  return (
    <section className="section bg-neutral-50" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Our Specialized Divisions"
          subtitle="What We Do"
          center
        >
          <p className="text-neutral-600 text-center">
            Explore our three distinct business divisions, each delivering excellence in their respective domains while upholding our shared values of innovation, quality, and customer satisfaction.
          </p>
        </SectionTitle>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-neutral-200">
          <button
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === 'technologies' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('technologies')}
          >
            Technologies
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === 'homes' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('homes')}
          >
            Homes
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === 'tours' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange('tours')}
          >
            Tours
          </button>
        </div>
        
        {/* Content */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            inView ? 'fade-in' : 'opacity-0'
          }`}
        >
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <div className="text-primary-600 mb-4">
              {activeInfo.icon}
            </div>
            <h3 className="text-3xl font-bold mb-4">{activeInfo.title}</h3>
            <p className="text-neutral-700 mb-6">{activeInfo.description}</p>
            
            <ul className="space-y-3 mb-8">
              {activeInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              to={activeInfo.link} 
              variant="primary"
            >
              Learn More
            </Button>
          </div>
          
          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img 
                src={activeInfo.image} 
                alt={activeInfo.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;