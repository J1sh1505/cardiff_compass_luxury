import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">Cardiff Compass</h3>
            <p className="font-sans text-white/60 font-light leading-relaxed">
              The definitive editorial guide to the Welsh capital. Curated for the discerning traveller.
            </p>
            <div className="flex gap-6 text-gold">
              <Instagram size={20} className="hover:text-white transition-colors cursor-pointer" />
              <Twitter size={20} className="hover:text-white transition-colors cursor-pointer" />
              <Facebook size={20} className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Column 2: Explore (Linked to Categories) */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-6">Explore</h4>
            <ul className="space-y-4 font-serif text-lg text-white/80">
              <li><Link to="/explore/gastronomy" className="hover:text-gold transition-colors">Gastronomy</Link></li>
              <li><Link to="/explore/nocturnal" className="hover:text-gold transition-colors">Nocturnal</Link></li>
              <li><Link to="/explore/heritage" className="hover:text-gold transition-colors">Heritage</Link></li>
              <li><Link to="/explore/sanctuaries" className="hover:text-gold transition-colors">Sanctuaries</Link></li>
            </ul>
          </div>

          {/* Column 3: The Journal (Linked to Curated Collections) */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-6">The Journal</h4>
            <ul className="space-y-4 font-serif text-lg text-white/80">
              <li>
                <Link to="/explore/landmarks" className="hover:text-gold transition-colors">Editor's Picks</Link>
              </li>
              <li>
                <Link to="/explore/experiences" className="hover:text-gold transition-colors">Weekend Itineraries</Link>
              </li>
              <li>
                <Link to="/explore/boutiques" className="hover:text-gold transition-colors">Hidden Gems</Link>
              </li>
              <li>
                <Link to="/explore/agenda" className="hover:text-gold transition-colors">Seasonal Guide</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-6">Join the Guestlist</h4>
            <p className="font-sans text-white/60 font-light text-sm mb-6">
              Receive curated updates and exclusive invitations directly to your inbox.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/30 py-3 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder-white/20"
              />
              <button className="absolute right-0 top-3 text-gold hover:text-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/40 uppercase tracking-widest">
          <p>&copy; 2025 Cardiff Compass. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;