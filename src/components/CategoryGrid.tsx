import React from 'react';
import { Link } from 'react-router-dom';

/**
 * DATA MODEL: Categories
 * * The 8 pillars of the Cardiff experience.
 * * Images are selected for the 'Quiet Luxury' aesthetic (Dark/Moody).
 */
const categories = [
  { 
    id: 1, 
    title: 'Gastronomy', 
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Nocturnal', 
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'Heritage', 
    image: 'https://nqljwkccvwckeaminktp.supabase.co/storage/v1/object/public/images/heritage.jpg' 
  },
  { 
    id: 4, 
    title: 'Landmarks', 
    image: 'https://nqljwkccvwckeaminktp.supabase.co/storage/v1/object/public/images/landmarks.jpg' 
  },
  { 
    id: 5, 
    title: 'Boutiques', 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    title: 'Sanctuaries', 
    image: 'https://nqljwkccvwckeaminktp.supabase.co/storage/v1/object/public/images/sanctuaries.jpg' 
  },
  { 
    id: 7, 
    title: 'Agenda', 
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1740&auto=format&fit=crop' 
  },
  { 
    id: 8, 
    title: 'Experiences', 
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1740&auto=format&fit=crop' 
  }
];

const CategoryGrid = () => {
  return (
    <section className="bg-bone py-24 px-6 md:px-12">
      
      {/* Section Header */}
      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl mb-6 text-midnight">Explore</h2>
        <p className="text-charcoal font-light text-lg leading-relaxed">
          Curated experiences across the capital's most distinguished establishments, 
          from Michelin-caliber dining to hidden cultural treasures.
        </p>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          /* * NAVIGATION LOGIC
           * Clicking a card now takes the user to the Collection Page.
           * e.g. /explore/gastronomy
           * We convert the title to lowercase to match our data tags.
           */
          <Link 
            to={`/explore/${category.title.toLowerCase()}`} 
            key={category.id}
            className="group relative h-[500px] overflow-hidden cursor-pointer block"
          >
            {/* Image with Zoom Effect */}
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

            {/* Category Title */}
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl text-white font-serif tracking-wide group-hover:text-gold transition-colors duration-300">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;