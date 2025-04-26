import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Monitor, Home, MapPin } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  
  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10" onClick={closeMenus}>
          <Logo color={scrolled || isOpen ? 'dark' : 'light'} />
          <span className={`ml-2 text-2xl font-bold ${scrolled || isOpen ? "text-black" : "text-white"}`}>
            CYNOT
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            About
          </NavLink>

          <NavLink 
            to="/services"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Services
          </NavLink>

          {/* Businesses Dropdown */}
          <div className="relative group">
            <button 
              className={`
                flex items-center text-sm font-medium transition-colors duration-200
                ${scrolled 
                  ? 'text-neutral-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-300'
                }
              `}
              onMouseEnter={() => setServicesOpen(true)}
              onClick={toggleServices}
            >
              Businesses
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`
                absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white
                transition-all duration-200 origin-top-right
                ${servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
              `}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={toggleServices}
            >
              <div className="py-2 rounded-md bg-white shadow-xs">
                <NavLink
                  to="/technologies"
                  className={({ isActive }) => `
                    flex items-center px-4 py-2 text-sm
                    ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'}
                  `}
                  onClick={closeMenus}
                >
                  <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2">
                    <Monitor size={32} />
                  </div>
                  Technologies
                </NavLink>

                <NavLink
                  to="/homes"
                  className={({ isActive }) => `
                    flex items-center px-4 py-2 text-sm
                    ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'}
                  `}
                  onClick={closeMenus}
                >
                <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2">
                  <Home size={32} />
                </div>
                  Homes
                </NavLink>

                <NavLink
                  to="/tours"
                  className={({ isActive }) => `
                    flex items-center px-4 py-2 text-sm
                    ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'}
                  `}
                  onClick={closeMenus}
                >
                <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-2">
                  <MapPin size={32} />
                </div>
                  Tours
                </NavLink>
              </div>
            </div>
          </div>
          
          <NavLink 
            to="/portfolio"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Portfolio
          </NavLink>
          
          <NavLink 
            to="/csr"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            CSR
          </NavLink>
          
          <NavLink 
            to="/contact"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Contact
          </NavLink>
        </nav>
        
        {/* CTA Button */}
        <Link
          to="/contact"
          className={`
            hidden lg:flex btn font-bold ${scrolled ? 'btn-primary' : 'bg-white text-primary-700 hover:bg-primary-50'}
          `}
          onClick={closeMenus}
        >
          Let's Talk
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-10"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-neutral-800' : 'text-black'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-neutral-800' : 'text-white'}`} />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            lg:hidden
          `}
        >
          <div className="flex flex-col h-full">
            <div className="mt-24 px-6 space-y-6 pb-6">
              <NavLink
                to="/"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Home
              </NavLink>
              
              <NavLink
                to="/about"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                About
              </NavLink>
              
              <NavLink
                to="/services"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Services
              </NavLink>
              
              {/* Services Accordion */}
              <div>
                <button
                  className="flex justify-between items-center w-full text-lg font-medium p-3 rounded-md text-neutral-800 hover:bg-neutral-100"
                  onClick={toggleServices}
                >
                  Businesses
                  <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`pl-6 space-y-2 mt-2 ${servicesOpen ? 'block' : 'hidden'}`}>
                  <NavLink
                    to="/technologies"
                    className={({ isActive }) => `
                      block text-lg font-medium p-3 rounded-md
                      ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-100'}
                    `}
                    onClick={closeMenus}
                  >
                    Technologies
                  </NavLink>
                  
                  <NavLink
                    to="/homes"
                    className={({ isActive }) => `
                      block text-lg font-medium p-3 rounded-md
                      ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-100'}
                    `}
                    onClick={closeMenus}
                  >
                    Homes
                  </NavLink>
                  
                  <NavLink
                    to="/tours"
                    className={({ isActive }) => `
                      block text-lg font-medium p-3 rounded-md
                      ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-100'}
                    `}
                    onClick={closeMenus}
                  >
                    Tours
                  </NavLink>
                </div>
              </div>
              
              <NavLink
                to="/portfolio"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Portfolio
              </NavLink>
              
              <NavLink
                to="/csr"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                CSR
              </NavLink>
              
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Contact
              </NavLink>
              
              <Link
                to="/contact"
                className="btn btn-primary w-full mt-6 py-3"
                onClick={closeMenus}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;