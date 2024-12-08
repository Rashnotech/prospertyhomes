export interface Property {
    id: string | undefined;
    title: string;
    location: {
      address: string;
      city: string;
      postcode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    details: {
      distanceFromCenter: string;
    };
    amenities: string[];
    images: string[];
    roomOptions: number;
    offers: number;
    pricePerWeek: number;
    features: string[];
    university?: string;
  }
  
export interface FilterState {
  university?: string;
  locality?: string;
  budget?: string;
  moveInMonth?: string;
  stayDuration?: string;
  priceRange?: string;
  roomType?: string;
  sort?: string;
}
  
  