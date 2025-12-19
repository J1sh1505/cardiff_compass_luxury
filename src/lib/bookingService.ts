// src/lib/bookingService.ts
import { supabase } from './supabase';

// --- LISTING B3: CREATE RECORD ---
export async function createBooking(venueId: string, date: Date, guests: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("User must be logged in");

  const { data, error } = await supabase
    .from('Booking')
    .insert([{ 
      venueId, 
      booking_date: date.toISOString(), 
      party_size: guests, 
      userId: user.id 
    }])
    .select();

  if (error) throw error;
  return data;
}

// --- LISTING B4: READ RECORD (Fetch User Bookings) ---
export async function fetchUserBookings() {
  const { data, error } = await supabase
    .from('Booking')
    .select('*, Venue(name, location, image_url)')
    .order('booking_date', { ascending: true });

  if (error) throw error;
  return data;
}

// --- LISTING B5: UPDATE RECORD ---
export async function updatePartySize(bookingId: string, newSize: number) {
  const { error } = await supabase
    .from('Booking')
    .update({ party_size: newSize })
    .eq('id', bookingId);

  if (error) throw error;
}

// --- LISTING B6: DELETE RECORD ---
export async function cancelBooking(bookingId: string) {
  const { error } = await supabase
    .from('Booking')
    .delete()
    .eq('id', bookingId);

  if (error) throw error;
}