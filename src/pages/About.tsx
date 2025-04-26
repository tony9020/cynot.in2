import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Cynot";
  }, []);

  const { ref: historyRef, inView: historyInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
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
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Our Story, Mission & Values</h1>
            <p className="text-xl text-neutral-300">
              Learn about Cynot's journey from a small startup to a diversified company with a mission to transform experiences across technology, real estate, and travel.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">A Vision-Driven Conglomerate</h2>
              <p className="text-neutral-700 mb-4">
                Vision of two graduates in 2020 later led to foundation by 2024, Cynot began as a small IT consultancy and has since grown into a diversified company operating in three distinct sectors. Our journey has been guided by a commitment to innovation, quality, and customer satisfaction.
              </p>
              <p className="text-neutral-700 mb-6">
                Today, we thrive with over 50 professionals across our three divisions: Cynot Technologies, Cynot Homes, and Cynot Tours. Each division operates with autonomy while sharing the core values and vision that define our brand.
              </p>
              <div className="flex flex-wrap justify-between gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-600">5+</p>
                  <p className="text-sm text-neutral-600">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">200+</p>
                  <p className="text-sm text-neutral-600">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-sm text-neutral-600">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">3</p>
                  <p className="text-sm text-neutral-600">Business Divisions</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cynot Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Why We Exist"
            center
          >
            <p className="text-center">
              At Cynot, we're driven by a clear mission and an ambitious vision that guide everything we do.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Our Mission</h3>
              <p className="text-neutral-700 mb-6">
                To deliver transformative experiences through innovative technology, exceptional living spaces, and immersive travel journeys that enrich lives and exceed expectations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <span>Push boundaries in technology and design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <span>Create value for customers and communities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <span>Operate with integrity and transparency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Our Vision</h3>
              <p className="text-neutral-700 mb-6">
                To be recognized as a global leader in our three domains, known for our innovation, quality, and ability to create meaningful experiences that positively impact how people live, work, and explore.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <span>Become the most trusted name in our industries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <span>Set new standards for excellence and sustainability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1" size={20} />
                  <span>Create lasting positive impacts on society</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section 
        ref={historyRef}
        className={`section bg-white ${historyInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our History & Milestones"
            subtitle="Our Journey"
            center
          >
            <p className="text-center">
              From humble beginnings to a diversified conglomerate - explore the key moments in our growth journey.
            </p>
          </SectionTitle>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full md:w-1 w-[2px] md:bg-primary-100 bg-primary-200 blur-[2px] md:blur-none"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div className="pt-[2rem] md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold text-neutral-900">2020 - The Beginning</h3>
                    <p className="mt-2 text-neutral-700">
                      Founded as a small IT consultancy with just 2 team members, focusing on custom software development.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Founding" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div className="pt-[2rem] md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img 
                      src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Homes Launch" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-semibold text-neutral-900">2021 - Expansion to Real Estate</h3>
                    <p className="mt-2 text-neutral-700">
                      Launched Cynot Homes, our real estate division, focusing on premium residential properties and smart home solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div className="pt-[2rem] md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold text-neutral-900">2022 - Entry into Travel Industry</h3>
                    <p className="mt-2 text-neutral-700">
                      Established Cynot Tours to offer curated travel experiences, combining our technological expertise with a passion for exploration.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Tours Launch" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div className="pt-[2rem] md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img 
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Global Expansion" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-semibold text-neutral-900">2024 - Global Expansion</h3>
                    <p className="mt-2 text-neutral-700">
                      Expanded operations to international markets, opening offices in Europe and Asia to serve our growing global client base.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div className="pt-[2rem] md:pt-0  grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold text-neutral-900">Today & Beyond</h3>
                    <p className="mt-2 text-neutral-700">
                      Continuing to innovate and grow across all three divisions, with a focus on sustainability, digital transformation, and exceptional customer experiences.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Cynot Today" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        ref={valuesRef}
        className={`section bg-neutral-50 ${valuesInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Core Values"
            subtitle="What Guides Us"
            center
          >
            <p className="text-center">
              These fundamental principles guide our decisions, actions, and interactions with clients, partners, and communities.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-neutral-700">
                We strive for excellence in everything we do, from the solutions we develop to the experiences we create.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-neutral-700">
                We embrace creativity and forward thinking to develop solutions that lead the market and exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-neutral-700">
                We believe in the power of teamwork, fostering a collaborative environment that drives success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-neutral-700">
                We operate with honesty, transparency, and ethical standards in all our business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section 
        ref={teamRef}
        className={`section bg-white ${teamInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet The Team"
            center
          >
            <p className="text-center">
              Led by experienced professionals with diverse backgrounds, our leadership team drives our vision forward.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/IMG_20230722_211319448.jpg" 
                alt="CEO Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Tony Christopher</h3>
                <p className="text-primary-600 mb-4">Director, CEO</p>
                <p className="text-neutral-700 mb-4">
                Senior Product Designer | UX Strategist | Technical Design Lead | with 6+ Years of experience crafting award-winning digital products for startups and enterprises across 6 countries.                </p>
                <div className="flex space-x-3">
                  <a href="https://tonychristopherofficial.com" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                  </svg>
                  </a>
                  <a href="https://linkedin.com/in/tonychristopherofficial" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                  </a>
                  <a href="https://instagram.com/tonychristopherofficial" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/1649219836919.jpeg" 
                alt="CTO Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Abhinav Jaiju</h3>
                <p className="text-primary-600 mb-4">Director, CTO</p>
                <p className="text-neutral-700 mb-4">
                Frontend Developer specializing in Next.js and a Marketing Analyst with a passion for building responsive and scalable web applications while optimizing user experience.                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                  </svg>
                  </a>
                  <a href="https://linkedin.com/in/abhinav-jaiju-006" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                  </a>
                  <a href="https://instagram.com/abhinav_jaiju" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200" target="_blank">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="COO Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Johnson</h3>
                <p className="text-primary-600 mb-4">Chief Operating Officer</p>
                <p className="text-neutral-700 mb-4">
                  Michael oversees our day-to-day operations, ensuring efficiency, excellence, and alignment with our strategic goals across all divisions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Whether you're looking to partner with us, join our team, or learn more about our services, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                to="/contact" 
                variant="dark" 
                size="lg"
              >
                Contact Us
              </Button>
              <Button 
                to="/careers" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10" 
                size="lg"
              >
                Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;