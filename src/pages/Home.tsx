import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';

const Home = () => {
  
  // This updates the browser tab name when the page loads.
  // We do this so users know exactly where they are (Accessibility).
  useEffect(() => {
    document.title = "Cardiff Compass | The Luxury Guide";
  }, []);

  return (
    // 'main' is the main container for the page content.
    // The 'animate-fade-in-up' class makes the page slide in smoothly.
    <main className="animate-fade-in-up">
      
      {/* 1. Show the big Welcome Image (Hero section) first */}
      <Hero />
      
      {/* 2. Then show the list of Venue Categories (the Grid) */}
      <CategoryGrid />

    </main>
  );
};

export default Home;