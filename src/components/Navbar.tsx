import React, { useState, useEffect } from 'react';
import { Menu, Search, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SideMenu from './SideMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle Search button click
  const handleSearchClick = () => {
    // 1. Try to find the search input by the ID we added in Hero.tsx
    const searchInput = document.getElementById('hero-search-input');

    if (searchInput) {
      // 2. If found, scroll to it and focus
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInput.focus();
    } else {
      // 3. Optional: If we are not on the home page, go there first
      // (Note: The scroll won't happen instantly after nav, but this gets them to the right page)
      navigate('/');
    }
  };

  const navClasses = isHome 
    ? (isScrolled ? 'bg-midnight py-4 shadow-xl' : 'bg-transparent py-6')
    : 'bg-midnight py-4 shadow-xl';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${navClasses}`}
      >
        <div className="container mx-auto px-8 flex justify-between items-center">
          
          {/* Brand */}
          <Link 
            to="/" 
            className="font-serif text-2xl font-bold tracking-wide text-white hover:opacity-90 transition-opacity"
          >
            Cardiff Compass
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-8">
            {/* Search Button linked to Hero Input */}
            <button 
              onClick={handleSearchClick}
              aria-label="Search"
              className="text-white hover:text-gold transition-colors duration-300 hidden md:block"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            {/* User Icon */}
            <Link 
              to="/login" 
              aria-label="Login"
              className="text-white hover:text-gold transition-colors duration-300"
            >
               <User size={20} strokeWidth={1.5} />
            </Link>
            
            {/* HAMBURGER MENU TRIGGER */}
            <button 
              aria-label="Menu"
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </nav>

      {/* Render the Side Menu outside the nav flow */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;