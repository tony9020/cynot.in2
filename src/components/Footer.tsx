import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <Logo color="light" size="lg" />
            <span className={`mt-4 pt-4 text-lg font-bold text-white`}>
          Cynot
          </span>
            <p className="mt-4 text-neutral-300 text-sm">
              Empowering innovations, crafting journeys, and building premium living spaces with a commitment to excellence and customer satisfaction.
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/csr" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  CSR
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/technologies" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Custom Development
                </Link>
              </li>
              <li>
                <Link to="/homes" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Premium Homes
                </Link>
              </li>
              <li>
                <Link to="/homes" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Adventure Tours
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Custom Travel Packages
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">
                  Shah Road, Chalakudy<br />
                  Trissur, Kerala <br />
                  India, 680308
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  +91 9020 555 800
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:help@cynot.in" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  help@cynot.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800 text-sm text-neutral-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Cynot. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-primary-400 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;