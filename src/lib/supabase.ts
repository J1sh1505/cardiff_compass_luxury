import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nqljwkccvwckeaminktp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xbGp3a2Njdndja2VhbWlua3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MjU4NzQsImV4cCI6MjA3OTQwMTg3NH0.B2Z9ly1S6YoLCsenjw2w7JGzvb3f9qnzJVy7E2BBGWk';

// Make sure the keys are there before starting
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase keys!");
}

// This variable holds our single database connection
let client: SupabaseClient | null = null;

// This function ensures we only ever create ONE connection (Singleton Pattern)
export const getSupabaseClient = (): SupabaseClient => {
  if (!client) {
    client = createClient(supabaseUrl, supabaseKey);
  }
  return client;
};

export const supabase = getSupabaseClient();

// This function listens for real-time updates on the Booking table
export const subscribeToBookings = (onUpdate: () => void) => {
  const client = getSupabaseClient();

  return client
    .channel('booking-updates')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'Booking' },
      (payload) => {
        console.log('Change received!', payload);
        onUpdate(); // Update the UI when data changes
      }
    )
    .subscribe();
};