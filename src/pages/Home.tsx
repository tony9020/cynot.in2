import { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import  { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import StatsBanner from '../components/StatsBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  useEffect(() => {
    document.title = "Cynot - Empowering Innovations, Crafting Journeys";
  }, []);

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: featuredRef, inView: featuredInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Hero
        title="Empowering Innovations, Crafting Journeys"
        description="Transformative IT solutions, premium living spaces, and immersive travel experiences all under one visionary brand."
        primaryAction={{
          text: "Explore Solutions",
          to: "/services",
        }}
        secondaryAction={{
          text: "Contact Us",
          to: "/contact",
        }}
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: 7,
              repeatType: 'reverse',
            }}
          >
            <a className="text-primary-100  hover:text-primary-600 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

      {/* About Section */}
      <section 
        ref={aboutRef} 
        className={`section bg-white ${aboutInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About Cynot" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span className="text-primary-400 font-bold text-md uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Our Expertise, Your Experience</h2>
              <p className="text-neutral-700 mb-6">
                Cynot is a dynamic conglomerate operating across three specialized sectors: cutting-edge technology solutions, premium residential developments, and immersive travel experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Innovation at Core</h3>
                    <p className="text-neutral-600">We pursue innovative solutions that challenge conventions and set new standards in each of our divisions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Customer-Centric Approach</h3>
                    <p className="text-neutral-600">Every service and product is designed with our customers' needs and expectations at the forefront.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">Sustainable Practices</h3>
                    <p className="text-neutral-600">We're committed to environmentally responsible operations across all our business divisions.</p>
                  </div>
                </div>
              </div>
              <Button to="/about" variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Featured Projects */}
      <section 
        ref={featuredRef} 
        className={`section bg-white ${featuredInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Featured Projects"
            subtitle="Our Work"
            center
          >
            <p className="text-center">
              Take a look at some of our most impactful work across all three divisions. Each project demonstrates our commitment to excellence and innovation.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Enterprise Dashboard System"
              content="Custom analytics platform for a Fortune 500 company that increased operational efficiency by 30%."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Oceanview Residences"
              content="Luxury eco-friendly residential complex featuring smart home technology and sustainable materials."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Nordic Adventure Tours"
              content="Customized expedition packages through Scandinavia's most breathtaking landscapes and cultural sites."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={testimonialsRef} 
        className={`section bg-neutral-50 ${testimonialsInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Testimonials"
            center
          >
            <p className="text-center">
              Don't just take our word for it. Here's what our clients have to say about their experiences working with Cynot.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="italic mb-6 text-neutral-700">
                "Cynot Technologies transformed our outdated systems with a custom solution that perfectly met our needs. Their team was professional, responsive, and delivered beyond our expectations."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-neutral-500">CTO, Innovate Corp</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="italic mb-6 text-neutral-700">
                "Our experience with Cynot Homes was exceptional from start to finish. The attention to detail in our custom home was impeccable, and the smart home features have made our lives so much easier."
              </p>
              <div>
                <p className="font-semibold">Michael & Lisa Thompson</p>
                <p className="text-sm text-neutral-500">Homeowners</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="italic mb-6 text-neutral-700">
                "The cultural tour package that Cynot arranged for our team was life-changing. Every detail was perfectly arranged, and the experiences were authentic and memorable."
              </p>
              <div>
                <p className="font-semibold">David Chen</p>
                <p className="text-sm text-neutral-500">HR Director, Global Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className={`bg-neutral-900 py-16 ${ctaInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Experience?</h2>
            <p className="text-neutral-300 max-w-2xl mb-8">
              Whether you need innovative tech solutions, are looking for your dream home, or planning your next adventure, we're here to help you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Get Started Today
              </Button>
              <Button to="/services" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;