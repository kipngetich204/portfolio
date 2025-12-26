import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import portfolioData from '../data/portfolio';
import { ProfileModal } from './ProfileModal';

// Navigation Component
export const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { personal } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Left Side: Profile Button + Brand */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all flex-shrink-0"
              title="View Profile"
            >
              <User size={20} className="text-white" />
            </button>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
              {personal.brandName}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`relative transition-colors hover:text-blue-400 text-sm lg:text-base ${
                  activeSection === link ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {activeSection === link && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gray-900/95 backdrop-blur-sm space-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`block w-full text-left py-2 px-2 rounded transition-colors hover:text-blue-400 hover:bg-blue-500/10 ${
                  activeSection === link ? 'text-blue-400 bg-blue-500/20' : 'text-gray-300'
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </nav>
  );
};