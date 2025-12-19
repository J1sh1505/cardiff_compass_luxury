import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Define the shape of a Booking object
interface BookingData {
  id: string;
  venueName: string;
  date: string;
  time: string;
  guests: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingData | null; // Can be null if nothing is selected
  onUpdateSuccess: () => void; 
}

const EditBookingModal = ({ isOpen, onClose, booking, onUpdateSuccess }: Props) => {
  const [loading, setLoading] = useState(false);

  // Don't render if not open or no booking selected
  if (!isOpen || !booking) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const guests = formData.get('guests') as string;

    // UPDATE QUERY (The "U" in CRUD)
    const { error } = await supabase
      .from('Booking')
      .update({ date, time, guests }) // We only update mutable fields
      .eq('id', booking.id);

    setLoading(false);

    if (error) {
      alert(`Failed to update: ${error.message}`);
    } else {
      // alert("Booking updated successfully."); // Optional: remove alert for smoother UX
      onUpdateSuccess(); // Refresh the parent list
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-bone w-full max-w-lg p-8 shadow-2xl animate-fade-in-up border-t-4 border-gold">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-charcoal/50 hover:text-midnight transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-2">Modify Reservation</p>
          <h2 className="font-serif text-3xl text-midnight">{booking.venueName}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* DATE INPUT */}
            <div className="space-y-1">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Date</label>
              <div className="relative">
                <input 
                  name="date" 
                  type="date" 
                  required 
                  defaultValue={booking.date} 
                  className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold" 
                />
                <Calendar className="absolute right-3 top-3 text-charcoal/40 pointer-events-none" size={16} />
              </div>
            </div>

            {/* TIME INPUT */}
            <div className="space-y-1">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Time</label>
              <div className="relative">
                <input 
                  name="time" 
                  type="time" 
                  required 
                  defaultValue={booking.time} 
                  className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold" 
                />
                <Clock className="absolute right-3 top-3 text-charcoal/40 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          {/* GUESTS INPUT */}
          <div className="space-y-1">
            <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Guests</label>
            <div className="relative">
              <select 
                name="guests" 
                defaultValue={booking.guests} 
                className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold appearance-none"
              >
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
              <Users className="absolute right-3 top-3 text-charcoal/40 pointer-events-none" size={16} />
            </div>
          </div>

          <button 
            disabled={loading} 
            className="w-full bg-midnight text-white py-4 hover:bg-charcoal transition-colors duration-300 font-sans text-xs uppercase tracking-widest flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookingModal;