import { useEffect, useState, FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin, Monitor, Home, MapIcon, Check } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

type ContactDivision = 'general' | 'technologies' | 'homes' | 'tours';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    division: 'general' as ContactDivision,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = "Contact Us | Cynot";
  }, []);

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real application, you would submit the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        division: 'general',
        message: '',
      });
    }
  };

  const handleDivisionSelect = (division: ContactDivision) => {
    setFormData((prev) => ({ ...prev, division }));
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-neutral-900 text-white py-32 relative">
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Get in Touch</h1>
            <p className="text-xl text-neutral-300">
              Have questions or need more information? Our team is here to help. Reach out to us through the contact form or using our direct contact information.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className={`section bg-white ${contactInView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Our Location</h3>
                      <p className="text-neutral-600">
                      Shah Road, Chalakudy<br />
                      Trissur, Kerala <br />
                      India, 680308
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <p className="text-neutral-600 mb-1">
                        <span className="font-medium">General Inquiries:</span> <br />
                        <a href="mailto:info@cynot.in" className="text-primary-600 hover:underline">info@cynot.in</a>
                      </p>
                      <p className="text-neutral-600 mb-1">
                        <span className="font-medium">Support:</span> <br />
                        <a href="mailto:help@cynot.in" className="text-primary-600 hover:underline">help@cynot.in</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <p className="text-neutral-600 mb-1">
                        <span className="font-medium">Main Office:</span> <br />
                        <a href="tel:+12345678900" className="text-primary-600 hover:underline">+91 9020 555 800</a>
                      </p>
                      <p className="text-neutral-600">
                        <span className="font-medium">Customer Support:</span> <br />
                        <a href="tel:+12345678901" className="text-primary-600 hover:underline">+1 (234) 567-8901</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Business Hours</h3>
                  <p className="text-neutral-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-neutral-600">Saturday - Sunday: Closed</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-neutral-200 hover:bg-primary-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <Check size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
                  <p className="text-green-600 mb-6">
                    Your message has been received. We appreciate your interest and will get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {/* Division Selection */}
                  <div className="mb-6">
                    <p className="text-neutral-700 mb-3 font-medium">Which division would you like to contact?</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.division === 'general'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleDivisionSelect('general')}
                      >
                        <div className="flex flex-col items-center">
                          <div className="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                          <span className="font-medium">General</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.division === 'technologies'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleDivisionSelect('technologies')}
                      >
                        <div className="flex flex-col items-center">
                          <Monitor size={24} className="mb-2" />
                          <span className="font-medium">Technologies</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.division === 'homes'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleDivisionSelect('homes')}
                      >
                        <div className="flex flex-col items-center">
                          <Home size={24} className="mb-2" />
                          <span className="font-medium">Homes</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border rounded-md text-center transition-colors ${
                          formData.division === 'tours'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={() => handleDivisionSelect('tours')}
                      >
                        <div className="flex flex-col items-center">
                          <MapIcon size={24} className="mb-2" />
                          <span className="font-medium">Tours</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring focus:ring-primary-200 focus:outline-none"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                            errors.subject ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:outline-none ${
                          errors.message ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <Button
                        type="submit"
                        variant="primary"
                        icon={<Send size={16} />}
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-50 pt-0">
        <div className="container">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-96 w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.206628217476!2d76.36050317538282!3d10.244912489873302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080156f6e63bc1%3A0x9124cb6803a901ef!2s69V7%2BX68%2C%20Mangalassery%20-%20Chirangara%20Rd%2C%20Kizhakkummuri%2C%20Kerala%20680308!5e0!3m2!1sen!2sin!4v1745603561215!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cynot Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="FAQs"
            center
          >
            <p className="text-center">
              Find answers to common questions about our services and how we can help you.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What types of technology solutions do you offer?</h3>
              <p className="text-neutral-700">
                We provide a wide range of technology solutions including custom software development, cloud services, mobile app development, data management, business intelligence, and cybersecurity solutions tailored to your specific needs.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Where are your residential properties located?</h3>
              <p className="text-neutral-700">
                Our properties are currently located in major cities across the United States, including New York, Miami, Austin, Seattle, and Los Angeles. We're continuously expanding to new locations to meet market demand.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How can I book a travel experience with Cynot Tours?</h3>
              <p className="text-neutral-700">
                You can book a travel experience by contacting our travel consultants through this contact form, by email, or by phone. We'll work with you to create a personalized itinerary based on your preferences and requirements.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do you offer services for small businesses?</h3>
              <p className="text-neutral-700">
                Yes, we serve businesses of all sizes. Our solutions are scalable and can be tailored to meet the specific needs and budget constraints of small businesses, startups, mid-sized companies, and large enterprises.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What makes your homes different from others on the market?</h3>
              <p className="text-neutral-700">
                Our homes stand out for their premium quality, smart technology integration, sustainable design features, and exceptional attention to detail. We focus on creating living spaces that enhance lifestyle and provide long-term value.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How quickly can you respond to my inquiry?</h3>
              <p className="text-neutral-700">
                We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our customer support line for immediate assistance during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey With Us?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Whether you need innovative technology solutions, are looking for your dream home, or planning your next adventure, we're here to help you every step of the way.
            </p>
            <Button 
              to="/services" 
              variant="dark" 
              size="lg"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;