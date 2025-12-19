import React, { useEffect, useState } from 'react';
import { ArrowLeft, MapPin, Clock, Phone, Globe, ExternalLink, Ticket, Utensils } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ReservationModal from '../components/ReservationModal';

interface DBVenue {
  id: string;
  name: string;
  category: string;
  tagline: string;
  heroImage: string;
  dropCap: string;
  lead: string;
  body: string;
  curatorNote: string;
  gallery: string[];
  address: string;
  hours: string;
  phone: string;
  website: string;
}

const VenueDetail = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState<DBVenue | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVenue = async () => {
      if (!id) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('Venue')
        .select('*')
        .eq('id', id)
        .single();

      if (error) console.error('Error fetching venue:', error);
      if (data) setVenue(data as DBVenue);
      setLoading(false);
    };
    fetchVenue();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openMap = () => {
    if (!venue) return;
    const query = encodeURIComponent(`${venue.name} ${venue.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  // LOGIC: Determine which button to show based on category
  const renderBookingButton = () => {
    if (!venue) return null;

    // 1. Food & Drink -> "Request Table"
    if (['gastronomy', 'nocturnal'].includes(venue.category)) {
      return (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-midnight text-white py-4 hover:bg-charcoal transition-colors duration-300 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <Utensils size={14} /> Request Table
        </button>
      );
    }

    // 2. Ticketed Events -> "Book Tickets"
    if (['agenda', 'experiences'].includes(venue.category)) {
      return (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-midnight text-white py-4 hover:bg-charcoal transition-colors duration-300 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <Ticket size={14} /> Book Tickets
        </button>
      );
    }

    // 3. Shops, Parks, Heritage, Landmarks -> NO BUTTON (Just show map/website)
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bone flex items-center justify-center">
        <div className="animate-pulse font-serif text-xl text-charcoal/40">Loading experience...</div>
      </div>
    );
  }

  if (!venue) return null;

  return (
    <div className="animate-fade-in-up bg-bone min-h-screen">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img src={venue.heroImage} alt={venue.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        
        <div className="absolute top-0 left-0 p-8 z-20">
          <Link to={`/explore/${venue.category}`} className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans text-sm tracking-widest uppercase">Back to Collection</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 p-8 md:p-16 z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl text-white font-serif mb-4 drop-shadow-lg">{venue.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif italic">{venue.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="w-full lg:w-2/3 space-y-10">
             <p className="text-xl md:text-2xl font-serif leading-relaxed text-midnight/90">
                <span className="text-5xl float-left mr-3 mt-[-10px] font-serif text-gold">{venue.dropCap}</span>
                {venue.lead}
             </p>
             <p className="font-sans font-light text-lg leading-loose text-charcoal">{venue.body}</p>
             <div className="border-l-2 border-gold pl-8 py-4 my-12">
               <h3 className="font-serif text-2xl text-midnight mb-2">Curator's Recommendation</h3>
               <p className="font-sans text-charcoal/80 italic">{venue.curatorNote}</p>
             </div>
             <div className="grid grid-cols-2 gap-4 pt-8">
               {venue.gallery && venue.gallery.map((img, i) => (
                 <img key={i} src={img} className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detail" />
               ))}
             </div>
          </div>

          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-32 bg-white/50 backdrop-blur-sm border border-stone/30 p-8 space-y-8">
              <div className="space-y-1 text-center border-b border-stone/30 pb-6">
                <h3 className="font-serif text-2xl text-midnight">The Details</h3>
              </div>

              <div className="space-y-6 font-sans text-sm text-charcoal">
                <button onClick={openMap} className="flex items-start gap-4 hover:text-gold transition-colors text-left group w-full">
                  <MapPin size={18} className="text-gold mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p>{venue.address}</p>
                    <span className="text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">View on Map</span>
                  </div>
                </button>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-gold mt-1" />
                  <p>{venue.hours}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-gold" />
                  <p>{venue.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Globe size={18} className="text-gold" />
                  <a href={`https://${venue.website}`} target="_blank" rel="noreferrer" className="hover:text-midnight transition-colors">{venue.website}</a>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                {/* Smart Button Logic */}
                {renderBookingButton()}
                
                <button onClick={openMap} className="w-full border border-midnight text-midnight py-4 hover:bg-midnight hover:text-white transition-colors duration-300 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                  Get Directions <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        venueName={venue.name}
        venueId={venue.id}
      />
    </div>
  );
};

export default VenueDetail;