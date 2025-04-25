import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Home, Check, MapPin, Building, Shield, Zap, Leaf, Heart } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const Homes = () => {
  useEffect(() => {
    document.title = "Homes | Cynot";
  }, []);

  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: propertiesRef, inView: propertiesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
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
            backgroundImage: "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Cynot Homes</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Premium Living Spaces</h1>
            <p className="text-xl text-neutral-300">
              Luxurious and sustainable residential properties designed for modern living, comfort, and style.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section 
        ref={overviewRef}
        className={`section bg-white ${overviewInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Cynot Homes</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Redefining Residential Living</h2>
              <p className="text-neutral-700 mb-4">
                Cynot Homes is dedicated to creating exceptional living spaces that combine elegant design, sustainable practices, and smart technology for a truly modern living experience.
              </p>
              <p className="text-neutral-700 mb-6">
                With a focus on quality craftsmanship and attention to detail, our residential properties are designed to enhance your lifestyle and provide comfort, convenience, and peace of mind. From luxury urban apartments to spacious suburban homes, each Cynot property is built to the highest standards.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">50+</p>
                  <p className="text-sm text-neutral-600">Properties Developed</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">98%</p>
                  <p className="text-sm text-neutral-600">Client Satisfaction</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">5</p>
                  <p className="text-sm text-neutral-600">Cities</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">10+</p>
                  <p className="text-sm text-neutral-600">Years in Real Estate</p>
                </div>
              </div>
              <Button to="/contact" variant="primary">
                Contact Our Real Estate Team
              </Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cynot Homes Property" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section 
        ref={featuresRef}
        className={`section bg-neutral-50 ${featuresInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="What Sets Us Apart"
            subtitle="Our Advantages"
            center
          >
            <p className="text-center">
              Discover the unique features and benefits that make Cynot Homes the preferred choice for discerning homebuyers.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-neutral-700">
                Exceptional craftsmanship and attention to detail in every aspect of design and construction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Technology</h3>
              <p className="text-neutral-700">
                Integrated smart home features for enhanced convenience, security, and energy efficiency.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-neutral-700">
                Eco-friendly materials and energy-efficient designs that reduce environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-neutral-700">
                Carefully selected locations that offer convenience, amenities, and investment potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section 
        ref={propertiesRef}
        className={`section bg-white ${propertiesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Featured Properties"
            subtitle="Our Showcase"
            center
          >
            <p className="text-center">
              Explore our selection of premium properties, each offering unique features and exceptional value.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              image="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="group"
              hoverEffect={true}
            >
              <div className="mb-4">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                <span className="bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full ml-2">New</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Oceanview Residences</h3>
              <p className="text-primary-600 font-bold mb-3">$850,000 - $1.2M</p>
              <div className="flex items-center text-sm text-neutral-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>Miami, Florida</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Luxury waterfront apartments with breathtaking ocean views, featuring smart home technology and resort-style amenities.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700 mb-4">
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>2-4 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>2-3 Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>1,200-2,800 sq.ft</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>Pool & Gym</span>
                </div>
              </div>
              <Button to="/contact" variant="primary" fullWidth={true}>
                Inquire Now
              </Button>
            </Card>

            <Card
              image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="group"
              hoverEffect={true}
            >
              <div className="mb-4">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Parkside Villas</h3>
              <p className="text-primary-600 font-bold mb-3">$750,000 - $950,000</p>
              <div className="flex items-center text-sm text-neutral-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>Austin, Texas</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Elegant family homes adjacent to a beautiful park, combining modern design with eco-friendly features.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700 mb-4">
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>3-5 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>2.5-3.5 Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>2,200-3,500 sq.ft</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>2-Car Garage</span>
                </div>
              </div>
              <Button to="/contact" variant="primary" fullWidth={true}>
                Inquire Now
              </Button>
            </Card>

            <Card
              image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="group"
              hoverEffect={true}
            >
              <div className="mb-4">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                <span className="bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full ml-2">Last Units</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Urban Heights</h3>
              <p className="text-primary-600 font-bold mb-3">$425,000 - $650,000</p>
              <div className="flex items-center text-sm text-neutral-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>Seattle, Washington</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Modern downtown condos with stunning city views, designed for contemporary urban living.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700 mb-4">
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>1-3 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>1-2 Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>650-1,500 sq.ft</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-primary-600 mr-2" />
                  <span>Rooftop Lounge</span>
                </div>
              </div>
              <Button to="/contact" variant="primary" fullWidth={true}>
                Inquire Now
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Real Estate Services"
            subtitle="What We Offer"
            center
          >
            <p className="text-center">
              Beyond exceptional properties, we provide a range of services to meet all your real estate needs.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Home size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Development</h3>
              <p className="text-neutral-700 mb-4">
                From concept to completion, we develop premium residential properties with a focus on quality, sustainability, and innovation.
              </p>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Management</h3>
              <p className="text-neutral-700 mb-4">
                Comprehensive management services for property owners, ensuring optimal performance and tenant satisfaction.
              </p>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interior Design</h3>
              <p className="text-neutral-700 mb-4">
                Professional interior design services to create beautiful, functional, and personalized living spaces.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Dream Home</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contact our real estate experts today to explore our available properties or discuss your specific requirements.
            </p>
            <Button 
              to="/contact" 
              variant="dark" 
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homes;