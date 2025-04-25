import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Home, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const Services = () => {
  useEffect(() => {
    document.title = "Services | Cynot";
  }, []);

  const { ref: divisionRef, inView: divisionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-neutral-900 text-white py-32 relative">
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Tailored Solutions for Diverse Needs</h1>
            <p className="text-xl text-neutral-300">
              Explore our comprehensive range of services across our three specialized divisions, each designed to deliver exceptional value and experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Divisions Overview */}
      <section 
        ref={divisionRef}
        className={`section bg-white ${divisionInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Specialized Divisions"
            subtitle="What We Do"
            center
          >
            <p className="text-center">
              Each of our divisions focuses on delivering excellence in their specific domain, backed by our shared commitment to innovation, quality, and customer satisfaction.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              className="text-center h-full flex flex-col"
              hoverEffect={true}
            >
              <div className="flex-grow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    <Monitor size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Cynot Technologies</h3>
                <p className="text-neutral-700 mb-6">
                  Innovative IT solutions and custom development services to help businesses transform and grow in the digital landscape.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom Software Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cloud Solutions & Migrations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Digital Transformation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mobile Application Development
                  </li>
                </ul>
              </div>
              <Button
                to="/technologies"
                variant="primary"
                className="mt-auto self-center"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </Card>

            <Card
              className="text-center h-full flex flex-col"
              hoverEffect={true}
            >
              <div className="flex-grow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    <Home size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Cynot Homes</h3>
                <p className="text-neutral-700 mb-6">
                  Premium living spaces designed with elegance, comfort, and sustainability at the forefront of every project.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Luxury Residential Properties
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Smart Home Integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sustainable Building Practices
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Property Management Services
                  </li>
                </ul>
              </div>
              <Button
                to="/homes"
                variant="primary"
                className="mt-auto self-center"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </Card>

            <Card
              className="text-center h-full flex flex-col"
              hoverEffect={true}
            >
              <div className="flex-grow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    <MapPin size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Cynot Tours</h3>
                <p className="text-neutral-700 mb-6">
                  Curated travel experiences that combine adventure, culture, and relaxation for unforgettable journeys around the world.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Customized Travel Packages
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Adventure Expeditions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cultural Immersion Trips
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Corporate Travel Management
                  </li>
                </ul>
              </div>
              <Button
                to="/tours"
                variant="primary"
                className="mt-auto self-center"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section 
        ref={processRef}
        className={`section bg-neutral-50 ${processInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Service Process"
            subtitle="How We Work"
            center
          >
            <p className="text-center">
              Across all our divisions, we follow a structured yet flexible approach to ensure we deliver solutions that perfectly meet your needs and exceed your expectations.
            </p>
          </SectionTitle>

          <div className="mt-12 relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  1
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold text-neutral-900">Discovery & Consultation</h3>
                    <p className="mt-2 text-neutral-700">
                      We begin by understanding your specific needs, goals, and challenges through detailed consultations and requirements gathering.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="md:hidden flex w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center mb-4">
                      1
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Discovery Phase" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  2
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 order-2 md:order-1">
                    <div className="md:hidden flex w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center mb-4">
                      2
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Strategy & Planning" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 order-1 md:order-2">
                    <h3 className="text-xl font-semibold text-neutral-900">Strategy & Planning</h3>
                    <p className="mt-2 text-neutral-700">
                      Our team develops a comprehensive strategy and detailed project plan tailored to your specific requirements and timeline.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  3
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold text-neutral-900">Design & Development</h3>
                    <p className="mt-2 text-neutral-700">
                      We create and build your solution with meticulous attention to detail, whether it's software, a living space, or a travel itinerary.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="md:hidden flex w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center mb-4">
                      3
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Development Process" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  4
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 order-2 md:order-1">
                    <div className="md:hidden flex w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center mb-4">
                      4
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Quality Assurance" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 order-1 md:order-2">
                    <h3 className="text-xl font-semibold text-neutral-900">Quality Assurance</h3>
                    <p className="mt-2 text-neutral-700">
                      Rigorous testing and quality checks ensure that every aspect of your solution meets our high standards and your expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  5
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold text-neutral-900">Delivery & Implementation</h3>
                    <p className="mt-2 text-neutral-700">
                      We carefully deliver and implement your solution, ensuring a smooth transition and providing all necessary support.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="md:hidden flex w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center mb-4">
                      5
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Implementation" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  6
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 order-2 md:order-1">
                    <div className="md:hidden flex w-8 h-8 bg-primary-600 rounded-full text-white items-center justify-center mb-4">
                      6
                    </div>
                    <img 
                      src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Ongoing Support" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 order-1 md:order-2">
                    <h3 className="text-xl font-semibold text-neutral-900">Ongoing Support & Relationship</h3>
                    <p className="mt-2 text-neutral-700">
                      Our commitment doesn't end with delivery. We provide continued support and maintain a lasting relationship to ensure your long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contact us today to discuss your specific needs and how our services can help you achieve your goals.
            </p>
            <Button 
              to="/contact" 
              variant="dark" 
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;