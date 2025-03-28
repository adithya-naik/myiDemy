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
      <div className=" flex  justify-center items-center px-4 py-12">
        <div className="grid px-8 grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column: Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block">
              myidemy
            </Link>
            <p className="mb-4 text-gray-400 max-w-md">
              Your destination for high-quality tech education. Learn from industry experts and master the skills that will advance your career in software development.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, url: "https://www.linkedin.com/in/adithyanaik/" },
                { Icon: Twitter, url: "https://x.com/adithya__naik" },
                { Icon: Instagram, url: "https://www.instagram.com/adithya.naik" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/adithyanaik/" }
              ].map(({ Icon, url }) => (
                <a 
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Second Column: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Contact Information
            </h3>
            <div className="space-y-4">
              {[
                { 
                  Icon: Mail, 
                  text: "adithyaj219@gmail.com", 
                  type: "email",
                  label: "Email Support" 
                },
                { 
                  Icon: Phone, 
                  text: "+91 9121170501", 
                  type: "tel",
                  label: "Customer Support" 
                },
                { 
                  Icon: MapPin, 
                  text: "Yamnampet, Ghatkesar, Hyderabad - 501031", 
                  type: "address",
                  label: "Our Location" 
                }
              ].map(({ Icon, text, type, label }) => (
                <div key={text} className="flex items-start">
                  <Icon className="w-5 h-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    <a 
                      href={`${type}:${text}`} 
                      className="hover:underline text-gray-300"
                    >
                      {text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Column: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Courses" },
                { to: "/contact", label: "Contact" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} myidemy. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-of-service", label: "Terms of Service" },
              { to: "/cookie-policy", label: "Cookie Policy" }
            ].map(({ to, label }) => (
              <Link 
                key={to} 
                to={to} 
                className="text-sm hover:text-white transition-colors text-center"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;