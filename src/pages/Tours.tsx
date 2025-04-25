import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Globe, Users, Calendar, Star, Camera, Shield, Sun, Moon } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const Tours = () => {
  useEffect(() => {
    document.title = "Tours | Cynot";
  }, []);

  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: toursRef, inView: toursInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: experiencesRef, inView: experiencesInView } = useInView({
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
            backgroundImage: "url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Cynot Tours</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Unforgettable Travel Experiences</h1>
            <p className="text-xl text-neutral-300">
              Curated travel experiences that combine adventure, culture, and relaxation for memorable journeys across the globe.
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
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Cynot Tours</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Creating Memorable Journeys</h2>
              <p className="text-neutral-700 mb-4">
                Cynot Tours designs and delivers exceptional travel experiences that go beyond typical tourism, offering authentic connections to destinations, cultures, and communities around the world.
              </p>
              <p className="text-neutral-700 mb-6">
                With a focus on quality, safety, and personalization, our team of experienced travel experts crafts journeys that cater to various interests and preferences, from adventure expeditions and cultural immersions to luxury retreats and corporate travel.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">40+</p>
                  <p className="text-sm text-neutral-600">Destinations</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">99%</p>
                  <p className="text-sm text-neutral-600">Client Satisfaction</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">5000+</p>
                  <p className="text-sm text-neutral-600">Travelers Served</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">8+</p>
                  <p className="text-sm text-neutral-600">Years of Experience</p>
                </div>
              </div>
              <Button to="/contact" variant="primary">
                Plan Your Journey
              </Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cynot Tours Experience" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Travel Philosophy"
            subtitle="What We Believe"
            center
          >
            <p className="text-center">
              At Cynot Tours, we believe travel should be transformative, responsible, and tailored to each traveler's unique interests and preferences.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Experiences</h3>
              <p className="text-neutral-700">
                We create journeys that go beyond typical tourism, offering genuine connections to destinations, cultures, and communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalization</h3>
              <p className="text-neutral-700">
                Every itinerary is customized to your interests, preferences, and travel style, ensuring a unique and memorable journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety & Support</h3>
              <p className="text-neutral-700">
                Your well-being is our priority, with comprehensive safety measures and 24/7 support throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section 
        ref={toursRef}
        className={`section bg-white ${toursInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Featured Tours"
            subtitle="Popular Destinations"
            center
          >
            <p className="text-center">
              Explore our selection of carefully curated travel experiences to inspiring destinations around the world.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              image="https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="group"
              hoverEffect={true}
            >
              <div className="mb-4">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                <span className="bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full ml-2">Best Seller</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Japan: Cultural Odyssey</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-2">4.9 (128 reviews)</span>
              </div>
              <div className="flex items-center text-sm text-neutral-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>Tokyo, Kyoto, Osaka, Hakone</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Immerse yourself in Japan's rich culture and traditions on this 10-day journey from ancient temples to modern metropolises.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">Cultural</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">Culinary</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">10 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500">Starting from</p>
                  <p className="text-lg font-bold text-primary-600">$3,850</p>
                </div>
                <Button to="/contact" variant="primary">
                  View Details
                </Button>
              </div>
            </Card>

            <Card
              image="https://images.pexels.com/photos/3214959/pexels-photo-3214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="group"
              hoverEffect={true}
            >
              <div className="mb-4">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                <span className="bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full ml-2">New</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Costa Rica Adventure</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-2">4.8 (92 reviews)</span>
              </div>
              <div className="flex items-center text-sm text-neutral-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>San José, Arenal, Manuel Antonio</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Experience the perfect blend of adventure and relaxation in Costa Rica's lush rainforests and stunning beaches.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">Adventure</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">Nature</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">8 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500">Starting from</p>
                  <p className="text-lg font-bold text-primary-600">$2,950</p>
                </div>
                <Button to="/contact" variant="primary">
                  View Details
                </Button>
              </div>
            </Card>

            <Card
              image="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="group"
              hoverEffect={true}
            >
              <div className="mb-4">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                <span className="bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full ml-2">Limited Spots</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Italian Splendor</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-2">4.9 (145 reviews)</span>
              </div>
              <div className="flex items-center text-sm text-neutral-600 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>Rome, Florence, Venice, Amalfi Coast</span>
              </div>
              <p className="text-neutral-700 mb-4">
                Indulge in the art, history, cuisine, and scenery of Italy's most iconic destinations on this luxury 12-day tour.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">Luxury</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">Culinary</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">12 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-500">Starting from</p>
                  <p className="text-lg font-bold text-primary-600">$4,250</p>
                </div>
                <Button to="/contact" variant="primary">
                  View Details
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Experiences */}
      <section 
        ref={experiencesRef}
        className={`section bg-neutral-50 ${experiencesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Travel Experiences"
            subtitle="Type of Journeys"
            center
          >
            <p className="text-center">
              Whatever your travel style or interest, we offer a variety of experiences to suit your preferences.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Adventure Travel" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Adventure Travel</h3>
                <p className="text-neutral-200 mb-4">Thrilling experiences for the active and adventurous traveler.</p>
                <Button 
                  to="/contact" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                  size="sm"
                >
                  Explore
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/5731794/pexels-photo-5731794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cultural Immersion" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Cultural Immersion</h3>
                <p className="text-neutral-200 mb-4">Authentic experiences focused on local traditions and heritage.</p>
                <Button 
                  to="/contact" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                  size="sm"
                >
                  Explore
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Luxury Retreats" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Luxury Retreats</h3>
                <p className="text-neutral-200 mb-4">Premium travel experiences with the finest accommodations and services.</p>
                <Button 
                  to="/contact" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                  size="sm"
                >
                  Explore
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Corporate Travel" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Corporate Travel</h3>
                <p className="text-neutral-200 mb-4">Specialized business travel solutions and team-building retreats.</p>
                <Button 
                  to="/contact" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                  size="sm"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="What Our Travelers Say"
            subtitle="Testimonials"
            center
          >
            <p className="text-center">
              Hear from travelers who have experienced the exceptional journeys created by Cynot Tours.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6 text-neutral-700">
                "Our family trip to Costa Rica exceeded all expectations. The itinerary was perfectly balanced with adventure and relaxation, and the guides were knowledgeable and friendly. A truly unforgettable experience!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-neutral-500">Costa Rica Adventure, April 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6 text-neutral-700">
                "The cultural immersion tour of Japan was life-changing. Every detail was meticulously planned, from traditional ryokan stays to private tea ceremonies. Cynot Tours delivered an authentic experience that I couldn't have arranged on my own."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">David Chen</p>
                  <p className="text-sm text-neutral-500">Japan Cultural Odyssey, October 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6 text-neutral-700">
                "Our corporate retreat in Italy was a perfect blend of team-building activities, cultural experiences, and relaxation. The entire team came back rejuvenated and more connected. Cynot's attention to detail made the entire experience seamless."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-neutral-500">Italian Corporate Retreat, June 2023</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contact our travel experts to begin planning your personalized travel experience to destinations around the world.
            </p>
            <Button 
              to="/contact" 
              variant="dark" 
              size="lg"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tours;