import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block">
              myidemy
            </Link>
            <p className="mb-4 text-gray-400 max-w-md">
              Your destination for high-quality tech education. Learn from industry experts and master the skills that will advance your career in software development.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <span>support@myidemy.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <span>123 Learning Lane, San Francisco, CA 94103</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Course Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/web-development" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Web Development
                </Link>
              </li>
              <li>
                <Link to="/category/mobile-apps" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/category/data-science" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Data Science
                </Link>
              </li>
              <li>
                <Link to="/category/ui-ux" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/category/devops" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="mb-4 text-gray-400">
              Subscribe to get special offers, free giveaways, and course updates.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-gray-200"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} myidemy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;