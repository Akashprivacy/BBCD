
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  image: string;
  title: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
}

export type EditStatus = 'idle' | 'loading' | 'success' | 'error';
