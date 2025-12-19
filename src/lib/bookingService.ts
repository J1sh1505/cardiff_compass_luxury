// src/lib/bookingService.ts
import { supabase } from "./supabase";
import { venueCache, type VenueSummary } from "./venueCache";

// LISTING B3: CREATE RECORD
export async function createBooking(venueId: string, date: Date, guests: number) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;
  if (!user) throw new Error("User must be logged in");

  const { data, error } = await supabase
    .from("Booking")
    .insert([
      {
        venueId,
        booking_date: date.toISOString(),
        party_size: guests,
        userId: user.id,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

// Map-backed cache fetch (O(1) on cache hits)
export async function getVenueSummaryById(venueId: string): Promise<VenueSummary> {
  const cached = venueCache.get(venueId);
  if (cached) return cached;

  const { data, error } = await supabase
    .from("Venue")
    .select("id, name, location, image_url")
    .eq("id", venueId)
    .single();

  if (error) throw error;

  // Save to Map cache
  venueCache.set(data);

  return data;
}

// LISTING B4: READ RECORD (Fetch User Bookings)
// Keeps your existing join, but ALSO populates the Map cache.
export async function fetchUserBookings() {
  const { data, error } = await supabase
    .from("Booking")
    .select("*, Venue(id, name, location, image_url)")
    .order("booking_date", { ascending: true });

  if (error) throw error;

  // Populate cache from returned joined Venue data (if present)
  // This makes later lookups instant without extra DB calls.
  if (Array.isArray(data)) {
    for (const booking of data) {
      const v = (booking as any)?.Venue;
      if (v?.id && !venueCache.has(v.id)) {
        venueCache.set({
          id: v.id,
          name: v.name,
          location: v.location,
          image_url: v.image_url ?? null,
        });
      }
    }
  }

  return data;
}

// LISTING B5: UPDATE RECORD
export async function updatePartySize(bookingId: string, newSize: number) {
  const { error } = await supabase
    .from("Booking")
    .update({ party_size: newSize })
    .eq("id", bookingId);

  if (error) throw error;
}

// LISTING B6: DELETE RECORD
export async function cancelBooking(bookingId: string) {
  const { error } = await supabase.from("Booking").delete().eq("id", bookingId);

  if (error) throw error;
}

// Optional helper if you ever want to manually reset cached venues
export function clearVenueCache() {
  venueCache.clear();
}
