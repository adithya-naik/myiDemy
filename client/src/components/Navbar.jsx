import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 py-4 px-6 shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">myidemy</NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "flex items-center text-blue-600 font-medium" : "flex items-center text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "flex items-center text-blue-600 font-medium" : "flex items-center text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              <span>About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "flex items-center text-blue-600 font-medium" : "flex items-center text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "flex items-center text-blue-600 font-medium" : "flex items-center text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/register" 
              className={({ isActive }) => 
                isActive ? "flex items-center text-blue-600 font-medium" : "flex items-center text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              <span>Register</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                isActive ? "flex items-center bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors" : "flex items-center bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors"
              }
            >
              <span>Login</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col space-y-4 px-2 pb-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "block text-blue-600 font-medium py-1" : "block text-gray-600 hover:text-blue-500 transition-colors py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "block text-blue-600 font-medium py-1" : "block text-gray-600 hover:text-blue-500 transition-colors py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "block text-blue-600 font-medium py-1" : "block text-gray-600 hover:text-blue-500 transition-colors py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "block text-blue-600 font-medium py-1" : "block text-gray-600 hover:text-blue-500 transition-colors py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/register" 
              className={({ isActive }) => 
                isActive ? "block text-blue-600 font-medium py-1" : "block text-gray-600 hover:text-blue-500 transition-colors py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Register</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              className="block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Login</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;