// src/components/VenueCard.tsx
import React from 'react';

interface VenueProps {
  name: string;
  image: string;
  location: string;
}

export const VenueCard: React.FC<VenueProps> = ({ name, image, location }) => (
  <div 
    className="overflow-hidden rounded-xl border border-gray-200"
    role="article"
    aria-label={`View details for ${name} in ${location}`}
  >
    <img 
      src={image} 
      alt="" 
      className="h-48 w-full object-cover" 
    />
    <div className="p-4">
      <h3 className="font-serif text-lg">{name}</h3>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  </div>
);