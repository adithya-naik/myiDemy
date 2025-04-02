import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  ClipboardList, 
  Menu, 
  X, Briefcase,
  UserCheck,
  Star,
  ChevronRight 
} from 'lucide-react';

const AdminNavbar = ({ activeTab, onTabClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const navItems = [
    { id: 'dashboard', path: '/admin', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { id: 'users', path: '/admin/users', icon: <Users size={18} />, label: 'Users' },
    { id: 'contacts', path: '/admin/contacts', icon: <MessageSquare size={18} />, label: 'Contacts' },
    { id: 'services', path: '/admin/services', icon: <Briefcase size={18} />, label: 'Services' },
    { id: 'team', path: '/admin/team', icon: <UserCheck size={18} />, label: 'Team' },
    { id: 'testimonials', path: '/admin/testimonials', icon: <Star size={18} />, label: 'Testimonials' },
  ];
  

  // Handle navigation click with both router and active tab update
  const handleNavClick = (tabId) => {
    if (onTabClick) {
      onTabClick(tabId);
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r sticky top-16 z-10 from-blue-800 to-blue-900 shadow-lg">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <NavLink 
            to="/admin" 
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition duration-200"
            onClick={() => handleNavClick('dashboard')}
          >
            <LayoutDashboard size={20} className="text-blue-300" />
            <span className="font-semibold text-lg">Admin Portal</span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                    isActive || activeTab === item.id
                      ? 'bg-blue-700 text-white' 
                      : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'
                  }`
                }
                onClick={() => handleNavClick(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800 shadow-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                  isActive || activeTab === item.id
                    ? 'bg-blue-700 text-white' 
                    : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'
                }`
              }
              onClick={() => handleNavClick(item.id)}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <ChevronRight size={16} className="text-blue-300" />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;