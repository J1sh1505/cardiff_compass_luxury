// src/lib/venueCache.ts

export type VenueSummary = {
  id: string;
  name: string;
  location: string;
  image_url: string | null;
};

class VenueCache {
  private cache = new Map<string, VenueSummary>();

  get(id: string): VenueSummary | undefined {
    return this.cache.get(id);
  }

  set(venue: VenueSummary): void {
    this.cache.set(venue.id, venue);
  }

  has(id: string): boolean {
    return this.cache.has(id);
  }

  clear(): void {
    this.cache.clear();
  }
}

// Singleton cache instance (matches your Supabase singleton approach)
export const venueCache = new VenueCache();
