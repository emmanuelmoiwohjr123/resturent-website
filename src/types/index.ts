export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface ReservationType {
  date: string;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}