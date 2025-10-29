export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
  service: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  vehicle?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  workingHours: string;
  email?: string;
  social: {
    facebook: string;
    instagram: string;
  };
}
