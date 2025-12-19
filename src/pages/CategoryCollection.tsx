import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase'; // <--- The "Phone Line" to the Cloud
import type { Venue } from '../data/venues'; // We still use this just for the "Type" definition

const CategoryCollection = () => {
  const { category } = useParams();
  
  // STATE: Start empty, show loading spinner
  const [collection, setCollection] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVenues = async () => {
      setLoading(true);
      
      // 1. ASK SUPABASE: "Get me everything from 'Venue' where category matches..."
      const { data, error } = await supabase
        .from('Venue')
        .select('*')
        .eq('category', category);

      if (error) {
        console.error('Error fetching venues:', error);
      }
      
      // 2. Update the screen with the real cloud data
      if (data) setCollection(data as Venue[]);
      setLoading(false);
    };

    fetchVenues();
  }, [category]);

  // Auto-scroll to top when switching categories
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const displayTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Collection';

  const handleMapClick = (e: React.MouseEvent, venue: Venue) => {
    e.preventDefault();
    e.stopPropagation();
    const query = encodeURIComponent(`${venue.name} ${venue.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-bone animate-fade-in-up">
      
      {/* HEADER */}
      <div className="pt-32 pb-16 px-6 md:px-12 container mx-auto text-center border-b border-charcoal/10">
        <p className="font-sans text-xs font-bold tracking-[0.2em] text-gold uppercase mb-4">
          The Curated Edit
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-midnight mb-6">
          {displayTitle}
        </h1>
        <p className="font-sans text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          A selection of the capital's most distinguished establishments.
        </p>
      </div>

      {/* COLLECTION LIST */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        
        {/* LOADING SPINNER (Shows while fetching from cloud) */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-2 border-charcoal/20 border-t-gold rounded-full animate-spin"></div>
            <div className="font-serif text-xl text-charcoal/40 animate-pulse">Curating Collection...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {collection.length > 0 ? (
              collection.map((venue) => (
                <Link to={`/venue/${venue.id}`} key={venue.id} className="group block">
                  
                  {/* Image Card */}
                  <div className="relative h-[400px] overflow-hidden mb-6">
                    <img 
                      src={venue.heroImage} 
                      alt={venue.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <div className="bg-white/90 backdrop-blur text-midnight px-6 py-3 font-sans text-xs uppercase tracking-widest flex items-center gap-2">
                          View Details <ArrowRight size={14} />
                       </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="flex justify-between items-baseline border-b border-charcoal/20 pb-4 group-hover:border-gold transition-colors duration-500">
                    <h2 className="font-serif text-3xl text-midnight group-hover:text-charcoal transition-colors">
                      {venue.name}
                    </h2>
                    <span className="font-sans text-xs uppercase tracking-widest text-charcoal/50">
                      Cardiff
                    </span>
                  </div>
                  
                  {/* Tagline + Map Action */}
                  <div className="mt-4 flex justify-between items-start">
                    <p className="font-serif text-charcoal/70 italic text-lg max-w-md">
                      {venue.tagline}
                    </p>
                    <button 
                      onClick={(e) => handleMapClick(e, venue)}
                      className="flex items-center gap-2 text-gold hover:text-midnight transition-colors text-xs font-bold uppercase tracking-widest mt-1"
                    >
                      <MapPin size={16} />
                      <span>Map</span>
                    </button>
                  </div>

                </Link>
              ))
            ) : (
              <div className="col-span-2 text-center py-20">
                <p className="font-serif text-2xl text-charcoal/40">
                  No venues found in this category yet.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCollection;