import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { routerTrie } from '../lib/SearchTrie'; 

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // 1. ADVANCED SEARCH: Use the Trie Data Structure
    // We split the user's sentence into words and check each one against the Trie
    const words = query.toLowerCase().split(/\s+/); // Split by spaces
    let targetRoute: string | null = null;

    // Check every word in the user's query ("I want food")
    for (const word of words) {
      // The Trie does the heavy lifting here (O(L) complexity)
      const result = routerTrie.search(word);
      if (result) {
        targetRoute = result;
        console.log(`[Trie Search] Match found: '${word}' -> ${result}`);
        break; // Found a match, stop searching
      }
    }

    // 2. Fallback logic if the Trie doesn't find a match
    if (targetRoute) {
      navigate(targetRoute);
    } else {
      console.log("[Trie Search] No keyword match found. Defaulting to Gastronomy.");
      navigate('/explore/gastronomy');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src="https://nqljwkccvwckeaminktp.supabase.co/storage/v1/object/public/images/cardiffhome1.jpg.png" 
        alt="Cardiff City Architecture" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-black/30"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl mb-6 text-white animate-fade-in-up leading-tight drop-shadow-lg">
          Discover the <br/> Welsh Capital
        </h1>
        
        <p 
          className="font-sans font-light text-lg tracking-[0.2em] text-white/90 uppercase opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          The Editorial Guide
        </p>

        {/* Search Interface */}
        <form 
          onSubmit={handleSearch}
          className="mt-12 w-full max-w-md glass-panel rounded-none p-1 flex items-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Search className="text-white ml-3" size={20} />
          <input 
            id="hero-search-input" 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for 'steak', 'clubs', or 'castles'..." 
            className="w-full bg-transparent border-none text-white placeholder-white/70 px-4 py-3 focus:outline-none font-sans font-light"
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;