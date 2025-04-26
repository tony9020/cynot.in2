import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, GraduationCap, Trees, Globe } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const CSR = () => {
  useEffect(() => {
    document.title = "Corporate Social Responsibility | Cynot";
  }, []);

  const { ref: initiativesRef, inView: initiativesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: impactRef, inView: impactInView } = useInView({
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
            backgroundImage: "url('https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Corporate Social Responsibility</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Our Commitment to Society</h1>
            <p className="text-xl text-neutral-300">
              At Cynot, we believe in giving back to communities and making a positive impact on society and the environment through our CSR initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Creating Positive Change</h2>
              <p className="text-neutral-700 mb-4">
                At Cynot, corporate social responsibility is not just a policy or program; it's integral to how we operate across all our divisions. We're committed to sustainable business practices, ethical operations, and giving back to the communities where we work.
              </p>
              <p className="text-neutral-700 mb-6">
                Our CSR strategy focuses on four key pillars: environmental sustainability, community development, education and skills, and ethical business practices. Through these pillars, we aim to create meaningful, long-lasting positive impacts on society and the environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">₹1.2L+</p>
                  <p className="text-sm text-neutral-600">Charitable Donations</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">3000+</p>
                  <p className="text-sm text-neutral-600">Volunteer Hours</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">20+</p>
                  <p className="text-sm text-neutral-600">Community Partners</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">5000+</p>
                  <p className="text-sm text-neutral-600">Lives Impacted</p>
                </div>
              </div>
              <Button to="/contact" variant="primary">
                Partner With Us
              </Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="CSR Initiative" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our CSR Pillars"
            subtitle="Key Focus Areas"
            center
          >
            <p className="text-center">
              Our CSR efforts are concentrated in four key areas where we believe we can make the most meaningful impact.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Trees size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Sustainability</h3>
              <p className="text-neutral-700">
                We're committed to reducing our environmental footprint through sustainable practices in our operations and championing environmental causes in our communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Development</h3>
              <p className="text-neutral-700">
                Through partnerships with local organizations, we support initiatives that strengthen communities and improve quality of life for residents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education & Skills</h3>
              <p className="text-neutral-700">
                We invest in education and skills development to empower individuals and create opportunities for personal and professional growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Business</h3>
              <p className="text-neutral-700">
                We uphold the highest standards of ethical conduct, transparency, and integrity in all our business operations and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section 
        ref={initiativesRef}
        className={`section bg-white ${initiativesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Key Initiatives"
            subtitle="Making a Difference"
            center
          >
            <p className="text-center">
              Explore some of our flagship CSR programs and the impact they're making in communities around the world.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              image="https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Green Building Initiative"
              content="Our commitment to sustainable construction practices has resulted in 100% of our new residential developments achieving green building certification, reducing environmental impact while creating healthier living spaces."
              hoverEffect={true}
              className="h-full"
            />

            <Card
              image="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Tech Education Program"
              content="Through our partnership with local schools and non-profits, we've provided technology education and resources to over 1,000 underprivileged students, helping bridge the digital divide and prepare youth for future careers."
              hoverEffect={true}
              className="h-full"
            />

            <Card
              image="https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Community Tourism Project"
              content="Our responsible tourism initiative works with local communities in travel destinations to ensure tourism benefits local residents, preserves cultural heritage, and protects natural environments."
              hoverEffect={true}
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Impact Report */}
      <section 
        ref={impactRef}
        className={`section bg-neutral-50 ${impactInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Impact"
            subtitle="Measuring Success"
            center
          >
            <p className="text-center">
              We believe in transparency and accountability in our CSR efforts, measuring and reporting our impact across key metrics.
            </p>
          </SectionTitle>

          <div className="mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">2023 Impact Highlights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary-600">Environmental Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">30% Reduction in Carbon Footprint</p>
                        <p className="text-sm text-neutral-600">Across all operations compared to 2021 baseline</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">5,000 Trees Planted</p>
                        <p className="text-sm text-neutral-600">Through our reforestation partnership program</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">45% Waste Reduction</p>
                        <p className="text-sm text-neutral-600">Through improved recycling and circular economy practices</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary-600">Social Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">₹500K in Charitable Donations</p>
                        <p className="text-sm text-neutral-600">Supporting community development and education initiatives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">1,200 Volunteer Hours</p>
                        <p className="text-sm text-neutral-600">Contributed by our employees to community service</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">50 Scholarships Awarded</p>
                        <p className="text-sm text-neutral-600">To students pursuing technology and sustainable development degrees</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  to="/contact" 
                  variant="outline"
                >
                  Download Full Impact Report
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
            title="Voices of Impact"
            subtitle="Testimonials"
            center
          >
            <p className="text-center">
              Hear from some of the individuals and organizations who have been positively impacted by our CSR initiatives.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="italic mb-6 text-neutral-700">
                "The tech education program provided by Cynot has transformed our school's ability to prepare students for future careers. The resources, mentorship, and curriculum support have made a tangible difference in our students' lives."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Maria Rodriguez</p>
                  <p className="text-sm text-neutral-500">Principal, Lincoln High School</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="italic mb-6 text-neutral-700">
                "Partnering with Cynot on their community tourism initiative has allowed our village to benefit economically from tourism while preserving our cultural heritage and natural environment. It's a model of sustainable development."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Carlos Mendez</p>
                  <p className="text-sm text-neutral-500">Community Leader, Costa Rica</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="italic mb-6 text-neutral-700">
                "The scholarship I received from Cynot has enabled me to pursue my degree in sustainable architecture. Their mentorship program has also provided valuable industry insights and connections that will help launch my career."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">James Wilson</p>
                  <p className="text-sm text-neutral-500">Scholarship Recipient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Get Involved"
            subtitle="Join Our Efforts"
            center
          >
            <p className="text-center">
              There are many ways to partner with us and contribute to our CSR initiatives. Here's how you can get involved.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card
              className="h-full"
              hoverEffect={true}
            >
              <h3 className="text-xl font-semibold mb-3">Corporate Partnerships</h3>
              <p className="text-neutral-700 mb-4">
                Join forces with us through strategic partnerships that align with your organization's CSR goals and create meaningful impact.
              </p>
              <Button to="/contact" variant="primary" fullWidth={true}>
                Explore Partnerships
              </Button>
            </Card>

            <Card
              className="h-full"
              hoverEffect={true}
            >
              <h3 className="text-xl font-semibold mb-3">Volunteer Opportunities</h3>
              <p className="text-neutral-700 mb-4">
                Contribute your time and skills to our various community initiatives and make a direct difference in people's lives.
              </p>
              <Button to="/contact" variant="primary" fullWidth={true}>
                Volunteer With Us
              </Button>
            </Card>

            <Card
              className="h-full"
              hoverEffect={true}
            >
              <h3 className="text-xl font-semibold mb-3">Donations & Support</h3>
              <p className="text-neutral-700 mb-4">
                Support our initiatives through financial contributions or in-kind donations to help us expand our reach and impact.
              </p>
              <Button to="/contact" variant="primary" fullWidth={true}>
                Support Our Work
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Positive Change Together</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contact us to learn more about our CSR initiatives and explore ways to collaborate for a better future.
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

export default CSR;