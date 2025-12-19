import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  venueName: string;
  venueId: string;
}

// Helper: Generate times like "12:00", "12:10", "12:20" ... "23:00"
const generateTimeSlots = () => {
  const slots = [];
  const startHour = 12; // 12 PM
  const endHour = 23;   // 11 PM
  
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 10) { // 10 Minute Blocks
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(timeString);
    }
  }
  return slots;
};

const ReservationModal = ({ isOpen, onClose, venueName, venueId }: Props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const timeSlots = generateTimeSlots();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. AUTH CHECK
    const { data: { session }, error: authError } = await supabase.auth.getSession();

    if (authError || !session) {
      alert("You must be logged in to make a reservation.");
      setLoading(false);
      navigate('/login');
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const guests = formData.get('guests') as string;

    // 2. INSERT INTO DATABASE
    const { error } = await supabase.from('Booking').insert({
      id: crypto.randomUUID(),
      userId: session.user.id,
      venueId: venueId,
      venueName: venueName,
      date,
      time,
      guests
    });

    setLoading(false);

    if (error) {
      console.error("Supabase Error:", error);
      alert(`Failed to book: ${error.message}`);
    } else {
      alert(`Success! Your reservation at ${venueName} is confirmed.`);
      onClose();
      window.location.reload(); 
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-bone w-full max-w-lg p-8 shadow-2xl animate-fade-in-up border-t-4 border-gold">
        <button onClick={onClose} className="absolute top-4 right-4 text-charcoal/50 hover:text-midnight transition-colors">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-2">Secure Your Experience</p>
          <h2 className="font-serif text-3xl text-midnight">{venueName}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            
            {/* DATE PICKER */}
            <div className="space-y-1">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Date</label>
              <div className="relative">
                <input 
                  name="date" 
                  type="date" 
                  required 
                  className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold" 
                />
                <Calendar className="absolute right-3 top-3 text-charcoal/40 pointer-events-none" size={16} />
              </div>
            </div>

            {/* NEW TIME PICKER (Dropdown) */}
            <div className="space-y-1">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Time</label>
              <div className="relative">
                <select 
                  name="time" 
                  required 
                  className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold appearance-none"
                >
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <Clock className="absolute right-3 top-3 text-charcoal/40 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Guests</label>
            <div className="relative">
              <select name="guests" className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold appearance-none">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
              <Users className="absolute right-3 top-3 text-charcoal/40 pointer-events-none" size={16} />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal">Special Requests</label>
            <textarea 
              name="requests"
              rows={3}
              placeholder="Dietary requirements, special occasions..."
              className="w-full bg-white border border-charcoal/20 p-3 font-sans text-sm focus:outline-none focus:border-gold"
            ></textarea>
          </div>

          <button 
            disabled={loading} 
            className="w-full bg-midnight text-white py-4 hover:bg-charcoal transition-colors duration-300 font-sans text-xs uppercase tracking-widest flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : 'Confirm Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;