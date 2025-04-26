import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Monitor, Home, MapPin } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';

type ProjectCategory = 'all' | 'technologies' | 'homes' | 'tours';

interface Project {
  id: number;
  title: string;
  category: 'technologies' | 'homes' | 'tours';
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Dashboard System',
    category: 'technologies',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Custom analytics platform for a Fortune 500 company that increased operational efficiency by 30% through real-time data visualization and automated reporting.',
    tags: ['Web Application', 'Analytics', 'Enterprise'],
    link: '/portfolio/dashboard-system',
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'technologies',
    image: 'https://images.pexels.com/photos/7828328/pexels-photo-7828328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Patient engagement app for a leading healthcare provider, improving patient satisfaction scores by 25% while streamlining appointment management and care communications.',
    tags: ['Mobile App', 'Healthcare', 'UX Design'],
    link: '/portfolio/healthcare-app',
  },
  {
    id: 3,
    title: 'Cloud Migration Project',
    category: 'technologies',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Successful migration of legacy systems to the cloud for a financial services firm, reducing infrastructure costs by 40% while improving system reliability and scalability.',
    tags: ['Cloud Computing', 'Migration', 'Financial Services'],
    link: '/portfolio/cloud-migration',
  },
  {
    id: 4,
    title: 'Oceanview Residences',
    category: 'homes',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Luxury waterfront apartments featuring smart home technology, sustainable design, and premium amenities, selling out within six months of launch.',
    tags: ['Luxury Living', 'Smart Homes', 'Waterfront'],
    link: '/portfolio/oceanview-residences',
  },
  {
    id: 5,
    title: 'Parkside Villas',
    category: 'homes',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Elegant family homes adjacent to a beautiful park, combining modern design with eco-friendly features and exceptional community amenities.',
    tags: ['Family Homes', 'Eco-Friendly', 'Community'],
    link: '/portfolio/parkside-villas',
  },
  {
    id: 6,
    title: 'Urban Heights',
    category: 'homes',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Modern downtown condos with stunning city views, designed for contemporary urban living with premium finishes and innovative space utilization.',
    tags: ['Urban Living', 'Modern Design', 'City Views'],
    link: '/portfolio/urban-heights',
  },
  {
    id: 7,
    title: 'Japan Cultural Odyssey',
    category: 'tours',
    image: 'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Immersive 10-day journey through Japan\'s rich culture and traditions, featuring exclusive experiences from tea ceremonies to artisan workshops.',
    tags: ['Cultural', 'Asia', 'Immersive'],
    link: '/portfolio/japan-odyssey',
  },
  {
    id: 8,
    title: 'Costa Rica Adventure',
    category: 'tours',
    image: 'https://images.pexels.com/photos/2024510/pexels-photo-2024510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Thrilling 8-day adventure combining rainforest exploration, wildlife encounters, and coastal relaxation in Costa Rica\'s diverse ecosystems.',
    tags: ['Adventure', 'Nature', 'Eco-Tourism'],
    link: '/portfolio/costa-rica-adventure',
  },
  {
    id: 9,
    title: 'Italian Splendor',
    category: 'tours',
    image: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Luxury 12-day tour through Italy\'s most iconic destinations, featuring exclusive access to historical sites, culinary experiences, and luxury accommodations.',
    tags: ['Luxury', 'Europe', 'Cultural'],
    link: '/portfolio/italian-splendor',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  useEffect(() => {
    document.title = "Portfolio | Cynot";
    
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
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
            backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Our Work Across Divisions</h1>
            <p className="text-xl text-neutral-300">
              Explore our diverse portfolio of projects across technology, real estate, and travel, showcasing our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section 
        ref={projectsRef}
        className={`section bg-white ${projectsInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <SectionTitle
            title="Our Featured Projects"
            subtitle="Portfolio Showcase"
            center
          >
            <p className="text-center">
              Browse through our collection of successful projects across our three specialized divisions.
            </p>
          </SectionTitle>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'all' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'technologies' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('technologies')}
            >
              <div className="flex items-center">
                <Monitor size={16} className="mr-2" />
                Technologies
              </div>
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'homes' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('homes')}
            >
              <div className="flex items-center">
                <Home size={16} className="mr-2" />
                Homes
              </div>
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                activeCategory === 'tours' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveCategory('tours')}
            >
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Tours
              </div>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                title={project.title}
                content={project.description}
                to={project.link}
                className="group h-full flex flex-col"
                hoverEffect={true}
              >
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contact us today to discuss how we can help you achieve your goals, whether in technology, real estate, or travel.
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

export default Portfolio;