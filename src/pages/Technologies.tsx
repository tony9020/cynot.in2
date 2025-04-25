import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Monitor, Cloud, Database, Code, Server, ShieldCheck, Smartphone, LineChart } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

const Technologies = () => {
  useEffect(() => {
    document.title = "Technologies | Cynot";
  }, []);

  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: caseStudiesRef, inView: caseStudiesInView } = useInView({
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
            backgroundImage: "url('https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Cynot Technologies</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Innovative Technology Solutions</h1>
            <p className="text-xl text-neutral-300">
              Custom software development, cloud solutions, and digital transformation services that drive business growth and innovation.
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
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Cynot Technologies</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Transforming Businesses Through Technology</h2>
              <p className="text-neutral-700 mb-4">
                Cynot Technologies is a leading provider of innovative IT solutions, helping businesses of all sizes harness the power of technology to streamline operations, enhance customer experiences, and drive growth.
              </p>
              <p className="text-neutral-700 mb-6">
                With a team of experienced developers, designers, and consultants, we deliver custom solutions tailored to each client's unique needs and challenges. Our client-focused approach ensures that every solution we deliver is not just technically excellent, but also perfectly aligned with business objectives.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">200+</p>
                  <p className="text-sm text-neutral-600">Projects Delivered</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">95%</p>
                  <p className="text-sm text-neutral-600">Client Satisfaction</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">30+</p>
                  <p className="text-sm text-neutral-600">Tech Experts</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">12+</p>
                  <p className="text-sm text-neutral-600">Years of Experience</p>
                </div>
              </div>
              <Button to="/contact" variant="primary">
                Contact Our Tech Team
              </Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cynot Technologies Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className={`section bg-neutral-50 ${servicesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Technology Services"
            subtitle="What We Offer"
            center
          >
            <p className="text-center">
              From custom development to cloud solutions, we offer a comprehensive range of services to meet your technology needs.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Software Development</h3>
              <p className="text-neutral-700 mb-4">
                Tailored software solutions designed to address your specific business challenges and requirements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Web Applications
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Enterprise Software
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  API Development
                </li>
              </ul>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-neutral-700 mb-4">
                Comprehensive cloud services to help you migrate, optimize, and manage your cloud infrastructure.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cloud Migration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Managed Cloud Services
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cost Optimization
                </li>
              </ul>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
              <p className="text-neutral-700 mb-4">
                Native and cross-platform mobile applications that deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  iOS Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Android Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cross-Platform Solutions
                </li>
              </ul>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Management</h3>
              <p className="text-neutral-700 mb-4">
                Comprehensive data solutions to help you store, manage, and derive insights from your data.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Database Design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Data Migration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Big Data Solutions
                </li>
              </ul>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
              <p className="text-neutral-700 mb-4">
                Analytics and reporting solutions that transform data into actionable insights for better decision-making.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom Dashboards
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Data Visualization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Predictive Analytics
                </li>
              </ul>
            </Card>

            <Card
              hoverEffect={true}
              className="h-full"
            >
              <div className="text-primary-600 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-neutral-700 mb-4">
                Comprehensive security solutions to protect your systems, data, and users from evolving threats.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Security Assessments
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Threat Monitoring
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Compliance Solutions
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section 
        ref={caseStudiesRef}
        className={`section bg-white ${caseStudiesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Case Studies"
            subtitle="Our Success Stories"
            center
          >
            <p className="text-center">
              Explore how we've helped businesses transform through innovative technology solutions.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
              image="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Healthcare Mobile App"
              content="Patient engagement app for a leading healthcare provider, improving patient satisfaction scores by 25%."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
            <Card
              image="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Cloud Migration Project"
              content="Successful migration of legacy systems to the cloud for a financial services firm, reducing costs by 40%."
              hoverEffect={true}
              to="/portfolio"
              hasArrow={true}
              className="group"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies & Stack */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Technology Stack"
            subtitle="Tools & Technologies"
            center
          >
            <p className="text-center">
              We use a wide range of cutting-edge technologies to deliver solutions that are robust, scalable, and future-proof.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Server size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Backend</h3>
              <p className="text-sm text-neutral-600 mt-2">Node.js, Python, Java, .NET</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Monitor size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-sm text-neutral-600 mt-2">React, Vue, Angular, Next.js</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Database size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Databases</h3>
              <p className="text-sm text-neutral-600 mt-2">MongoDB, PostgreSQL, MySQL, Redis</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <Cloud size={32} className="mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold">Cloud</h3>
              <p className="text-sm text-neutral-600 mt-2">AWS, Azure, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contact our technology experts today to discuss how we can help you achieve your digital transformation goals.
            </p>
            <Button 
              to="/contact" 
              variant="dark" 
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;