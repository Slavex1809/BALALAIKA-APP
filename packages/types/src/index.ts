export interface Equipment {
  id: string;
  title: string;
  description: string;
  category: string;
  price_per_day: number;
  deposit: number;
  supplier_id: string;
  images: string[];
  is_available: boolean;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  phone: string;
  full_name: string;
  role: 'user' | 'supplier' | 'admin';
}

export interface Booking {
  id: string;
  equipment_id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  total_price: number;
  status: string;
}